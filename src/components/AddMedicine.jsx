import React, { Component } from 'react';
import axios from "axios";
import Joi from "joi-browser";

class AddMedicine extends Component {
    state = { 
        medicine: {
            medicineName: "",
            medicineCost: "",
            mfd: "",
            expiryDate: "",
            companyName: "",
        },
        errors: {},
        errMsg: "",
     };
     
    schema = {
        medicineName: Joi.string().required(),
        medicineCost: Joi.number().required(),
        mfd: Joi.date().required(),
        expiryDate: Joi.date().required(),
        companyName: Joi.string().required(),
    };

    validate = () => {
        const errors = {};
        const result = Joi.validate(this.state.medicine, this.schema, {
          abortEarly: false,
        });
        console.log(result);
        if (result.error != null)
          for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
          }
        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleChange = (event) => {
        const newMedicine = { ...this.state.medicine };
        newMedicine[event.target.name] = event.target.value;
        this.setState({ medicine: newMedicine });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        this.setState({ errors: this.validate() });
        console.log(this.state.errors);
        if (this.state.errors) return;
        axios
          .post("http://localhost:8090/medicines/add", this.state.medicine)
          .then((res) => {
            console.log(res.data);
            alert("Medicine Added Successfully!");
          })
          .catch((err) => {
            console.log(err);
            this.setState({ errMsg: err.response.data.message });
          });
    };

    render() { 
        const { errors, errMsg } = this.state;

        return (
            <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="w-50 border p-3 mt-3"
      >
        <h1>Add Medicine</h1>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="medicineName" className="form-label float-start">
              Medicine Name
            </label>
            <input
              type="text"
              className="form-control"
              id="medicineName"
              value={this.state.medicine.medicineName}
              name="medicineName"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.medicineName}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="medicineCost" className="form-label float-start">
              Medicine Cost
            </label>
            <input
              type="number"
              className="form-control"
              id="medicineCost"
              value={this.state.medicine.medicineCost}
              name="medicineCost"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.medicineCost}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="mfd" className="form-label float-start">
              Manufacture Date
            </label>
            <input
              type="date"
              className="form-control"
              id="mfd"
              value={this.state.medicine.mfd}
              name="mfd"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.mfd}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label float-start">
                Expiry Date
            </label>
            <input
              type="date"
              className="form-control"
              id="expiryDate"
              value={this.state.medicine.expiryDate}
              name="expiryDate"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.expiryDate}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label float-start">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              value={this.state.medicine.companyName}
              name="companyName"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.companyName}</small>}
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>
        </form>
      </div>
        );
    }
}
 
export default AddMedicine;