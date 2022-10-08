import React from "react";

import classes from "./FormInput.module.css";

const FormInput = ({
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const formInputClasses = !error
    ? classes["form-input"]
    : `${classes["form-input"]} ${classes.invalid}`;

  return (
    <div className={formInputClasses}>
      <input
        type={!type ? "text" : type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p>{error}</p>
    </div>
  );
};

export default FormInput;
