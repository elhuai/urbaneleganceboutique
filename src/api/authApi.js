import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { API_URL } from '../utils/config';
import {
  handleFailed,
  handleSucccessComfirm,
} from '../utils/handler/handleStatusCard';

const credentialsConfig = {
  withCredentials: true,
};

export const callRegisterApi = async (
  registInfo,
  setRegisterError,
  setUser,
  confirm
) => {
  try {
    let res = await axios.post(
      `${API_URL}/auth/user/register`,
      registInfo,
      credentialsConfig
    );
    setUser({ data: res.data.user, auth: true });
    confirm();
    return res.data;
  } catch (err) {
    console.error('Register Error', err);
    let errorArr = [];
    if (err.response.data.error) {
      for (const errItem of err.response.data.error) {
        errorArr.push(errItem.param);
      }
      setRegisterError(errorArr);
    }
  }
};

export const callLoginApi = async (loginInfo, setUser, confirm) => {
  try {
    const result = await axios.post(
      `${API_URL}/auth/user/login`,
      loginInfo,
      credentialsConfig
    );
    setUser({ data: result.data.user, auth: true });
    let isInfoCompleted;
    for (const key in result.data.user) {
      if (!result.data.user[key]) {
        isInfoCompleted = false;
        break;
      }
    }
    const action = isInfoCompleted ? confirm : handleSucccessComfirm;
    action(
      '登入成功',
      () => {
        alert('要去修改資料');
      },
      '但我們發現您的個人資料尚未齊全，是否前往修改？'
    );
  } catch (error) {
    console.error(error);
    handleFailed('帳號或密碼錯誤');
  }
};

export const callLogoutApi = async (setUser, confirm) => {
  try {
    const result = await axios.get(
      `${API_URL}/auth/user/logout`,
      credentialsConfig
    );
    if (result.data.status === 'ok') {
      setUser({ data: {}, auth: false });
      confirm();
    }
  } catch (err) {
    console.error(err);
  }
};

export const callVertifyApi = async (setUser) => {
  try {
    const result = await axios.get(
      `${API_URL}/auth/user/vertify`,
      credentialsConfig
    );
    console.log(result.data);
    if (result.data.isLogin) {
      setUser({ data: result.data.user, auth: true });
    }
  } catch (err) {
    console.error(err);
  }
};
