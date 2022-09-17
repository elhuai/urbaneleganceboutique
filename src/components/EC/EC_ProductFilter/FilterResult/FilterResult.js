import './_FilterResult.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { IoHeartOutline } from 'react-icons/io5';

import { TiLocation } from 'react-icons/ti';
import { FaPaw } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import FilterListToggle from './FilterListToggle/FilterListToggle';

const FilterResult = () => {
  return (
    <>
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
              <p className="product_main_card_placeName_text my-2">北回歸線</p>
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
    </>
  );
};

export default FilterResult;
