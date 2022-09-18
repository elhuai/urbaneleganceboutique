import './_FilterResult.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { Link } from 'react-router-dom';

import { IoHeartOutline } from 'react-icons/io5';
import { TiLocation } from 'react-icons/ti';
import { FaPaw } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';

const FilterResult = () => {
  const [error, setError] = useState(null);
  // mf3
  const [productData, setProductData] = useState([]);
  // 總共有 lastPage 這麼多頁
  const [lastPage, setLastPage] = useState(1);
  // 目前在第幾頁
  const [page, setPage] = useState(1);
  // const { stockId } = useParams();
  const [data, setData] = useState([]);
  const [sortId ,setSortId] =useState("id")

  // 冪-----------------------

  // useEffect(() => {
  //   const sort = async (index) => {
  //     const result = await axios.get(`${API_URL}/filter/products`);
  //     console.log(result.data);
  //     const resultALL = result.data.result;
  //     let newData = resultALL.sort(function (a, b) {
  //       return a.price < b.price ? 1 : -1;
  //     });
  //     console.log('====================================');
  //     console.log('NewData',newData);
  //     console.log('====================================');
  //     setProductData(newData);
  //   };
  //   sort();
  // }, []);
  // ---------------------------------

  // 商品list------------------
  useEffect(() => {
    const fetchProductData = async (index) => {
      const result = await axios.get(`${API_URL}/filter/products?page=${page}`);
      console.log(result.data);
      setProductData(result.data.data);
    };
    fetchProductData();
  }, []);

  // 頁碼------------------
  useEffect(() => {
    let getPagesDetail = async () => {
      // TODO
      let response = await axios.get(`${API_URL}/filter/products?page=${page}`);
      setData(response.data.data);
      setLastPage(response.data.pagesDetail.lastPage);
      setProductData(response.data.data);
    };
    getPagesDetail();
  }, [page]);
  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= lastPage; i++) {
      pages.push(
        <button
          style={{
            fontSize: '1rem',

            backgroundColor: page === i ? '#ffc200' : '',
            borderColor: page === i ? '#00d1b2' : '#dbdbdb',
            color: page === i ? '#fff' : '#363636',
            borderRadius: page === i ? '5px' : '5px',
            width: '35px',
            height: '35px',
            //   borderRadius: '3px',
            //   textAlign: '10px',
            outline: 'none',
          }}
          key={i}
          onClick={(e) => {
            setPage(i);
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  // ----------------------

    // Sort------------------
    useEffect(() => {
      // TODO
      let sortId=price ASC
      let getSort = async () => {
        let response = await axios.get(`${API_URL}/filter/products?sortId=${sortid}`);
        setSortId(response.data.data);
      };
      getPagesDetail();
    }, [sortId]);
    const
      return getSort;
    };
    // ----------------------

  return (
    <>
      {/* __排序 */}
      <div class="board product-result sort-board d-flex flex-row justify-content-end">
        <p classNameName="product-title me-3">排序 :</p>
        <span className="align-items-center">
          <span className="gap">|</span>
          {/* TODO */}
          <Link to={`/ec-productfilter?`}>
            <button className="sort-selected" onClick={()=>{getPages()}}>價格：高到低</button>
          </Link>
        </span>
        <span>
          <span className="gap">|</span>
          <Link to={`/ec-productfilter?sortId=price DESC`}>
            <button className="sort-selected">價格：低到高</button>
          </Link>
        </span>
        <span>
          <span className="gap">|</span>
          <button className="sort-selected">評價高低</button>
        </span>
      </div>
      {/* END排序 */}

      {/* 搜尋結果====================== */}
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
            <div></div>
          </div>
        );
      })}
      <div>
        {error && <div>{error}</div>}
        {/* 放一下頁碼 */}
        <div className="product_filter_pages d-flex justify-content-center">
          <div>{getPages()}</div>
        </div>
        {/* <p>目前在第 {page} 頁</p> */}
      </div>
    </>
  );
};

export default FilterResult;
