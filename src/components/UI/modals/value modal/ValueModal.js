import React, { useEffect, useState } from "react";
import classes from "./ValueModal.module.css";

const VALUES = [
    { value: 'יושרה', text: "" },
    { value: 'חדשנות-טכנולוגית', text: "" },
    { value: 'יצירתיות', text: "" },
    { value: 'למידה-מתמדת', text: "" },
];

function Modal({ setOpenModal, value }) {

    const [text, setText] = useState("");

    useEffect(() => {
        const rightValue = VALUES.find(val => val.value === value);
        setText(rightValue);
    }, [value])

    return (
        <div className={classes.modalBackground}>
            <div className={classes.modalContainer}>
                <div className={classes.titleCloseBtn}>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className={classes.title}>
                    <h1>{value}</h1>
                </div>
                <div className={classes.body}>
                    <p>{text}</p>
                </div>
                <div className={classes.footer}>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;