import React, { useImperativeHandle, useRef } from "react";

import classes from "./Opening.module.css";

const Opening = React.forwardRef((props, ref) => {

  // const openingCompRef = useRef();

  // const scroll = () => {
  //   openingCompRef.current.scrollIntoView({ behavior: "smooth" })
  // };

  useImperativeHandle(ref, () => {
    return {
      scroll: () => {
        ref.current.scrollIntoView();
      }
    }
  })

  return (
    <div className={classes.container}>
      <h1>כשטכנולוגיה ושוק ההון נפגשים</h1>
    </div>
  );
});

export default Opening;
