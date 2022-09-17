import './_FilterResult.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

import { IoHeartOutline } from 'react-icons/io5';
import { TiLocation } from 'react-icons/ti';
import { FaPaw } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';

const FilterResult = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async (index) => {
      const result = await axios.get(`${API_URL}/filter/products`);
      console.log(result.data);
      // for (let index = 0; index < data.length; index++) {
      //   const tags = data[index].tags;

      // }
      setProductData(result.data);
      // const data = result.data;
      // arrStr[index].setState(data);
    };
    fetchProductData();
  }, []);
  return (
    <>
      {/* __排序 */}
      <div class="board product-result sort-board d-flex flex-row">
        <p classNameName="product-title me-3">排序 :</p>
        <span className="align-items-center">
          <span className="gap">|</span>{' '}
          <a className="sort-selected">價格：高到低</a>
        </span>
        <span>
          <span className="gap">|</span>{' '}
          <a className="sort-selected">
            <i className="fa fa-usd"></i>
            價格：低到高
          </a>
        </span>
        <span>
          <span className="gap">|</span>{' '}
          <a className="sort-selected">熱門程度</a>
        </span>
        <span>
          <span className="gap">|</span>{' '}
          <a className="sort-selected">用戶評價</a>
        </span>
      </div>
      {/* END排序 */}
      {/* ==================搜尋結果====================== */}
      {productData.map((data, index) => {
        return (
          <div
            className="product_main_card card border-primary "
            key={'filterCard' + index}
          >
            <div className="row g-0">
              <div className="d-flex justify-content-right position-absolute">
                <div className="label-sale">
                  <span className="text-white bg-primary small d-flex align-items-center justify-content-center px-2 py-1  product_main_card_label">
                    <i className="small">
                      <AiFillFire />
                    </i>
                    <span className="">精選</span>
                  </span>
                </div>
              </div>
              <div className="col-md-4 product_main_card_img--box">
                <img
                  src={`http://localhost:3007${data.photo_path}/${data.main_photo}`}
                  className="product_main_card_img"
                  alt="..."
                />
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <div className="product_main_card_title d-flex justify-content-between">
                    <h5 className="card-title">{data.name}</h5>
                    <IoHeartOutline />
                  </div>
                  <p className="product_main_card_placeName_text my-2">
                    北回歸線
                  </p>
                  <p className="card-text my-2">{data.intro}</p>
                  <div className="product_main_card_bottom_text d-flex justify-content-between align-items-center">
                    <p className="product_main_card_locate_text align-items-center d-flex">
                      <TiLocation />
                      花蓮
                    </p>
                  </div>
                  {/* 評分／價格 */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-warning d-flex">
                      <i className="text-primary pe-2">
                        <FaPaw />
                      </i>

                      <div className="product-card-comment">
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
