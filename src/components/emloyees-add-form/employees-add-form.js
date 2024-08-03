import "./employees-add-form.css";

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form className="add-form d-flex-add-form">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Name"
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Country"
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Department"
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Language"
        />

        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
