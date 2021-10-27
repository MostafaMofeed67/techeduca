import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { headerAnimation } from "../../animation";
import { useScroll } from "../../helpers/useScroll";
import Button from "../ui/Button";

const Header = () => {
  const { t } = useTranslation("HeaderTrans");
  const [element, controls] = useScroll();

  return (
    <header
      ref={element}
      className="bg-headerImg w-full min-h-screen  bg-cover bg-center bg-no-repeat grid place-items-center text-white text-center"
    >
      <motion.div
        className="container space-y-4"
        variants={headerAnimation}
        animate={controls}
        transition={{
          delay: 0.3,
        }}
      >
        <h1 className="text-5xl md:text-3xl sm:text-2xl font-black capitalize tracking-wide">
          {t("heading")}
        </h1>
        <p className="w-2/3 mx-auto font-medium sm:text-sm sm:w-full">
          {t("text")}
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/blog">
            <Button content={t("btn1")} btnHoverWhite={true} />
          </Link>
          <Link to="/courses">
            <Button content={t("btn2")} bgColor="bg-yellow-400" />
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
