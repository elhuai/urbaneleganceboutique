import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

import './_FilterList.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';
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
        let tags = title[index].tags;
        return (
          <div className="filter-group pf-checkboxes" key={data.cate_id}>
            <div className="product-filter-category my-3 align-items-center justify-content-between">
              <p className="product-category-title">{data.cate_name}</p>
              <button className="product-category-moreBtn">
                <IoIosArrowDown />
              </button>
            </div>
            {tags.map((data, index) => {
              return (
                <div className="pf-checkbox">
                  <Link
                    to={`/ec-productfilter?filter=${data.tag_name}`}
                    key={data.tag_name}
                  >
                    <label for="checkbox_id">
                      <input
                        type="checkbox"
                        value={data.tag_id}
                        className="product-check-items me-2"
                      />
                      {data.tag_name}
                    </label>
                  </Link>
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
