import React, { useState } from 'react';
import { editSocialName } from '../../../api/userApi';
import './_socialNameEditCard.scss';

const SocialNameEditCard = ({ isUserSkip, confirm, setUser }) => {
  const [socailName, setSocailName] = useState('');
  const [inputError, setInputError] = useState('');
  const [userSkip, setUserSkip] = useState(isUserSkip);
  const handleSubmit = async (e) => {
    e.preventDefault();
    editSocialName(socailName, confirm, setInputError, setUser);
  };

  const handleInputChange = (e) => {
    setUserSkip(false);
    setInputError('');
    setSocailName(e.target.value);
  };

  return (
    <>
      <div className="social_name_card--global d-flex">
        <div className={`social_name_card_content social_name_card`}>
          <h2>設定社群暱稱</h2>
          <form
            className="social_name_card_form d-flex flex-column h-100"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <input
                type="text"
                name="socialName"
                className={`form-control ${inputError ? 'error' : ''}`}
                placeholder="輸入暱稱"
                value={socailName}
                onChange={handleInputChange}
                required
              />
            </div>
            <p className={`${inputError ? 'active' : ''}`}>{inputError}</p>
            <p className={`${userSkip ? 'active' : ''}`}>
              暱稱設定不可跳過唷！
            </p>
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

export default SocialNameEditCard;
