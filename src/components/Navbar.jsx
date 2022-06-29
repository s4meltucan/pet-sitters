import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-light ms-5 mt-3">
      <div className="d-flex">
        <img
          src="https://cdn-icons-png.flaticon.com/512/91/91528.png"
          width="50"
          alt=""
        />
        <h2>Pet sitters</h2>
      </div>
      <div>
        <NavLink to="/" className="btn btn-outline-primary me-3">
          Inicio
        </NavLink>
        <NavLink to="/Cuidadores" className="btn btn-outline-primary me-3">
          Cuidadores
        </NavLink>
        <NavLink to="/Login" className="btn btn-outline-primary me-3">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
