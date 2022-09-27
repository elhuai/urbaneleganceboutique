import React from 'react';
import '../styles/_EC_subpages_Cart.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';
import { IoCaretBack, IoCaretForward } from 'react-icons/io5';
import { useUserInfo } from '../../../../hooks/useUserInfo';

const Cart = (props) => {
  const {
    cartProductData,
    setCartProductData,
    productId,
    couponName,
    setCouponName,
    selected,
    setSelected,
  } = props;

  const { user, setUser } = useUserInfo();

  const addCart = async (e, id) => {
    if (user.auth) {
      try {
        const result = await axios.post(
          `${API_URL}/cart/orderpostmore/${productId}`,
          {},
          {
            withCredentials: true,
          }
        );
        console.log('-----addCart-----');
        const [dataContent] = result.data[0];
        console.log(dataContent);

        // 如果想用假的數字結果可用：
        // let newCart = [...cart];
        // newCart = newCart.map(item=>{
        //   if(item.product_id === id){
        //     item.quantity ++;
        //   }
        //   return item
        // });
        // console.log(newCart);

        setCartProductData(dataContent);
        // handleSuccess('已成功加入購物車');
      } catch (error) {
        console.log('error', error);
      }
    } else {
      addCart({ isLogin: true }, setUser);
    }
  };

  const minusCart = async (e, id) => {
    e.preventDefault();
    if (user.auth) {
      try {
        const result = await axios.post(
          `${API_URL}/cart/orderpostreduce/${productId}`,
          {},
          {
            withCredentials: true,
          }
        );
        console.log('----minusCart------');
        console.log(result.data[0]);
        const [dataContent] = result.data[0];
        console.log(dataContent);

        // 如果想用假的數字結果可用：
        // let newCart = [...cart];
        // newCart = newCart.map(item=>{
        //   if(item.product_id === id){
        //     item.quantity --;
        //   }
        //   return item
        // });
        // console.log(newCart);

        setCartProductData(dataContent);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      addCart({ isLogin: true }, setUser);
    }
  };
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
                  <div className="subInput">{cartProductData.name}</div>
                </div>
                <div className="subSection">
                  <div className="subTitle">票券數量</div>
                  <div className="subInput">
                    <div className="cartAddSection">
                      <p>{cartProductData.quantity}</p>
                      <div className="cartAddButton">
                        {/* TODO: */}
                        <button onClick={minusCart}>
                          <IoCaretBack />
                        </button>
                        <button onClick={addCart}>
                          <IoCaretForward />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subSection">
                  <div className="subTitle">優惠券</div>
                  <select
                    className="subSelect"
                    onChange={(e) => {
                      setSelected(e.target.value);
                      setCouponName(e.target.name);
                    }}
                  >
                    {/* TODO:折價數字也要呈現
                    {coupon &&
                      coupon.map((v, i) => {
                        return (
                          <option key={`option${i}`} value={i}>
                            {v.option}
                          </option>
                        );
                      })} */}
                    <option value={0} name={'請選擇優惠券'}>
                      請選擇優惠券
                    </option>
                    <option value={10} name={'歡慶雙十10%OFF'}>
                      歡慶雙十10%OFF
                    </option>
                    <option value={8} name={'小確幸92折優惠'}>
                      小確幸92折優惠
                    </option>
                  </select>
                </div>
                <div className="subSection">
                  <div className="subDescription">兌換說明</div>
                  <div className="subValue ms-1">
                    1. 您在線上成立訂單並完成付款後，OhDogCat
                    將會蒐集您購買的票券在會員中心。
                    <br />
                    2.
                    開啟會員中心後，到「我的票券」專區，將會看到您能使用的票券。
                    <br />
                    3.
                    在您將使用服務時，點開您想兌換的票券，選擇想要兌換的數量，按下送出。
                    <br />
                    4. 出示核銷 QRcode 給店家掃描，將能換取您想要的服務。
                    <br />
                  </div>
                </div>
                <div className="subSection">
                  <div className="subDescription">注意事項</div>
                  <div className="subValue">
                    • 因應疫情及政府規範，現場兌換商品請符合防疫等相關規定。
                    <br />
                    • 購買景點票券使用時間將以景點公告為主，不另行告知。
                    <br />
                    •
                    購買餐廳票券請提前電話預約並告知使用兌換券，餐點有限避免向隅。
                    <br />
                    •
                    購買商品票券商家將保留依照庫存變更、修改之權利，無法配合規定者請勿預訂。
                    <br />
                  </div>
                </div>
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
                <p className="title">{couponName}</p>
                <p className="totalDiscountNumber">{selected}%OFF</p>
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
export default Cart;
