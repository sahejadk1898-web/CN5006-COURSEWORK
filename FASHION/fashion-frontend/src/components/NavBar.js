import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="brand">Fashion Dashboard</h2>

      <div className="nav-buttons">
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
        <Link to="/summary">Summary</Link>
        <Link to="/units">Top Units</Link>
        <Link to="/rating">Rating</Link>
      </div>
    </nav>
  );
}
