import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


class MedicineTable extends Component {

    handleDelete = (medicineId) => {
        console.log(medicineId);
        axios
          .delete(`http://localhost:8090/medicines/remove/${medicineId}`)
          .then((response) => {
            console.log(response);
            alert("Medicine Deleted");
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
              to="/medicine/add"
              type="button"
              className="btn btn-primary float-end"
            >
              Add Medicine
            </Link>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Medicine ID</th>
                  <th>Medicine Name</th>
                  <th>Medicine Cost</th>
                  <th>Company Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.medicines.map((m) => (
                  <tr key={m.medicineId}>
                    <td>{m.medicineId}</td>
                    <td>{m.medicineName}</td>
                    <td>{m.medicineCost}</td>
                    <td>{m.companyName}</td>
                    <td>
                      <Link to={`/medicine/update/${m.medicineId}`}>
                        <i className="bi bi-pencil-square me-3"></i>
                      </Link>
    
                      <i
                        className="bi bi-trash"
                        type="button"
                        onClick={() => this.handleDelete(m.medicineId)}
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
 
export default MedicineTable;