import { Routes, Route, Navigate } from "react-router-dom";
import CreateEmployee from "./pages/createEmployee/createEmployee.jsx";
import EmployeeList from "./pages/employees/employeeList";
import NotFound from "./components/NotFound/index.jsx";

function App() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">HRnet</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/create" />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
