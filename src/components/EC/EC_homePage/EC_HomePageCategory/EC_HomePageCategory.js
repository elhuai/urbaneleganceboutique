import './_EC_HomePageCategory.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function EcHomePageCategory() {
  const categoryTitle = [
    {
      name: '貓飼料',
      img: 'https://img.my-best.tw/press_component/item_part_images/15ad67e861b202f7e958f65dd704de1b.png?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip',
    },
    {
      name: '狗飼料',
      img: 'https://www.costco.com.tw/medias/sys_master/images/hb6/h9c/68097114832926.jpg',
    },
    {
      name: '貓鮮食',
      img: 'https://intl.rakuten-static.com/b/tw/assets/channel/know_how/img/living-canned-cat/11c4e682fd2c600ce3781e.jpg',
    },
    {
      name: '狗罐頭',
      img: 'https://img.shopping.friday.tw/images/product/67/2025234/2025234_3_1.jpeg?983682',
    },
    {
      name: '潔牙骨',
      img: 'https://img.my-best.tw/press_component/item_part_images/3c5443c91536ffa2e715b54aaf114278.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip',
    },
    {
      name: '骨骼保養品',
      img: 'https://img8.shop2000.com.tw/101993/p31/product_30913066_1.jpg',
    },
  ];
  return (
    <div className="ec_category">
      <h4 className="ec_category_main_title my-2 flex-fixed">熱門類別</h4>
      <div className="ec_category_card d-flex flex-row justify-content-between">
        {categoryTitle.map((data, index) => {
          return (
            <Link to="/" className="ec_category_card_items">
              <div className="d-flex flex-column align-items-center">
                <img src={data.img} alt="" className="ec_category_img" />
                <p className="ec_category_name my-1">{data.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
