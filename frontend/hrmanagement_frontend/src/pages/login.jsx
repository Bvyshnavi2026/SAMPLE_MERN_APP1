import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    // Admin login
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem(
        "currentuser",
        JSON.stringify({ name: "admin", role: "admin" })
      );

      navigate("/adminhome");
      return;
    }

    // HR and Employee login
    setLoading(true);

    try {
      const req = await fetch("http://localhost:3000/api/emp/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await req.json();

      if (!req.ok || !data.users) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      const user = data.users;

      localStorage.setItem("currentuser", JSON.stringify(user));

      if (user.role === "HR") {
        navigate("/HrHome");
      } else if (user.role === "EMPLOYEE") {
        navigate("/EmpHome");
      } else {
        localStorage.removeItem("currentuser");
        setError("Your account role is not recognized.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">

            <div className="login-card">
              {/* Logo */}
              <div className="login-icon">
                <i className="bi bi-person-lock"></i>
              </div>

              {/* Heading */}
              <div className="text-center mb-4">
                <h1>Welcome Back!</h1>
                <p>Login to your WorkFlow account</p>
              </div>

              {/* Error message */}
              {error && (
                <div className="alert alert-danger login-alert" role="alert">
                  <i className="bi bi-exclamation-circle me-2"></i>
                  {error}
                </div>
              )}

              {/* Login form */}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">
                    Email Address
                  </label>

                  <div className="input-group login-input">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>

                    <input
                      id="loginEmail"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="username"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="loginPassword" className="form-label">
                    Password
                  </label>

                  <div className="input-group login-input">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>

                    <input
                      id="loginPassword"
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      autoComplete="current-password"
                      required
                    />

                    <button
                      type="button"
                      className="input-group-text password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      <i
                        className={`bi ${
                          showPassword ? "bi-eye-slash" : "bi-eye"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="login-btn w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Logging in...
                    </>
                  ) : (
                    <>
                      Login
                      <i className="bi bi-arrow-right ms-2"></i>
                    </>
                  )}
                </button>
              </form>

              <div className="login-divider">
                <span>WORKFLOW ACCOUNT</span>
              </div>

              <p className="login-register text-center mb-0">
                Don't have an account?{" "}
                <Link to="/register">Register here</Link>
              </p>
            </div>

            <p className="login-footer-text text-center">
              <i className="bi bi-shield-check me-1"></i>
              Sign in to manage your tasks and team.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;