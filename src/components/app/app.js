import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../emloyees-add-form/employees-add-form";
import "./app.css";

function App() {
  const data = [
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
      department: "IT",
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
      department: "IT",
      language: "en, ita",
      increase: false,
      id: 6,
    },
  ];
  return (
    <div className="app">
      <AppInfo />
      <EmployeesAddForm />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
    </div>
  );
}

export default App;
