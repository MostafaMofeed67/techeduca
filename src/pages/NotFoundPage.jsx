import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import errorImg from "../assets/images/error.jpg";

const NotFoundPage = () => {
  return (
    <div className=" min-h-screen container flex justify-between items-center md:flex-col-reverse md:justify-center md:gap-5">
      <motion.div
        className="space-y-5"
        initial={{ x: "-500px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <h1 className="text-5xl capitalize font-bold text-gray-900 leading-snug sm:text-4xl">
          I have bad news for you
        </h1>
        <p className="sm:text-sm">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>

        <Link
          className="inline-block bg-primary py-3 px-6 sm:px-4 sm:py-2 sm:text-sm text-white border-2 border-primary hover:text-primary hover:bg-white transition duration-500"
          to="/"
        >
          Back Home
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: "500px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.2 }}
      >
        <div className="w-full max-w-7xl">
          <img src={errorImg} alt="" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
