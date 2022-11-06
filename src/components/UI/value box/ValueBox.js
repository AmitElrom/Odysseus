import React from "react";

import classes from "./ValueBox.module.css";

const ValueBox = ({ value, className, onClick }) => {
  return (
    <div className={`${className} ${classes.container}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default ValueBox;
