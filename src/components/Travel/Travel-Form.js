import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import mapicon from '../../images/Travel_input_location.svg';
import { handleSuccess } from '../../utils/handler/handleStatusCard';
const TravelForm = () => {
  const [loginMember, setLoginMember] = useState({
    title: '',
    start_time: '',
    end_time: '',
  });
  function handleChange(e) {
    setLoginMember({ ...loginMember, [e.target.name]: e.target.value });
  }
  //TODO: userid還沒寫進資料庫
  async function handleSubmit(e) {
    e.preventDefault();
    let response = await axios.post(
      `${API_URL}/submit/addDate`,
      loginMember,
      {}
    );
    console.log('form表單', response.data);
    handleSuccess('成功建立此行程!', '/Travel');
  }

  return (
    <>
      <Form className="travel_form_Container">
        <div>
          <h2 className="travel_form_creat_tittle  user-select-none">
            新增行程 :
          </h2>
        </div>

        <div className="travel_input_searchBar ">
          {/* <div className="travel_inputDate mt-5">
            <h5 className="travel_inputDate_Text">旅遊日期</h5>
          </div> */}
          <InputGroup className="travel_input_Allinput  mb-3">
            {/* as="form" */}
            <div className="travel_input_searchBar_sum  d-flex ">
              <div className="travel_input_icondiv">
                <img src={mapicon} alt="#/" className="travel_input_mapicon " />
              </div>
              <Form.Control
                type="text"
                id="title"
                name="title"
                value={loginMember.travel}
                className="travel_input_text"
                placeholder="請輸入行程名稱"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleChange}
              />
            </div>
            <div className="travel_input_searchBar_sumA ">
              <Form.Control
                type="date"
                id="start_time"
                name="start_time"
                value={loginMember.starttime}
                className="travel_input_Area "
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleChange}
              />
            </div>
            <div className="travel_input_searchBar_sumA d-flex">
              <Form.Control
                type="date"
                id="end_time"
                name="end_time"
                value={loginMember.endtime}
                className=""
                placeholder="請輸入景點關鍵字"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleChange}
              />
            </div>

            <Button
              className="travel_input_button "
              variant="outline-secondary"
              id="button-addon2"
              type="submit"
              onClick={handleSubmit}
            >
              新增
            </Button>
          </InputGroup>
        </div>
      </Form>
    </>
  );
};

export default TravelForm;
