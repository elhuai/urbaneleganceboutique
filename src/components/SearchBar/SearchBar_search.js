import './_SearchBar_search.scss';
import main_search_left_dog from '../../images/main_search_left_dog.png';
import main_search_right_dog from '../../images/main_search_right_dog.png';
import { API_URL } from '../../utils/config';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar(props) {
  const {
    searchBar_title,
    searchBar_placeholder,
    keywordSearch,
    setKeywordSearch,
    setSearch,
  } = props;
  // console.log('changePostList', changePostList);
  const handleSearch = (e) => {
    if (keywordSearch === '') return setSearch('');
    setSearch(keywordSearch);
  };
  return (
    <>
      <section className="searchBar_section_main_bg mb-4">
        <div className="searchBar_main_search">
          <h4 className="searchBar_searchTitle"> {searchBar_title}</h4>
          <div className="searchBar_search">
            <input
              type="text"
              className="searchBar_searchTerm"
              placeholder={searchBar_placeholder}
              value={keywordSearch}
              onChange={(e) => {
                // console.log(e.target.value);
                setKeywordSearch(e.target.value);
              }}
            />
            <button
              type="submit"
              className="searchBar_searchButton"
              onClick={handleSearch}
            >
              <i className="searchBar_fa searchBar_fa-search">
                <AiOutlineSearch />
              </i>
            </button>
          </div>
          <img
            className="searchBar_main_search_left_dog"
            src={main_search_left_dog}
            alt="left_dog"
          />
          <img
            className="searchBar_main_search_right_dog"
            src={main_search_right_dog}
            alt="right_dog"
          />
        </div>
      </section>
    </>
  );
}

// const fakeData = [
//   {
//     id: 1,
//     main_photo: '',
//     coordinate: '',
//     content: '',
//     tags: '',
//     likes: '',
//     title: '1111',
//   },
//   {
//     id: 4,
//     main_photo: '',
//     coordinate: '',
//     content: '',
//     tags: '',
//     likes: '',
//     title: '4444',
//   },
// ];

export default SearchBar;
