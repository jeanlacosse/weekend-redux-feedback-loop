import React from 'react';
import axios from 'axios';
import './App.css';

// router imports
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// components
import ExtraCommentsForm from '../../Forms/ExtraCommentsForm';
import HowWellFeelingTodayForm from '../../Forms/HowFeelignForm';
import HowWellSupported from '../../Forms/SupportedForm';
import WellUnderstoodForm from '../../Forms/WellUnderstoodForm';
import DisplayFeedback from '../FeedbackPage/FeedbackPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>

        <Route>
          <HowWellFeelingTodayForm />
        </Route>

        <Route>
          <WellUnderstoodForm />
        </Route>

        <Route>
          <HowWellSupported />
        </Route>

        <Route>
          <ExtraCommentsForm />
        </Route>

        <Route>
          <DisplayFeedback />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
