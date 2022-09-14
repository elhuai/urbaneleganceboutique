import SearchBar from '../../components/SearchBar/SearchList_search';
import test_photo from '../../images/test.jpg';
import test_photo2 from '../../images/test2.jpg';
import { IoHeartOutline } from 'react-icons/io5';
import { TiLocation } from 'react-icons/ti';
import { BiLike } from 'react-icons/bi';

import './_CommunityList.scss';

const CommunityList = () => {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <SearchBar />
        <section>
          <div className="d-flex justify-content-center align-items-center m-3">
            <h5 className="comList_search_result">
              按此區域搜尋”柯基”關鍵字的結果如下，共26筆資料:
            </h5>
          </div>
          <div className="container d-flex flex-column align-items-center">
            {/* 1 */}
            <div className="comList_main_card row card border-primary mb-4 border border-2 ">
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img
                    src={test_photo}
                    className="comList_main_card_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-between">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="comList_main_card_title d-flex justify-content-between">
                      <h5 className="card-title mb-1">帶毛小孩遊花蓮 二日遊</h5>
                      <IoHeartOutline />
                    </div>
                    <div>
                      <p className="comList_main_card_placeName_text card-text mb-2">
                        忘憂亭
                      </p>
                    </div>
                    <p className="card-text">
                      透過OH DOG CAT
                      購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                      另可加值星空BBQ了!
                    </p>
                    <div className="comList_main_card_bottom_text card-text d-flex justify-content-between">
                      <p className="comList_main_card_locate_text card-text d-flex align-items-center">
                        <TiLocation />
                        花蓮
                      </p>
                      <p className="comList_main_card_like_text card-text d-flex align-items-center">
                        1234 <BiLike />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="comList_main_card row card border-primary mb-4 border border-2 ">
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img
                    src={test_photo2}
                    className="comList_main_card_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-between">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="comList_main_card_title d-flex justify-content-between">
                      <h5 className="card-title mb-1">帶毛小孩遊花蓮 二日遊</h5>
                      <IoHeartOutline />
                    </div>
                    <div>
                      <p className="comList_main_card_placeName_text card-text mb-2">
                        忘憂亭
                      </p>
                    </div>
                    <p className="card-text">
                      透過OH DOG CAT
                      購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                      另可加值星空BBQ了!
                    </p>
                    <div className="comList_main_card_bottom_text card-text d-flex justify-content-between">
                      <p className="comList_main_card_locate_text card-text d-flex align-items-center">
                        <TiLocation />
                        花蓮
                      </p>
                      <p className="comList_main_card_like_text card-text d-flex align-items-center">
                        2234 <BiLike />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="comList_main_card row card border-primary mb-4 border border-2 ">
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img
                    src={test_photo}
                    className="comList_main_card_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-between">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="comList_main_card_title d-flex justify-content-between">
                      <h5 className="card-title mb-1">帶毛小孩遊花蓮 二日遊</h5>
                      <IoHeartOutline />
                    </div>
                    <div>
                      <p className="comList_main_card_placeName_text card-text mb-2">
                        忘憂亭
                      </p>
                    </div>
                    <p className="card-text">
                      透過OH DOG CAT
                      購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                      另可加值星空BBQ了!
                    </p>
                    <div className="comList_main_card_bottom_text card-text d-flex justify-content-between">
                      <p className="comList_main_card_locate_text card-text d-flex align-items-center">
                        <TiLocation />
                        花蓮
                      </p>
                      <p className="comList_main_card_like_text card-text d-flex align-items-center">
                        3234 <BiLike />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="comList_main_card row card border-primary mb-4 border border-2 ">
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img
                    src={test_photo2}
                    className="comList_main_card_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-between">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="comList_main_card_title d-flex justify-content-between">
                      <h5 className="card-title mb-1">帶毛小孩遊花蓮 二日遊</h5>
                      <IoHeartOutline />
                    </div>
                    <div>
                      <p className="comList_main_card_placeName_text card-text mb-2">
                        忘憂亭
                      </p>
                    </div>
                    <p className="card-text">
                      透過OH DOG CAT
                      購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                      另可加值星空BBQ了!
                    </p>
                    <div className="comList_main_card_bottom_text card-text d-flex justify-content-between">
                      <p className="comList_main_card_locate_text card-text d-flex align-items-center">
                        <TiLocation />
                        花蓮
                      </p>
                      <p className="comList_main_card_like_text card-text d-flex align-items-center">
                        4234 <BiLike />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommunityList;
