import React from "react";
import Heading from "../ui/Heading";

import trustImg1 from "../../assets/images/trust (1).png";
import trustImg2 from "../../assets/images/trust (2).png";
import trustImg3 from "../../assets/images/trust (3).png";
import trustImg4 from "../../assets/images/trust (4).png";
import trustImg5 from "../../assets/images/trust (5).png";
import trustImg6 from "../../assets/images/trust (6).png";
import { useTranslation } from "react-i18next";
import { useScroll } from "../../helpers/useScroll";
import { fromLeft, headingAnimation } from "../../animation";
import { motion } from "framer-motion";

const Trusted = () => {
  const { t } = useTranslation("AboutTrans");
  const [element, controls] = useScroll();

  return (
    <section className="section container" ref={element}>
      <Heading
        heading={t("trusted")}
        text={t("trusted_text")}
        animate={controls}
        variants={headingAnimation}
      />
      <div className="grid grid-cols-6 lg:grid-cols-3 sm:grid-cols-1 gap-y-10 justify-items-center">
        <motion.img
          src={trustImg1}
          alt=""
          className="w-24 "
          variants={fromLeft}
          animate={controls}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.img
          src={trustImg2}
          alt=""
          className="w-24 "
          variants={fromLeft}
          animate={controls}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.img
          src={trustImg3}
          alt=""
          className="w-24 "
          variants={fromLeft}
          animate={controls}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.img
          src={trustImg4}
          alt=""
          className="w-24 "
          variants={fromLeft}
          animate={controls}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.img
          src={trustImg5}
          alt=""
          className="w-24 "
          variants={fromLeft}
          animate={controls}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.img
          src={trustImg6}
          alt=""
          className="w-24 "
          variants={fromLeft}
          animate={controls}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
      </div>
    </section>
  );
};

export default Trusted;
