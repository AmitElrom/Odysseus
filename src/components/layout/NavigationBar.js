import React from "react";

import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes["company-name"]}>Odysseus</div>
      <nav className={classes.nav}>
        <ul>
          <li>אודות</li>
          <li>ערכים</li>
          <li>צור קשר</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
