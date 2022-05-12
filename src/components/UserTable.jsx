import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class UserTable extends Component {
    handleDelete = (userId) => {
        console.log(userId);
        axios
          .delete(`http://localhost:8090/users/remove/${userId}`)
          .then((response) => {
            console.log(response);
            alert("User Deleted");
            this.componentDidMount();
          })
          .catch((error) => {
            console.log(error);
          });
      };

    render() { 
        return (
                <div className="w-75 mx-auto mt-3">
            <Link
              to="/user/add"
              type="button"
              className="btn btn-primary float-end"
            >
              Add User
            </Link>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>User Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.map((u) => (
                  <tr key={u.userId}>
                    <td>{u.userId}</td>
                    <td>{u.userName}</td>
                    <td>{u.userType}</td>
                    <td>
                      <Link to={`/user/update/${u.userId}`}>
                        <i className="bi bi-pencil-square me-3"></i>
                      </Link>
    
                      <i
                        className="bi bi-trash"
                        type="button"
                        onClick={() => this.handleDelete(u.userId)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
}
 
export default UserTable;