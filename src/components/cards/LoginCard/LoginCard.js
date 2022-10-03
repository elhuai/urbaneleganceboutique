import React, { useEffect, useState } from 'react';
import { API_URL, LINE_LOGIN_URL } from '../../../utils/config';
import { HiChevronLeft } from 'react-icons/hi';
import { LINE_CALLBACK_URL } from '../../../utils/config';
import { Popover } from 'antd';
import moment from 'moment';
import { handleForgetPwdCard } from '../../../utils/handler/card/handleInputCard';
import {
  callRegisterApi,
  callLoginApi,
  callLogoutApi,
} from '../../../api/authApi';
import './_loginCard.scss';

const LoginCard = ({ isLogin, confirm, setUser }) => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [registInfo, setRegistInfo] = useState({
    socialName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [registerError, setRegisterError] = useState([]);
  const [errorText, setErrorText] = useState([]);
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('call login API');
    callLoginApi(loginInfo, setUser, confirm);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    console.log('call logout API');
    callLogoutApi(setUser, confirm);
  };

  const handleLineLogin = async (e) => {
    window.localStorage.setItem('last_page', window.location.pathname);
    window.localStorage.setItem(
      'line_login',
      moment().format('YYYYMMDDhhmmss')
    );
    window.location = LINE_LOGIN_URL + '&redirect_uri=' + LINE_CALLBACK_URL;
  };

  const handleRegisterRequest = (e) => {
    e.preventDefault();
    console.log('call register API');
    callRegisterApi(
      registInfo,
      setRegisterError,
      setUser,
      confirm,
      setErrorText
    );
  };

  const handleLoginChange = (e) => {
    setLoginInfo((oldInfo) => ({
      ...oldInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegistChange = (e) => {
    setRegistInfo((oldInfo) => ({
      ...oldInfo,
      [e.target.name]: e.target.value,
    }));
    setErrorText([]);
    let index = registerError.findIndex((i) => i === e.target.name);
    if (!(index < 0)) {
      setRegisterError((items) => {
        console.log(items);
        return items.filter((v, i) => i !== index);
      });
    }
  };
  const isError = (name) =>
    registerError.find((i) => i === name) ? 'error' : '';
  useEffect(() => {
    setErrorText([]);
    setRegisterError([]);
  }, [isNewUser]);

  return isLogin ? (
    <div className="login_card--global d-flex">
      <div
        className={`login_card_content login_card--login ${
          isNewUser ? '' : 'active'
        }`}
      >
        <h2>登入</h2>
        <p>Oh!DogCat 會員帳號登入</p>
        <form
          className="login_card_form d-flex flex-column h-100"
          onSubmit={handleLogin}
        >
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className={`form-control`}
              placeholder="電子郵件"
              value={loginInfo.email}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="密碼"
              value={loginInfo.password}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div
            className="login_card_reset_password text-end"
            onClick={() => handleForgetPwdCard()}
          >
            忘記密碼
          </div>
          <div className="flex-fill d-flex flex-column justify-content-end">
            <div className="login_card_line d-flex justify-content-center mb-3">
              <div onClick={handleLineLogin}>
                <div className="login_card_line--bg_mask d-flex">
                  <div className="login_card_line--logo flex-shrink-0"></div>
                  <div className="login_card_line--text text-center d-flex align-items-center">
                    與 LINE 連動
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="mb-3 login_card_button--login" type="submit">
                送出
              </button>
            </div>
            <div
              className="login_card_register--show"
              onClick={() => setIsNewUser(true)}
            >
              還未加入 Oh!DogCat 嗎？ 立即註冊！
            </div>
          </div>
        </form>
      </div>
      <div
        className={`login_card_content login_card--login ${
          isNewUser ? '' : 'active'
        }`}
      >
        <h2>註冊</h2>
        <p>成為 Oh!DogCat 會員</p>
        <form
          className="login_card_form d-flex flex-column h-100"
          onSubmit={handleRegisterRequest}
        >
          <div className="mb-3">
            <Popover content={content[0]} trigger="focus" placement="topRight">
              <input
                type="text"
                name="socialName"
                className={`form-control ${isError('socialName')}`}
                placeholder="你的暱稱"
                value={registInfo.socialName}
                onChange={handleRegistChange}
                required
              />
            </Popover>
          </div>
          <div className="mb-3">
            <Popover content={content[1]} trigger="focus" placement="topRight">
              <input
                type="email"
                name="email"
                className={`form-control ${isError('email')}`}
                placeholder="電子郵件"
                value={registInfo.email}
                onChange={handleRegistChange}
                required
              />
            </Popover>
          </div>
          <div className="mb-3">
            <Popover content={content[2]} trigger="focus" placement="topRight">
              <input
                type="password"
                name="password"
                className={`form-control ${isError('password')}`}
                placeholder="密碼"
                value={registInfo.password}
                onChange={handleRegistChange}
                required
              />
            </Popover>
          </div>
          <div className="mb-3">
            <Popover content={content[3]} trigger="focus" placement="topRight">
              <input
                type="password"
                name="confirmPassword"
                className={`form-control ${isError('confirmPassword')}`}
                placeholder="確認密碼"
                value={registInfo.confirmPassword}
                onChange={handleRegistChange}
                required
              />
            </Popover>
          </div>
          <div className="flex-fill d-flex flex-column justify-content-end">
            <div>
              <button className="mb-3 login_card_button--regist" type="submit">
                註冊
              </button>
            </div>
            <div
              className="login_card_register--hide"
              onClick={() => setIsNewUser(false)}
            >
              已成為會員？立即登入！
            </div>
          </div>
        </form>

        <div
          className="login_card_button--back"
          onClick={() => setIsNewUser(false)}
        >
          <HiChevronLeft />
        </div>
      </div>
      <div className={`login_card_error ${errorText[0] ? 'active' : ''}`}>
        {errorText.map((value) => (
          <div>{value}</div>
        ))}
      </div>
    </div>
  ) : (
    <div className="login_card--global">
      <h2>登出</h2>
      <p>確定要登出嗎？</p>
      <button
        className="login_card_button--logout"
        type="button"
        onClick={handleLogout}
      >
        確認登出
      </button>
    </div>
  );
};

const content = [
  <div>
    <p className="m-0">
      平台社群暱稱
      <br />
      命名中不可含有空格
    </p>
  </div>,
  <div>
    <p className="m-0">
      請輸入正確的 Email 地址
      <br />
      以便後續開通驗證
    </p>
  </div>,
  <div>
    <p className="m-0">
      密碼長度至少為 8<br />
      且只能含有大小寫英文字母與數字
    </p>
  </div>,
  <div>
    <p className="m-0">請再輸入一次密碼</p>
  </div>,
];

export default LoginCard;
