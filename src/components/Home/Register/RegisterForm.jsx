import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import useInput from "../../../Hooks/use-input";
import Button from "../../ui/Button";

const RegisterForm = ({ animate, variants }) => {
  const { t } = useTranslation("RegisterTrans");

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
    hasError: phoneInputHasError,
    isValid: phoneInputIsValid,
    reset: phoneInputReset,
    inputBlurHandler: phoneInputBlurHandler,
    valueChangeHandler: phoneInputChangeHandler,
    value: phoneInputValue,
  } = useInput((value) => value.length > 10);

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid && phoneInputIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameInputIsValid) {
      return;
    }

    nameInputReset();
    emailInputReset();
    phoneInputReset();
  };

  const nameInputClasses = `border border-primary p-2 w-full rounded font-Raleway font-medium text-gray-900 text-sm px-2 focus:outline-none focus:border-primary-light ${
    nameInputHasError
      ? "border-2 border-red-700 bg-red-700/5 focus:border-yellow-600 focus:bg-yellow-600/5"
      : ""
  } `;

  const emailInputClasses = `border border-primary p-2 w-full rounded font-Raleway font-medium text-gray-900 text-sm px-2 focus:outline-none focus:border-primary-light ${
    emailInputHasError
      ? "border-2 border-red-700 bg-red-700/5 focus:border-yellow-600 focus:bg-yellow-600/5"
      : ""
  } `;
  const phoneInputClasses = `border border-primary p-2 w-full rounded font-Raleway font-medium text-gray-900 text-sm px-2 focus:outline-none focus:border-primary-light ${
    phoneInputHasError
      ? "border-2 border-red-700 bg-red-700/5 focus:border-yellow-600 focus:bg-yellow-600/5"
      : ""
  } `;

  return (
    <motion.form
      onSubmit={formSubmitHandler}
      className="bg-white p-8 w-full max-w-xs rounded shadow-md text-gray-900 "
      animate={animate}
      variants={variants}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h3
        className={` mb-3 ${
          Cookies.get("i18next") === "en"
            ? "text-xl md:text-base "
            : "text-2xl md:text-lg "
        }`}
      >
        {t("formHead")}
      </h3>
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className={` mb-1 block text-xs ${
              nameInputHasError ? "text-red-700" : "text-gray-500"
            }`}
          >
            {t("formName")}
          </label>
          <input
            type="text"
            id="name"
            placeholder={t("formName")}
            value={nameInputValue}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            className={nameInputClasses}
          />
          {nameInputHasError && (
            <p className="text-xs mt-2 text-red-700">{t("name_error")}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className={` mb-1 block text-xs ${
              emailInputHasError ? "text-red-700" : "text-gray-500"
            }`}
          >
            {t("formEmail")}
          </label>
          <input
            type="email"
            id="email"
            placeholder={t("formEmail")}
            value={emailInputValue}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            className={emailInputClasses}
          />
          {emailInputHasError && (
            <p className="text-xs mt-2 text-red-700">{t("email_error")}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className={` mb-1 block text-xs ${
              phoneInputHasError ? "text-red-700" : "text-gray-500"
            }`}
          >
            {t("formPhone")}
          </label>
          <input
            type="text"
            id="phone"
            placeholder={t("formPhone")}
            value={phoneInputValue}
            onChange={phoneInputChangeHandler}
            onBlur={phoneInputBlurHandler}
            className={phoneInputClasses}
          />
          {phoneInputHasError && (
            <p className="text-xs mt-2 text-red-700">
              {t("phone_error")} <span className="font-mono"> ({`>10`})</span>.
            </p>
          )}
        </div>
        <Button
          content={t("formBtn")}
          bgColor="bg-yellow-400"
          disabled={!formIsValid}
        />
      </div>
    </motion.form>
  );
};

export default RegisterForm;
