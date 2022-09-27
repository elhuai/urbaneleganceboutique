import SearchBar from '../../components/SearchBar/SearchBar_community';
import CommunityListCard from '../../components/Community/CommunityListCard/CommunityListCard';
// import test_photo from '../../images/test.jpg';
// import test_photo2 from '../../images/test2.jpg';
// import { IoHeartOutline } from 'react-icons/io5';
// import { TiLocation } from 'react-icons/ti';
// import { BiLike } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './_CommunityList.scss';

// TODO: 搜尋完成
// TODO: CommunityListCard 圖片問題調整
// TODO: 視窗縮放的狗狗位置及標題顯示 (有時間再改)

const CommunityList = () => {
  const [postAll, setPostAll] = useState([]);

  //  搜尋用
  const [search, setSearch] = useState('');
  const [keywordSearch, setKeywordSearch] = useState('');

  // 關鍵字搜尋清單
  useEffect(() => {
    const fetchPostAll = async () => {
      const result = await axios.get(
        `${API_URL}/community/searchList?search=${search}`
      );
      // 取得後端來的資料
      console.log(result.data);
      setPostAll(result.data);
      // 存回 useState 狀態
    };
    fetchPostAll();
  }, [search]);

  // 抓取清單列表
  // useEffect(() => {
  //   const fetchPostAll = async () => {
  //     const result = await axios.get(`${API_URL}/community/post`);
  //     // 取得後端來的資料
  //     console.log(result.data);
  //     setPostAll(result.data);
  //     // 存回 useState 狀態
  //   };
  //   fetchPostAll();
  // }, []);

  return (
    <>
      {/* <div style={{ minHeight: '100vh' }}> */}
      <div className="CommunityList">
        <SearchBar
          searchBar_title="想找什麼貼文呢"
          searchBar_placeholder="狗狗假日放電好去處"
          changePostList={setPostAll}
          search={search}
          setSearch={setSearch}
          keywordSearch={keywordSearch}
          setKeywordSearch={setKeywordSearch}
        />
        <section>
          <div className="d-flex justify-content-center align-items-center m-3">
            <h5 className="comList_search_result">
              搜尋 {search} 關鍵字的結果如下，共{postAll.length}筆資料:
            </h5>
          </div>
          <div className="container d-flex flex-column align-items-center">
            <CommunityListCard post={postAll} />
          </div>
        </section>
      </div>
    </>
  );
};

export default CommunityList;
