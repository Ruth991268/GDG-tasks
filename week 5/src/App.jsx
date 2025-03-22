import React from 'react';
import { UserAuthProvider } from './UserAuthContext';
import AuthStatus from './AuthStatus';
import AuthButton from './AuthButton';

const App = () => {
  return (
    <UserAuthProvider>
      <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 min-h-screen justify-center">
        <h1 className="text-2xl font-bold text-gray-800">User Authentication</h1>
        <AuthStatus />
        <AuthButton />
      </div>
    </UserAuthProvider>
  );
};
export default App;
