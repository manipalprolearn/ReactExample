import React, { Component } from "react";

export class HeaderComponent extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark mb-5">
    <a className="navbar-brand" href="/">Sonu Traders</a>
    <div className="navbar-expand mr-auto">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="/dashboard" routerLinkActive="active">Home</a>
        <a className="nav-item nav-link" href="/admin"  routerLinkActive="active">Admin</a>
        <a className="nav-item nav-link" href="/product" routerLinkActive="active">Products</a>
      </div>
    </div>
    <div className="navbar-expand ml-auto navbar-nav">
      <div className="navbar-nav">
          <a className="nav-item nav-link" href="/" >
              <i className="fa fa-comment"></i> Contact Us
          </a>
        <a className="nav-item nav-link" href="/" target="_blank">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="nav-item nav-link" href="/" target="_blank">
          <i className="fa fa-medium"></i>
        </a>
      </div>
    </div>
  </nav>
        );
    }
}