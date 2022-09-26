import React from 'react';
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Loading from '../../components/layout/Loading';
import { handleFailed } from '../../utils/handler/card/handleStatusCard';
// import { callLineLoginApi } from '../../api/authApi';
import { useUserInfo } from '../../hooks/useUserInfo';
import axios from 'axios';
import Qs from 'qs';
import jwtDecode from 'jwt-decode';

const LineLogin = () => {
  const [searchParam] = useSearchParams();
  const { user } = useUserInfo();
  useEffect(() => {
    if (
      !searchParam.get('state') ||
      !searchParam.get('code') ||
      searchParam.get('state') !== 'ohdogcat_Line_Login'
    ) {
      return handleFailed('Line 登入失敗', 'http://localhost:3000');
    }
    if (user.firstVertify && !user.auth) {
      console.log('go');
      // return callLineLoginApi(searchParam.get('code'));
    }
  }, []);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  const requestBody = {
    grant_type: 'authorization_code',
    code: searchParam.get('code'),
    redirect_uri: window.location.origin + window.location.pathname,
    client_id: 1657462251,
    client_secret: '6f3254d1a62c5cbb25df7ed341c1d1b2',
  };

  return <Loading />;
};

export default LineLogin;
