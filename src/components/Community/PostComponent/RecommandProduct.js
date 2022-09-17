import React from 'react';
import { Link } from 'react-router-dom';
import dogIcon from '../../../images/travel_dog_paws.svg';
import './RecommandProduct.scss';

function Recommand_product() {
  return (
    <div className="recommand_product_list">
      <p>推薦行程/商品</p> {/* 關聯資料庫 */}
      <div className="d-flex justify-content-between">
        <Link to="/">
          <div className="rec_product_card">
            <div className="product_photo">
              <img alt="" src="https://picsum.photos/200/300?random1"></img>
            </div>
            <div className="product_title d-flex aligin-items-center ">
              <p>澎湖自由行 | 吉貝島來回船票機車 住宿 | 入住新港景亞泰民宿</p>
            </div>
            <div className="rec_product_state d-flex justify-content-between align-items-end ">
              <div className="rec_product_rank mb-1 ms-1">
                <img className="rank_paws mb-1 me-2" alt="" src={dogIcon}></img>
                5.0
              </div>
              <div className="rec_product_price">NT$2020</div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="rec_product_card">
            <div className="product_photo">
              <img alt="" src="https://picsum.photos/200/300?random2"></img>
            </div>
            <div className="product_title d-flex aligin-items-center ">
              <p>澎湖自由行 | 吉貝島來回船票機車 住宿 | 入住新港景亞泰民宿</p>
            </div>
            <div className="rec_product_state d-flex justify-content-between align-items-end ">
              <div className="rec_product_rank mb-1 ms-1">
                <img className="rank_paws mb-1 me-2" alt="" src={dogIcon}></img>
                5.0
              </div>
              <div className="rec_product_price">NT$1020</div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="rec_product_card">
            <div className="product_photo">
              <img alt="" src="https://picsum.photos/200/300?random3"></img>
            </div>
            <div className="product_title d-flex aligin-items-center ">
              <p>澎湖自由行 | 吉貝島來回船票機車 住宿 | 入住新港景亞泰民宿</p>
            </div>
            <div className="rec_product_state d-flex justify-content-between align-items-end ">
              <div className="rec_product_rank mb-1 ms-1">
                <img className="rank_paws mb-1 me-2" alt="" src={dogIcon}></img>
                5.0
              </div>
              <div className="rec_product_price">NT$220</div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="rec_product_card">
            <div className="product_photo">
              <img alt="" src="https://picsum.photos/200/300?random6"></img>
            </div>
            <div className="product_title d-flex aligin-items-center ">
              <p>澎湖自由行 | 吉貝島來回船票機車 住宿 | 入住新港景亞泰民宿</p>
            </div>
            <div className="rec_product_state d-flex justify-content-between align-items-end ">
              <div className="rec_product_rank mb-1 ms-1">
                <img className="rank_paws mb-1 me-2" alt="" src={dogIcon}></img>
                5.0
              </div>
              <div className="rec_product_price">NT$100</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Recommand_product;
