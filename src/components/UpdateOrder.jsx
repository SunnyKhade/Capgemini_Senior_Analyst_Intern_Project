import React, {   useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateOrder = () => {
  const params = useParams();
  //console.log(params);

  // initialize the state
  const [order, setOrder] = useState({
    orderId: params.orderId,
    orderDate: "",
    dispatchDate: "",
    totalCost: "",
  });

  useEffect(() => {
    console.log("Inside useEffect");
    axios
      .get(`http://localhost:8090/orders/view/${params.orderId}`)
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
      })
      .catch((err) => {/*console.log(err)*/});
  }, []);
  const handleChange = (event) => {
    console.log("handleChange");
    setOrder((order) => ({
      ...order,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .put(`http://localhost:8090/orders/update`,order)
      .then((res) => {
        console.log(res.data);
        alert("Updated Order successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className="w-50 border p-3 mt-3"
    >
      <h1>Update Order</h1>
      <form onSubmit={handleSubmit}>
        {/*<div className="mb-3">
          <label htmlFor="orderId" className="form-label float-start">
            Order Id
          </label>
          <input
            type="number"
            className="form-control"
            id="orderId"
            value={order.orderId}
            name="orderId"
            onChange={handleChange}
          />
  </div>*/}
        <div className="mb-3">
          <label htmlFor="orderDate" className="form-label float-start">
            Order Date
          </label>
          <input
            type="date"
            className="form-control"
            id="orderDate"
            value={order.orderDate}
            name="orderDate"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dispatchDate" className="form-label float-start">
            Order Dispatch Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dispatchDate"
            value={order.dispatchDate}
            name="dispatchDate"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalCost" className='form-label float-start'>
              Total Cost
          </label>
          <input 
              type="number" 
              className='form-control'
              id='totalCost'
              value={order.totalCost}
              name="totalCost"
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
};

export default UpdateOrder;