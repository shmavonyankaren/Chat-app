import React, { useState } from "react";
import signInImage from "../assets/signup.jpg";
import { AuthForm } from "./";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sing In"}</p>
          <AuthForm isSignup={isSignup} />
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account" : "Don't have an accoutn"}
              <span onClick={switchMode}>
                {isSignup ? "Sing In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signInImage} alt="sign in" />
      </div>
    </div>
  );
}
