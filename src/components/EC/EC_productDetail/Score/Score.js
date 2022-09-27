import './_Score.scss';
import { Rate } from 'antd';
import { FaPaw } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

const Score = (props) => {
  const { perScore, productId } = props;
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      const commentData = await axios.get(
        `${API_URL}/productdetail/comment?id=${productId}`
      );
      setCommentData(commentData.data);
    };
    fetchComment();
  }, []);
  console.log(commentData);

  return (
    <>
      <div id="comment" className="description">
        <h4>票券評價</h4>
        <div className="score">
          <div className="score_circle">{perScore.toFixed(1)}</div>
          <div className=" score_total">
            <Rate allowHalf character={<FaPaw />} defaultValue={perScore} />
            <p>共有{Number((perScore * 4.7).toFixed(0))}人評價此商品</p>
          </div>
        </div>
        {commentData.map((data, index) => {
          return (
            <div className="product_comment d-flex flex-row" key={index}>
              <img
                // TODO 照片要改
                src="https://pbs.twimg.com/profile_images/665285874054139904/T7bN6jsf_400x400.jpg"
                // src={data.photo}
                alt=""
                className="product_comment_img"
              />

              <div className="product_comment_content ms-4">
                <p className="product_comment_userName fw-bold">
                  {data.social_name}
                </p>
                <div className="product_comment_userScore ms-2">
                  <Rate
                    disabled
                    character={<FaPaw />}
                    defaultValue={data.product_comment_score}
                  />
                </div>
                <div className="product_comment_content ">
                  {/* <p className="fs-6 fw-bold my-2 ">線上買票很方便</p> */}
                  <p className="mb-0 my-2">{data.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Score;
