import React from 'react';
import { useUserAuth } from './UserAuthContext';

const AuthButton = () => {
  const { isLoggedIn, toggleAuth } = useUserAuth();

  return (
    <button 
      onClick={toggleAuth} 
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
    >
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default AuthButton;