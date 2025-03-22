import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div>
      <h1>User Page</h1>
      <p>Welcome to the user page!</p>
      <nav>
        <Link to="/">Go to Home</Link> | 
        <Link to="/about">About Us</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default User;