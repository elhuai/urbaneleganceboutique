import '../styles/_EC_subpages_OrderDetail.scss';

function OrderDetail(props) {
  return (
    <>
      <div className="OrderDetail">
        <div className="mainTitle">1.確認購物車內容</div>

        <div className="bottomColumn">
          {/* <div className="subSection1">
            <div className="subTitle">票券方案</div>
            <div className="subInput">屏東海生館｜門票・魚你同行</div>
          </div> */}
          <div className="subSection2">
            <div className="calculateSection">
              <div className="subTitle">店家名稱</div>
              <div className="subInput">屏東海生館</div>
            </div>
            <div className="calculateSection">
              <div className="subTitle">票券名稱：屏東海生館｜門票・魚你同行</div>
              <div className="subInput">NT$1200</div>
            </div>
            <div className="calculateSection">
              <div className="subTitle">票券數量</div>
              <div className="subInput">2張</div>
            </div>
          </div>
          <div className="subSection2">
            <span>NT$2400</span>
            <div className="calculateSection">
              <div className="subTitle">優惠券：歡慶雙十10%OFF</div>
              <div className="subInput">10%OFF</div>
            </div>
          </div>
          <div className="subSection3">
            <div className="calculateSection">
              <div className="subTitle">購買人</div>
              <div className="subInput">阿尼基</div>
            </div>
            <div className="calculateSection">
              <div className="subTitle">付款方式</div>
              <div className="subInput">信用卡9999 9999 9999 9999</div>
            </div>
            <div className="calculateSection">
              <div className="subTitle">電子收據</div>
              <div className="subInput">電子收據(個人)</div>
            </div>
          </div>
          <div className="calculateSection1">
            <div className="subTitle">總計(付款金額)</div>
            <div className="subInput">NT$5200</div>
          </div>
          <button>來去結帳</button>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
