import React from "react";

import Features from "../components/Home/Features";
import About from "../components/About/About";
import Trusted from "../components/About/Trusted";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <About />
      <Features />
      <Trusted />
    </motion.div>
  );
};

export default AboutPage;
