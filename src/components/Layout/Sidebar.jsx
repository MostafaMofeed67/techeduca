import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Dropdown from "../ui/Dropdown";

const nextVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const Sidebar = ({ onHideSidebar, showSidebar }) => {
  const { t } = useTranslation("Navigation");

  const dropDownCLasses = ` bg-white shadow-lg mt-2 p-2 w-36 space-y-2 rounded`;

  return (
    <motion.div
      className="fixed right-0 top-0 min-h-screen bg-primary/30 z-50 w-8/12 backdrop-blur-sm"
      variants={nextVariants}
      initial="hidden"
      animate={showSidebar ? "show" : "hidden"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-10 w-10 text-white fill-current cursor-pointer mt-6 ml-4 hover:text-gray-700 transition"
        onClick={onHideSidebar}
      >
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
      </svg>
      <ul className="flex gap-2 flex-col text-white font-semibold p-10">
        <li className="py-2 overflow-hidden">
          <Link to="/" className="link inline-block" onClick={onHideSidebar}>
            {t("home")}
          </Link>
        </li>
        <li className="py-2 overflow-hidden">
          <Link
            to="/about"
            className="link inline-block"
            onClick={onHideSidebar}
          >
            {t("about")}
          </Link>
        </li>
        <li className="py-2 overflow-hidden">
          <Link
            to="/blog"
            className="link inline-block"
            onClick={onHideSidebar}
          >
            {t("blog")}
          </Link>
        </li>
        <li className="py-2 overflow-hidden">
          <Link
            to="/courses"
            className="link inline-block"
            onClick={onHideSidebar}
          >
            {t("courses")}
          </Link>
        </li>
        <li className="py-2 overflow-hidden">
          <Link
            to="/contact"
            className="link inline-block"
            onClick={onHideSidebar}
          >
            {t("contact")}
          </Link>
        </li>
        <li>
          <Dropdown classesNames={dropDownCLasses} iconColor="text-white" />
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
