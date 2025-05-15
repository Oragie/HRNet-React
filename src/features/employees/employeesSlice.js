import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
    setEmployees: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addEmployee, setEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
