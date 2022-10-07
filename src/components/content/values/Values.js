import React from 'react'
import ValueBox from '../../UI/value box/ValueBox';

import classes from './Values.module.css';

const VALUES_DATA = ['יושרה', 'חדשנות טכנולוגית', 'יצירתיות', 'למידה מתמדת'];

const Values = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.headline}>הערכים שלנו</h2>
            <div className={classes.boxes}>
                {VALUES_DATA.map((value, index) => {
                    return <ValueBox key={value} className={`box ${index + 1}`} value={value} />
                })}
            </div>
        </div>
    )
}

export default Values