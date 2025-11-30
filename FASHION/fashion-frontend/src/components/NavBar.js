// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="brand">FashionShop Admin</h1>
      <div className="links">
  <NavLink to="/add">Add</NavLink>
  <NavLink to="/update">Update</NavLink>
  <NavLink to="/delete">Delete</NavLink>
  <NavLink to="/summary">Season Summary</NavLink>
  <NavLink to="/units">Top Units</NavLink>
  <NavLink to="/rating">Filter by Rating</NavLink>
</div>

    </nav>
  );
};

export default NavBar;
