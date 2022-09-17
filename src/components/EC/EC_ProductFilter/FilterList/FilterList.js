import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

import './_FilterList.scss';
import { IoIosArrowDown } from 'react-icons/io';
// import FilterListToggle from './FilterListToggle/FilterListToggle';

const FilterList = () => {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const fetchTitle = async (index) => {
      const result = await axios.get(`${API_URL}/filter/choices`);
      console.log(result.data);
      setTitle(result.data);
    };
    fetchTitle();
  }, []);
  // }

  return (
    <>
      {/*__地區篩選 */}
      {title.map((data, index) => {
        return (
          <div className="filter-group pf-checkboxes" key={'filter' + index}>
            <div className="product-filter-category my-3 align-items-center justify-content-between">
              <p className="product-category-title">{data.cate_name}</p>
              <button className="product-category-moreBtn">
                <IoIosArrowDown />
              </button>
            </div>
            {title[index].tags.map((data, index) => {
              return (
                <div className="pf-checkbox" key={'tags' + index}>
                  <input
                    type="checkbox"
                    value={data.tag_id}
                    className="product-check-items me-2"
                  />
                  <label>{data.tag_name}</label>
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
