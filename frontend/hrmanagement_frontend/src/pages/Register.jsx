import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const req = await fetch("http://localhost:3000/api/emp/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await req.json();

      if (req.ok) {
        setMessage("Registration successful! You can now log in.");
        setName("");
        setEmail("");
        setPassword("");
        setRole("");

        // Redirect to login after successful registration
        setTimeout(() => {
          navigate("/login");
        }, 1200);
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <div className="register-card">

              <div className="register-icon">
                <i className="bi bi-person-plus"></i>
              </div>

              <div className="text-center mb-4">
                <h1>Create Account</h1>
                <p>Join WorkFlow and manage your work smarter.</p>
              </div>

              {message && (
                <div className="alert alert-success register-alert" role="status">
                  <i className="bi bi-check-circle me-2"></i>
                  {message}
                </div>
              )}

              {error && (
                <div className="alert alert-danger register-alert" role="alert">
                  <i className="bi bi-exclamation-circle me-2"></i>
                  {error}
                </div>
              )}

              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label htmlFor="registerName" className="form-label">
                    Full Name
                  </label>

                  <div className="input-group register-input">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>

                    <input
                      id="registerName"
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      autoComplete="name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">
                    Email Address
                  </label>

                  <div className="input-group register-input">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>

                    <input
                      id="registerEmail"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="registerPassword" className="form-label">
                    Password
                  </label>

                  <div className="input-group register-input">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>

                    <input
                      id="registerPassword"
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Create a password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      autoComplete="new-password"
                      minLength={6}
                      required
                    />

                    <button
                      type="button"
                      className="input-group-text register-password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <i
                        className={`bi ${
                          showPassword ? "bi-eye-slash" : "bi-eye"
                        }`}
                      ></i>
                    </button>
                  </div>
                  <small className="register-hint">
                    Use at least 6 characters.
                  </small>
                </div>

                <div className="mb-4">
                  <label htmlFor="registerRole" className="form-label">
                    Select Your Role
                  </label>

                  <div className="input-group register-input">
                    <span className="input-group-text">
                      <i className="bi bi-people"></i>
                    </span>

                    <select
                      id="registerRole"
                      className="form-select"
                      value={role}
                      onChange={(event) => setRole(event.target.value)}
                      required
                    >
                      <option value="">Choose your role</option>
                      <option value="HR">HR</option>
                      <option value="EMPLOYEE">Employee</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="register-btn w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <i className="bi bi-arrow-right ms-2"></i>
                    </>
                  )}
                </button>
              </form>

              <div className="register-divider">
                <span>ALREADY A MEMBER?</span>
              </div>

              <p className="register-login-text text-center mb-0">
                Already have an account?{" "}
                <Link to="/login">Login here</Link>
              </p>

            </div>

            <p className="register-footer-text text-center">
              <i className="bi bi-shield-check me-1"></i>
              Start your WorkFlow journey today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;