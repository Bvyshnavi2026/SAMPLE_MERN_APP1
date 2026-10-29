import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [emailid, setEmailid] = useState("");
  const [colname, setColname] = useState("VFSTR");
  const [submitted, setSubmitted] = useState(false);

  const RegisterForm = (event) => {
    event.preventDefault();

    console.log({ name, age, emailid, colname });
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="container py-5">
        <div className="row justify-content-center align-items-start g-4">

          {/* Registration form */}
          <div className="col-12 col-lg-7">
            <div className="contact-card">
              <div className="contact-heading text-center">
                <div className="contact-icon">
                  <i className="bi bi-person-lines-fill"></i>
                </div>

                <h1>Contact Us</h1>
                <p>
                  Fill in your details using the form below.
                </p>
              </div>

              {submitted && (
                <div className="alert alert-success" role="status">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Form submitted successfully!
                </div>
              )}

              <form onSubmit={RegisterForm}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>

                  <div className="input-group custom-input">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>

                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                {/* Age */}
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>

                  <div className="input-group custom-input">
                    <span className="input-group-text">
                      <i className="bi bi-calendar3"></i>
                    </span>

                    <input
                      id="age"
                      type="number"
                      className="form-control"
                      value={age}
                      onChange={(event) => {
                        setAge(event.target.value);
                        setSubmitted(false);
                      }}
                      min="1"
                      max="120"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="emailid" className="form-label">
                    Email Address
                  </label>

                  <div className="input-group custom-input">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>

                    <input
                      id="emailid"
                      type="email"
                      className="form-control"
                      value={emailid}
                      onChange={(event) => {
                        setEmailid(event.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* College */}
                <div className="mb-4">
                  <label htmlFor="colname" className="form-label">
                    College Name
                  </label>

                  <div className="input-group custom-input">
                    <span className="input-group-text">
                      <i className="bi bi-building"></i>
                    </span>

                    <input
                      id="colname"
                      type="text"
                      className="form-control"
                      value={colname}
                      onChange={(event) => {
                        setColname(event.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Enter your college name"
                      required
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button type="submit" className="register-btn w-100">
                  Register
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Live details preview */}
          <div className="col-12 col-lg-5">
            <div className="preview-card">
              <div className="preview-heading">
                <i className="bi bi-person-badge me-2"></i>
                Your Details
              </div>

              <p className="preview-description">
                Your information appears here as you fill in the form.
              </p>

              <div className="preview-item">
                <span><i className="bi bi-person me-2"></i>Name</span>
                <strong>{name || "Not entered"}</strong>
              </div>

              <div className="preview-item">
                <span><i className="bi bi-calendar3 me-2"></i>Age</span>
                <strong>{age || "Not entered"}</strong>
              </div>

              <div className="preview-item">
                <span><i className="bi bi-envelope me-2"></i>Email</span>
                <strong className="preview-value">
                  {emailid || "Not entered"}
                </strong>
              </div>

              <div className="preview-item">
                <span><i className="bi bi-building me-2"></i>College</span>
                <strong>{colname || "Not entered"}</strong>
              </div>

              <div className="preview-note">
                <i className="bi bi-info-circle me-2"></i>
                This is a demo form. The details are not saved to a database.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;