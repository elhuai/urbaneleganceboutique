import axios from 'axios';
import '../styles/_EC_subpages_OrderDetail.scss';
import { react, useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';

function OrderDetail(props) {
  const {
    pay,
    shipping,
    receipt,
    setReceipt,
    couponName,
    selected,
    setShippingData,
    cartProductData,
    setCartProductData,
  } = props;
  console.log('cartData=====OrderDetail===', cartProductData);

  // const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);
  const [orderBuying, setOrderBuying] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      setOrder({
        amount: Number(cartProductData.quantity * cartProductData.price * (1 - selected / 100)).toFixed(0),
        currency: 'TWD',
        packages: [
          {
            id: packageIdGenerater(cartProductData.user_id),
            amount: Number(cartProductData.quantity * cartProductData.price * (1 - selected / 100)).toFixed(0),
            products: [
              {
                name: cartProductData.name,
                quantity: cartProductData.quantity,
                price: Number(
                  (cartProductData.quantity * cartProductData.price * (1 - selected / 100)) / cartProductData.quantity
                ).toFixed(0),
                originalPrice: cartProductData.price,
              },
            ],
          },
        ],
        orderId: packageIdGenerater(cartProductData.user_id),
      });
      // console.log(order);
      setOrderBuying({
        user_id: cartProductData.user_id,
        product_id: cartProductData.product_id,
        product_quantity: cartProductData.quantity,
        product_price: cartProductData.price,
        order_no: packageIdGenerater(cartProductData.user_id),
        total: Number(cartProductData.quantity * cartProductData.price * (1 - selected / 100)).toFixed(0),
        pay: 'LinePay',
        coupon_number: 8,
        coupon_name: '小確幸92折優惠',
        order_time: new Date().getTime(),
      });
      // console.log('orderBuying', orderBuying);
    };

    fetchProductData();
  }, []);

  const packageIdGenerater = (user_id) => {
    let dt = new Date();
    return `${dt.getTime()}_${user_id}`;
  };

  const handlePay = () => {
    // const id = order.packages[0].id;
    // console.log('id', id);
    // setOrderId(id);

    const createOrder = async (e, id) => {
      // e.preventDefault();
      try {
        console.log('-----createOrderBuying---------', orderBuying);
        let result = await axios.post(`${API_URL}/createorder/order`, { orderBuying });
      } catch (error) {
        console.log('error', error);
      }
    };
    createOrder();

    // const linePay = async (e, id) => {
    //   // e.preventDefault();
    //   try {
    //     console.log('try-----order', order);
    //     // 打後端ＬＩＮＥＡＰＩ
    //     let result = await axios.post(`${API_URL}/line/createOrder`, { order });
    //     if (result.data.status === 'ok') {
    //       window.location = result.data.redirect;
    //       // console.log(result.data.redirect);
    //     }
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    // };
    // linePay();
  };

  return (
    <>
      <div className="OrderDetail">
        <div className="mainTitle">3.送出訂單</div>

        {!!cartProductData ? (
          <div className="bottomColumn">
            <div className="subSection2">
              <div className="calculateSection">
                <div className="subTitle">票券名稱：{cartProductData.name}</div>
                <div className="subInput">NT${cartProductData.price}</div>
              </div>
              <div className="calculateSection">
                <div className="subTitle">票券數量</div>
                <div className="subInput">{cartProductData.quantity}張</div>
              </div>
            </div>
            <div className="subSection2">
              <span>NT${cartProductData.price * cartProductData.quantity}</span>
              <div className="calculateSection">
                <div className="subTitle">優惠券：{couponName}</div>
                <div className="subInput">{selected}%OFF</div>
              </div>
            </div>
            <div className="subSection3">
              <div className="calculateSection">
                <div className="subTitle">購買人</div>
                <div className="subInput">{shipping.name}</div>
              </div>
              <div className="calculateSection">
                <div className="subTitle">付款方式</div>
                <div className="subInput">{pay}</div>
              </div>
              <div className="calculateSection">
                <div className="subTitle">電子收據</div>
                <div className="subInput">{receipt}</div>
              </div>
            </div>
            <div className="calculateSection1">
              <div className="subTitle">總計(付款金額)</div>
              <div className="subInput">
                NT$
                {Number(cartProductData.quantity * cartProductData.price * (1 - selected / 100)).toFixed(0)}
              </div>
            </div>
            {/* <form action="/line/createOrder/<%= orderId %>" method="post"> */}
            {/* <form action={`${API_URL}/line/createOrder/${orderId}`} method="post"> */}
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
