import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(null); // null until chosen
  const [attendees, setAttendees] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [playingPoker, setPlayingPoker] = useState(false);

  // Fetch RSVPs on load
  useEffect(() => {
    fetch('http://localhost:8080/api/rsvp')
      .then(res => res.json())
      .then(data => setAttendees(data))
      .catch(err => console.error('Error fetching RSVPs:', err));
  }, []);

 const handleSubmit = async () => {
  if (!name.trim() || attending === null) return;

  try {
    const response = await fetch('http://localhost:8080/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, attending, playingPoker })
    });

    const newEntry = await response.json();
    setAttendees(prev => [...prev, newEntry]);

    setName('');
    setAttending(null);
    setPlayingPoker(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);

  } catch (error) {
    console.error('Error submitting RSVP:', error);
  }
};

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page">
            <div className="content">

              {/* Landing Section */}
              <h1 className="Welcome-text">
               🧙‍♂️Welcome to Hazuki's 3rd Pizza Potter Poker Party 🧙‍♂️
               <br></br> March 21st 7:30PM @ the Grove 
              </h1>
              

              <p className="info-text">
                Come dressed in your finest wizard attire. Prepare for poker,
                Harry Potter in the background, & P-lettered treats.  If you'd like to help contribute 4 food: 🥺👉👈
                
                <a
                  className="venmo-link"
                  href="https://venmo.com/u/Chantra-Phom"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here for my Venmo
                </a>
              </p>

              

            

              {/* RSVP Section */}
              <div className="rsvp-section">

                <h2 className="rsvp-title"></h2>

                <div className="rsvp-form">
                  RSVP

                  <input
                    type="text"
                    className="rsvp-name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  {/* Radio Buttons (Correct Logic) */}
                  <div className="attending-options">

                    <label>
                      <input
                        type="radio"
                        name="attendance"
                        value="coming"
                        checked={attending === true}
                        onChange={() => setAttending(true)}
                      />
                       Going
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="attendance"
                        value="not-coming"
                        checked={attending === false}
                        onChange={() => setAttending(false)}
                      />
                       Not Going
                    </label>
                    <div className='poker-chkbox'>
                      <input
                      type='checkbox'
                      id='playingPoker'
                      checked={playingPoker}onChange={() => setPlayingPoker(prev => !prev)}
                      />
                      <label htmlFor='playingPoker'>Play Poker </label>

                    </div>
                   

                  </div>

                  <button
                    className="rsvp-submit-btn"
                    onClick={handleSubmit}
                    disabled={!name.trim() || attending === null}
                  >
                    {submitted ? 'Submitted!' : 'Submit'}
                  </button>

                </div>

                {/* Table */}
                {attendees.length > 0 && (
                  <div className="table-wrapper">
                    <table className="attendee-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Status</th>
                          <th>Playing Poker</th>
                        </tr>
                      </thead>
                      <tbody>
                        {attendees.map((attendee, index) => (
                          <tr key={index}>
                            <td>{attendee.name}</td>
                            <td>
                              {attendee.attending
                                ? '✨ Coming'
                                : '✗ Not Coming'}
                            </td>
                            <td>{attendee.playingPoker? '🃏 Yes' : '❌ No'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

              </div>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
