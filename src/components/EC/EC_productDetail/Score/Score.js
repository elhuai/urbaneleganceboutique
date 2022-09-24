import './_Score.scss';
import { Rate } from 'antd';
import { FaPaw } from 'react-icons/fa';

const Score = (props) => {
  const { perScore } = props;
  return (
    <>
      <div id="perScore" className="description">
        <h4>票券評價</h4>
        <div className="score">
          <div className="score_circle">{perScore}</div>
          <div className=" score_total">
            <Rate allowHalf character={<FaPaw />} defaultValue={perScore} />
            <p>共有{Number(({ perScore } * 1.7).toFixed(0))}人評價此商品</p>
          </div>
        </div>
        <div className="product_comment d-flex flex-row">
          <img
            src="https://pbs.twimg.com/profile_images/665285874054139904/T7bN6jsf_400x400.jpg"
            alt=""
            className="product_comment_img"
          />
          <div className="product_comment_content ms-4">
            <p className="product_comment_userName">汪汪先輩</p>
            <div className="product_comment_userScore ms-2">
              <Rate disabled character={<FaPaw />} defaultValue={4} />
            </div>
            <div className="product_comment_content ">
              <p className="fs-6 fw-bold my-2 ">線上買票很方便</p>
              <p className="mb-0">
                空間很漂亮，空間大環境佳，非常超值，適合全家大小來享受美好的氣氛
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Score;
