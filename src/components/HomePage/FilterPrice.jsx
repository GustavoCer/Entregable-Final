const FilterPrice = () => {
  return (
    <article>
      <h3>Price</h3>
      <form>
        <div>
          <label htmlFor="from">From</label>
          <input type="text" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input type="text" id="to" />
        </div>
        <button>Filter Price</button>
      </form>
    </article>
  );
};

export default FilterPrice;
