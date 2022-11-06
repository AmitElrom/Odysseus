import React, { useEffect, useState } from "react";
import classes from "./ValueModal.module.css";


function Modal({ setOpenModal, value, text }) {

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