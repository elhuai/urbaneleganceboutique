import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import Product_Detail1 from '../../../images/Product_Detail1.png';
import Product_Detail2 from '../../../images/Product_Detail2.png';
import Product_Detail3 from '../../../images/Product_Detail3.png';
import Product_Detail4 from '../../../images/Product_Detail4.png';
import Product_Detail5 from '../../../images/Product_Detail5.png';
import Product_Detail7 from '../../../images/Product_Detail7.png';
import Product_Detail8 from '../../../images/Product_Detail8.png';
import Guess_U_Like1 from '../../../images/Guess_U_Like1.png';
import Guess_U_Like2 from '../../../images/Guess_U_Like2.png';

import './_ProductDetail.scss';

const ProductDetail = () => {
  return (
    <>
      <div className="imageColumn">
        {/*商品首圖 */}
        <div className="mainImage">
          <img src={Product_Detail1} alt="Paris" />
        </div>
        <div className="cardRow">
        {/*商品細節圖 */}
          <div>
            <img src={Product_Detail2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
