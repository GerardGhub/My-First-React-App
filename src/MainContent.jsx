import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "153-456",
        address: { city: "New Delhi" },
      },
      {
        id: 2,
        name: "Jilo",
        phone: "111-456",
        address: { city: "New Jersey" },
      },
      {
        id: 3,
        name: "Peter",
        phone: "143-456",
        address: { city: "New London" },
      },
      { id: 4, name: "Gerard", phone: "163-456", address: { city: "Berlin" } },
      { id: 5, name: "Vilo", phone: "333-456", address: { city: "New York" } },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  //Executes when the user clicks on refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };
}
