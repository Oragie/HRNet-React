import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../features/employees/employeesSlice";

export const useSyncWithLocalStorage = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);

  useEffect(() => {
    const saved = localStorage.getItem("employees");
    if (saved) {
      dispatch(setEmployees(JSON.parse(saved)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);
};
