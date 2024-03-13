import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import "../Styles/LoginForm.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      return toast.error("Please enter both username and password.");
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter and one symbol."
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      return toast.error("Invalid email address.");
    }

    // Simulating login logic
    if (username && password) {
      console.log("Login successful!");
      toast.success("Login successful!");
      // Redirect or perform further actions after successful login
    } else {
      toast.error("Invalid username or password.");
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center" style={{ color: "dodgerblue" }}>
                <FaTwitter size={30} />
              </div>
              <br />
              <h1 className="text-center">Log in to Twitter</h1>
              <form onSubmit={handleLogin}>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <br />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary">
                    Log in
                  </button>
                </div>
                <br />
                <div class="others">
                  <Link to="/forgotPassword" className="others">
                    {" "}
                    <p className="text-left">Forgot Password?</p>
                  </Link>
                  <Link to="/" className="others">
                    {" "}
                    <p className="text-right">Sign up</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
