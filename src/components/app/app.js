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
      country: "Germany",
      department: "IT",
      language: "en, ge",
      increase: false,
    },
    {
      name: "Patris Evra",
      country: "France",
      department: "STP",
      language: "en, fr",
      increase: true,
    },
    {
      name: "Tomasz Zielinski",
      country: "Poland",
      department: "IT",
      language: "en, pl",
      increase: false,
    },
    {
      name: "Peter Woles",
      country: "USA",
      department: "IT",
      language: "en, ru",
      increase: false,
    },
    {
      name: "Alex Cooper",
      country: "France",
      department: "STP",
      language: "en, fr",
      increase: false,
    },
    {
      name: "Paolo Vitoldi",
      country: "Italy",
      department: "IT",
      language: "en, ita",
      increase: false,
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
