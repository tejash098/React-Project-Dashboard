import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title">Projects</div>
          <div className="sidebar-subtitle">Dashboard</div>
        </div>
        <div className="sidebar-links">
          <Link to="/" className="sidebar-link active">
            Overview
          </Link>
        </div>
      </nav>
    </>
  );
}
