import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import './_ProductDetail.scss';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// 加入購物車跳出視窗
import { handleSuccess } from '../../../utils/handler/card/handleStatusCard';
// 商品照片
import ItemImage from '../../../components/EC/EC_productDetail/Image';
// 街景
// import Streeview from '../../../components/EC/EC_productDetail/StreetView';
// 商品評價
import Score from './../../../components/EC/EC_productDetail/Score';

const ProductDetail = () => {
  const [productData, setProductData] = useState([]);
  const [tag, setTags] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [mainURL, setMainURL] = useState('');
  const [perScore, setPerScore] = useState(4);

  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const productId = urlSearchParams.get('id');
  // const typeId = urlSearchParams.get('typeid');
  // console.log('productId1111', productId);

  useEffect(() => {
    // 抓商品細節資料
    const fetchProductData = async () => {
      // 加入購物車與否
      // const { user, setUser } = useUserInfo();

      const result = await axios.get(
        `${API_URL}/productdetail/item?id=${productId}`
      );
      // console.log(result);
      const tags = result.data.product_tag;
      const tag = tags.split(/[#]/).filter((item) => item);
      setTags(tag);
      const photos = result.data.photo;
      setPhoto(photos);
      const mainURL = result.data.photo_path;
      setMainURL(mainURL);
      setProductData(result.data);
      const score = Number(result.data.per_score.toFixed(1));
      setPerScore(score);

      // 抓推薦 第四館商品資料
      const recommend = await axios.get(`${API_URL}/productdetail/recommend`);
      setRecommend(recommend.data);
    };
    fetchProductData();
  }, []);
  // console.log('title', title);

  // = 加入購物車

  return (
    <>
      {productData.length === 0 ? (
        console.log('沒有資料') //* 是否做loading 頁面
      ) : (
        <div className="productDetail">
          <div className="topRow row ">
            {/* 商品照區域 */}
            <div className="col-5">
              <ItemImage
                mainURL={mainURL}
                productData={productData}
                photo={photo}
              />
            </div>
            {/* 商品標題 */}
            <div className="productDesc col-">
              <div className="productContainer">
                <h1 className="headText fw-bolder">{productData.name}</h1>
                <ul>
                  <li className="subText">{productData.intro}</li>
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
                {/* 主要價格區域 */}
                <div className="costSection ">
                  <p className="mainCost">NT${productData.price}</p>
                  <p className="ogCost text-decoration-line-through  ">
                    NT${Number((productData.price * 1.2).toFixed(0))}
                  </p>
                </div>

                {/* 加購區 */}
                <div className="mainAddSection">
                  <p className="text-muted fw-bolder">+ 尚優惠的加購價</p>
                  <hr />
                  {/* 推薦商品 */}
                  {recommend.map((data, index) => {
                    return (
                      <div className="addSection d-flex flex-row mb-2">
                        <Link to={`/ec-productdetail?id=${data.id}`}>
                          <div className="addSubSection d-flex align-items-center mb-0">
                            <img
                              className="addSubSection_img"
                              // TODO 要記得換
                              src={`http://localhost:3007${mainURL}/${productData.main_photo}`}
                              alt="..."
                            />
                            <p className="addSubSection_name fw-bolder mb-0 ms-2">
                              {data.name}
                            </p>
                          </div>
                        </Link>
                        <div className="addCartSection d-flex flex-row flex-shrink-0 row-4">
                          <div className="addCostSection">
                            <p className="addCost text-decoration-line-through m-0">
                              NT${Number((data.price * 1.2).toFixed(0))}
                            </p>
                            <p className="addMainCost fs-5 fw-bolder m-0">
                              NT${data.price}
                            </p>
                          </div>
                          <div className="d-flex align-items-end">
                            <button
                              className="addSubSection_btn ms-2 py-2"
                              onClick={() => {
                                // console.log(e.target.value);
                                handleSuccess('已成功加入購物車');
                              }}
                            >
                              加入購物車
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 此商品的加入購物車 */}
                <div className="buttonRow">
                  <button
                    className="addButton"
                    onClick={(e) => {
                      // console.log(e.target.value);
                      handleSuccess('已成功加入購物車');
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="descriptionSelection">
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
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productData.description,
                    }}
                  />
                  <img src="" alt="" />
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
                    • 每間客房最多容納 1 名 0-12
                    歲的孩童，使用現有床鋪無法加床。
                    <br />
                  </p>
                </div>
                <div id="howToUse" className="description">
                  <h4>如何使用</h4>
                  <p>
                    • 憑證使用方式
                    <br />
                    現場請出示電子憑證與護照正本或身份證 text
                    <br />
                    • 憑證兌換期限
                    <br />
                    需要按照預訂日期及當天開放時間內兌換，逾期失效
                    <br />
                  </p>
                </div>
                {/* <Streeview /> */}
                <Score perScore={perScore} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
