import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateMedicine = () => {
  const params = useParams();

    const [medicine, setMedicine] = useState({
        medicineId: params.medicineId,
        medicineName: "",
        medicineCost: "",
        mfd: "",
        expiryDate: "",
        companyName: "",
      });

    
    //console.log(params);

    useEffect(() => {
        axios
          .get(`http://localhost:8090/medicines/view/${params.medicineId}`)
          .then((res) => {
            console.log(res);
            setMedicine((setMedicine) => ({
              ...medicine,
              //medicineId: res.data.medicineId,
              medicineName: res.data.medicineName,
              medicineCost: res.data.medicineCost,
              mfd: res.data.mfd,
              expiryDate: res.data.expiryDate,
              companyName: res.data.companyName,
            }));
          })
          .catch((err) => console.log(err));
      }, []);

    const handleChange = (event) => {
        setMedicine((setMedicine) => ({ ...medicine, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .put(`http://localhost:8090/medicines/update`, medicine)
          .then((res) => {
            //console.log(res);
            alert("Updated Medicine " + params.medicineId + " Successfully!!");
          })
          .catch((err) => {
            //console.log(err);
          });
    };

    return ( 
        <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="w-50 border p-3 mt-3"
      >
        <h1>Update Medicine</h1>
        <form onSubmit={handleSubmit}>
        {/*<div className="mb-3">
            <label htmlFor="medicineId" className="form-label float-start">
              Medicine ID
            </label>
            <input
              type="number"
              className="form-control"
              id="medicineId"
              value={medicine.medicineId}
              name="medicineId"
              onChange={handleChange}
            />
    </div>*/}
          <div className="mb-3">
            <label htmlFor="medicineName" className="form-label float-start">
              Medicine Name
            </label>
            <input
              type="text"
              className="form-control"
              id="medicineName"
              value={medicine.medicineName}
              name="medicineName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="medicineCost" className="form-label float-start">
              Medicine Cost
            </label>
            <input
              type="number"
              className="form-control"
              id="medicineCost"
              value={medicine.medicineCost}
              name="medicineCost"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mfd" className="form-label float-start">
              Manufacture Date
            </label>
            <input
              type="date"
              className="form-control"
              id="mfd"
              value={medicine.mfd}
              name="mfd"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label float-start">
                Expiry Date
            </label>
            <input
              type="date"
              className="form-control"
              id="expiryDate"
              value={medicine.expiryDate}
              name="expiryDate"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label float-start">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              value={medicine.companyName}
              name="companyName"
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
 
export default UpdateMedicine;