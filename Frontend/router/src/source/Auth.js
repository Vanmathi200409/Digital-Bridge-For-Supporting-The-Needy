import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const Login = (username, password) => {

    console.log('Logging in with', username, password);

    setAuthData({ username });
  };

  const Logout = () => {
    // Logic to log out the user
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

