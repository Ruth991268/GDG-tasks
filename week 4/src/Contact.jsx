import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <nav>
        <Link to="/">Go to Home</Link> | 
        <Link to="/about">About Us</Link>
      </nav>
    </div>
  );
};

export default Contact;