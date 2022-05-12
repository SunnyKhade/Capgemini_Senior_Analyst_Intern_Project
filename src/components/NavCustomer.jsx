import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavCustomer extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <h3>CUSTOMER</h3>
            <Link to="/medicine" type="button" className="btn btn-primary mx-4 mt-4">
                Medicines
            </Link>
            <Link to="/order" type="button" className="btn btn-primary mx-4 mt-4">
                Orders
            </Link>
            </div>
        );
    }
}
 
export default NavCustomer;