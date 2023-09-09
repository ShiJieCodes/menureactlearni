const Categories = ({ data, filterItems }) => {
  return (
    <div className="btn-container">
      {data.map((btn) => {
        return (
          <button
            type="button"
            className="btn"
            onClick={() => filterItems(btn)}
            key={btn}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
