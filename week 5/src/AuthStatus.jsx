import React from 'react';
import { useUserAuth } from './UserAuthContext';

const AuthStatus = () => {
  const { isLoggedIn } = useUserAuth();
  return (
    <p className="text-lg font-medium text-gray-700">
      {isLoggedIn ? '✅ You are logged in' : '❌ You are logged out'}
    </p>
  );
};

export default AuthStatus;
