import './_EC_checkout_2.scss';
import { Link } from 'react-router-dom';

const Checkout_2 = () => {
  return (
    <>
      <body className="Checkout_1">
        <div className="topRow">
          <div className="step1">
            1.確認購物車內容&emsp;&emsp;&emsp;&emsp; >
          </div>
          <div className="step2">2.確認付款資訊&emsp;&emsp;&emsp;&emsp; ></div>
          <div className="step3">3.送出訂單</div>
        </div>
        <div className="middleRow">
          <div className="mainTitle">1.確認購物車內容</div>
          <div className="bottomColumn">
            <div className="mainColumn">
              <div className="infoColumn">
                <div className="subSection">
                  <div className="subTitle">店家名稱</div>
                  <div className="subInput">王樣活動開發整合行銷有限公司</div>
                </div>
                <div className="subSection">
                  <div className="subTitle">票券方案</div>
                  <div className="subInput">A.獨木舟體驗全票</div>
                </div>
                <div className="subSection">
                  <div className="subTitle">票券數量</div>
                  <div className="subInput">2</div>
                </div>
                <div className="subSection">
                  <div className="subDescription">兌換說明</div>
                  <div className="subValue">
                    優惠期間：自 2022 年 07 月 26 日 起兌換至 2022 年 09 月 30
                    日，週一至週日適用 <br />
                    本活動皆為單人使用，9歲以上65歲以下請購買全票、6歲以上未滿9歲請購買半票，非以上年紀請於報名前先洽詢店家{' '}
                    <br />
                    本活動4人成團，如未滿4人可與主辦單位連絡，將協助確認是否湊團成功{' '}
                    <br />
                    AB方案可擇選獨木舟場次 <br />
                    1. 拂曉團集合時間：04:00 <br />
                    2. 上午團集合時間：09:00~10:00 <br />
                    3. 下午團集合時間：13:00~13:30 <br />
                    CD方案可擇選場次 <br />
                    1. 拂曉獨木舟：17:00
                    集合。享用晚餐、露營，並參加隔日獨木舟拂曉場次，約 09:00
                    結束活動 <br />
                    2. 下午獨木舟：13:00~13:30 集合。17:00
                    享用晚餐、露營，約隔日 07:00 結束活動 <br />
                  </div>
                </div>
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
        <div className="bottomRow">
          <button>確認商品資訊，下一步</button>
          <Link to="/ec-checkout2">
            <p>123</p>{' '}
          </Link>
        </div>
      </body>
    </>
  );
};
export default Checkout_2;
