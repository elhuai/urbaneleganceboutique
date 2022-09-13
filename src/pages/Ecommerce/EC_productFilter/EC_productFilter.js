import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar_search';
import SearchListSearchFilter from '../../../components/EC/EC_ProductFilter/Product_search_filter';

function SearchList() {
  return (
    <>
      <SearchBar
        searchBar_title="想要去哪裡玩耍呢"
        searchBar_placeholder="想去你心裡玩耍"
      />
      <SearchListSearchFilter />
    </>
  );
}

export default SearchList;
