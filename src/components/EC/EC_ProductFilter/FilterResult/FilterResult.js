import './_FilterResult.scss';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { FaPaw } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { useUserInfo } from '../../../../hooks/useUserInfo';
import { handleLoginCard } from '../../../../utils/handler/handleInputCard';
import { API_URL } from '../../../../utils/config';
import axios from 'axios';

// 收藏成功跳出視窗
import { handleSuccess } from '../../../../utils/handler/handleStatusCard';

const FilterResult = (props) => {
  const { setOrder, productData } = props;
  // 收藏設定->登入與否
  const { user, setUser } = useUserInfo();
  const handleCollect = async (e, id) => {
    if (user.auth) {
      try {
        const result = await axios.post(
          `${API_URL}/collect/product/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        if (result.data.message === '已成功移除收藏') {
          console.log('成功');
          e.target.style['color'] = '#747474';
          handleSuccess('已成功移除收藏');
        } else if (result.data.message === '已成功收藏') {
          console.log('不成功');

          e.target.style['color'] = '#EF7A70';
          handleSuccess('已成功收藏');
        }
        // console.log(result.data);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      handleLoginCard({ isLogin: true }, setUser);
    }
  };

  return (
    <>
      {/* __排序 */}
      <div class="board product-result sort-board d-flex flex-row justify-content-end">
        <p classNameName="product-title me-3">排序 :</p>
        <span className="align-items-center">
          <span className="gap">|</span>
          {/* TODO */}
          <button
            className="sort-selected"
            value={1}
            onClick={(e) => {
              // console.log(e.target.value);
              setOrder(e.target.value);
            }}
          >
            價格：低到高
          </button>
        </span>
        <span>
          <span className="gap">|</span>
          <button
            className="sort-selected"
            value={2}
            onClick={(e) => {
              // console.log(e.target.value);
              setOrder(e.target.value);
            }}
          >
            價格：高到低
          </button>
        </span>
        <span>
          <span className="gap">|</span>
          <button
            className="sort-selected"
            value={3}
            onClick={(e) => {
              setOrder(e.target.value);
            }}
          >
            評價：高到低
          </button>
        </span>
        <span>
          <span className="gap">|</span>
          <button
            className="sort-selected"
            value={4}
            onClick={(e) => {
              // console.log(e.target.value);
              setOrder(e.target.value);
            }}
          >
            評價：低到高
          </button>
        </span>
      </div>
      {/* END排序 */}

      {/* 搜尋結果====================== */}
      {productData.map((data, index) => {
        let tags = productData[index].product_tag;
        const tag = tags.split(/[#,＃]/).filter((item) => item);
        return (
          <div className="product_main_card card border-primary" key={index}>
            <div className="row g-0">
              <div className="col-md-4 product_main_card_img--box">
                <div className="d-flex justify-content-right position-absolute">
                  <span className="text-white bg-primary small d-flex align-items-center justify-content-center px-2 py-1  product_main_card_label">
                    <i className="small">
                      <AiFillFire />
                    </i>
                    <span className="">精選</span>
                  </span>
                </div>
                <img
                  src={`http://localhost:3007${data.photo_path}/${data.main_photo}`}
                  className="product_main_card_img"
                  alt="..."
                />
                <div></div>
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <div className="product_main_card_title d-flex justify-content-between">
                    <h5 className="fw-bolder">{data.name}</h5>
                    {/* 收藏按鈕 */}
                    <div
                      className="product_main_card_collect"
                      onClick={(e) => handleCollect(e, data.id)}
                    >
                      <FaHeart />
                    </div>
                  </div>
                  {/* 標籤 */}
                  <div className="d-flex flex-row">
                    {tag.map((data, index) => {
                      if (index > 0) {
                        return (
                          <p
                            key={tags.index}
                            className="product_main_card_tag my-2 me-2"
                          >
                            {tag[index]}
                          </p>
                        );
                      }
                    })}
                  </div>
                  <p className="product_main_card_text my-2 fs-6">
                    {data.intro}
                  </p>
                  <div className="product_main_card_bottom_text d-flex justify-content-between align-items-center">
                    <p className="product_main_card_locate_text align-items-center d-flex fw-bolder">
                      <TiLocation />
                      {tag[0]}
                    </p>
                  </div>
                  {/* 評分／價格 */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-warning d-flex ms-1 align-items-center">
                      <i className="text-primary pe-1">
                        <FaPaw />
                      </i>

                      <div className="product-card-comment fs-6">
                        {Number(data.per_score.toFixed(1))}
                      </div>
                    </div>
                    <div className="product-card-price text-right d-flex align-items-end">
                      <p>NT${data.price}</p>
                    </div>
                  </div>
                  {/* END 評分／價格 */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FilterResult;
