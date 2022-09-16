import React from 'react';
import {
  handleSuccess,
  handleFailed,
  handleWarning,
  handleInfo,
} from '../../../utils/handler/handleStatusCard';

export default function Example() {
  return (
    <>
      <div className="text-center py-5">
        <p className="text-center pt-5 m-0">
          {'使用方式：當成 function 直接呼叫'}
          <br />
          <span style={{ color: 'green' }}>
            {'handleSuccess( 標題, 跳轉頁面路徑, 說明文字)'}
          </span>

          <br />
          <br />
          {'三個參數型別都是字串 第三個參數接受 html格式，'}
          <br />
          {`但要用字串方式傳入，例如傳入 '<p style="color: red;"></p>'`}
          <br />
          <br />
          {'第二及第三個參數非必填，或是可以填入 false'}
          <br />
          {`例如：handleSuccess( '註冊成功',  false,  '<p style="color: green;">快去購買商品吧！</p>')`}
          <br />
          {
            '上面這個呼叫意味著他會出現成功的 icon 並且顯示「註冊成功」標題及說明文字，但不跳轉'
          }
        </p>
        上述範例：
        <button
          className="btn btn-info m-3 text-white fw-bold"
          style={{ background: 'green' }}
          onClick={() => {
            return handleSuccess(
              '註冊成功',
              false,
              '<p style="color: green;">快去購買商品吧！</p>'
            );
          }}
        >
          註冊成功
        </button>
        <br />
        <button
          className="btn btn-dark m-3 text-white fw-bold"
          onClick={() => {
            handleSuccess('事件成功文字');
          }}
        >
          成功：沒有跳轉
        </button>
        <button
          className="btn btn-primary m-3 text-white fw-bold"
          onClick={() => {
            handleSuccess('事件成功文字', '/');
          }}
        >
          成功：有跳轉
        </button>
        <br />
        <button
          className="btn btn-dark m-3 text-white fw-bold"
          onClick={() => {
            handleFailed('事件失敗文字');
          }}
        >
          失敗：沒有跳轉
        </button>
        <button
          className="btn btn-primary m-3 text-white fw-bold"
          onClick={() => {
            handleFailed('事件失敗文字', '/');
          }}
        >
          失敗：有跳轉
        </button>
        <br />
        <button
          className="btn btn-dark m-3 text-white fw-bold"
          onClick={() => {
            handleWarning('警告文字');
          }}
        >
          警告：沒有跳轉
        </button>
        <button
          className="btn btn-primary m-3 text-white fw-bold"
          onClick={() => {
            handleWarning('警告文字', '/');
          }}
        >
          警告：有跳轉
        </button>
        <br />
        <button
          className="btn btn-dark m-3 text-white fw-bold"
          onClick={() => {
            handleInfo('提示文字');
          }}
        >
          提示：沒有跳轉
        </button>
        <button
          className="btn btn-primary m-3 text-white fw-bold"
          onClick={() => {
            handleInfo('提示文字', '/');
          }}
        >
          提示：有跳轉
        </button>
      </div>
    </>
  );
}
