import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fromLeft, fromRight } from "../../../animation";
import { useScroll } from "../../../helpers/useScroll";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const { t } = useTranslation("RegisterTrans");
  const [element, controls] = useScroll();

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMins, setTimerMins] = useState("00");
  const [timerSecs, setTimerSecs] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("October 10,2021 00:00:00").getTime();
    interval = setTimeout(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // ! stop our timer
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMins(mins);
        setTimerSecs(secs);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section
      className=" bg-yellow-400 bg-headerImg bg-fixed bg-cover bg-center bg-no-repeat mt-24"
      ref={element}
    >
      <div className="container py-20 text-white flex justify-between items-center lg:flex-col lg:gap-9">
        <motion.div
          variants={fromLeft}
          animate={controls}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h6 className="text-sm text-gray-200 sm:text-xs">{t("text")}</h6>
          <h2 className="capitalize font-extrabold text-4xl mt-2 mb-11 sm:text-3xl ">
            {t("heading")}
          </h2>
          <div className="flex gap-5 md:flex-col">
            <p className="text-center py-3 px-8 backdrop-blur-md rounded-md shadow-md sm:w-6/12 sm:mx-auto">
              <span className="font-mono block"> {timerDays}</span>
              {t("days")}
            </p>
            <p className="text-center py-3 px-8 backdrop-blur-md rounded-md shadow-md sm:w-6/12 sm:mx-auto">
              <span className="font-mono block"> {timerHours}</span>
              {t("hours")}
            </p>
            <p className="text-center py-3 px-8 backdrop-blur-md rounded-md shadow-md sm:w-6/12 sm:mx-auto">
              <span className="font-mono block"> {timerMins} </span> {t("mins")}
            </p>
            <p className="text-center py-3 px-8 backdrop-blur-md rounded-md shadow-md sm:w-6/12 sm:mx-auto">
              <span className="font-mono block"> {timerSecs} </span> {t("secs")}
            </p>
          </div>
        </motion.div>
        <RegisterForm animate={controls} variants={fromRight} />
      </div>
    </section>
  );
};

export default Register;
