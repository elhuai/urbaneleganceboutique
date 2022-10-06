import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

import './_FilterList.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { Slider } from 'antd';
import 'antd/dist/antd.min.css';
// import FilterListToggle from './FilterListToggle/FilterListToggle';

const FilterList = (props) => {
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
      console.log('1000');
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
    <div className="filter-list">
      {/*__地區篩選 */}
      {title.map((data, index) => {
        let tags = title[index].tags;
        return (
          <div className="filter-group pf-checkboxes" key={data.cate_id}>
            <div className="product-filter-category my-3 align-items-center justify-content-between">
              <p className="product-category-title">{data.cate_name}</p>
              <button className="product-category-moreBtn">
                <IoIosArrowDown />
              </button>
            </div>

            {tags.map((data, i) => {
              return (
                <div className="product_checkbox" key={data.tag_id}>
                  <label for={data.tag_name}>
                    <input
                      type="checkbox"
                      id={data.tag_name}
                      name={data.tag_name}
                      value={data.status}
                      className="product_checkbox_item me-2"
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
                    <span className="fs-6">{data.tag_name}</span>
                  </label>
                </div>
              );
            })}
          </div>
        );
      })}
      {/* 價格篩選 */}
      <div className="product-price">
        <div className="product-filter-category my-3">
          <p className="product-category-title">價格</p>
        </div>

        <Slider
          className="product-price-bar"
          range
          step={1}
          max={1000}
          defaultValue={[0, 1000]}
          // onChange={log}
          onAfterChange={log}
        />
        <div className="product-price-num">
          <div className="my-2 h6">
            ${minPrice} - ${maxPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
