import React from "react";
import { ToastContainer } from "react-toastify";

const SignUp = ({ changeAuthMode, email, setEmail, password, setPassword }) => {
  return (
    <div className="Auth-form-content">
      <h3 className="Auth-form-title d-flex justify-content-center">Sign Up</h3>
      <div className="text-center">
        Already registered?{" "}
        <span className="link-primary" onClick={changeAuthMode}>
          Sign In
        </span>
      </div>
      <div className="form-group mt-3">
        <label>Full Name</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="e.g Jane Doe"
        />
      </div>
      <div className="form-group mt-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control mt-1"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control mt-1"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
          <ToastContainer />
        </button>
      </div>
    </div>
  );
};

export default SignUp;
