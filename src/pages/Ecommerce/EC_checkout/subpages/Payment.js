import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';
import '../styles/_EC_subpages_Payment.scss';

const Payment = (props) => {
  const { shipping, setShippingData } = props;

  const handleFieldChange = (e) => {
    const newShipping = { ...shipping, [e.target.name]: e.target.value };
    setShippingData(newShipping);
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
                    <div className="subTitle ">姓名 ＊</div>
                    <input type="text" name="name" onChange={handleFieldChange} />
                  </div>
                  <div className="subSection">
                    <div className="subTitle">email ＊</div>
                    <input type="text" name="email" onChange={handleFieldChange} />
                  </div>
                  <div className="subSection">
                    <div className="subTitle">聯絡電話 ＊</div>
                    <input type="text" name="phone" onChange={handleFieldChange} />
                  </div>
                </section>
                <section>
                  <p>付款方式</p>
                  <div className="paymentSection">
                    <div className="paymentSubSection">
                      <input type="radio" />
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
                        <input type="text" />-
                        <input type="text" />-
                        <input type="text" />-
                        <input type="text" />
                      </div>
                      <div className="CCardGoodThu">
                        <div>有效期限</div>
                        <input type="month" />
                        <input type="" />
                      </div>
                      <div className="CCardNumber">
                        <div>卡片背面末三碼</div>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="paymentSubSection">
                      <input type="radio" />
                      <div className="iconLinePay"></div>
                      <span>請備妥手機以完成交易</span>
                    </div>
                  </div>
                </section>
                <section>
                  <p>電子收據</p>
                  <div className="receiptSection">
                    <input type="radio" />
                    <span className="radioInput">電子收據（個人）</span>
                  </div>
                  <div className="receiptSection">
                    <input type="radio" />
                    <span className="radioInput">電子收據（公司戶）</span>
                  </div>
                  <span className='receiptContent'>
                    為響應環保，系統將自動寄送收據開立通知信至您的購買e-mail，您可在「旅行業代收轉付電子收據加值平台」下載或至e-mail信箱中列印本收據，作為收帳憑據使用。
                  </span>
                </section>
                <section>
                  <div className="subSection">
                    <p>注意事項</p>
                    {/* <div className="subValue"> */}
                    {/* 預約方式 <br />
                      1. 需提前三個工作天預訂，請先加入主辦單位官方LINE
                      ID：@ksadmg，並主動提供訊息告知預約本活動的日期、場次、人數、兌換券前五碼序號、聯絡人姓名、手機、保險資料等資訊，敬請配合，旺季時遊客較多可能客滿，建議提早預約{' '}
                      <br />
                      2. 如雙方確認預約後不克前往，退改政策如下： <br />
                      (1) 出發日前6日至前4日內(不含出發日)通知取消，將退回已付金額的50% <br />
                      (2) 出發日前3日至當日內不接受改期、取消，並不予退費 <br />
                      3. 更換參加者務必於活動前一日的中午前通知，並提供新參加者的保險資料 <br />
                      4.
                      因個人因素需更改活動梯次(日期場次)，限改一次，並請提早告知(活動日前3天恕不再接受臨時更換梯次之要求)。更改梯次後不接受改期、取消，並不予退費{' '}
                      <br /> */}
                    {/* </div> */}
                  </div>
                </section>
              </div>
            </div>
            <div className="totalColumn">
              <div className="totalCate">
                <p className="title">票券名稱</p>
                <p>{cart.name}</p>
                <div className="subTotal">
                  <p>售價</p>
                  <p>NT${cart.price}</p>
                </div>
                <div className="subTotal">
                  <p>數量</p>
                  <p>{cart.quantity}張</p>
                </div>
              </div>

              <div className="totalDiscount">
                {/* todo:優惠券名字component  */}
                <p className="title">優惠券-新會員入會折扣</p>
                <p className="totalDiscountNumber">-NT$200</p>
              </div>
              <div className="totalNumber">
                <p className="title">總計(付款金額)</p>
                <p>NT$6,800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
