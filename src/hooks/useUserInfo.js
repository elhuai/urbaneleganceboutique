import React, { useState, useContext, createContext, useEffect } from 'react';
import { handleSocialNameEditCard } from '../utils/handler/handleInputCard';
import { callVertifyApi } from '../api/authApi';
const userInfoContext = createContext(null);

export const UserInfoProvider = ({ children }) => {
  const [user, setUser] = useState({
    auth: false,
    firstVerify: false,
    data: {},
  });

  if (!user.auth && !user.firstVerify) {
    console.log('驗證');
    callVertifyApi(setUser);
  }

  useEffect(() => {
    if (user.auth === true && user.data.social_name === '')
      handleSocialNameEditCard(setUser);
  }, [user]);
  return (
    <userInfoContext.Provider value={{ user, setUser }}>
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
