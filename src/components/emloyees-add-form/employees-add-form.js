import "./employees-add-form.css";
import { Component } from "react";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      department: "",
      language: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(
      this.state.name,
      this.state.salary,
      this.state.department,
      this.state.language
    );
    this.setState({
      name: "",
      salary: "",
      department: "",
      language: "",
    });
  };

  render() {
    const { name, salary, department, language } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex-add-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Name"
            onChange={this.onValueChange}
            name="name"
            value={name}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Salary"
            onChange={this.onValueChange}
            name="salary"
            value={salary}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Department"
            onChange={this.onValueChange}
            name="department"
            value={department}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Language"
            onChange={this.onValueChange}
            name="language"
            value={language}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
