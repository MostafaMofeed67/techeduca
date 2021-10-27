import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import useInput from "../../Hooks/use-input";
import Button from "../ui/Button";

const ContactForm = () => {
  const { t } = useTranslation("ContactTrans");

  const {
    hasError: nameInputHasError,
    isValid: nameInputIsValid,
    reset: nameInputReset,
    inputBlurHandler: nameInputBlurHandler,
    valueChangeHandler: nameInputChangeHandler,
    value: nameInputValue,
  } = useInput((value) => value.trim() !== "");

  const {
    hasError: emailInputHasError,
    isValid: emailInputIsValid,
    reset: emailInputReset,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailInputChangeHandler,
    value: emailInputValue,
  } = useInput((value) => value.includes("@"));

  const {
    hasError: subjectInputHasError,
    isValid: subjectInputIsValid,
    reset: subjectInputReset,
    inputBlurHandler: subjectInputBlurHandler,
    valueChangeHandler: subjectInputChangeHandler,
    value: subjectInputValue,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid && subjectInputIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameInputIsValid && !emailInputIsValid && !subjectInputIsValid) {
      return;
    }

    console.log({
      name: nameInputValue,
      email: emailInputValue,
      subject: subjectInputValue,
    });

    nameInputReset();
    emailInputReset();
    subjectInputReset();
  };

  const nameInputClasses = `font-Raleway font-semibold text-gray-400 text-xs  p-4 w-full  outline-none focus:scale-105 transition duration-500 shadow focus:shadow-md ${
    nameInputHasError ? "border-2 border-red-700 bg-red-700/5" : ""
  }`;
  const emailInputClasses = `font-Raleway font-semibold text-gray-400 text-xs  p-4 w-full  outline-none focus:scale-105 transition duration-500 shadow focus:shadow-md ${
    emailInputHasError ? "border-2 border-red-700 bg-red-700/5" : ""
  }`;
  const subjectInputClasses = `font-Raleway font-semibold text-gray-400 text-xs  p-4 w-full  outline-none focus:scale-105 transition duration-500 shadow focus:shadow-md ${
    subjectInputHasError ? "border-2 border-red-700 bg-red-700/5" : ""
  }`;

  return (
    <motion.form
      onSubmit={formSubmitHandler}
      className="bg-primary-light/5 w-full  p-7 rounded-md shadow-md "
    >
      <h2 className="font-black text-2xl text-primary mb-1">{t("connect")}</h2>
      <p className="text-sm mb-6">{t("connect_text")}</p>
      <div className="space-y-5">
        <div className="flex justify-between gap-5 md:flex-col">
          <div className="w-full">
            <input
              type="text"
              className={nameInputClasses}
              placeholder={t("name_placeholder")}
              value={nameInputValue}
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
            />
            {nameInputHasError && (
              <p className="text-xs mt-2 text-red-700">{t("name_error")}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="email"
              className={emailInputClasses}
              placeholder={t("email_placeholder")}
              value={emailInputValue}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailInputHasError && (
              <p className="text-xs mt-2 text-red-800">{t("email_error")}</p>
            )}
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            className={subjectInputClasses}
            placeholder={t("subject_placeholder")}
            value={subjectInputValue}
            onChange={subjectInputChangeHandler}
            onBlur={subjectInputBlurHandler}
          />
          {subjectInputHasError && (
            <p className="text-xs mt-2 text-red-800">{t("subject_error")}</p>
          )}
        </div>
        <textarea
          placeholder={t("textarea")}
          rows="8"
          className="font-Raleway font-semibold text-gray-400 text-xs  p-4  w-full outline-none focus:scale-105 transition duration-500 shadow focus:shadow-md"
        />
        <Button content={t("btn")} disabled={!formIsValid} />
      </div>
    </motion.form>
  );
};

export default ContactForm;
