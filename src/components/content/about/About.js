import React from "react";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.headline}>אודות</h2>
      <div className={classes.content}>
        הצוות שלנו מנתח את שווקי המניות והסחורות ברחבי העולם בעקביות ובמשמעת.
        אנו משתמשים ומפתחים אסטרטגיות הכוללות שילוב של אומנות המסחר עם המדע
        והנתונים שמעניק לנו העולם הפיננסי, העוזרים לנו להתפתח ולהצליח לייצר
        תשואות טובות ללקוחותינו באופן יציב ועקבי
      </div>
    </div>
  );
};

export default About;
