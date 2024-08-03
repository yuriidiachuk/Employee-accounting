import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All employees
      </button>
      <button className="btn btn-outline-light" type="button">
        Name
      </button>
      <button className="btn btn-outline-light" type="button">
        Country
      </button>
      <button className="btn btn-outline-light" type="button">
        Department
      </button>
      <button className="btn btn-outline-light" type="button">
        Language
      </button>
    </div>
  );
};

export default AppFilter;
