import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import {Route} from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <NavBar />
     <Routes>
       
      <Route path="/" exact element={<Login/>} />
      <Route path="/dashboard" exact element={<Dashboard/>} />
      <Route path="customers" exact element={<CustomersList/>} />
      <Route path="/cart" exact element={<ShoppingCart/>} />
      </Routes>
      </BrowserRouter>
      
    );
  }
}
