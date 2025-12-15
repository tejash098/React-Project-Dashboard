import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title">Projects</div>
          <div className="sidebar-subtitle">Dashboard</div>
        </div>
        <div className="sidebar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            Overview
          </NavLink>
          <NavLink
            to="/otp"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            OTP-App
          </NavLink>
        </div>
      </nav>
    </>
  );
}
