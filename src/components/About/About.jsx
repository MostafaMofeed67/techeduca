import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import { fromRight, imageAnimation } from "../../animation";

import blogPersons from "../../assets/images/a.png";
import blogFeatureImage1 from "../../assets/images/fe1.png";
import blogFeatureImage2 from "../../assets/images/fe2.png";
import { useScroll } from "../../helpers/useScroll";
import PagesHeader from "../ui/PagesHeader";

const About = () => {
  const { t } = useTranslation("AboutTrans");
  const [element, controls] = useScroll();

  const coursesNumber = Cookies.get("i18next") === "en" ? "400+" : "+400";

  return (
    <>
      <PagesHeader bgImg="bg-back1" heading={t("about")} />
      <section
        className="section container grid grid-cols-2 gap-10 md:grid-cols-1 items-center"
        ref={element}
      >
        <motion.div
          variants={imageAnimation}
          animate={controls}
          transition={{ delay: 0.5, type: "tween", duration: 0.5 }}
        >
          <img src={blogPersons} alt="" />
        </motion.div>
        <motion.div
          variants={fromRight}
          animate={controls}
          transition={{ delay: 0.5, type: "tween", duration: 0.5 }}
        >
          <h1 className="font-bold text-3xl md:text-xl md:text-center sm:text-base text-gray-700">
            {t("heading")}
          </h1>
          <p className="mt-4 mb-6 md:text-sm sm:text-xs md:text-center">
            {t("text")}
          </p>
          <ul className="space-y-5">
            <li className="flex gap-5 sm:flex-col sm:items-center">
              <div className="h-14 w-14 ">
                <img
                  src={blogFeatureImage1}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h6 className="font-black text-gray-700 mb-1 md:text-sm sm:text-xs sm:text-center  ">
                  <span className="font-mono"> {coursesNumber} </span>{" "}
                  {t("courses")}
                </h6>
                <p className="md:text-sm sm:text-xs sm:text-center">
                  {t("courses_text")}
                </p>
              </div>
            </li>
            <li className="flex gap-5 sm:flex-col sm:items-center">
              <div className="h-14 w-14">
                <img
                  src={blogFeatureImage2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h6 className="font-black text-gray-700 mb-1 md:text-sm sm:text-xs sm:text-center">
                  {t("access")}
                </h6>
                <p className="md:text-sm sm:text-xs sm:text-center">
                  {t("courses_text")}
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>
    </>
  );
};

export default About;
