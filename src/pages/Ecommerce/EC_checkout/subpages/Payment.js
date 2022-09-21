import { useState } from 'react';
import '../styles/_EC_subpages_Payment.scss';

const Payment = () => {
  return (
    <>
      <body className="Payment">
        <div className="middleRow">
          <div className="mainTitle">2.確認付款資訊</div>
          <div className="bottomColumn">
            <div className="mainColumn">
              <div className="infoColumn">
                <section>
                  <p>購買人資訊</p>
                  <div className="subSection">
                    <div className="subTitle">姓名 ＊</div>
                    <input type="text" />
                  </div>
                  <div className="subSection">
                    <div className="subTitle">email ＊</div>
                    <input type="text" />
                  </div>
                  <div className="subSection">
                    <div className="subTitle">聯絡電話 ＊</div>
                    <input type="text" />
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
                    <input className="radioInput" type="radio" />
                    <span> LinePay</span>
                  </div>
                </section>
                <section>
                  <p>選擇優惠券</p>
                  <p>電子收據</p>
                  <div className="subSection">
                    <div className="subDescription">注意事項</div>
                    <div className="subValue">
                      預約方式 <br />
                      1. 需提前三個工作天預訂，請先加入主辦單位官方LINE
                      ID：@ksadmg，並主動提供訊息告知預約本活動的日期、場次、人數、兌換券前五碼序號、聯絡人姓名、手機、保險資料等資訊，敬請配合，旺季時遊客較多可能客滿，建議提早預約{' '}
                      <br />
                      2. 如雙方確認預約後不克前往，退改政策如下： <br />
                      (1)
                      出發日前6日至前4日內(不含出發日)通知取消，將退回已付金額的50%{' '}
                      <br />
                      (2) 出發日前3日至當日內不接受改期、取消，並不予退費 <br />
                      3.
                      更換參加者務必於活動前一日的中午前通知，並提供新參加者的保險資料{' '}
                      <br />
                      4.
                      因個人因素需更改活動梯次(日期場次)，限改一次，並請提早告知(活動日前3天恕不再接受臨時更換梯次之要求)。更改梯次後不接受改期、取消，並不予退費{' '}
                      <br />
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="totalColumn">
              <div className="totalName">
                <p className="title">商品名稱</p>
                <p>宜蘭東澳海蝕洞獨木舟/一泊二食星光露營體驗</p>
              </div>
              <div className="totalCate">
                <p className="title">方案</p>
                <p>A.獨木舟體驗全票</p>
                <div className="subTotal">
                  <p>售價</p>
                  <p>NT$3,500</p>
                </div>
                <div className="subTotal">
                  <p>數量</p>
                  <p>2張</p>
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
      </body>
    </>
  );
};
export default Payment;
