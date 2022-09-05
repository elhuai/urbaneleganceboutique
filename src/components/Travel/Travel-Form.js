import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import caricon from '../../images/Travel_input_car.svg';
import mapicon from '../../images/Travel_input_location.svg';
const TravelForm = () => {
  return (
    <>
      <Form className="travel_form_Container">
        <div>
          <h2 className="travel_form_creat_tittle  user-select-none">
            新增行程 :
          </h2>
        </div>
        <div className="travel_input_searchBar ">
          <InputGroup className="travel_input_Allinput justify-content-center mb-3">
            {/* as="form" */}
            <div className="travel_input_searchBar_sum  d-flex ">
              <div className="travel_input_icondiv">
                <img src={mapicon} alt="#/" className="travel_input_mapicon " />
              </div>
              <Form.Control
                className="travel_input_Area "
                placeholder="請輸入城市、地區"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
            <div className="travel_input_searchBar_sum d-flex">
              <div className="travel_input_icondiv">
                <img src={caricon} alt="#/" className="travel_input_mapicon " />
              </div>
              <Form.Control
                className=""
                placeholder="請輸入景點關鍵字"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>

            <Button
              className="travel_input_button "
              variant="outline-secondary"
              id="button-addon2"
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
