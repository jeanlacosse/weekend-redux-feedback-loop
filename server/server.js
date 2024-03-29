const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;
const axios = require('axios');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/submitFeedback', (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding feedback`, newFeedback);

    let queryText =
        `INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText,
        [newFeedback.howWellFeelingToday,
        newFeedback.howWellUnderstood,
        newFeedback.howWellSupported,
        newFeedback.extraComments
        ])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new feedback`, error);
            res.sendStatus(500);
        });
});

// here I am gettign the qr code with an axios get to the API
// will send this back to the success page to use in img
app.get('/qrCode', (req, res) => {
    axios({
        method: 'GET',
        url: 'https://api.qrserver.com/v1/create-qr-code/',
        params: {
            data: 'https://tragically-goose-78342.herokuapp.com/#/'
        }
    })

        .then(apiRes => {
            console.log('api res is ', apiRes.request.res.responseUrl);

            res.send({
                qrCode: apiRes.request.res.responseUrl
            })
        })
        .catch(err => {
            console.error('error in sending api req', err)
        })
})

// here is where i am getting the rating average from the server
app.get('/getAvgRating', (req, res) => {
    const sqlQuery = `
    
SELECT
    AVG(feedback.understanding) AS understanding_avg,
    AVG(feedback.feeling) AS feeling_avg,
    AVG(feedback.support) AS support_avg
FROM feedback;
    `;

    pool.query(sqlQuery)
        .then(result => {
            console.log('result is', result.rows);
            res.send(result.rows[0]);
        })
        .catch(err => {
            console.error('error in getAvgRating', err);
            res.sendStatus(500);
        })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
})