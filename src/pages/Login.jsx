import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";


export default function Login() {
  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        <p>
          Forgot your password? <a href="/forgot-password">Reset it</a>
        </p>
        <p>
          Back to <a href="/">Home</a>
        </p>
      </form>
      <Footer />
    </div>
  );
}
