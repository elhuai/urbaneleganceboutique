import React, { useState, useContext, createContext } from 'react';

const userInfoContext = createContext(null);

export const UserInfoProvider = ({ children }) => {
  const [user, setUser] = useState({
    auth: false,
    data: [],
  });
  return (
    <userInfoContext.Provider value={{ user, setUser }}>
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
