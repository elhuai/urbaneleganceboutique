import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fake from '../../../images/社群假圖1280.png';
import { API_URL } from '../../../utils/config';
import './_conversationProduct.scss';

const credentialsConfig = {
  withCredentials: true,
};

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

const ConversationProduct = ({ cancel, data, updateSubmitResult, socket }) => {
  const [productData, setProductData] = useState([]);
  const handleProductSend = async (item) => {
    try {
      const result = await axios.post(
        `${API_URL}/user/conversation/product/${data.id}`,
        {
          product_id: item.id,
        },
        credentialsConfig
      );
      const newMessage = {
        content: '',
        conversation_id: data.id,
        id: result.data.result,
        sender: 1,
        product_id: item.id,
        type: 4,
        create_time: result.data.create_time,
        product_id: item.id,
        product_name: item.name,
        photo_path: item.photo_path,
        main_photo: item.main_photo,
        price: item.price,
        per_score: item.per_score,
      };
      updateSubmitResult((old) => {
        const newData = JSON.parse(JSON.stringify(old));
        const i = newData.findIndex((v) => v.id === data.id);
        newData[i]['messages'].push(newMessage);
        return newData;
      });
      socket.emit('sendMassage', {
        sender: 1,
        receiverId: data.store_id,
        message: newMessage,
      });
      cancel();
    } catch (error) {
      console.error(error);
    }
  };

  const callStoreProductApi = async () => {
    try {
      const result = await axios.get(
        `${API_URL}/user/conversation/product/${data.store_id}`,
        credentialsConfig
      );
      console.log(result.data.data);
      setProductData(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    callStoreProductApi();
  }, []);
  return (
    <div>
      <div className="chat_search_card--global d-flex">
        <div className={`chat_search_card_content chat_search_card`}>
          <p>點選即送出商品資訊至聊天室</p>
          <div className="chat_search_card_item flex-fill py-2">
            {productData.map((item) => {
              const score = item.per_score.toFixed(1);
              return (
                <div
                  key={item.id}
                  className="mx-3 mb-2 d-flex"
                  onClick={() => handleProductSend(item)}
                >
                  <div className="obj-fit flex-shrink-0">
                    <img
                      src={`${BASE_URL + item.photo_path}/${item.main_photo}`}
                      alt=""
                    />
                  </div>
                  <div className="p_content flex-fill d-flex flex-column p-2">
                    <div className="p_title flex-fill text-start">
                      <h6>{item.name}</h6>
                    </div>
                    <div className="p_detail flex-fill d-flex justify-content-between align-items-end">
                      <div className="p_score">{score}</div>
                      <div className="p_price">
                        TWD <span>{item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-flex gap-2 justify-content-center">
            <button
              className="chat_search_card_button cancel"
              onClick={() => cancel()}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationProduct;
