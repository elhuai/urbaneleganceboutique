import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { exchangeUserVoucher } from '../../../api/userApi';
import { editSocialName } from '../../../api/userApi';
import './_voucherExchangeCard.scss';

const SocialNameEditCard = ({ confirm, itemData, socket }) => {
  const [excahgeQuantity, setExcahgeQuantity] = useState(1);
  const [inputError, setInputError] = useState('');
  const value = useRef(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (excahgeQuantity === 0) return setInputError('兌換數量無法小於 1');
    confirm();
    exchangeUserVoucher(itemData, excahgeQuantity, socket);
  };

  const handleInputChange = (e) => {
    setExcahgeQuantity(Number(e.target.value));
    // value.current = Number(e.target.value);
  };

  useEffect(() => {
    if (excahgeQuantity > itemData.quantity) {
      setExcahgeQuantity(excahgeQuantity - 1);
      setInputError('不可超出可兌換數量');
    }
    if (excahgeQuantity < 0) {
      setExcahgeQuantity('');
      setInputError('兌換數量無法小於 1');
    }
    if (value.currnet < 0) {
      setInputError('兌換數量無法小於 1');
    } else if (value.currnet > itemData.quantity) {
      setInputError('不可超出可兌換數量');
    } else {
      setInputError('');
    }
    value.currnet = excahgeQuantity;
  }, [excahgeQuantity]);

  return (
    <>
      <div className="voucher_exchange_card--global d-flex">
        <div className={`voucher_exchange_card_content voucher_exchange_card`}>
          <h2>兌換數量</h2>
          <form
            className="voucher_exchange_card_form d-flex align-items-center flex-column h-100"
            onSubmit={handleSubmit}
          >
            <div className="input-group mb-3 text-center">
              <button
                className="btn"
                type="button"
                onClick={() => setExcahgeQuantity((num) => num - 1)}
              >
                -
              </button>
              <input
                type="number"
                name="voucherQuantity"
                className={`form-control ${inputError ? 'error' : ''}`}
                placeholder="輸入兌換數量"
                value={excahgeQuantity}
                onChange={handleInputChange}
                required
              />
              <button
                className="btn"
                type="button"
                onClick={() => setExcahgeQuantity((num) => num + 1)}
              >
                +
              </button>
            </div>
            <p className={`${inputError ? 'active' : ''}`}>{inputError}</p>
            <div>
              <button className=" voucher_exchange_card_button" type="submit">
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
