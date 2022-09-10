import './_Product_search_filter.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { IoHeartOutline } from 'react-icons/io5';

import { TiLocation } from 'react-icons/ti';
import { FaPaw } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const SearchFilter = () => {
  return (
    <>
      <div className=" product-filterList justify-content-between col d-flex">
        {/* 左邊篩選特價 */}
        <section className="product-filter-left">
          {/* __超值區域 */}
          <div className="product-filter-group row">
            <p className="product-category-title mb-2">超值活動</p>
            <label for="limitedTime07" className="product-label-active">
              ︱超值限定．限時打七折
            </label>
            <label for="happySummer06" className="product-label-active">
              ︱歡慶暑假！住宿六折起
            </label>
            <label for="father88" className="product-label-active">
              ︱寵愛爸爸全館八八折
            </label>
          </div>
          {/*END __超值區域 */}

          {/*__地區篩選 */}
          <fieldset className="filter-group pf-checkboxes">
            <div className="product-filter-category my-3 align-items-center justify-content-between">
              <p className="product-category-title">地區</p>
              <button className="product-category-morebtn">
                <IoIosArrowDown />
              </button>
            </div>

            <div className="pf-checkbox">
              <input
                type="checkbox"
                value="TP"
                className="product-check-items me-2"
              />
              <label>台北市</label>
            </div>
            <div className="pf-checkbox">
              <input
                type="checkbox"
                value="NTP"
                className="product-check-items me-2"
              />
              <label>新北市</label>
            </div>
            <div className="pf-checkbox">
              <input
                type="checkbox"
                value="TN"
                className="product-check-items me-2"
              />
              <label>台南市</label>
            </div>
            <div className="pf-checkbox">
              <input
                type="checkbox"
                value="K"
                className="product-check-items me-2"
              />
              <label>高雄市</label>
            </div>
          </fieldset>
          {/*END __地區篩選 */}
        </section>

        {/* ---------------------------------------- */}

        <section className="product-filter-right d-flex flex-column w-100 ">
          <section className="product-filter-right-top">
            <div className="d-flex flex-column">
              {/* END篩選結果 */}
              <div className="board product-filter-result mb-0 d-flex flex-row">
                <p classNameName="product-result-title">
                  你已經篩選
                  {/* <span className="text-primary">幾樣幾樣</span> */}
                </p>
                <span className="">
                  <span className="chip ms-2">
                    <a>景點門票</a> <span className="delete-chip">✕</span>
                  </span>
                  <span className="chip">
                    <a>主題樂園</a> <span className="delete-chip">✕</span>
                  </span>
                  <span className="chip">
                    <a>博物館 &amp; 美術館</a>{' '}
                    <span className="delete-chip">✕</span>
                  </span>
                  <span className="chip">
                    <a>水族館 &amp; 動物園</a>{' '}
                    <span className="delete-chip">✕</span>
                  </span>
                  <span className="chip">
                    <a>歷史景點</a> <span className="delete-chip">✕</span>
                  </span>{' '}
                  <span className="chip clearall">
                    <a>清除所有</a>
                  </span>
                </span>
              </div>
            </div>
            {/* END篩選結果 */}
            <hr />
            {/* __排序 */}
            <div class="board product-result sort-board d-flex flex-row">
              <p classNameName="product-title me-3">排序 :</p>
              <span className="align-items-center">
                <span className="gap">|</span>{' '}
                <a className="sort-selected">價格：高到低</a>
              </span>
              <span>
                <span className="gap">|</span>{' '}
                <a className="sort-selected">
                  <i className="fa fa-usd"></i>
                  價格：低到高
                </a>
              </span>
              <span>
                <span className="gap">|</span>{' '}
                <a className="sort-selected">熱門程度</a>
              </span>
              <span>
                <span className="gap">|</span>{' '}
                <a className="sort-selected">用戶評價</a>
              </span>
            </div>
          </section>
          {/* END排序 */}

          {/* RRRRRWD Filter */}
          <div className="product_filter_rwd_filter ">
            <form className="d-flex flex-row ">
              <div className="form-group col-md-3 col-xs-6 ">
                <select
                  data-filter="make"
                  className="product_filter_rwd_filter-make filter form-control"
                >
                  <option value="">地區</option>
                  <option value="">Show All</option>
                </select>
              </div>
              <div className="form-group col-md-3 col-xs-6">
                <select
                  data-filter="model"
                  className="product_filter_rwd_filter-model filter form-control"
                >
                  <option value="">類別</option>
                  <option value="">Show All</option>
                </select>
              </div>
              <div className="form-group col-md-3 col-xs-6">
                <select
                  data-filter="type"
                  className="product_filter_rwd_filter-type filter form-control"
                >
                  <option value="">篩選</option>
                  <option value="">Show All</option>
                </select>
              </div>
              <div className="form-group col-md-3 col-xs-6">
                <select
                  data-filter="price"
                  className="product_filter_rwd_filter-price filter form-control"
                >
                  <option value="">排序</option>
                  <option value="">Show All</option>
                </select>
              </div>
            </form>
          </div>
          {/* END_RWD Filter  */}
          {/* ==================搜尋結果====================== */}
          <div className="product_main_card card border-primary ">
            <div className="row g-0">
              <div className="d-flex justify-content-right position-absolute">
                <div className="label-sale">
                  <span className="text-white bg-primary small d-flex align-items-center justify-content-center px-2 py-1  product_main_card_label">
                    <i className="small">
                      <AiFillFire />
                    </i>
                    <span className="">精選</span>
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOVqDbnPTm8T1xy1kJjWC_PYftmc6ckbC6Q&usqp=CAU"
                  className="product_main_card_img"
                  alt="..."
                />
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <div className="product_main_card_title d-flex justify-content-between">
                    <h5 className="card-title">帶毛小孩遊花蓮 二日遊</h5>
                    <IoHeartOutline />
                  </div>
                  <p className="product_main_card_placeName_text my-2">
                    北回歸線
                  </p>
                  <p className="card-text my-2">
                    透過OH DOG CAT
                    購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                    另可加值星空BBQ了!
                  </p>
                  <div className="product_main_card_bottom_text d-flex justify-content-between align-items-center">
                    <p className="product_main_card_locate_text align-items-center d-flex">
                      <TiLocation />
                      花蓮
                    </p>
                  </div>
                  {/* 評分／價格 */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-warning d-flex">
                      <i className="text-primary pe-2">
                        <FaPaw />
                      </i>
                      <i className="text-primary pe-2">
                        <FaPaw />
                      </i>
                      <i className="text-primary pe-2">
                        <FaPaw />
                      </i>
                      <i className="text-primary pe-2">
                        <FaPaw />
                      </i>
                      <i className="text-primary pe-2">
                        <FaPaw />
                      </i>
                      <div className="product-card-comment">(12)</div>
                    </div>
                    <div className="product-card-price text-right d-flex align-items-end">
                      <p>$129,99</p>
                    </div>
                  </div>
                  {/* END 評分／價格 */}
                </div>
              </div>
            </div>
          </div>
          {/* ==================搜尋結果====================== */}
          {/* 頁碼 */}
          <div className="product_filter_pages d-flex justify-content-center">
            <button>
              <HiChevronLeft />
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>
              <HiChevronRight />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchFilter;
