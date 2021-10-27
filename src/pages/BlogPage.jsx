import { motion } from "framer-motion";
import React from "react";
import Blog from "../components/Blog/Blog";

const BlogPage = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Blog />
    </motion.div>
  );
};

export default BlogPage;
