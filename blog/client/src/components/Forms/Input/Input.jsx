import React from "react";
import "./input.scss";

const Input = ({
  value,
  required,
  type = "text",
  name,
  placeholder,
  onChange,
}) => {
  return (
    <label className={`field ${value ? "active" : ""}`}>
      <div className="field_label">
        {placeholder} {required && <span>*</span>}
      </div>

      <div className="field_input">
        <input
          type={type}
          name={name}
          required={required}
          value={value || ""}
          onChange={onChange}
        />
      </div>
    </label>
  );
};

export default Input;
