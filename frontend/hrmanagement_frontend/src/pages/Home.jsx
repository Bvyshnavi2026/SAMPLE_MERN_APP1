import imgone from "../assets/imgone.jpg";
import imgtwo from "../assets/imgtwo.jpg";
import imgthree from "../assets/imgthree.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home-page container-fluid">
      <div
        id="homeCarousel"
        className="carousel slide home-carousel"
        data-bs-ride="carousel"
        data-bs-interval="3500"
      >
        {/* Indicators */}
        <div className="carousel-indicators custom-indicators">
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel images */}
        <div className="carousel-inner home-carousel-inner">
          <div className="carousel-item active">
            <img
              src={imgone}
              className="d-block w-100 home-slide-image"
              alt="Welcome slide"
            />

            <div className="home-caption">
              <span className="caption-tag">WELCOME TO WORKFLOW</span>
              <h1>Work Smarter, Together.</h1>
              <p>
                Organize tasks, manage teams, and achieve your goals
                with ease.
              </p>
              <a href="/about" className="btn home-cta">
                Explore More <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={imgtwo}
              className="d-block w-100 home-slide-image"
              alt="Team collaboration"
            />

            <div className="home-caption">
              <span className="caption-tag">TEAM COLLABORATION</span>
              <h1>Better Teams, Better Results.</h1>
              <p>
                Bring your team together and keep every task on track.
              </p>
              <a href="/service" className="btn home-cta">
                Our Services <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={imgthree}
              className="d-block w-100 home-slide-image"
              alt="Task management"
            />

            <div className="home-caption">
              <span className="caption-tag">SMART TASK MANAGEMENT</span>
              <h1>Plan It. Track It. Achieve It.</h1>
              <p>
                Manage assignments and make your daily work more
                productive.
              </p>
              <a href="/contact" className="btn home-cta">
                Contact Us <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Previous button */}
        <button
          className="carousel-control-prev home-control"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
          aria-label="Previous slide"
        >
          <span className="control-circle">
            <i className="bi bi-chevron-left"></i>
          </span>
        </button>

        {/* Next button */}
        <button
          className="carousel-control-next home-control"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
          aria-label="Next slide"
        >
          <span className="control-circle">
            <i className="bi bi-chevron-right"></i>
          </span>
        </button>
      </div>

      {/* Feature cards */}
      <section className="home-features container py-5">
        <div className="text-center mb-4">
          <span className="section-tag">WHY WORKFLOW?</span>
          <h2 className="features-heading">
            Everything You Need to Work Better
          </h2>
          <p className="features-subtitle">
            Simple tools to keep your work organized and your team connected.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-list-check"></i>
              </div>
              <h5>Task Management</h5>
              <p>
                Create, assign, and track tasks from one convenient place.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-people"></i>
              </div>
              <h5>Team Collaboration</h5>
              <p>
                Help HR and employees stay organized and work together.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h5>Track Progress</h5>
              <p>
                Keep an eye on assignments and make progress easier to manage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;