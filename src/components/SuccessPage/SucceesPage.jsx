import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

function SuccessPage() {

    let [qrCode, setQrCode] = useState('');
    // empty local state that is now being set in teh axios.get to have rating averages
    // as values for the object
    let [ratingAverages, setRatingAverage] = useState({});

    const history = useHistory();
    const dispatch = useDispatch();

    /* QR TODO
   axios get to router for qr
   axios.get to qr api
   set qrcode url to local state
   use local state in teh img url
   this will send to feedback home
   add extra data to db

   SETTING DB
   send another get request to select the avg of the ratings and display them

   Letting others use:
   deploy on heroku in order for everyone else to have access to the webpage and the ratings db
   */

    // setting the qr code on page load
    // in solo project this will be used in teh popup
    useEffect(() => {
        setQR();
        avgRating();
    }, [])

    const setQR = () => {
        axios.get('/qrCode')
            .then(response => {
                console.log('response is', response.data.qrCode)
                // do I need to send this to store or can I just set the img here and it
                // would change every time on load but lead to the same place??

                // setting a local state with that qr code
                // this works and is  scannable to go back to the starting feedback rating page
                setQrCode(response.data.qrCode);
                
            })
            .catch((err) => {
                console.error('problem setting QR code', err)
            })
    }

    const avgRating = () => {
        axios.get('/getAvgRating')
            .then(response => {
                console.log('response for rating is:', response.data)
                // will need to set another local state here that will then be used in an h2
                // that will display the number
                setRatingAverage({
                    ...ratingAverages, 
                    avgUnderstanding: response.data.understanding_avg,
                    avgFeeling: response.data.feeling_avg,
                    avgSupport: response.data.support_avg
                })
                
            })
            .catch((err) => {
                console.error('problem getting rating response', err)
            })
    }

    return (
        // displaying the averages grabbed from the db into the local state
        // these are turned to numbers and only allows two decimal places
        <>
            <h2>Submission Successful! </h2>
            <h3>The class avg for understanding is: {Number(ratingAverages.avgUnderstanding).toFixed(2)}</h3>
            <h3>The class avg for feeling is: {Number(ratingAverages.avgFeeling).toFixed(2)}</h3>
            <h3>The class avg for support is: {Number(ratingAverages.avgSupport).toFixed(2)}</h3>
            <h4>Scan QR code to let others rate as well</h4>
            <img src={qrCode} alt="" />
            <button
                onClick={() => { history.push('/') }}
            >Return to home
            </button>
        </>
    )
}

export default SuccessPage;