import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");


  
   
const handleLogin = (e) => {

  e.preventDefault();

  setError("");

  // Validation
  if (email === "" || password === "") {

    setError("Please enter email and password.");

    return;
  }

  // Get registered users from localStorage
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  // Find matching user
  const user = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  // Login successful
  if (user) {

    // Save currently logged-in user
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    navigate("/dashboard");

  } else {

    setError("Invalid email or password.");

  }

};

  


  return (

    <div className="login-page">

      <div className="login-overlay">

        <div className="login-card">

          <h1>
            Welcome Back
          </h1>


          <p className="login-subtitle">

            Login to manage your health insurance

          </p>


          <form onSubmit={handleLogin}>


            {/* Email */}

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>


            {/* Password */}

            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>


            {/* Error */}

            {error && (

              <p className="login-error">
                {error}
              </p>

            )}


            {/* Options */}

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember me

              </label>


              <Link to="/forgot-password">

                Forgot password?

              </Link>

            </div>


            {/* Login Button */}

            <button
              type="submit"
              className="login-submit"
            >

              Login

            </button>


          </form>


          {/* Register */}

          <p className="register-text">

            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </p>


        </div>

      </div>

    </div>

  );

}

export default Login;