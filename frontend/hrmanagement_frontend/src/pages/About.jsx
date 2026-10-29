import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero section */}
      <section className="about-hero container-fluid">
        <div className="about-hero-content text-center">
          <span className="about-badge">
            <i className="bi bi-stars me-2"></i>
            ABOUT WORKFLOW
          </span>

          <h1>
            Welcome to <span>WorkFlow</span>
          </h1>

          <p>
            A smarter way to organize tasks, connect teams, and
            accomplish more every day.
          </p>

          <a href="#about-details" className="btn about-btn">
            Discover More
            <i className="bi bi-arrow-down ms-2"></i>
          </a>
        </div>
      </section>

      {/* About details */}
      <section
        id="about-details"
        className="container about-details py-5"
      >
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <div className="about-visual">
              <div className="about-visual-icon">
                <i className="bi bi-kanban"></i>
              </div>
              <h2>Work Together. Achieve More.</h2>
              <p>
                One platform to keep your tasks and teamwork organized.
              </p>

              <div className="visual-tags">
                <span><i className="bi bi-check-circle-fill"></i> Tasks</span>
                <span><i className="bi bi-check-circle-fill"></i> Teams</span>
                <span><i className="bi bi-check-circle-fill"></i> Progress</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <span className="about-section-label">WHO WE ARE</span>

            <h2 className="about-heading">
              Making Work Simple and Organized
            </h2>

            <p className="about-description">
              WorkFlow is a task management application designed to
              help HR teams and employees manage their daily work
              efficiently. It provides a convenient way to organize
              assignments, track tasks, and improve team coordination.
            </p>

            <div className="about-point">
              <div className="point-icon">
                <i className="bi bi-clipboard-check"></i>
              </div>
              <div>
                <h5>Easy Task Management</h5>
                <p>Create, assign, and manage tasks in one place.</p>
              </div>
            </div>

            <div className="about-point">
              <div className="point-icon">
                <i className="bi bi-people"></i>
              </div>
              <div>
                <h5>Role-Based Access</h5>
                <p>Separate menus for HR, employees, and administrators.</p>
              </div>
            </div>

            <div className="about-point">
              <div className="point-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div>
                <h5>Better Productivity</h5>
                <p>Keep daily work structured and easy to follow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="about-mission">
        <div className="container text-center py-5">
          <i className="bi bi-bullseye mission-icon"></i>

          <h2>Our Mission</h2>

          <p>
            To make task management easier by helping people plan,
            organize, and complete their work through a simple,
            user-friendly platform.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
