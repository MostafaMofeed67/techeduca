import { motion } from "framer-motion";
import React from "react";

import Community from "../components/Home/Community/Community";
import CoursesHome from "../components/Home/Courses/CoursesHome";
import Features from "../components/Home/Features";
import Header from "../components/Home/Header";
import Register from "../components/Home/Register/Register";

const HomePage = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Features />
      <CoursesHome />
      <Register />
      <Community />
    </motion.div>
  );
};

export default HomePage;
