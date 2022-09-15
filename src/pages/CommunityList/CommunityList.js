import SearchBar from '../../components/SearchBar/SearchBar_search';
import CommunityListCard from '../../components/Community/CommunityListCard/CommunityListCard';
// import test_photo from '../../images/test.jpg';
// import test_photo2 from '../../images/test2.jpg';
// import { IoHeartOutline } from 'react-icons/io5';
// import { TiLocation } from 'react-icons/ti';
// import { BiLike } from 'react-icons/bi';

import './_CommunityList.scss';

const CommunityList = () => {
  return (
    <>
      {/* <div style={{ minHeight: '100vh' }}> */}
      <div className='CommunityList'>
      <SearchBar
          searchBar_title="想要什麼商品呢"
          searchBar_placeholder="好吃的狗罐罐"
        />
        <section>
          <div className="d-flex justify-content-center align-items-center m-3">
            <h5 className="comList_search_result">
              按此區域搜尋”柯基”關鍵字的結果如下，共26筆資料:
            </h5>
          </div>
          <div className="container d-flex flex-column align-items-center">
            <CommunityListCard />
          </div>
        </section>
      </div>
    </>
  );
};

export default CommunityList;
