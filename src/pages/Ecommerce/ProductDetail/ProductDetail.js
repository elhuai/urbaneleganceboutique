import Product_Detail1 from '../../../images/Product_Detail1.png';
import Product_Detail2 from '../../../images/Product_Detail2.png';
import Product_Detail3 from '../../../images/Product_Detail3.png';
import Product_Detail4 from '../../../images/Product_Detail4.png';
import Product_Detail5 from '../../../images/Product_Detail5.png';
import Product_Detail7 from '../../../images/Product_Detail7.png';
import Product_Detail8 from '../../../images/Product_Detail8.png';
import Guess_U_Like1 from '../../../images/Guess_U_Like1.png';
import Guess_U_Like2 from '../../../images/Guess_U_Like2.png';

import './_ProductDetail.scss';

const ProductDetail = () => {
  return (
    <>
      <body className="ProductDetail">
        {/* <div className="container"> */}
        <div className="topRow">
          <div className="imageColumn">
            <div className="mainImage">
              <img src={Product_Detail1} alt="Paris" />
            </div>
            <div className="cardRow">
              <div>
                <img src={Product_Detail2} alt="" />
              </div>
              <div>
                <img src={Product_Detail3} alt="" />
              </div>
              <div>
                <img src={Product_Detail4} alt="" />
              </div>
              <div>
                <img src={Product_Detail5} alt="" />
              </div>
              <div>
                <img src={Product_Detail7} alt="" />
              </div>
            </div>
          </div>
          <div className="productDesc">
            <div className="productContainer">
              <h1 className="headText">
                宜蘭礁溪．帝王行旅｜悠遊國旅住宿補助超值1301專案｜寵物友善飯店
              </h1>
              <ul>
                <li className="subText">
                  礁溪車站步行 3 分鐘，房內備有溫泉浴池，不用出門即可泡湯超Chill
                </li>
                <li className="subText">寵物友善，帶著毛小孩一同出遊吧</li>
              </ul>
              <div className="tagsSection">
                <div className="tags">8天前可免費取消</div>
                <div className="tags">交通方便</div>
              </div>
              <div className="MainAddSection">
                <pre>+ 用尚優惠的價格加購</pre>
                <hr />
                <div className="addSection">
                  <div className="addSubSection">
                    <img src={Guess_U_Like1} />
                    <a href="#">寵物外出包｜PETRICK Backpack 派翠克</a>
                  </div>
                  <div className="addCostSection">
                    <p className="addCost">1780</p>
                    <p className="addMainCost">890</p>
                  </div>
                  <div className="addSubSection">
                    <button>加入購物車</button>
                  </div>
                </div>
                <div className="addSection">
                  <div className="addSubSection">
                    <img src={Guess_U_Like2} />
                    <a href="#">彈性緩衝反光牽繩 ｜Chillax Leash</a>
                  </div>
                  <div className="addCostSection">
                    <p className="addCost">780</p>
                    <p className="addMainCost">560</p>
                  </div>
                  <div className="addSubSection">
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="costSection">
                <p className="mainCost">NT$2300</p>
                <p className="cost">NT$2530</p>
              </div>
              <div className="buttonRow">
                <button className="addButton">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomRow">
          <div className="spec">
            <div className="anchor">
              <a href="#description">｜商品說明</a>
              <a href="#toKnow">｜購買須知</a>
              <a href="#howToUse">｜如何使用</a>
              <a href="#comment">｜票券評價</a>
            </div>
            <div className="anchor1"></div>
          </div>
          <div className="spec2">
            <div id="description" className="description">
              <h4>商品說明</h4>
              <p>
                － 飯店介紹 －<br />
                • 飯店名稱：礁溪帝王行旅
                <br />
                • 飯店地址：宜蘭縣礁溪鄉礁溪路五段156號
                <br />
                • 官方網站：https://www.king-hotel.com.tw/
                <br />
                • 入住時間：15:00 以後
                <br />
                • 退房時間：11:00 以前
                <br />
                • 早餐型式：連鎖速食餐券
                <br />
                • 停車場：特約停車場，住宿期間享免費停車
                <br />
                • 寵物住宿相關事項：
                <br />
                　1.
                僅渡假房型提供寵物進房服務，寵物體型無限制，無放入籠內之規定
                <br />
                　2. 不收清潔費，但需付押金$500/房
                <br />
                　3.
                請友善使用房間供應物品，不接受寵物盥洗，若造成房內物品汙損將照價酌收修繕費用，押金於退房時確認房況無毀損即作退費
                <br />
              </p>
              <p>
                － 房型資訊 －<br />
                【經典雙人房】
                <br />
                空間坪數：約 6 坪<br />
                住宿人數：1-2 人<br />
                床型：一張標準雙人床( 152 公分 x 188 公分)
                <br />
                客房設備：提供一次性盥洗用具、免費無線網路、溫泉浴浴缸、吹風機、冰箱、液晶電視（有線頻道）、空調、110V
                <br />
                電壓插座、衣櫥、遮光窗簾、書桌、電話、茶包、電熱水壺、瓶裝水、獨立衛生間、拖鞋
                <br />
                公用設施及服務：電梯、無障礙設施、飯店全面禁菸、行李寄存、晨喚服務
                <br />
                不提供加床、不提供加嬰兒床
                <br />
                礁溪帝王行旅．飯店大廳
                <br />
              </p>
              <img src={Product_Detail8} alt="" />
            </div>

            <div id="toKnow" className="description">
              <h4>購買須知</h4>
              <p>
                •
                為提供顧客良好住宿體驗，不提供加人加價服務，請依適合人數選擇房型。
                <br />
                • 客房格局依實際入住安排為主。
                <br />
                • 入住登記者須年滿18歲。未滿18歲之未成年旅客，須由家長陪同入住。
                <br />
                • 每間客房最多容納 1 名 0-12 歲的孩童，使用現有床鋪無法加床。
                <br />
              </p>
            </div>
            <div id="howToUse" className="description">
              <h4>如何使用</h4>
              <p>
                • 憑證使用方式
                <br />
                現場請出示電子憑證與護照正本或身份證
                <br />
                • 憑證兌換期限
                <br />
                需要按照預訂日期及當天開放時間內兌換，逾期失效
                <br />
              </p>
            </div>
          </div>
        </div>
      </body>
      {/* </div> */}
    </>
  );
};

export default ProductDetail;
