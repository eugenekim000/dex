import "../styles/Header.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <span className="circle-container">
        <span />
        <span />
        <span />
        <span />
      </span>
      <Link to="/">Home</Link> <Link to="/catch-list">Catch List</Link>
    </header>
  );
}
