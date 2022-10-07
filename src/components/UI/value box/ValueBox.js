import React from 'react'

import classes from './ValueBox.module.css';

const ValueBox = ({ value, className }) => {
    return (
        <div className={`${className} ${classes.container}`} >{value}</div>
    )
}

export default ValueBox