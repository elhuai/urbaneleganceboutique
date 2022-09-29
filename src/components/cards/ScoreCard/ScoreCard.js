import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { FaPaw } from 'react-icons/fa';
import { postScore } from '../../../api/userApi';
import './_scoreCard.scss';

const desciption = ['不滿意', '有待加強', '尚可', '很好', '非常滿意'];

const PasswordEditCard = ({
  confirm,
  cancel,
  product_id,
  order_no,
  setData,
}) => {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
  const [inputError, setInputError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (score === 0) return setInputError('請點選商品評分');
    console.log(score, comment);
    const data = { score: score, comment: comment, order_no: order_no };
    postScore(product_id, data, setData, confirm);
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    setInputError('');
  }, [score, comment]);

  return (
    <>
      <div className="score_card--global d-flex">
        <div className={`score_card_content score_card`}>
          <h2>商品評論</h2>
          <div className="mb-3">
            <div>
              <Rate
                tooltips={desciption}
                character={FaPaw}
                onChange={setScore}
                value={score}
              />
            </div>
            {score ? (
              <div className="mt-3" style={{ color: '#adadad' }}>
                {desciption[score - 1]}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="寫下你的想法 ..."
              value={comment}
              onChange={handleInputChange}
            ></textarea>
          </div>
          {inputError ? <p className="active">{inputError}</p> : ''}
          <div className="d-flex gap-2 justify-content-center">
            <button className="score_card_button" onClick={handleSubmit}>
              送出
            </button>
            <button
              className="score_card_button cancel"
              onClick={() => cancel()}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordEditCard;
