import axios from 'axios';
import '../styles/_EC_subpages_OrderDetail.scss';
import { react, useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';

function OrderDetail(props) {
  const { cartProductData, setCartProductData } = props;
  console.log('cartData=====OrderDetail===', cartProductData);


  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      // 抓商品細節資料
      const result = await axios.get(`${API_URL}/cart/getcart/`);
      const [cartData] = result.data;

      setCart(cartData);

      setOrder({
        amount: cart.price,
        currency: 'TWD',
        packages: [
          {
            id: packageIdGenerater(cart.user_id),
            amount: cart.price,
            products: [cart],
          },
        ],
        // })
      });
      // console.log(cart,order);
    };
    fetchProductData();
  }, [cart, order]);

  let dt = new Date();

  const packageIdGenerater = (user_id) => {
    let dt = new Date();
    return `${dt.getTime()}_${user_id}`;
  };

  const handlePay = () => {
    console.log('order', order);
  };

  return (
    <>
      <div className="OrderDetail">
        <div className="mainTitle">3.送出訂單</div>

        {!!cart ? (
          <div className="bottomColumn">
            <div className="subSection2">
              <div className="calculateSection">
                <div className="subTitle">票券名稱：{cart.name}</div>
                <div className="subInput">NT${cart.price}</div>
              </div>
              <div className="calculateSection">
                <div className="subTitle">票券數量</div>
                <div className="subInput">{cart.quantity}張</div>
              </div>
            </div>
            <div className="subSection2">
              <span>NT${cart.price}</span>
              <div className="calculateSection">
                <div className="subTitle">優惠券：歡慶雙十10%OFF</div>
                <div className="subInput">10%OFF</div>
              </div>
            </div>
            <div className="subSection3">
              <div className="calculateSection">
                <div className="subTitle">購買人</div>
                <div className="subInput">{cart.user_id}</div>
              </div>
              <div className="calculateSection">
                <div className="subTitle">付款方式</div>
                <div className="subInput">信用卡9999 9999 9999 9999</div>
              </div>
              <div className="calculateSection">
                <div className="subTitle">電子收據</div>
                <div className="subInput">電子收據(個人)</div>
              </div>
            </div>
            <div className="calculateSection1">
              <div className="subTitle">總計(付款金額)</div>
              <div className="subInput">NT${cart.price}</div>
            </div>
            {/* <form action=""> */}
            <button onClick={handlePay}>來去結帳</button>
            {/* </form> */}
            {/* {!!order ? (<div>{order.amount}</div>) : null} */}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default OrderDetail;
