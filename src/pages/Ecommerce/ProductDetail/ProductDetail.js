import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import './_ProductDetail.scss';
// Component

import Product_Detail1 from '../../../images/Product_Detail1.png';
import Product_Detail2 from '../../../images/Product_Detail2.png';
import Product_Detail3 from '../../../images/Product_Detail3.png';
import Product_Detail4 from '../../../images/Product_Detail4.png';
import Product_Detail5 from '../../../images/Product_Detail5.png';
import Product_Detail7 from '../../../images/Product_Detail7.png';
import Product_Detail8 from '../../../images/Product_Detail8.png';
import Guess_U_Like1 from '../../../images/Guess_U_Like1.png';
import Guess_U_Like2 from '../../../images/Guess_U_Like2.png';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const [productData, setProductData] = useState([]);
  const [tag, setTags] = useState([]);
  const [photo, setPhoto] = useState([]);

  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const productId = urlSearchParams.get('id');
  // console.log('productId1111', productId);

  useEffect(() => {
    const fetchProductData = async () => {
      const result = await axios.get(
        `${API_URL}/productdetail/item?id=${productId}`
      );
      // console.log(result);
      const tags = result.data.product_tag;
      const tag = tags.split(/[#]/).filter((item) => item);
      setTags(tag);
      const photos = result.data.photo;
      setPhoto(photos);
      setProductData(result.data);
    };
    fetchProductData();
  }, []);
  console.log('productData', productData);
  const mainURL = productData.photo_path;

  return (
    <>
      {productData.length === 0 ? (
        console.log('沒有資料') //* 是否做loading 頁面
      ) : (
        <div className="ProductDetail">
          {/* <div className="container"> */}
          <div className="topRow">
            <div className="imageColumn">
              <div className="mainImage">
                <img
                  src={`http://localhost:3007${mainURL}/${productData.main_photo}`}
                  alt=""
                />
              </div>
              <div className="cardRow">
                {photo.map((data, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={`http://localhost:3007${mainURL}/${data['file_name']}`}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="productDesc">
              <div className="productContainer">
                <h1 className="headText">{productData.name}</h1>
                <ul>
                  <li className="subText">{productData.intro}</li>
                  {/* <li className="subText">寵物友善，帶著毛小孩一同出遊吧</li> */}
                </ul>
                <div className=" d-flex flex-row">
                  {tag.map((data, index) => {
                    return (
                      <p key={index} className="tags my-2 me-2">
                        {data}
                      </p>
                    );
                  })}
                </div>
                {/* <div className="tags">交通方便</div> */}
                <div className="MainAddSection">
                  <pre>+ 用尚優惠的價格加購</pre>
                  <hr />
                  <div className="addSection">
                    <div className="addSubSection">
                      <img src={Guess_U_Like1} />
                      <a href="#">寵物外出包｜PETRICK Backpack 派翠克</a>
                    </div>
                    <div className="addCostSection">
                      <p className="addCost">1780</p>
                      <p className="addMainCost">890</p>
                    </div>
                    <div className="addSubSection">
                      <button>加入購物車</button>
                    </div>
                  </div>
                  <div className="addSection">
                    <div className="addSubSection">
                      <img src={Guess_U_Like2} />
                      <a href="#">彈性緩衝反光牽繩 ｜Chillax Leash</a>
                    </div>
                    <div className="addCostSection">
                      <p className="addCost">780</p>
                      <p className="addMainCost">560</p>
                    </div>
                    <div className="addSubSection">
                      <button>加入購物車</button>
                    </div>
                  </div>
                </div>
                <div className="costSection">
                  <p className="mainCost">NT${productData.price}</p>
                  <p className="cost">
                    NT${Number((productData.price * 1.2).toFixed(0))}
                  </p>
                </div>
                <div className="buttonRow">
                  <button className="addButton">加入購物車</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomRow">
            <div className="spec">
              <div className="anchor">
                <a href="#description">｜商品說明</a>
                <a href="#toKnow">｜購買須知</a>
                <a href="#howToUse">｜如何使用</a>
                <a href="#comment">｜票券評價</a>
              </div>
              <div className="anchor1"></div>
            </div>
            <div className="spec2">
              <div id="description" className="description">
                <h4>商品說明</h4>
                <p>{productData.description}</p>
                <img src={''} alt="" />
              </div>

              <div id="toKnow" className="description">
                <h4>購買須知</h4>
                <p>
                  •
                  為提供顧客良好住宿體驗，不提供加人加價服務，請依適合人數選擇房型。
                  <br />
                  • 客房格局依實際入住安排為主。
                  <br />
                  •
                  入住登記者須年滿18歲。未滿18歲之未成年旅客，須由家長陪同入住。
                  <br />
                  • 每間客房最多容納 1 名 0-12 歲的孩童，使用現有床鋪無法加床。
                  <br />
                </p>
              </div>
              <div id="howToUse" className="description">
                <h4>如何使用</h4>
                <p>
                  • 憑證使用方式
                  <br />
                  現場請出示電子憑證與護照正本或身份證
                  <br />
                  • 憑證兌換期限
                  <br />
                  需要按照預訂日期及當天開放時間內兌換，逾期失效
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
