import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './RSVP.css';

function RSVP() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState(false);
  const [name, setName] = useState('');
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/rsvp')
      .then(res => res.json())
      .then(data => setAttendees(data));
  }, []);

  const handleSubmit = async () => {
    if (name.trim() === '') return;

    await fetch('http://localhost:8080/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, attending })
    });

    setAttendees([...attendees, { name, attending }]);
    setName('');
    setAttending(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="page">
      <div className="content">
        <button className="return-bttn" onClick={() => navigate('/')}>← Back</button>

        <h1 className="Welcome-text"></h1>
        <div>
          <p className="venmo">if you'd like to help contribute 4 food:🥺👉👈</p>
          <a className="venmo-link" href="https://www.example.com" target="_blank" rel="noreferrer">Click here for my Venmo</a>
        </div>

        <div className="rsvp-form">
          <h1>RSVP</h1>
          <input
            type="text"
            className="rsvp-name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

          <button className="rsvp-submit-btn" onClick={handleSubmit}>
            {submitted ? 'Submitted!' : 'Submit'}
          </button>
        </div>

        {attendees.length > 0 && (
          <table className="attendee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Attending</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map((attendee, index) => (
                <tr key={index}>
                  <td>{attendee.name}</td>
                  <td>{attendee.attending ? '✓ Coming' : '✗ Not Coming'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>
    </div>
  );
}

export default RSVP;