import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
// import {Route, Switch} from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false};
  }

  render() {
    return (
      <BrowserRouter>
       <NavBar isLoggedIn={this.state.isLoggedIn}/>
      {/* <Switch> */}
      <div className="container-fluid">
     <Routes>
 
      <Route path="/" exact element={<Login/>} />
      <Route path="/dashboard" exact element={<Dashboard/>} />
      <Route path="customers" exact element={<CustomersList/>} />
      <Route path="/cart" exact element={<ShoppingCart/>} />
      <Route path="*" element={<NoMatchPage/>} />
      </Routes>
      </div>
      {/* </Switch> */}
      </BrowserRouter>
      
    );
  }
}
