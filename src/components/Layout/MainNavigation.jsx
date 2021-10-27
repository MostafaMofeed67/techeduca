import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { mainNavAnimation } from "../../animation";

import imgLogo from "../../assets/images/logo.svg";
import Dropdown from "../ui/Dropdown";

const MainNavigation = ({ onShowSidebar }) => {
  const { t } = useTranslation("Navigation");

  const position = Cookies.get("i18next") === "en" ? "-left-24" : "left-0";
  const dropDownCLasses = `absolute bg-white shadow-lg top-9 ${position}  p-2 w-36 space-y-2 rounded`;

  return (
    <motion.nav
      className="fixed w-full bg-white shadow-md z-50"
      variants={mainNavAnimation}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.1 }}
    >
      <div className="container py-2 flex items-center justify-between">
        <div className=" h-14">
          <Link to="/">
            <img src={imgLogo} alt="" className="h-full" />
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <ul className="flex gap-8 text-primary font-semibold mx-5">
            <li className="py-2 overflow-hidden">
              <Link to="/" className="link">
                {t("home")}
              </Link>
            </li>
            <li className="py-2 overflow-hidden">
              <Link to="/about" className="link">
                {t("about")}
              </Link>
            </li>
            <li className="py-2 overflow-hidden">
              <Link to="/blog" className="link overflow-hidden">
                {t("blog")}
              </Link>
            </li>
            <li className="py-2 overflow-hidden">
              <Link to="/courses" className="link">
                {t("courses")}
              </Link>
            </li>
            <li className="py-2 overflow-hidden">
              <Link to="/contact" className="link">
                {t("contact")}
              </Link>
            </li>
          </ul>
          <Dropdown classesNames={dropDownCLasses} iconColor="text-primary" />
        </div>
        <div className="hidden md:block" onClick={onShowSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-primary fill-current cursor-pointer"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </motion.nav>
  );
};

export default MainNavigation;
