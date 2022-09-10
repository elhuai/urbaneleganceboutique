import './_SearchList_search.scss';
import main_search_left_dog from '../../images/main_search_left_dog.png';
import main_search_right_dog from '../../images/main_search_right_dog.png';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <>
      <section className="comList_section_main_bg mb-4">
        {/* <img className="comList_main_bg" src={main_search_bg} alt="main_bg" /> */}
        <div className="comList_main_search">
          {/* <div className='comList_main_search_text'>最可愛的萌寵都在這</div> */}
          <h5 className="searchList_searchTitle"> 最可愛的萌寵都在這</h5>
          <div className="searchList_search">
            <input
              type="text"
              className="searchList_searchTerm"
              placeholder="狗罐罐"
            />
            <button type="submit" className="searchList_searchButton">
              <i className="searchList_fa searchList_fa-search">
                <AiOutlineSearch />
              </i>
            </button>
          </div>
          <img
            className="comList_main_search_left_dog"
            src={main_search_left_dog}
            alt="left_dog"
          />
          <img
            className="comList_main_search_right_dog"
            src={main_search_right_dog}
            alt="right_dog"
          />
        </div>
      </section>
    </>
  );
};

export default SearchBar;
