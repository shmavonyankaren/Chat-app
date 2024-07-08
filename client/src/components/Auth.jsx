import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signInImage from "../assets/signup.jpg";
import { InputCompForAuth } from "./";

const initialState = {
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};
export default function Auth() {
  const [isSignup, setIsSingup] = useState(true);
  const [form, setForm] = useState(initialState);

  const hangleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSingup((prevIsSingup) => !prevIsSingup);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sing In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <InputCompForAuth
                text="Full Name"
                label="fullName"
                type="text"
                hangleChange={hangleChange}
              />
            )}
            <InputCompForAuth
              text="Username"
              label="username"
              type="text"
              hangleChange={hangleChange}
            />
            {isSignup && (
              <>
                <InputCompForAuth
                  text="Phone Number"
                  label="phoneNumber"
                  type="number"
                  hangleChange={hangleChange}
                />
                <InputCompForAuth
                  text="Avatar URL"
                  label="avatarURL"
                  type="text"
                  hangleChange={hangleChange}
                />
              </>
            )}
            <InputCompForAuth
              text="Password"
              label="password"
              type="password"
              hangleChange={hangleChange}
            />

            {isSignup && (
              <InputCompForAuth
                text="Confirm Password"
                label="confirmPassword"
                type="password"
                hangleChange={hangleChange}
              />
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
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
