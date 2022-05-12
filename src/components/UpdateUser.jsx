import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
    const params = useParams();
    //console.log(params); 

    const [user, setUser] = useState({
        userId: params.userId,
        userName: "",
        userType: "",
      });

    

    useEffect(() => {
      axios
        .get(`http://localhost:8090/users/view/${params.userId}`)
        .then((res) => {
          console.log(res);
          setUser((setUser) => ({
            ...user,
            //userId: res.data.userId,
            userName: res.data.userName,
            userType: res.data.userType,
          }));
        })
        .catch((err) => console.log(err));
    }, []);

    const handleChange = (event) => {
        setUser((setUser) => ({ ...user, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .put(`http://localhost:8090/users/update`, user)
          .then((res) => {
            console.log(res);
            alert("Updated User " + params.userId + " Successfully!!");
          })
          .catch((err) => {
            //console.log(err);
          });
    };
    return ( 
        <div className="w-50 mx-auto border p-3 mt-3">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        {/*<div className="mb-3">
          <label htmlFor="userId" className="form-label float-start">
            User ID
          </label>
          <input
            type="number"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
            value={user.userId}
            name="userId"
            onChange={handleChange}
          />
    </div>*/}
        <div className="mb-3">
          <label htmlFor="userName" className="form-label float-start">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={user.userName}
            name="userName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userType" className="form-label float-start">
            User Type
          </label>
          <input
            type="text"
            className="form-control"
            id="userType"
            value={user.userType}
            name="userType"
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
 
export default UpdateUser;