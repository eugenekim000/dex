import "../styles/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/pokeball-icon.png";

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="circle-container">
        <span />
        <span />
        <span />
        <span />
      </Link>

      <Link to="/catch-list">
        <img src={icon} className="pokeball-icon" alt="catch list" />
      </Link>
    </header>
  );
}
