import React, { useState } from 'react';
import { resetPassword } from '../../../api/userApi';
import './_forgetPwdCard.scss';

const ForgetPwdCard = ({ cancel }) => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    resetPassword({ action: 'mail', email: email });
  };
  return (
    <div>
      <div className="forget_pwd_card--global d-flex">
        <div className={`forget_pwd_card_content forget_pwd_card`}>
          <h2>忘記密碼</h2>
          <p>平台將會寄發密碼重設信件至您的信箱</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="請輸入你的電子信箱"
                value={email}
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <div className="d-flex gap-2 justify-content-center">
              <button className="forget_pwd_card_button" type="submit">
                送出
              </button>
              <button
                className="forget_pwd_card_button cancel"
                onClick={() => cancel()}
              >
                取消
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPwdCard;
