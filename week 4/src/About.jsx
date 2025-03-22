import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <nav>
        <Link to="/">Go to Home</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default About;