import React, { useState, useContext, createContext, useEffect } from 'react';
import { handleSocialNameEditCard } from '../utils/handler/card/handleInputCard';
import { callVerifyApi } from '../api/authApi';
import Loading from '../components/layout/Loading';

const userInfoContext = createContext(null);

export const UserInfoProvider = ({ children }) => {
  const [user, setUser] = useState({
    auth: false,
    firstVerify: false,
    data: {},
  });

  if (!user.auth && !user.firstVerify) {
    console.log('驗證用戶是否登入');
    callVerifyApi(setUser);
  }

  useEffect(() => {
    if (user.auth === true && user.data.social_name === '') {
      handleSocialNameEditCard(setUser);
    }
  }, [user]);
  return !user.firstVerify ? (
    <userInfoContext.Provider value={{ user, setUser }}>
      {children[0]}
      <Loading />
      {children[2]}
    </userInfoContext.Provider>
  ) : (
    <userInfoContext.Provider value={{ user, setUser }}>
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
