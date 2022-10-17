import React, { useImperativeHandle, useRef } from "react";

import classes from "./Opening.module.css";

const Opening = ({ id }) => {

  return (
    <div className={classes.container} id={id} >
      <h1>כשטכנולוגיה ושוק ההון נפגשים</h1>
    </div>
  );
};

export default Opening;
