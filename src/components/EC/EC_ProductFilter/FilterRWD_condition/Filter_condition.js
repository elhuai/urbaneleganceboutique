import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import Form from 'react-bootstrap/Form';
import { IoIosArrowDown } from 'react-icons/io';
import { Slider } from 'antd';
import 'antd/dist/antd.min.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FilterRWDList({ name, ...props }) {
  const [show, setShow] = useState(false);
  const {
    setTag,
    setMaxPrice,
    setMinPrice,
    minPrice,
    maxPrice,
    setPage,
    typeId,
  } = props;
  const { tagStatus, setTagStatus } = useState([]);
  const [title, setTitle] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchTitle = async (index) => {
      const result = await axios.get(
        `${API_URL}/filter/choices?typeId=${typeId}`
      );
      // console.log('fetchTitle', result.data);
      const newTitleArray = result.data.map((item) => {
        const newTags = item.tags.map((i) => {
          return { ...i, status: 0 };
        });
        return { ...item, tags: newTags };
      });
      setTitle(newTitleArray);
      setMaxPrice(1000);
      setMinPrice(0);
    };
    fetchTitle();
    // setTagStatus();
  }, []);
  // }
  function log(value) {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    setPage(1);
    console.log(value);
  }

  return (
    <>
      <div className="ecProductFilter_list_rwd_condition">
        <div className="ecProductFilter_list_rwd_btn" style={{}}>
          <Button
            variant="primary"
            onClick={handleShow}
            className="filterRWD_btn me-2"
            style={{
              width: '100px',
              fontSize: '0.9rem',
              backgroundColor: 'white',
              border: '1.5px solid lightgray',
              margin: '0 0 0.5rem 0.5rem',
            }}
          >
            更多條件▿
          </Button>
        </div>

        <Offcanvas
          show={show}
          onHide={handleClose}
          {...props}
          className="filter_bar"
          style={{ height: '600px', overflow: 'auto' }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: '#22C3FF' }}>
              更多條件
            </Offcanvas.Title>
          </Offcanvas.Header>

          {title.map((data, index) => {
            let tags = title[index].tags;
            return (
              <div className="filterRWD-group pf-checkboxes" key={data.cate_id}>
                <Offcanvas.Body>
                  <div className="product-filterRWD-category align-items-center justify-content-between">
                    <p
                      className="product-categoryRWD-title"
                      style={{
                        borderBottom: '1px solid #eee',
                        paddingBottom: '.5rem',
                        marginBottom: '0',
                        fontWeight: '800',
                      }}
                    >
                      {data.cate_name}
                    </p>
                  </div>
                </Offcanvas.Body>
                {tags.map((data, i) => {
                  return (
                    <Offcanvas.Body style={{ padding: '.5rem 1rem' }}>
                      <div className="product_checkbox_RWD" key={data.tag_id}>
                        <label for={data.tag_name}>
                          <input
                            type="checkbox"
                            id={data.tag_name}
                            name={data.tag_name}
                            value={data.status}
                            className="product_checkbox_item_RWD me-2"
                            onClick={(e) => {
                              setTitle(() => {
                                let newArray = title;
                                newArray[index]['tags'][i]['status'] =
                                  Number(e.target.value) === 0 ? '1' : '0';
                                return newArray;
                              });
                              if (Number(e.target.value) < 1) {
                                setTag((tag) => {
                                  let newArray = [...tag];
                                  newArray.push(e.target.name);
                                  setPage(1);
                                  return newArray;
                                });
                              } else {
                                setTag((tag) => {
                                  let newArray = [...tag].filter(
                                    (item) => item !== e.target.name
                                  );
                                  setPage(1);

                                  return newArray;
                                });
                              }
                            }}
                          />
                          <span className="fs-6 tag_RWD">{data.tag_name}</span>
                        </label>
                      </div>
                    </Offcanvas.Body>
                  );
                })}
              </div>
            );
          })}
          {/* 價格篩選 */}
          <div className="product-price">
            <Offcanvas.Body>
              <div className="product-filter-category my-3">
                <p
                  className="product-category-title"
                  style={{
                    borderBottom: '1px solid #eee',
                    paddingBottom: '.5rem',
                    marginBottom: '0',
                    fontWeight: '800',
                  }}
                >
                  價格
                </p>
              </div>
            </Offcanvas.Body>
            <Offcanvas.Body
              style={{ padding: '.5rem 1rem', paddingBottom: '0' }}
            >
              <Slider
                className="product-price-bar"
                range
                step={1}
                max={8000}
                defaultValue={[0, 8000]}
                // onChange={log}
                onAfterChange={log}
              />
              <div className="product-price-num">
                <div className="my-2 h6">
                  ${minPrice} - ${maxPrice}
                </div>
              </div>
            </Offcanvas.Body>
            <Offcanvas.Body
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button
                variant="primary"
                style={{ width: '100px', height: '40px' }}
                onClick={handleClose}
              >
                搜尋
              </Button>
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </div>
    </>
  );
}

export default FilterRWDList;
