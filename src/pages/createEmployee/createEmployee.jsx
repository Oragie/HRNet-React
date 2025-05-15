import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../features/employees/employeesSlice";
import { states } from "../../assets/states";
import Modal from "./../../components/Modal/index.jsx";
import "./createEmployee.css";

const CreateEmployee = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    dispatch(addEmployee(data));
    setShowModal(true);
    reset();
  };

  return (
    <div className="create-employee-container">
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="create-employee-form">
        <div className="form-group">
          <label>First Name</label>
          <input {...register("firstName")} required />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input {...register("lastName")} required />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" {...register("dateOfBirth")} required />
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <input type="date" {...register("startDate")} required />
        </div>

        <fieldset className="address-fieldset">
          <legend>Address</legend>

          <div className="form-group">
            <label>Street</label>
            <input {...register("street")} required />
          </div>

          <div className="form-group">
            <label>City</label>
            <input {...register("city")} required />
          </div>

          <div className="form-group">
            <label>State</label>
            <select {...register("state")} required>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Zip Code</label>
            <input type="number" {...register("zipCode")} required />
          </div>
        </fieldset>

        <div className="form-group">
          <label>Department</label>
          <select {...register("department")} required>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Save
        </button>
      </form>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>Employee Created!</p>
        </Modal>
      )}
    </div>
  );
};

export default CreateEmployee;
