import { motion } from "framer-motion";
import React from "react";
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
