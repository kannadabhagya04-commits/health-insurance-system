
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the insurance plan selected on the Plans page.
  const selectedPlan = location.state?.selectedPlan;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (email.trim() === "" || password === "") {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password,
          }),
        }
      );

      if (!response.ok) {
        setError(
          response.status === 401
            ? "Invalid email or password."
            : "Login failed. Please try again."
        );
        return;
      }

      // Read the JWT returned by Spring Boot.
      const token = await response.text();
      const jwtToken = token.trim().replace(/^"|"$/g, "");

      if (!jwtToken) {
        setError("Login failed. No authentication token received.");
        return;
      }

      // Save authentication details.
      localStorage.setItem("token", jwtToken);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ email: email.trim() })
      );

      // Navigate to the dashboard and pass the selected plan.
      navigate("/dashboard", {
        state: { selectedPlan },
      });
    } catch (error) {
      console.error("Login error:", error);
      setError(
        "Unable to connect. Please check whether the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-card">
          <h1>Welcome Back</h1>

          <p className="login-subtitle">
            Login to manage your health insurance
          </p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <p className="login-error" role="alert">
                {error}
              </p>
            )}

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
