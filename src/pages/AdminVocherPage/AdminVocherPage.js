import React, { useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QRcode from 'qrcode';
import { useRef } from 'react';
import { handleQRcodeCard } from '../../utils/handler/handleQRcodeCard';

const AdminVocherPage = () => {
  const canvasRef = useRef(null);
  console.log(canvasRef);

  return (
    <div className="d-flex">
      <div>
        <Tabs
          defaultActiveKey="article_list"
          id="uncontrolled-tab-example"
          className="communityManagementTab"
        >
          <Tab
            eventKey="article_list"
            title={
              <div className="d-flex">
                <img className="tab_claw me-2 " src={123} alt="" />
                <p className="my-2 tab_text_size">我的票券</p>
              </div>
            }
          >
            <div className="post_list">
              <button onClick={() => handleQRcodeCard()}>送出</button>
            </div>
          </Tab>
          <Tab
            eventKey="_list"
            title={
              <div className="d-flex">
                <img className="tab_claw me-2 " src={123} alt="" />
                <p className="my-2 tab_text_size">已無效</p>
              </div>
            }
          >
            <div className="post_list">失效票券</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminVocherPage;
