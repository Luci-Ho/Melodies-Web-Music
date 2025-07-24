// src/components/Home/JoinSection.jsx
import React from 'react';
import '../../Index.css';


const JoinSection = () => {
  return (
    <div className="JoinSection-group">
      
      <p>You can be one of the
        <span  style={{ color: "#EE10B0", fontWeight: '700' }}> members </span>
        of our platform by just adding some necessarily information. if you already have an account on our website, you can just hit the
        <span> </span>
        <span style={{ color: "#0E9EEF", fontWeight: '700' }}>Login button</span>.
      </p>
      
      <div className="JoinSection-group-button">
      <button>Sign Up</button>
      <button>Log in</button>
      </div>
    </div>
  );
};

export default JoinSection;
