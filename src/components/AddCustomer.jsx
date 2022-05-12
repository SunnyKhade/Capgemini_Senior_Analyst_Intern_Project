import React, { Component } from 'react';
import axios from "axios";
import Joi from "joi-browser";

class AddCustomer extends Component {
    state = { 
        customer: {
            customerName: "",
            customerPassword: "",
          },
          errors: {},
          errMsg: "",
     };

    schema = {
        customerName: Joi.string().required(),
        customerPassword: Joi.string().required(),
    };

    validate = () => {
        const errors = {};
        const result = Joi.validate(this.state.customer, this.schema, {
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
        const newCustomer = { ...this.state.customer };
        newCustomer[event.target.name] = event.target.value;
        this.setState({ customer: newCustomer });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        this.setState({ errors: this.validate() });
        console.log(this.state.errors);
        if (this.state.errors) return;
        axios
          .post("http://localhost:8090/customers/add", this.state.customer)
          .then((res) => {
            console.log(res.data);
            alert("Customer Added Successfully!");
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
        <h1>Add Customer</h1>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="customerName" className="form-label float-start">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              value={this.state.customer.customerName}
              name="customerName"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.customerName}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="customerPassword" className="form-label float-start">
              Customer Password
            </label>
            <input
              type="text"
              className="form-control"
              id="customerPassword"
              value={this.state.customer.customerPassword}
              name="customerPassword"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.customerPassword}</small>}
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
 
export default AddCustomer;