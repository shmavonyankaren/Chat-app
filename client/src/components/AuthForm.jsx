import React, { useState } from "react";
import {
  arrayOfInputsSignIn,
  arrayOfInputsSignUp,
  initialStateForm,
} from "../data/constants";
import { InputCompForAuth } from "./";

export default function AuthForm({ isSignup }) {
  const [form, setForm] = useState(initialStateForm);

  const hangleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSignup ? (
        <>
          {arrayOfInputsSignUp.map((input) => (
            <InputCompForAuth
              key={`${input.text} + ${input.label}`}
              text={input.text}
              label={input.label}
              type={input.type}
              hangleChange={hangleChange}
            />
          ))}
        </>
      ) : (
        <>
          {arrayOfInputsSignIn.map((input) => (
            <InputCompForAuth
              key={`${input.text} + ${input.label}`}
              text={input.text}
              label={input.label}
              type={input.type}
              hangleChange={hangleChange}
            />
          ))}
        </>
      )}
      <div className="auth__form-container_fields-content_button">
        <button>{isSignup ? "Sign Up" : "Sign In"}</button>
      </div>
    </form>
  );
}
