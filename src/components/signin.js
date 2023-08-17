import React from "react";
import "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = ({
  changeAuthMode,
  email,
  setEmail,
  password,
  setPassword,
  handleGoogleSignIn,
}) => {
  return (
    <div className="Auth-form-content">
      <h3 className="Auth-form-title d-flex justify-content-center">Sign In</h3>
      <div className="text-center">
        Not registered yet?{" "}
        <span className="link-primary" onClick={changeAuthMode}>
          Sign Up
        </span>
      </div>
      <div className="form-group mt-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control mt-1"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control mt-1"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
          <ToastContainer />
        </button>
      </div>
    </div>
  );
};

export default SignIn;
