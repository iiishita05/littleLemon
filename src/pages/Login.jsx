import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./Login.css";

export default function Login() {
  return (
    <>
      <Header />
      <div className="login-container">
        <h1 className="login-title">Login Page</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="form-footer">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
          <p className="form-footer">
            Forgot your password? <a href="/forgot-password">Reset it</a>
          </p>
          <p className="form-footer">
            Back to <a href="/">Home</a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
