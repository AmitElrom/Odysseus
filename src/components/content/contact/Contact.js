import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';

import classes from "./Contact.module.css";
import FormInput from "./FormInput";

import { hebrewNameRegex } from "../../../utils/regex";
import SendButton from "./SendButton";

const FORM_INPUTS = [
  {
    id: "i1",
    placeholder: "שם פרטי",
    name: "firstName",
  },
  {
    id: "i2",
    placeholder: "שם משפחה",
    name: "lastName",
  },
  {
    id: "i3",
    placeholder: "כתובת מייל",
    name: "email",
  },
];

const Contact = ({ id }) => {

  const formRef = useRef();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(hebrewNameRegex, "רק אותיות בעברית")
        .required("שדה חובה"),
      lastName: Yup.string()
        .matches(hebrewNameRegex, "רק אותיות בעברית")
        .required("שדה חובה"),
      email: Yup.string().email("כתובת מייל לא תקינה").required("שדה חובה"),
    }),
    onSubmit: (values) => {
      console.log(formRef.current);
      emailjs.sendForm('service_vuhdi36', 'template_zpqi7e9', formRef.current, 'tRNxTkBc4NAZZnx1o')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    },
  });

  const formInputsList = FORM_INPUTS.map((input) => {
    return (
      <FormInput
        key={input.id}
        {...input}
        value={formik.values[input.name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched[input.name] && formik.errors[input.name]
            ? formik.errors[input.name]
            : null
        }
      />
    );
  });

  return (
    <div className={classes.container} id={id} >
      <h2 className={classes.headline}>צור קשר</h2>
      <form ref={formRef} className={classes.form} onSubmit={formik.handleSubmit}>
        {formInputsList}
        <SendButton type="submit">שלח</SendButton>
      </form>
    </div>
  );
};

export default Contact;
