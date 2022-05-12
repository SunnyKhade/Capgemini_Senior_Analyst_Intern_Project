import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavAdmin extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <h3>ADMIN</h3>
            <Link to="/customer" type="button" className="btn btn-primary mx-4 mt-4">
                Customer Management
            </Link>
            <Link to="/medicine" type="button" className="btn btn-primary mx-4 mt-4">
                Medicine Management
            </Link>
            <Link to="/order" type="button" className="btn btn-primary mx-4 mt-4">
                Order Management
            </Link>
            <Link to="/user" type="button" className="btn btn-primary mx-4 mt-4">
                User Management
            </Link>
            </div>
        );
    }
}
 
export default NavAdmin;