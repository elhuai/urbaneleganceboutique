import SearchBar from '../../components/SearchBar/SearchBar_community';
import CommunityListCard from '../../components/Community/CommunityListCard/CommunityListCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './_CommunityList.scss';

// TODO: 搜尋完成

const CommunityList = () => {
  const [postData, setPostData] = useState([]);

  //  搜尋用
  const [search, setSearch] = useState('');
  const [keywordSearch, setKeywordSearch] = useState('');

  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const newSearchWord = urlSearchParams.get('searchword');
  const newSearch = newSearchWord ? newSearchWord : '';

  // 關鍵字搜尋清單
  useEffect(() => {
    const fetchPostData = async () => {
      const result = await axios.get(
        `${API_URL}/community/searchList?search=${newSearch}`
      );
      // 取得後端來的資料
      console.log('setPostData', result.data);
      setPostData(result.data);
      // 存回 useState 狀態
    };
    fetchPostData();
  }, [search]);

  return (
    <>
      {/* <div style={{ minHeight: '100vh' }}> */}
      <div className="CommunityList">
        <div className="CommunityList_main">
          <SearchBar
            searchBar_title="想找什麼貼文呢"
            searchBar_placeholder="狗狗假日放電好去處"
            changePostList={setPostData}
            search={search}
            setSearch={setSearch}
            keywordSearch={keywordSearch}
            setKeywordSearch={setKeywordSearch}
            postData={postData}
          />

          <section>
            {/* <div className="d-flex justify-content-center align-items-center m-3">
              <h5 className="comList_search_result">
                搜尋 {search} 的結果如下，共{postData.length}筆資料:
              </h5>
            </div> */}
            <div className="d-flex flex-column align-items-center">
              <CommunityListCard postData={postData} search={search} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CommunityList;
