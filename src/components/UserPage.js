import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.util";
import Marc from "../Picture/Marc.jpg";
//import { ToastContainer, toast } from "react-toastify";

const UserPage = () => {
  const [displayName, setDisplayName] = useState("");
  toast.success("Log in Success!", { autoClose: 2000 });

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || user.email);
    }
  }, []);

  const handleLogout = async () => {
    try {
      toast.success("Log Out Success!", { autoClose: 500 });
      await signOut(auth);
    } catch (error) {
      toast.error("Sign-up error:", error.message);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Welcome, {displayName}!</h2>

      <img className="img-fluid w-25 mb-3 rounded" src={Marc} alt="Marc" />

      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserPage;
