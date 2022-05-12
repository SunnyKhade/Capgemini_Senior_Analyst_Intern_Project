import React, { Component } from 'react';
import axios from "axios";
import MedicineTable from './MedicineTable';

class Medicine extends Component {
    state = { 
        medicines: [],
     }

    componentDidMount() {
        console.log("componentDidMount");
        axios
          .get("http://localhost:8090/medicines/show")
          .then((response) => {
            console.log(response);
            this.setState({ medicines: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() { 
        return (
            <div>
                <MedicineTable medicines={this.state.medicines} />
            </div>
        );
    }
}
 
export default Medicine;