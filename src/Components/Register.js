import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/Dynamic-Clock/track");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="text-left">Create your new account</h1>
        <p className="text-left text-muted">
          Create an account to start looking for the food you like
        </p>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="name">User Name</label>
            <input type="text" id="name" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <div className="terms-checkbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <a href="/register"> Terms and Conditions</a> and{" "}
              <a href="/register">Privacy policy</a>
            </label>
          </div>

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
        <div className="text-center mt-3">
          <p>Or sign in with</p>
          <button className="google-signin">
            <img src="Google_Icons.png" alt="Google Sign In" />
          </button>
        </div>
        <div className="text-center mt-3">
          <p>
            Have an account? <a href="/Dynamic-Clock/login"> Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
