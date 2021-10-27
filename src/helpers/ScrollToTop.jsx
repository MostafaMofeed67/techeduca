import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const buttonVariants = {
  hidden: { y: 200, opacity: 0 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.button
      onClick={scrollToTopHandler}
      className="w-12 h-12 z-50 rounded-full bg-yellow-400 flex justify-center items-center fixed bottom-5 right-5 shadow-2xl"
      variants={buttonVariants}
      initial="hidden"
      animate={showButton ? "show" : "hidden"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-white fill-current rounded-full "
      >
        <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19zm9-12.243L19.092 17H4.908L12 6.757z"></path>
      </svg>
    </motion.button>
  );
};

export default ScrollToTop;
