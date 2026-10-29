import { useNavigate } from "react-router-dom";
import "./HrHome.css";

function HrHome() {
  const navigate = useNavigate();

  const currentuser = JSON.parse(
    localStorage.getItem("currentuser") || "null"
  );

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    navigate("/login");
  };

  // Protect the page if the user is not logged in as HR
  if (!currentuser || currentuser.role !== "HR") {
    return (
      <div className="hr-access-denied">
        <i className="bi bi-shield-lock"></i>
        <h2>Access Denied</h2>
        <p>Please log in with an HR account to continue.</p>
        <button onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="hr-dashboard">
      <nav className="hr-navbar">
        <div className="hr-brand">
          <i className="bi bi-grid-1x2-fill"></i>
          WorkFlow
          <span>HR Portal</span>
        </div>

        <button className="hr-logout" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </nav>

      <main className="container hr-main">
        <section className="hr-welcome">
          <div>
            <span className="hr-badge">
              <i className="bi bi-stars me-1"></i>
              HR DASHBOARD
            </span>

            <h1>
              Welcome, {currentuser.name || "HR"}!
            </h1>

            <p>
              Manage your workforce and keep your team organized
              from one place.
            </p>
          </div>

          <div className="hr-welcome-icon">
            <i className="bi bi-people-fill"></i>
          </div>
        </section>

        <section className="hr-section">
          <h2>Quick Access</h2>
          <p className="hr-section-subtitle">
            Choose an area to get started.
          </p>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="hr-feature-card">
                <div className="hr-feature-icon purple">
                  <i className="bi bi-people"></i>
                </div>
                <h3>Employee Management</h3>
                <p>
                  Access employee-related tools and manage team
                  information.
                </p>
                <span className="hr-feature-label">
                  <i className="bi bi-person-workspace me-2"></i>
                  HR tools
                </span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="hr-feature-card">
                <div className="hr-feature-icon blue">
                  <i className="bi bi-calendar-check"></i>
                </div>
                <h3>Attendance</h3>
                <p>
                  Keep track of attendance and organize workforce
                  schedules.
                </p>
                <span className="hr-feature-label">
                  <i className="bi bi-clock me-2"></i>
                  Attendance tools
                </span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="hr-feature-card">
                <div className="hr-feature-icon pink">
                  <i className="bi bi-clipboard-check"></i>
                </div>
                <h3>Leave Management</h3>
                <p>
                  Organize leave requests and help coordinate
                  employee availability.
                </p>
                <span className="hr-feature-label">
                  <i className="bi bi-calendar2-week me-2"></i>
                  Leave tools
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer className="hr-footer">
          <i className="bi bi-shield-check me-2"></i>
          WorkFlow HR Portal · Manage your team efficiently.
        </footer>
      </main>
    </div>
  );
}

export default HrHome;