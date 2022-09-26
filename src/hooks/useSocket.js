import React, { useState, useContext, createContext, useEffect } from 'react';
import { useUserInfo } from './useUserInfo';
import webSocket from 'socket.io-client';

const socketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const { user } = useUserInfo();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user.auth && user.firstVerify) {
      console.log('觸發 socket connection');
      setSocket(webSocket('http://localhost:3007/'));
    }
  }, [user]);

  useEffect(() => {
    if (socket) {
      socket.on('reply', (msg) => console.log(msg));
      socket.on('otherOne', (msg) => console.log(msg));
    }
    console.log(socket);
  }, [socket]);
  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
};

export const useSocket = () => useContext(socketContext);
