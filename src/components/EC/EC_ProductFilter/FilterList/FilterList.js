import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

import './_FilterList.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';
// import FilterListToggle from './FilterListToggle/FilterListToggle';

const FilterList = (props) => {
  const { setTag } = props;
  const { tagStatus, setTagStatus } = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const fetchTitle = async (index) => {
      const result = await axios.get(`${API_URL}/filter/choices`);
      console.log('fetchTitle', result.data);
      const newTitleArray = result.data.map((item) => {
        const newTags = item.tags.map((i) => {
          return { ...i, status: 0 };
        });
        return { ...item, tags: newTags };
      });
      setTitle(newTitleArray);
    };
    fetchTitle();

    // setTagStatus();
  }, []);
  // }

  return (
    <>
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
                <div className="product_checkbox">
                  <label for={data.tag_name} key={data.tag_id}>
                    <input
                      type="checkbox"
                      name={data.tag_name}
                      id={data.tag_name}
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
                            return newArray;
                          });
                        } else {
                          setTag((tag) => {
                            let newArray = [...tag].filter(
                              (item) => item !== e.target.name
                            );
                            return newArray;
                          });
                        }
                      }}
                    />
                    {data.tag_name}
                  </label>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default FilterList;
