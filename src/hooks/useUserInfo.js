import React, { useState, useContext, createContext } from 'react';
import { callVertifyApi } from '../api/authApi';
const userInfoContext = createContext(null);

export const UserInfoProvider = ({ children }) => {
  const [user, setUser] = useState({
    auth: false,
    data: [],
  });

  if (!user.auth) {
    callVertifyApi(setUser);
  }
  return (
    <userInfoContext.Provider value={{ user, setUser }}>
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
