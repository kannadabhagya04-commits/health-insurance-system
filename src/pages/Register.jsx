import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Register.css";

function Register() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleRegister = (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");


    // Check empty fields

    if (
      fullName === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === ""
    ) {

      setError("Please fill all the fields.");

      return;
    }


    // Check password

    if (password !== confirmPassword) {

      setError("Passwords do not match.");

      return;
    }


    // Check password length

    if (password.length < 5) {

      setError("Password must contain at least 5 characters.");

      return;
    }


    // Get existing users

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];


    // Check whether email already exists

    const userExists = existingUsers.some(
      (user) => user.email === email
    );


    if (userExists) {

      setError("An account with this email already exists.");

      return;
    }


    // Create new user

    const newUser = {

      fullName: fullName,

      email: email,

      phone: phone,

      password: password

    };


    // Save user

    existingUsers.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(existingUsers)
    );


    setSuccess(
      "Account created successfully! Redirecting to login..."
    );


    // Go to login

    setTimeout(() => {

      navigate("/login");

    }, 1500);

  };


  return (

    <div className="register-page">

      <div className="register-card">

        <h1>
          Create Your Account
        </h1>


        <p className="register-subtitle">
          Join HealthCare+ and protect your future
        </p>


        <form onSubmit={handleRegister}>


          {/* Full Name */}

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />

          </div>


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


          {/* Phone */}

          <div className="form-group">

            <label>
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
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
              placeholder="Create a password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>


          {/* Confirm Password */}

          <div className="form-group">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

          </div>


          {/* Error */}

          {error && (

            <p className="register-error">
              {error}
            </p>

          )}


          {/* Success */}

          {success && (

            <p className="register-success">
              {success}
            </p>

          )}


          <button
            type="submit"
            className="register-submit"
          >
            Create Account
          </button>


        </form>


        <p className="login-text">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </p>


      </div>

    </div>

  );
}

export default Register;