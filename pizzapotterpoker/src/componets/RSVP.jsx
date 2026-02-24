import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './RSVP.css';

function RSVP() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState(false);

  return (
    <div className="page">
      <div className="content">
        <button className="return-bttn" onClick={() => navigate('/')}>← Back</button>

        <h1 className="Welcome-text"></h1>
         <div>
            <p className="venmo">if you'd like to help contribute 4 food:🥺👉👈 </p>
            <a className="venmo-link" href="https://www.example.com" target="_blank" rel="noreferrer">Click here for my Venmo</a>
        </div>

        <div className="rsvp-form">
            <h1> RSVP </h1>
          <input
            type="text"
            className="rsvp-name"
            placeholder="Enter your name"
          />

          <div className="attending-checkbox">
            <input
              type="checkbox"
              id="attending"
              checked={attending}
              onChange={() => setAttending(!attending)}
            /> 
            <label htmlFor="attending">I'm Coming!</label>
          </div>

          <button className="rsvp-submit-btn" onClick={() => setSubmitted(true)}>
            {submitted ? 'Submitted!' : 'Submit'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default RSVP;