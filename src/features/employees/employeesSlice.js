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
    setemployees: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addEmployee, setemployees } = employeesSlice.actions;
export default employeesSlice.reducer;
