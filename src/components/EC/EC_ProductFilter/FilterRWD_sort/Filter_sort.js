import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FilterRWDSort({ name, ...props }) {
  const [show, setShow] = useState(false);
  const { setOrder, setPage } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sortData = [
    {
      name: '價格：高到低',
      value: 1,
    },
    {
      name: '價格：低到高',
      value: 2,
    },
    {
      name: '評價：高到低',
      value: 3,
    },
    {
      name: '評價：低到高',
      value: 4,
    },
  ];
  return (
    <>
      <div className="ecProductFilter_list_rwd_sort">
        {/* ==========排序============ */}
        <div className="ecProductFilter_list_rwd_btn" style={{}}>
          <Button
            variant="primary"
            onClick={handleShow}
            className="filterRWD_btn me-2"
            style={{
              width: '70px',
              fontSize: '0.9rem',
              backgroundColor: 'white',
              border: '1.5px solid lightgray',
            }}
          >
            排序▿
          </Button>
        </div>

        <Offcanvas
          show={show}
          onHide={handleClose}
          {...props}
          className="filter_bar"
          style={{ height: '300px', overflow: 'hidden' }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: '#22C3FF' }}>排序</Offcanvas.Title>
          </Offcanvas.Header>

          {sortData.map((data, i) => {
            return (
              <Offcanvas.Body style={{ padding: '1rem', overflow: 'hidden' }}>
                <div
                  className="sort-selected"
                  style={{
                    borderBottom: '1px solid #eee',
                    paddingBottom: '0.5rem',
                  }}
                  value={data.value}
                  key={i}
                  onClick={() => {
                    setOrder(data.value);
                    setPage(1);
                    setShow(false);
                  }}
                >
                  {data.name}
                </div>
              </Offcanvas.Body>
            );
          })}
          {/* <Offcanvas.Body
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button
              variant="primary"
              style={{ width: '100px', height: '40px' }}
              onClick={handleClose}
            >
              送出
            </Button>
          </Offcanvas.Body> */}
        </Offcanvas>
      </div>
    </>
  );
}

export default FilterRWDSort;
