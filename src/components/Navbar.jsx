import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Vehicles
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Updated for Bootstrap 5
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/edit/:id">
                Edit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view">
                View
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
