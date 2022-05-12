import React, { Component } from 'react';
import axios from 'axios';
import OrderTable from './OrderTable';

class Order extends Component {
    state = { 
        orders : [],
     };

     componentDidMount(){
        console.log("componentDidMount");
        axios
        .get("http://localhost:8090/orders/show")
        .then((response) => {
            console.log(response);
            this.setState({orders: response.data});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() { 
        return (
            <div>
                <OrderTable orders = {this.state.orders}/>
            </div>
        );
    }
}
 
export default Order;