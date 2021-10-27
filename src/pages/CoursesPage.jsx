import { motion } from "framer-motion";
import React from "react";
import Courses from "../components/Courses/Courses";

const CoursesPage = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Courses />;
    </motion.div>
  );
};

export default CoursesPage;
