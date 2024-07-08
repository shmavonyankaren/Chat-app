import React from "react";

export default function InputCompForAuth({ text, label, type, hangleChange }) {
  return (
    <div className="auth__form-container_fields-content_input">
      <label htmlFor={label}>{text}</label>
      <input
        name={label}
        type={type}
        placeholder={text}
        onChange={hangleChange}
        required
      />
    </div>
  );
}
