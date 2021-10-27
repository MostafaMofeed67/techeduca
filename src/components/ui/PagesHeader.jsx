import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React from "react";
import { headerAnimation } from "../../animation";
import { useScroll } from "../../helpers/useScroll";

const PagesHeader = ({ bgImg, heading, variants, animate }) => {
  const [element, controls] = useScroll();

  return (
    <div
      ref={element}
      className={`${bgImg} h-[26rem] flex justify-center items-center bg-cover bg-no-repeat bg-center`}
    >
      <motion.h2
        className="text-4xl sm:text-3xl  text-white capitalize"
        variants={headerAnimation}
        animate={controls}
        transition={{ delay: 0.3 }}
      >
        {heading} {Cookies.get("i18next") === "en" ? "/" : "\\"}
      </motion.h2>
    </div>
  );
};

export default PagesHeader;
