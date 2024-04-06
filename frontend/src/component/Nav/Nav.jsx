import React from 'react'
import './css/style.css'
import './css/bootstrap.min.css'
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
          <h2 className="m-0 text-primary">Service360</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink exact to="/" className="nav-item nav-link" activeClassName="active-link">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link" activeClassName="active-link">About</NavLink>
            <NavLink to="/service" className="nav-item nav-link" activeClassName="active-link">Service</NavLink>
            <NavLink to="/contactus" className="nav-item nav-link" activeClassName="active-link">Contact</NavLink>
          </div>
          <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav
