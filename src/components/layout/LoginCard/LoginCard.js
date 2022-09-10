import React, { useState } from 'react';
import './_loginCard.scss';

const LoginCard = ({ isLogin, confirm, setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return isLogin ? (
    <div className="login_card--global">
      <h2>登入</h2>
      <p>Oh!DogCat 會員帳號登入</p>
      <form
        className="login_card_form"
        onSubmit={(e) => {
          e.preventDefault();
          setAuth((oldStatus) => ({ ...oldStatus, status: true }));
          confirm();
        }}
      >
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="電子郵件"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="密碼"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <button className="mb-3 login_card_button" type="submit">
          送出
        </button>
        <div className="login_card_register">
          還未加入 Oh!DogCat 嗎？ 立即註冊！
        </div>
      </form>
    </div>
  ) : (
    <div className="login_card--global">
      <h2>登出</h2>
      <p>確定要登出嗎？</p>
      <button
        className="login_card_button"
        type="button"
        onClick={() => {
          setAuth((oldStatus) => ({ ...oldStatus, status: false }));
          confirm();
        }}
      >
        確認登出
      </button>
    </div>
  );
};

export default LoginCard;
