# Project Name
Redux Feedback Loop

## Description
This project took two days to develop.

I wanted to create an app that was able to take in the feedback about how a person was feeling about the content given that day.

I wanted to use the redux store to hold information accross the app while answering the questions, as well as using routes to go to new pages when the next button was clicked.

## Screen Shot 

![alt text](./public/images/Screen%20Shot%202022-06-25%20at%2012.34.52%20PM.png)

### Prerequisites

- Node
- React
- Redux
- Axios

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Use the sliders to answer the questions about how you are feeling about the content given during lecture.
2. Clicking the next button will bring you through a series of different questions.
3. After all questions are answered there will be a review screen to see answers. Clicking submit will post the answers to the database.

## Built With

- Node
- React
- Redux
- Axios

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [jeanlacosse@gmail.com](www.google.com)
