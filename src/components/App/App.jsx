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
import SuccessPage from '../SuccessPage/SucceesPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>

        <Route exact path="/">
          <HowWellFeelingTodayForm />
        </Route>

        <Route exact path="/well-understood">
          <WellUnderstoodForm />
        </Route>

        <Route exact path="/well-supported">
          <HowWellSupported />
        </Route>

        <Route exact path="/extra-comments">
          <ExtraCommentsForm />
        </Route>

        <Route exact path="/display-feedback">
          <DisplayFeedback />
        </Route>

        <Route exact path="/success-page">
          <SuccessPage />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
