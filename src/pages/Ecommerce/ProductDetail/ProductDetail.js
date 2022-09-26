import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import './_ProductDetail.scss';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// 加入購物車跳出視窗
import { handleSuccess } from '../../../utils/handler/card/handleStatusCard';
import { useUserInfo } from '../../../hooks/useUserInfo';

// 商品照片
import ItemImage from '../../../components/EC/EC_productDetail/Image';
// 兌換方式照片
import Exchange from '../../../images/EC_detail/exchange.svg';

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
  // console.log('urlSearchParams', urlSearchParams);

  useEffect(() => {
    // 抓商品細節資料
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
  const { user, setUser } = useUserInfo();
  const addCart = async (e, id) => {
    // e.preventDefault();
    if (user.auth) {
      try {
        await axios.post(
          `${API_URL}/cart/postmore/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        handleSuccess('已成功加入購物車');
      } catch (error) {
        console.log('error', error);
      }
    } else {
      addCart({ isLogin: true }, setUser);
    }
  };

  return (
    <>
      {productData.length === 0 ? (
        console.log('沒有資料') //* 是否做loading 頁面
      ) : (
        <div className="productDetail">
          <div className="topRow row ">
            {/* 商品照區域 */}
            <div className="productDetail_itemImage">
              <ItemImage
                mainURL={mainURL}
                productData={productData}
                photo={photo}
              />
            </div>
            {/* 商品標題 */}
            <div className="productDesc col">
              <div className="productContainer">
                <div className="productContainer_content">
                  <h1 className="headText fw-bolder">{productData.name}</h1>
                  <div className="subText">{productData.intro}</div>
                  <div className=" d-flex flex-row productContainer_tags">
                    {tag.map((data, index) => {
                      return (
                        <p key={index} className="tags my-2 me-2">
                          {data}
                        </p>
                      );
                    })}
                  </div>
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
                  <hr className="mainAddSection_hr" />
                  {/* 推薦商品 */}
                  {recommend.map((data, index) => {
                    console.log(data);
                    return (
                      <div
                        className="addSection d-flex flex-row mb-2"
                        key={index}
                      >
                        <Link to={`/ec-productdetail?id=${data.id}`}>
                          <div className="addSubSection d-flex align-items-center mb-0">
                            <img
                              className="addSubSection_img"
                              src={`http://localhost:3007${data.photo_path}/${data.main_photo}`}
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
                            {/* TODO:同步更新購物車 */}
                            <button
                              className="addSubSection_btn ms-2 py-2"
                              onClick={(e) => {
                                addCart(e, data.id);
                                // console.log(e.target.value);
                                // handleSuccess('已成功加入購物車');
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
                      addCart(e, productId);
                      // handleSuccess('已成功加入購物車');
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
                  <a className="anchor_a" href="#description">
                    <span>商品說明</span>
                  </a>
                  <a className="anchor_a" href="#toKnow">
                    <span>購買須知</span>
                  </a>
                  <a className="anchor_a" href="#howToUse">
                    <span>如何使用</span>
                  </a>
                  <a className="anchor_a" href="#comment">
                    <span>票券評價</span>
                  </a>
                </div>
                <div className="anchor1"></div>
              </div>
              <div className="spec2">
                <div className="description">
                  <h4 id="description">商品說明</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productData.description,
                    }}
                  />
                  <img src="" alt="" />
                </div>
                <div className="description">
                  <h4 id="toKnow">購買須知</h4>
                  <p>
                    • 因應疫情及政府規範，現場兌換商品請符合防疫等相關規定。
                    <br />
                    • 購買餐廳票券請提前電話預約並告知使用兌換券
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
                  <img src={Exchange} alt="" />

                  <div></div>
                </div>
                {/* <Streeview /> */}
                <Score perScore={perScore} productId={productId} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
