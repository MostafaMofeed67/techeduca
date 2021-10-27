import { motion } from "framer-motion";
import React from "react";

const Heading = ({ heading, text, variants, animate }) => {
  return (
    <motion.div
      className="text-center mb-10"
      variants={variants}
      animate={animate}
      transition={{ delay: 0.1, type: "tween" }}
    >
      <h1 className="text-primary text-3xl font-black tracking-wide capitalize mb-1 sm:text-xl ">
        {heading}
      </h1>
      <p className="sm:text-xs">{text}</p>
    </motion.div>
  );
};

export default Heading;
