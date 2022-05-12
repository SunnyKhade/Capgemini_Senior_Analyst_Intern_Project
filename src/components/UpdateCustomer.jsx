import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateCustomer = () => {
  const params = useParams();

    const [customer, setCustomer] = useState({
        customerId: params.customerId,
        customerName: "",
        customerPassword: "",
      });

    
    //console.log(params);

    useEffect(() => {
        axios
          .get(`http://localhost:8090/customers/view/${params.customerId}`)
          .then((res) => {
            console.log(res);
            setCustomer((setCustomer) => ({
              ...customer,
              //customerId: res.data.customerId,
              customerName: res.data.customerName,
              customerPassword: res.data.customerPassword,
            }));
          })
          .catch((err) => console.log(err));
      }, []);

    
    const handleChange = (event) => {
        setCustomer((setCustomer) => ({ ...customer, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .put(`http://localhost:8090/customers/update`, customer)
          .then((res) => {
            console.log(res);
            alert("Updated Customer " + params.customerId + " Successfully!!");
          })
          .catch((err) => {
            //console.log(err);
          });
    };

    return ( 
        <div className="w-50 mx-auto border p-3 mt-3">
      <h1>Update Customer</h1>
      <form onSubmit={handleSubmit}>
        {/*<div className="mb-3">
          <label htmlFor="customerId" className="form-label float-start">
            Customer Id
          </label>
          <input
            type="number"
            className="form-control"
            id="customerId"
            aria-describedby="emailHelp"
            value={customer.customerId}
            name="customerId"
            onChange={handleChange}
          />
    </div>*/}
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label float-start">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            value={customer.customerName}
            name="customerName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customerPassword" className="form-label float-start">
            Customer Password
          </label>
          <input
            type="text"
            className="form-control"
            id="customerPassword"
            value={customer.customerPassword}
            name="customerPassword"
            onChange={handleChange}
          />
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
 
export default UpdateCustomer;