import { use } from 'react';
import './RSVP.css'; 
import { useNavigate } from 'react-router-dom';

function RSVP () {
    const navigate = useNavigate();
    return(
      <div className="page">
      <div className="content">
        {/* your RSVP content goes here */}
        <div className='return'>
            <button className='return-bttn' onClick={()=>navigate('/')}>Return</button>

        </div>
        <div>
            <p className="venmo">if you'd like to help contribute 4 food:🥺👉👈 </p>
            <a className="venmo-link" href="https://www.example.com" target="_blank" rel="noreferrer">Click here for my Venmo</a>
        </div>
        
      </div>
    </div>
    )
    
}

export default RSVP;