import './_FilterActive.scss';
const FilterActive = () => {
  return (
    <>
      <div className="product-filter-active row my-3">
        <p className="product-category-title">超值活動</p>

        <label for="limitedTime07" className="product-label-active">
          ︱超值限定．限時下殺 6 折
        </label>
        <label for="happySummer06" className="product-label-active">
          ︱寵你無誤，商品票券 9 折
        </label>
        <label for="father88" className="product-label-active">
          ︱歡慶雙十！餐廳票券 8 折
        </label>
      </div>
      {/*END __超值區域 */}
    </>
  );
};

export default FilterActive;
