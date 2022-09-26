import { useState } from 'react';

// 子頁面(區域)
import Cart from './subpages/Cart';
import Payment from './subpages/Payment';
import OrderDetail from './subpages/OrderDetail';

// 進度條
import ProgressBar from '../../../components/EC/EC_ordersteps/ProgressBar/ProgressBar';

// css樣式
import './styles/_EC_orderSteps.scss';

function OrderSteps() {
  const maxSteps = 3;
  const [step, setStep] = useState(1);

  const [shipping, setShippingData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // 動態元件語法
  const components = [Cart, Payment, OrderDetail];
  const BlockComponent = components[step - 1];

  // 進度條使用
  const progressNames = ['確認購物車內容', '確認付款資訊', '送出訂單'];

  // 上一步 下一步按鈕
  const next = () => {
    // 運送表單用檢查
    // TODO:記得改回2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (step === 4) {
      const { name, email, phone } = shipping;

      // 有錯誤訊息會跳出警告，不會到"下一步"
      const errors = [];

      if (!name) errors.push('姓名沒有填喔！ ');

      if (!email) errors.push('住址沒有填喔！ ');

      if (!phone) errors.push('電話沒有填喔！ ');

      if (errors.length > 0) {
        alert(errors.join(','));
        return;
      }
    }

    // 沒錯誤才會到下一步
    if (step < maxSteps) setStep(step + 1);
  };

  // 上一步按鈕
  const prev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      {/* {console.log(step, maxSteps)} */}
      {/* 進度條 */}
      <div>
        <ProgressBar
          maxSteps={maxSteps}
          step={step}
          progressNames={progressNames}
        />
      </div>
      {/* 子頁面區域 */}
      <div>
        <BlockComponent shipping={shipping} setShippingData={setShippingData} />
      </div>
      {/* 按鈕 */}
      <div className="orderButton">
        {step < maxSteps && (
          <button className="nextBnt" onClick={next} disabled={step === maxSteps}>
            前往下一步
          </button>
        )}
        <button className="prevBnt" onClick={prev} disabled={step === 1}>
          回到上一步
        </button>
      </div>
    </>
  );
}

export default OrderSteps;
