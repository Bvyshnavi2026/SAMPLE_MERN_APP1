import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const currentuser = JSON.parse(
    localStorage.getItem("currentuser") || "null"
  );

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  const renderLink = (to, label, icon) => (
    <Link
      className="nav-link-custom"
      to={to}
      onClick={closeMenu}
      key={label}
    >
      <i className={`bi ${icon} me-2`}></i>
      {label}
    </Link>
  );

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid px-3 px-lg-5">

        {/* Brand */}
        <Link
          to="/"
          className="navbar-brand brand-logo"
          onClick={closeMenu}
        >
          <span className="brand-icon">
            <i className="bi bi-grid-1x2-fill"></i>
          </span>
          Work<span className="brand-highlight">Flow</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarContent"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        {/* Navigation */}
        <div
          className={`collapse navbar-collapse ${
            menuOpen ? "show" : ""
          }`}
          id="navbarContent"
        >
          <div className="navbar-nav mx-auto nav-main">
            {renderLink("/", "Home", "bi-house-door")}
            {renderLink("/about", "About", "bi-info-circle")}
            {renderLink("/contact", "Contact", "bi-envelope")}
            {renderLink("/service", "Service", "bi-grid")}

            {!currentuser && (
              <>
                {renderLink("/register", "Register", "bi-person-plus")}
                {renderLink("/login", "Login", "bi-box-arrow-in-right")}
              </>
            )}

            {currentuser?.role === "HR" && (
              <>
                {renderLink("#", "Assign Task", "bi-clipboard-check")}
                {renderLink("#", "View Employees", "bi-people")}
              </>
            )}

            {currentuser?.role === "EMPLOYEE" && (
              <>
                {renderLink("#", "View Task", "bi-list-task")}
                {renderLink("#", "Add Todo", "bi-plus-circle")}
              </>
            )}

            {currentuser?.role === "admin" && (
              <>
                {renderLink("#", "View Employees", "bi-people")}
                {renderLink("#", "View Tasks", "bi-kanban")}
              </>
            )}
          </div>

          {/* User section */}
          {currentuser && (
            <div className="user-section">
              <div className="user-avatar">
                <i className="bi bi-person-fill"></i>
              </div>

              <div className="user-info">
                <span className="user-name">
                  {currentuser.name || currentuser.username || "User"}
                </span>
                <span className="user-role">
                  {currentuser.role}
                </span>
              </div>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;