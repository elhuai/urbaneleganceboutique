import './_SearchBar_search.scss';
import main_search_left_dog from '../../images/main_search_left_dog.png';
import main_search_right_dog from '../../images/main_search_right_dog.png';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar(props) {
  const { searchBar_title, searchBar_placeholder } = props;
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
            />
            <button type="submit" className="searchBar_searchButton">
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

export default SearchBar;
