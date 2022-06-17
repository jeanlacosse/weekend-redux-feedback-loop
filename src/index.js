import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const extraComments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXTRA_COMMENTS':
            return action.payload
    }
    return state;
}

const storeInstance = createStore(

    combineReducers({
        extraComments,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
