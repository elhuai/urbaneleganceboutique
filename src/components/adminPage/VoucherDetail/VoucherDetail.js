import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import htmlParser from 'html-react-parser';

import './_voucherDetail.scss';

const VoucherDetail = ({ data, isCancel, isValid }) => {
  console.log('isvalid', isValid);

  let photoArr = [...data.photos];
  photoArr.unshift(data.main_photo);
  if (!photoArr[1]) photoArr.pop();
  console.log(data);
  const BASE_URL = process.env.REACT_APP_BASE_API_URL + data.photo_path;
  return (
    <div className="html_card--cos">
      <div className="voucher_detail">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="detail_swiper"
        >
          {photoArr.map((item, i) => {
            return (
              <SwiperSlide key={item} data-hash="1">
                <div className="obj-fit">
                  <img src={`${BASE_URL}/${item}`} alt={`產品圖${i + 1}`} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="voucher_detail_title pt-4 d-flex gap-5">
          <h3 className="text-start fw-bold flex-fill">{data.product_name}</h3>
          <div className="flex-shrink-0 d-lg-flex d-none gap-2 justify-content-end">
            <div className="d-flex align-items-end">
              <button>前往商品頁面</button>
            </div>
            {isValid ? (
              <div className="d-flex align-items-end">
                <button>兌換</button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <hr />
        <div className="voucher_detail_description text-start">
          <h5>票券敘述：</h5>
          {htmlParser(data.description)}
        </div>
        <div className="d-lg-none d-flex gap-2 justify-content-center mt-5">
          <div className="d-flex align-items-end">
            <button>前往商品頁面</button>
          </div>
          {isValid ? (
            <div className="d-flex align-items-end">
              <button>兌換</button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="d-flex gap-2 justify-content-center mt-5">
          <div className="d-flex align-items-end">
            <button className="close" onClick={isCancel}>
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetail;
