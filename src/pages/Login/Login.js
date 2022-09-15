import React from 'react';
import { useEffect } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import Qs from 'qs';
import jwt_decode from 'jwt-decode';
import './_login.scss';

const Login = () => {
  // const [searchParam] = useSearchParams();
  // if (
  //   !searchParam.get('state') ||
  //   !searchParam.get('code') ||
  //   searchParam.get('state') !== 'ohdogcatlinelogin'
  // ) {
  //   return <Navigate to="/" />;
  // }

  // const config = {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  // };
  // const requestBody = {
  //   grant_type: 'authorization_code',
  //   code: searchParam.get('code'),
  //   redirect_uri: window.location.origin + window.location.pathname,
  //   client_id: 1657462251,
  //   client_secret: '6f3254d1a62c5cbb25df7ed341c1d1b2',
  // };

  // axios
  //   .post(
  //     'https://api.line.me/oauth2/v2.1/token',
  //     Qs.stringify(requestBody),
  //     config
  //   )
  //   .then((res) => {
  //     console.log(res);
  //     console.log(jwt_decode(res.data.id_token));
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  return (
    <div className="login_page">
      <div className="login_drop">
        <div className="login_loader"></div>
      </div>
    </div>
  );
};

export default Login;
