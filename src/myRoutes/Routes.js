import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/users/Users"
import AddUser from "../pages/users/AddUser"
import EditUser from "../pages/users/EditUser"
import Order from "../pages/orders/Order";
import Setting from "../pages/settings/Setting";
import Category from "../pages/categories/Category";
import Stores from "../pages/stores/Stores";
import Products from "../pages/products/Products";
import AddProduct from "../pages/products/AddProduct"
import EditProduct from "../pages/products/EditProduct"
import RestaurantInfo from "../pages/restaurantInfo/RestaurantInfo";
import Profile from "../pages/profile/Profile";
import AddStore from '../pages/stores/AddStore';
import EditStore from '../pages/stores/EditStore';
import Header from '../components/navbar/HeaderNavbar';

const MyRoutes = () => {
  return (
    <div>
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser" element={<EditUser />} />
          <Route path="/stores" element={<Stores />} />
          <Route path='/addStore' element={<AddStore/>}/>
          <Route path='/editStore'element={<EditStore/>}/>
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='/editProduct' element={<EditProduct/>}/>
          <Route path="/order" element={<Order />} />
          <Route path="/restaurantInfo" element={<RestaurantInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
    </div>
  )
}

export default MyRoutes