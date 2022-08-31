import main_search_bg from '../../images/main_search_bg.jpg'
import main_search_left_dog from '../../images/main_search_left_dog.png'
import main_search_right_dog from '../../images/main_search_right_dog.png'
import test_photo from '../../images/test.jpg'
import test_photo2 from '../../images/test2.jpg'
import { BsSearch } from "react-icons/bs";
import { IoLocationSharp, IoHeartOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import './_CommunityList.scss'

const CommunityList = () => {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <section className='comList_section_main_bg'>
        {/* <img className="comList_main_bg" src={main_search_bg} alt="main_bg" /> */}
          <div className='comList_main_search'>
            {/* <div className='comList_main_search_text'>最可愛的萌寵都在這</div> */}
            <h5>最可愛的萌寵都在這</h5>
            <div className="comList_main_search_group input-group p-2 ">
              <input type="text" className="comList_search_input form-control" placeholder="狗罐罐" />
              <button className="comList_search_btn btn btn-primary" type="button" id="button-addon2"><BsSearch /></button>
            </div>
            <img className='comList_main_search_left_dog' src={main_search_left_dog} alt="left_dog" />
            <img className='comList_main_search_right_dog' src={main_search_right_dog} alt="right_dog" />
          </div>
        </section>
        <section >
          <div className="d-flex justify-content-center align-items-center m-5">
              <h5>按此區域搜尋”柯基”關鍵字的結果如下，共26筆資料:</h5>
          </div>
          <div className="container d-flex flex-column align-items-center">
          {/* 1 */}
            <div className="comList_main_card row card border-primary mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={test_photo} className="comList_main_card_img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="comList_main_card_title d-flex justify-content-between">
                      <h5 className="card-title">帶毛小孩遊花蓮 二日遊</h5>
                      <IoHeartOutline />
                    </div>
                    <p className="comList_main_card_placeName_text card-text">忘憂亭</p>
                    <p className="card-text">透過OH DOG CAT 購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽! 另可加值星空BBQ了!</p>
                      <div className="comList_main_card_bottom_text card-text d-flex justify-content-between">
                        <p className="comList_main_card_locate_text card-text"><IoLocationSharp />花蓮</p>
                        <p className="comList_main_card_like_text card-text">1234 <BiLike /></p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="comList_main_card row card border-primary mb-3 ">
              <div className="row g-0">
                <div className="col-md-4">
                <img src={test_photo2} className="comList_main_card_img" alt="..." />
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                  <div className='comList_main_card_title d-flex justify-content-between'>
                      <h5 className="card-title">帶毛小孩遊花蓮 二日遊</h5>
                      <IoHeartOutline />
                    </div>
                    <p className="comList_main_card_placeName_text card-text">北回歸線</p>
                    <p className="card-text">透過OH DOG CAT 購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽! 另可加值星空BBQ了!</p>
                    <div className="comList_main_card_bottom_text card-text d-flex justify-content-between">
                        <p className="comList_main_card_locate_text card-text"><IoLocationSharp />花蓮</p>
                        <p className="comList_main_card_like_text card-text">2234 <BiLike /></p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="comList_main_card row card border-primary mb-3 ">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={test_photo} className="comList_main_card_img" alt="..." />
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                  <div className='comList_main_card_title d-flex justify-content-between'>
                      <h5 className="card-title">帶毛小孩遊花蓮 二日遊</h5>
                      <IoHeartOutline />
                    </div>
                    <p className="comList_main_card_placeName_text card-text">七星潭風景區</p>
                    <p className="card-text">透過OH DOG CAT 購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽! 另可加值星空BBQ了!</p>
                    <div className="comList_main_card_bottom_text card-text d-flex justify-content-between">
                        <p className="comList_main_card_locate_text card-text"><IoLocationSharp />花蓮</p>
                        <p className="comList_main_card_like_text card-text">3234 <BiLike /></p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="comList_main_card row card border-primary mb-3 ">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={test_photo2} className="comList_main_card_img" alt="..." />
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                  <div className='comList_main_card_title d-flex justify-content-between'>
                      <h5 className="card-title">帶毛小孩遊花蓮 二日遊</h5>
                      <IoHeartOutline />
                    </div>
                    <p className="comList_main_card_placeName_text card-text">瑞穗牧場</p>
                    <p className="card-text">透過OH DOG CAT 購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽! 另可加值星空BBQ了!</p>
                    <div className="comList_main_card_bottom_text card-text d-flex justify-content-between">
                        <p className="comList_main_card_locate_text card-text"><IoLocationSharp />花蓮</p>
                        <p className="comList_main_card_like_text card-text">4234 <BiLike /></p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>;
    </>
  );
}; 

export default CommunityList;