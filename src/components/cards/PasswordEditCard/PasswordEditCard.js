import React, { useState } from 'react';
import { editSocialName } from '../../../api/userApi';
import './_passwordEditCard.scss';

const PasswordEditCard = ({ confirm }) => {
  const [data, setData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [inputError, setInputError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setInputError('');
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="social_name_card--global d-flex">
        <div className={`social_name_card_content social_name_card`}>
          <h2>重新設置密碼</h2>
          <form
            className="social_name_card_form d-flex flex-column h-100"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <input
                type="password"
                name="oldPassword"
                className={`form-control ${inputError ? 'error' : ''}`}
                placeholder="輸入舊密碼"
                value={data.oldPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="newPassword"
                className={`form-control ${inputError ? 'error' : ''}`}
                placeholder="輸入新密碼"
                value={data.newPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="confirmPassword"
                className={`form-control ${inputError ? 'error' : ''}`}
                placeholder="再次輸入新密碼"
                value={data.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <p className={`${inputError ? 'active' : ''}`}>{inputError}</p>
            <div>
              <button className=" social_name_card_button" type="submit">
                送出
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordEditCard;
