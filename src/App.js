import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import NavAdmin from './components/NavAdmin';
import NavCustomer from './components/NavCustomer';

import 'bootstrap/dist/css/bootstrap.css';
import {Switch, Route, Redirect, Routes, Navigate} from "react-router-dom";
import Customer from './components/Customer';
import Medicine from './components/Medicine';
import Order from './components/Order';
import User from './components/User';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import AddMedicine from './components/AddMedicine';
import UpdateMedicine from './components/UpdateMedicine';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import AddOrder from './components/AddOrder';
import UpdateOrder from './components/UpdateOrder';

function App() {
  return (
    <div className="App">
      <NavBar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/navadmin" element={<NavAdmin />} />
        <Route path="/navcus" element={<NavCustomer />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/order" element={<Order />} />
        <Route path="/user" element={<User />} />
        <Route path="/customer/add" element={<AddCustomer />} />
        <Route path="/customer/update/:customerId" element={<UpdateCustomer />} />
        <Route path="/medicine/add" element={<AddMedicine />} />
        <Route path="/medicine/update/:medicineId" element={<UpdateMedicine />} />
        <Route path="/user/add" element={<AddUser/>} />
        <Route path="/user/update/:userId" element={<UpdateUser />} />
        <Route path="/order/add" element={<AddOrder />} />
        <Route path="/order/update/:orderId" element={<UpdateOrder />} />
      </Routes> 
    </div>
  );
}

export default App;
