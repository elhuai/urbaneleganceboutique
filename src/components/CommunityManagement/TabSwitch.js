import React from "react";
import {
  Tabs,
  Tab,
} from "react-bootstrap";

function TabSwitch() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-4 "
    >
      <Tab
        eventKey="home"
        title={
          <div>
            <img className="travel_nav_mytrip me-2" src="" alt="" />
            我的行程
          </div>
        }
        className="travel_Mytrip"
      >
        <div className="d-flex "></div>
      </Tab>
      <Tab eventKey="與我分享的行程" title="收藏的行程" className="">
        <div className="d-flex "></div>
      </Tab>
    </Tabs>
  );
}

export default TabSwitch;
