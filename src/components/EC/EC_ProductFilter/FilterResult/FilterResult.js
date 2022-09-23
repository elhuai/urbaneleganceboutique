import './_FilterResult.scss';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { FaPaw } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';

const FilterResult = (props) => {
  const { setOrder, productData } = props;

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
          <div className="product_main_card card border-primary " key={index}>
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
                    <FaHeart />
                  </div>
                  {/* 標籤 */}
                  <div className="d-flex flex-row">
                    {tag.map((data, index) => {
                      if (index > 0) {
                        return (
                          <p
                            key={tags.index}
                            className="product_main_card_placeName_text my-2 me-2"
                          >
                            {tag[index]}
                          </p>
                        );
                      }
                    })}
                  </div>
                  <p className="card-text my-2">{data.intro}</p>
                  <div className="product_main_card_bottom_text d-flex justify-content-between align-items-center">
                    <p className="product_main_card_locate_text align-items-center d-flex">
                      <TiLocation />
                      {tag[0]}
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
            <div></div>
          </div>
        );
      })}
    </>
  );
};

export default FilterResult;
