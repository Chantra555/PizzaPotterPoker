import { useState } from 'react';
import './App.css';
import WizardPoker from './images/WizardPoker.png';
import HPWallpaper from './images/HPWallpaper.jpg';

function App() {
  return (
    <div className="page">
      <div className="content">
        <h1 className="Welcome-text">
          Welcome to Hazuki's 3rd "annual" Pizza Potter Poker Party
        </h1>
        <h3 className="date-text">March 14th 7:30PM @ the Grove</h3>
        <div>
          <h1 className='RSVP-LINK'>click here to RSVP</h1>
        </div>

        <div className="no-rsvp">
          <p className="no-rsvp-text">if you cannot attend:</p>
          <input
            type="text"
            className="no-rsvp-name"
            placeholder="Enter name"
          />
          <button className="no-rsvp-submit-bttn">submit</button>
        </div>

        <div>
          <img
            className="wizard-poker-img"
            src={WizardPoker}
            alt="Wizards"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
