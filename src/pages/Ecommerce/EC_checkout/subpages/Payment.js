import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';
import '../styles/_EC_subpages_Payment.scss';

const Payment = (props) => {
  const {
    pay,
    setPay,
    receipt,
    setReceipt,
    shipping,
    setShippingData,
    cartProductData,
    setCartProductData,
    couponName,
    setCouponName,
    selected,
    setSelected,
  } = props;
  console.log('cartData=====Payment===', cartProductData);

  const handleFieldChange = (e) => {
    const newShipping = { ...shipping, [e.target.name]: e.target.value };
    setShippingData(newShipping);
  };

  const onChangePay = (e) => {
    const newPay = e.target.value;
    setPay(newPay);
    console.log(pay);
  };

  const onChangeReceipt = (e) => {
    const newReceipt = e.target.value;
    setReceipt(newReceipt);
    console.log(receipt);
  };

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      // 抓商品細節資料
      const result = await axios.get(`${API_URL}/cart/getcart`);
      // console.log('result', result.data);
      const [cartData] = result.data;

      setCart(cartData);
    };
    fetchProductData();
  }, []);

  return (
    <>
      <div className="Payment">
        <div className="middleRow">
          <div className="mainTitle">2.確認付款資訊</div>
          <div className="bottomColumn">
            <div className="mainColumn">
              <div className="infoColumn">
                <section>
                  <p>購買人資訊</p>
                  <div className="subSection">
                    <div className="subTitle ">
                      姓名
                      <span style={{ color: '#ef7a70', fontWeight: '500' }}>
                        ＊
                      </span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      onChange={handleFieldChange}
                    />
                  </div>
                  <div className="subSection">
                    <div className="subTitle">
                      信箱
                      <span style={{ color: '#ef7a70', fontWeight: '500' }}>
                        ＊
                      </span>
                    </div>
                    <input
                      type="text"
                      name="email"
                      onChange={handleFieldChange}
                    />
                  </div>
                  <div className="subSection">
                    <div className="subTitle">聯絡電話</div>
                    <input
                      type="text"
                      name="phone"
                      onChange={handleFieldChange}
                    />
                  </div>
                </section>
                <section>
                  <p>付款方式</p>
                  <div className="paymentSection">
                    <div className="paymentSubSection">
                      <input
                        type="radio"
                        value="信用卡"
                        checked={pay === '信用卡'}
                        onChange={onChangePay}
                      />
                      <span className="radioInput">信用卡付款</span>
                    </div>
                    <div className="paymentCCard">
                      <div className="paymentIcon">
                        <div className="iconVisa"></div>
                        <div className="iconMaster"></div>
                        <div className="iconJCB"></div>
                      </div>
                      <div className="CCardNumber">
                        <div>信用卡卡號</div>
                        <div className="CCardText">
                          <input type="text" maxLength={4} />-
                          <input type="text" maxLength={4} />-
                          <input type="text" maxLength={4} />-
                          <input type="text" maxLength={4} />
                        </div>
                      </div>
                      <div className="CCardGoodThu">
                        <div>有效期限</div>
                        <input type="month" className="mx-1" />
                      </div>
                      <div className="CCardSecretNumber">
                        <div>卡片背面末三碼</div>
                        <input type="text" maxLength={3} />
                      </div>
                    </div>
                    <div className="paymentSubSection">
                      <input
                        type="radio"
                        value="LinePay"
                        checked={pay === 'LinePay'}
                        onChange={onChangePay}
                      />
                      <div className="iconLinePay"></div>
                      <span>請備妥手機以完成交易</span>
                    </div>
                  </div>
                </section>
                <section>
                  <p>電子收據</p>
                  <div className="receiptSection">
                    <input
                      type="radio"
                      value="電子收據（個人）"
                      checked={receipt === '電子收據（個人）'}
                      onChange={onChangeReceipt}
                    />
                    <span className="radioInput">電子收據（個人）</span>
                  </div>
                  <div className="receiptSection">
                    <input
                      type="radio"
                      value="電子收據（公司戶）"
                      checked={receipt === '電子收據（公司戶）'}
                      onChange={onChangeReceipt}
                    />
                    <span className="radioInput">電子收據（公司戶）</span>
                  </div>
                  <span className="receiptContent">
                    為響應環保，系統將自動寄送收據開立通知信至您的購買e-mail，您可在「旅行業代收轉付電子收據加值平台」下載或至e-mail信箱中列印本收據，作為收帳憑據使用。
                  </span>
                </section>
                <section>
                  <div className="noteSection">
                    <p>注意事項</p>
                    <span>
                      因交通、天氣等不可抗力因素所引起的時間延誤，造成部份行程景點取消時，請您主動聯絡客服，我們將會為您辦理部份退款。
                    </span>
                  </div>
                </section>
              </div>
            </div>
            <div className="totalColumn">
              <div className="totalCate">
                <p className="title">票券名稱</p>
                <p>{cartProductData.name}</p>
                <div className="subTotal">
                  <p>售價</p>
                  <p>NT${cartProductData.price}</p>
                </div>
                <div className="subTotal">
                  <p>數量</p>
                  <p>{cartProductData.quantity}張</p>
                </div>
              </div>

              <div className="totalDiscount">
                {/* todo:優惠券名字component  */}
                <p className="title">優惠券{couponName}</p>
                <p className="totalDiscountNumber">-{selected}%OFF</p>
              </div>
              <div className="totalNumber">
                <p className="title">總計(付款金額)</p>
                <p>
                  NT$
                  {Number(
                    cartProductData.quantity *
                      cartProductData.price *
                      (1 - selected / 100)
                  ).toFixed(0)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
