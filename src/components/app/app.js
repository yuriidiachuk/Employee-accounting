import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../emloyees-add-form/employees-add-form";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John Smith",
          salary: 3500,
          department: "IT",
          language: "en, ge",
          increase: false,
          id: 1,
        },
        {
          name: "Patris Evra",
          salary: 3200,
          department: "STP",
          language: "en, fr",
          increase: true,
          id: 2,
        },
        {
          name: "Tomasz Zielinski",
          salary: 3600,
          department: "MNG",
          language: "en, pl",
          increase: false,
          id: 3,
        },
        {
          name: "Peter Woles",
          salary: 3300,
          department: "IT",
          language: "en, ru",
          increase: false,
          id: 4,
        },
        {
          name: "Alex Cooper",
          salary: 3800,
          department: "STP",
          language: "en, fr",
          increase: false,
          id: 5,
        },
        {
          name: "Paolo Vitoldi",
          salary: 3600,
          department: "SL",
          language: "en, ita",
          increase: false,
          id: 6,
        },
      ],
      term: "",
    };
    this.maxId = 7;
  }

  addItem = (name, salary, department, language) => {
    const newItem = {
      name,
      salary,
      department,
      language,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  searchEmp = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term } = this.state;
    const visibleData = this.searchEmp(data, term);

    return (
      <div className="app">
        <AppInfo />
        <EmployeesAddForm onAdd={this.addItem} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>
        <EmployeesList data={visibleData} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
