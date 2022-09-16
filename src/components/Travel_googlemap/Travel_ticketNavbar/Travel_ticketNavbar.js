import React from 'react';
import './Travel_ticketNavbar.scss';
import { IoStorefrontOutline } from 'react-icons/io5';

const travelticket = [
  {
    id: 1,
    name: '高雄一日遊一天天天天天天',
    start_time: 20220823,
    end_time: 20220830,
    img: 'https://picsum.photos/200/300?random2',
  },
  {
    id: 2,
    name: '台中二日遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random5',
  },
  {
    id: 3,
    name: '基隆一日遊',
    start_time: 20220823,
    end_time: 20220830,
    img: 'https://picsum.photos/200/300?random21',
  },
  {
    id: 4,
    name: '台北二日遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random73',
  },
  {
    id: 5,
    name: '花東一日遊',
    start_time: 20220823,
    end_time: 20220830,
    img: 'https://picsum.photos/200/300?random40',
  },
  {
    id: 2,
    name: '台中二日遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random7',
  },
];

const Travel_ticketNavbar = () => {
  return (
    <>
      <div className="Travel_ticketNavbar_main_card row card border-primary ">
        <div className="row g-1">
          <div className="col-md-3 me-3">
            <img
              src="https://picsum.photos/200/300?random2"
              className="Travel_ticketNavbar_card_img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className=" ">
                <h5 className="Travel_ticketNavbar_card-title">
                  帶毛小孩遊花蓮 二日遊
                </h5>
              </div>
              <div className="Travel_ticketNavbar_cardText">
                <p className="Travel_ticketNavbar_text">
                  透過OH DOG CAT
                  購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                  另可加值星空BBQ了! 透過OH DOG CAT
                  購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                  另可加值星空BBQ了! 透過OH DOG CAT
                  購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                  另可加值星空BBQ了! 透過OH DOG CAT
                  購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                  另可加值星空BBQ了! 透過OH DOG CAT
                  購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!
                  另可加值星空BBQ了!
                </p>
              </div>
              <div className="d-flex bd-highlight ">
                <div className="Travel_ticketNavbar_storeIconn p-2 bd-highlight me-2">
                  <IoStorefrontOutline />
                </div>
                <p
                  className="p-2 bd-highlight
                Travel_ticketNavbar_card_placeName_text "
                >
                  燒燒燒燒仙草
                </p>
                <p className="ms-auto  bd-highlight Travel_ticketNavbar_cardNT ">
                  NT$ 1000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel_ticketNavbar;
