import React from "react";

import classes from "./SendButton.module.css";

const SendButton = ({ type, children }) => {
  return (
    <div className={classes["button-div"]}>
      <button className={classes["button-6"]} type={type}>
        {children}
      </button>
    </div>
  );
};

export default SendButton;
