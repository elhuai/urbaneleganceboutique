import './_FilterPages.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { IoHeartOutline } from 'react-icons/io5';

import { TiLocation } from 'react-icons/ti';
import { FaPaw } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import FilterListToggle from './FilterListToggle/FilterListToggle';

const FilterPages = () => {
  return (
    <>
      {/* 頁碼 */}
      <div className="product_filter_pages d-flex justify-content-center">
        <button>
          <HiChevronLeft />
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <HiChevronRight />
        </button>
      </div>
    </>
  );
};

export default FilterPages;
