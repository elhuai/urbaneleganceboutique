import './_FilterActive.scss';
const FilterActive = () => {
  return (
    <>
      <div className="product-filter-active row my-3">
        <p className="product-category-title">超值活動</p>

        <label for="limitedTime07" className="product-label-active">
          ︱超值限定．限時打七折
        </label>
        <label for="happySummer06" className="product-label-active">
          ︱歡慶暑假！住宿六折起
        </label>
        <label for="father88" className="product-label-active">
          ︱寵愛爸爸全館八八折
        </label>
      </div>
      {/*END __超值區域 */}
    </>
  );
};

export default FilterActive;
