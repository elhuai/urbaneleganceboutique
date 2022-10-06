// 有裝套件 yarn add antd
import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar_search';
import FilterActive from '../../../components/EC/EC_ProductFilter/FilterActive';
import FilterList from '../../../components/EC/EC_ProductFilter/FilterList';
import FilterRWDCondition from '../../../components/EC/EC_ProductFilter/FilterRWD_condition';
import FilterRWDSort from '../../../components/EC/EC_ProductFilter/FilterRWD_sort';
import FilterResult from '../../../components/EC/EC_ProductFilter/FilterResult';
import FilterPages from './../../../components/EC/EC_ProductFilter/FilterPages/FilterPages';

import './_EC_productFilter.scss';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function EcProductFilter() {
  const [error, setError] = useState(null);

  // 搜尋==========
  const [search, setSearch] = useState('');
  const [titleSearch, setTitleSearch] = useState('');
  // 頁碼===============
  const [productData, setProductData] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [page, setPage] = useState(1);

  // 篩選選項=======
  const [typeId, setTypeId] = useState('');
  const [order, setOrder] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [tag, setTag] = useState([]);

  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const newTypeId = urlSearchParams.get('typeId');
  const newSearchWord = urlSearchParams.get('searchword');
  const currentType = newTypeId ? newTypeId : 2;
  const newSearch = newSearchWord ? newSearchWord : '';
  // 商品list------------------
  useEffect(() => {
    const fetchProductData = async (index) => {
      const response = await axios.get(
        // `${API_URL}/filter/products?typeId=${newTypeId}&minPrice=${minPrice}&maxPrice=${maxPrice}&search=${newSearchWord}&order=${order}&page=${page}&tag=${tag}`
        `${API_URL}/filter/products?typeId=${currentType}&minPrice=${minPrice}&maxPrice=${maxPrice}&search=${newSearch}&order=${order}&page=${page}&tag=${tag}`
      );

      // console.log(response.data);
      setProductData(response.data.data);
      setLastPage(response.data.pagesDetail.lastPage);
    };
    fetchProductData();
  }, [minPrice, maxPrice, order, search, page, tag, search, typeId]);

  useEffect(() => {
    console.log('max', maxPrice);
  }, [maxPrice]);

  return (
    <>
      <div className="ecProductFilter">
        {/* Search Bar */}
        <SearchBar
          searchBar_title="想要去哪裡玩耍呢"
          searchBar_placeholder="想去你心裡玩耍"
          search={search}
          setSearch={setSearch}
          titleSearch={titleSearch}
          setTitleSearch={setTitleSearch}
          setProductData={setProductData}
        />
        {/*篩選區域 */}
        <div className="ecProductFilter_filter_section d-flex">
          {/* <div className=" product-filterList"> */}
          {/* 左邊篩選特價 */}
          <div className="product-filter-left flex-1">
            <FilterActive />
            <FilterList
              setProductData={setProductData}
              setTag={setTag}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              typeId={currentType}
              setPage={setPage}
            />
          </div>
          {/* </div> */}
          {/*篩選結果 */}
          <div className="ecProductFilter_result flex-2">
            <div className="ecProductFilter_list_rwd">
              <FilterRWDCondition
                setProductData={setProductData}
                setTag={setTag}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                typeId={currentType}
                setPage={setPage}
                placement={'bottom'}
                name={'bottom'}
              />
              <FilterRWDSort
                setPage={setPage}
                setOrder={setOrder}
                placement={'bottom'}
                name={'bottom'}
              />
            </div>
            <FilterResult
              productData={productData}
              setOrder={setOrder}
              lastPage={lastPage}
              page={page}
              setPage={setPage}
              error={error}
              typeId={currentType}
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
