import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="text-left">Login to your account.</h1>
        <p className="text-left text-muted">Please sign in to your account</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="form-group text-right">
            <span className="text-muted">
              <a href="#forgot">Forgot password?</a>
            </span>
          </div>
          <button type="submit" className="submit-button">
            Sign In
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
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
