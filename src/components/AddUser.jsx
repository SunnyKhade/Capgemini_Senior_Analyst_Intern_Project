import React, { Component } from 'react';
import axios from "axios";
import Joi from "joi-browser";

class AddUser extends Component {
    state = { 
        user: {
            userName: "",
            userType: "",
        },
        errors: {},
        errMsg: "",
     };

    schema = {
        userName: Joi.string().required(),
        userType: Joi.string().required(),
    };
    validate = () => {
        const errors = {};
        const result = Joi.validate(this.state.user, this.schema, {
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
        const newUser = { ...this.state.user};
        newUser[event.target.name] = event.target.value;
        this.setState({ user: newUser });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        this.setState({ errors: this.validate() });
        console.log(this.state.errors);
        if (this.state.errors) return;
        axios
          .post("http://localhost:8090/users/add", this.state.user)
          .then((res) => {
            console.log(res.data);
            alert("User Added Successfully!");
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
        <h1>Add User</h1>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label float-start">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={this.state.user.userName}
              name="userName"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.userName}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="userType" className="form-label float-start">
              User Type
            </label>
            <input
              type="text"
              className="form-control"
              id="userType"
              value={this.state.user.userType}
              name="userType"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.userType}</small>}
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
 
export default AddUser;