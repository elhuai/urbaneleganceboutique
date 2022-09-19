import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar_search';
import FilterActive from '../../../components/EC/EC_ProductFilter/FilterActive';
import FilterList from '../../../components/EC/EC_ProductFilter/FilterList';
import FilterResult from '../../../components/EC/EC_ProductFilter/FilterResult';
import FilterPages from './../../../components/EC/EC_ProductFilter/FilterPages/FilterPages';

import './_EC_productFilter.scss';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { useState, useEffect } from 'react';

function EcProductFilter() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);
  const [lastPage, setLastPage] = useState(1);

  // =======
  const [typeId, setTypeId] = useState('');
  const [order, setOrder] = useState('');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [tag, setTag] = useState([]);
  // =======

  // 商品list------------------
  useEffect(() => {
    const fetchProductData = async (index) => {
      const response = await axios.get(
        `${API_URL}/filter/products?typeId=${typeId}&maxPrice=${maxPrice}&minPrice=${minPrice}&search=${search}&order=${order}&page=${page}&tag=${tag}`
      );
      console.log(response.data);
      setProductData(response.data.data);
      setLastPage(response.data.pagesDetail.lastPage);
    };
    fetchProductData();
  }, [minPrice, maxPrice, order, search, page, user, tag]);

  useEffect(() => {
    console.log('=== tag ===', tag);
  }, [tag]);

  // 設定頁碼

  return (
    <>
      <div className="ecProductFilter">
        {/* Search Bar */}
        <SearchBar
          searchBar_title="想要去哪裡玩耍呢"
          searchBar_placeholder="想去你心裡玩耍"
        />
        {/*篩選區域 */}
        <div className="ecProductFilter_filter_section d-flex">
          {/* <div className=" product-filterList"> */}
          {/* 左邊篩選特價 */}
          <div className="product-filter-left flex-1">
            <FilterActive />
            <FilterList setProductData={setProductData} setTag={setTag} />
          </div>
          {/* </div> */}
          {/*篩選結果 */}
          <div className="ecProductFilter_result flex-2">
            <FilterResult
              productData={productData}
              setOrder={setOrder}
              lastPage={lastPage}
              page={page}
              setPage={setPage}
              error={error}
            />
            <FilterPages
              lastPage={lastPage}
              page={page}
              setPage={setPage}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EcProductFilter;
