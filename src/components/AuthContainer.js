import React, { useState, useEffect } from "react";
import SignIn from "./signin";
import SignUp from "./signup";
import UserPage from "./UserPage";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase.util";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContainer = () => {
  const [authMode, setAuthMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [justSignedUp, setJustSignedUp] = useState(false);
  // SignIn condition
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (authMode === "signin") {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Success!", { autoClose: 2000 });
      } catch (error) {
        toast.error("Sign In ERROR", { autoClose: 1000 });
      }
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setJustSignedUp(true);
        toast.success("Sign-up successful!");
      } catch (error) {
        toast.error("Sign Up ERROR", error.message);
      }
    }
  };

  // Sign-in with Google
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Success!", { autoClose: 2000 });
      })
      .catch((error) => {
        toast.error("Google Sign-in error: " + error.message, {
          type: "error",
        });
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        if (user) {
          setUser(user);
          setJustSignedUp(false);
        } else {
          setUser(null);
        }
      },
      [authMode]
    );

    return () => unsubscribe();
  }, []);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <div className="Auth-form-container d-flex justify-content-center align-items-center vh-100 vw-100 pt-5">
      {user ? (
        <UserPage />
      ) : (
        <form className="Auth-form" onSubmit={handleFormSubmit}>
          {authMode === "signin" || justSignedUp ? (
            <SignIn
              authMode={authMode}
              handleFormSubmit={handleFormSubmit}
              changeAuthMode={changeAuthMode}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleGoogleSignIn={handleGoogleSignIn}
            />
          ) : (
            <SignUp
              authMode={authMode}
              handleFormSubmit={handleFormSubmit}
              changeAuthMode={changeAuthMode}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          )}
        </form>
      )}
    </div>
  );
};

export default AuthContainer;
