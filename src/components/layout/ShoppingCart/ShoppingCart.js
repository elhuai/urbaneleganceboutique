import { normalizeUnits } from 'moment';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoCart, IoCaretBack, IoCaretForward } from 'react-icons/io5';
import { TbTicket } from 'react-icons/tb';
import './_ShoppingCart.scss';

function ShoppingCart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [number, setNumber] = useState(1);
  const [cart, setCart] = useState([]);

  const MinusOne = () => {
    setNumber(number > 1 ? number - 1 : 1);
  };

  const AddOne = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      // 抓商品細節資料
      const result = await axios.get(`${API_URL}/cart/getcart`);
      console.log('result', result.data);
      const [cartData] = result.data;
      // console.log(result);
      // const tags = result.data.product_tag;
      // const tag = tags.split(/[#]/).filter((item) => item);
      // setTags(tag);
      // const photos = result.data.photo;
      // setPhoto(photos);
      // const mainURL = result.data.photo_path;
      // setMainURL(mainURL);
      // setProductData(result.data);

      // 抓推薦 第四館商品資料
      // const recommend = await axios.get(`${API_URL}/productdetail/recommend`);
      setCart(cartData);
    };
    fetchProductData();
  }, []);
  console.log('cart', cart);
  // console.log('cart',[cart]);

  return (
    <>
      {/* <button onClick={handleShow}> */}
      <IoCart onClick={handleShow} className="ioCart flex-shrink-0" />
      {/* </button> */}
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <div className="ShoppingCart">
          <section>
            <div className="headerRow">
              {' '}
              <IoChevronBack />
              購物車-商品一覽
            </div>
            <div className="mainRow">
              {/* ----放進來的票券---- */}
              <div className="mainRowObject">
                <div className="mainRowObjectContent">
                  <div className="mainRowObjectPic">
                    <img
                      className="addSubSection_img"
                      src="https://img.freepik.com/free-photo/little-terrier-dog-playing-sea_53876-94775.jpg?w=740&t=st=1663244690~exp=1663245290~hmac=040682012ba7e69a8d923017729d16983533bb08eb105512b0127b50be81ba56"
                      alt="..."
                    />
                  </div>
                  <div className="mainRowObjectText">
                    <p>{cart.name}</p>
                    {/* <span>宜蘭傳藝中心</span> */}
                  </div>
                </div>
                <div className="mainRowObjectBtn">
                  <div>
                    <div className="cartAddButton">
                      <IoCaretBack onClick={MinusOne} />
                      <span>{number}</span>
                      <IoCaretForward onClick={AddOne} />
                    </div>

                    <p>NT${number * cart.price}</p>
                  </div>
                  <Link to="/ec-ordersteps">
                    <button>確定下單</button>
                  </Link>
                </div>
              </div>
              {/* ----放進來的票券---- */}
            </div>
            <div className="footerRow">
              <div className="leftColumn">
                <TbTicket />
                共5件商品
              </div>
            </div>
          </section>
        </div>
      </Offcanvas>
    </>
  );
}
export default ShoppingCart;
