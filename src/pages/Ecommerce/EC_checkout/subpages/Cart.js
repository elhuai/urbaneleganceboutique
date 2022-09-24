import React from 'react';
import '../styles/_EC_subpages_Cart.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';
import { IoCaretBack, IoCaretForward } from 'react-icons/io5';

const Cart = () => {
  const [coupon, setCoupon] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const fetchCoupon = async () => {
      const result = await axios.get(`${API_URL}/orderSteps/coupon`);
      console.log(result.data);
      setCoupon(result.data);
      // const data = result.data;
      // arrStr[index].setState(data);
    };
    fetchCoupon();
  }, []);

  // console.log('coupon', coupon);


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

  // console.log('cart', cart);

  const [selected, setSelected] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [number, setNumber] = useState(1);

  const MinusOne = () => {
    setNumber(number > 1 ? number - 1 : 1);
  };

  const AddOne = () => {
    setNumber(number + 1);
  };

  // console.log(title.price);
  // const {title.price} = titlePrice;
  // console.log('selected', selected);

  return (
    <>
      <div className="Cart">
        <div className="middleRow">
          <div className="mainTitle">1.確認購物車內容</div>

          <div className="bottomColumn">
            <div className="mainColumn">
              <div className="infoColumn">
                <div className="subSection">
                  <div className="subTitle">票券名稱</div>
                  <div className="subInput">{cart.name}</div>
                </div>
                <div className="subSection">
                  <div className="subTitle">票券數量</div>
                  <div className="subInput">
                    <div className="cartAddSection">
                      <p>{number}</p>
                      <div className="cartAddButton">
                        <button onClick={MinusOne}>
                          <IoCaretBack />
                        </button>
                        <button onClick={AddOne}>
                          <IoCaretForward />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subSection">
                  <div className="subTitle">使用優惠券</div>
                  <select
                    className="subSelect"
                    onChange={(e) => {
                      setSelected(e.target.value);
                      setQuantity(e.target.quantity);
                    }}
                  >
                    {/* TODO:折價數字也要呈現 */}
                    {coupon.map((v, i) => {
                      return (
                        <option key={v.id} value={v.name} quantity={v.quantity}>
                          {v.name}
                        </option>
                      );
                    })}
                  </select>
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
              
              <div className="totalCate">
                <p className="title">票券名稱</p>
                <p>{cart.name}</p>
                <div className="subTotal">
                  <p>售價</p>
                  <p>NT${cart.price}</p>
                </div>
                <div className="subTotal">
                  <p>數量</p>
                  <p>{number}張</p>
                </div>
              </div>

              <div className="totalDiscount">
                {/* todo:優惠券名字component  */}
                <p className="title">{selected}</p>
                <p className="totalDiscountNumber">{quantity}%OFF</p>
              </div>
              <div className="totalNumber">
                <p className="title">總計(付款金額)</p>
                <p>NT${number * cart.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
