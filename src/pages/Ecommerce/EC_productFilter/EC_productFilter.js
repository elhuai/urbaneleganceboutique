import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar_search';
import FilterActive from '../../../components/EC/EC_ProductFilter/FilterActive';
import FilterList from '../../../components/EC/EC_ProductFilter/FilterList';
import FilterPages from '../../../components/EC/EC_ProductFilter/FilterPages';
import FilterResult from '../../../components/EC/EC_ProductFilter/FilterResult';
import './_EC_productFilter.scss';

function ecProductFilter() {
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
            <FilterList />
          </div>
          {/* </div> */}
          {/*篩選結果 */}
          <div className="ecProductFilter_result flex-2">
            <FilterResult />
            <FilterPages />
          </div>
        </div>
      </div>
    </>
  );
}

export default ecProductFilter;
