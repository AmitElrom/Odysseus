import React, { useContext } from 'react'
import ValueBox from '../../UI/value box/ValueBox';

import classes from './Values.module.css';

const VALUES_DATA = [
    { value: 'יושרה', text: "" },
    { value: 'חדשנות-טכנולוגית', text: "" },
    { value: 'יצירתיות', text: "" },
    { value: 'למידה-מתמדת', text: "" },
];

const Values = ({ id }) => {

    const { } = useContext();

    const openValueModal = (value) => {
        let { text } = VALUES_DATA.find(val => val.value === value);
    };

    return (
        <div className={classes.container} id={id} >
            <h2 className={classes.headline}>הערכים שלנו</h2>
            <div className={classes.boxes}>
                {VALUES_DATA.map((value, index) => {
                    return <ValueBox key={value.value} className={`box ${index + 1}`} value={value.value} onClick={() => openValueModal(value.value)} />
                })}
            </div>
        </div>
    )
}

export default Values