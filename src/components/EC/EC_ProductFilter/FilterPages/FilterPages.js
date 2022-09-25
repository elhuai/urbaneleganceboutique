import './_FilterPages.scss';

const FilterPages = (props) => {
  const { lastPage, page, setPage, error } = props;
  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= lastPage; i++) {
      if (i < 11) {
        pages.push(
          <button
            style={{
              fontSize: '1rem',

              backgroundColor: page === i ? '#ffc200' : '',
              borderColor: page === i ? '#00d1b2' : '#dbdbdb',
              color: page === i ? '#fff' : '#363636',
              borderRadius: page === i ? '5px' : '5px',
              width: '35px',
              height: '35px',
              //   borderRadius: '3px',
              //   textAlign: '10px',
              outline: 'none',
            }}
            key={i}
            onClick={(e) => {
              setPage(i);
            }}
          >
            {i}
          </button>
        );
      }
    }
    return pages;
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {/* 放一下頁碼 */}
      <div className="product_filter_pages d-flex justify-content-center">
        <div>{getPages()}</div>
      </div>
    </div>
  );
};

export default FilterPages;
