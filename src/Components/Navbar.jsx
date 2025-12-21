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
            to="/Portfolio"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            Contact
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            Projects
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
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            TODO-App
          </NavLink>
          <NavLink
            to="/password"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            Password-Validation
          </NavLink>
          <NavLink
            to="/captcha"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            Captcha-Validation
          </NavLink>
          <NavLink
            to="/currency"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            Currency-Converter
          </NavLink>
          <NavLink
            to={"/passwordGenerate"}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            Password-Generator
          </NavLink>
          <NavLink
            to="/bookLibrary"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end
          >
            Book-Library
          </NavLink>
        </div>
      </nav>
    </>
  );
}
