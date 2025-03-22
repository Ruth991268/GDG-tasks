import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <div className="main">
      <div className='container'>
        <h1 className='title'>Home Page</h1>
        <nav className='nav-bar'>
          <Link to="/about">About Us</Link> 
          <Link to="/contact">Contact</Link>  
          <Link to="/user">User</Link>
          <Link to="/notfound">Not Found (404)</Link> {/* Link to a non-existent route */}
        </nav>
      </div>
      <div className='welcome'>Welcome to Our Website!</div>
      <div className="la">
        Discover, Learn, and Connect
      </div>
      <div className='note'>
        We believe in the power of community and knowledge. Our mission is to provide you with the resources and support you need to thrive. Whether you're looking for information, inspiration, or a place to connect with others, you've come to the right place!
      </div>
      <div className="button">
        <Link to="/signup"> {/* Assuming you have a signup page */}
          <button>Join Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;