import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React from "react";

const CourseItem = ({
  name,
  imgUrl,
  update,
  ratesStar,
  ratesTotal,
  price,
  animate,
  variants,
}) => {
  return (
    <motion.div
      key={name}
      className="shadow-md rounded overflow-hidden w-full relative"
      variants={variants}
      animate={animate}
      transition={{ delay: 0.4, type: "tween", duration: 0.7 }}
    >
      <div className="h-48 ">
        <img src={imgUrl} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-100/50 px-6 pt-8 pb-11 relative">
        <p
          className={`absolute -top-7 ${
            Cookies.get("i18next") === "en" ? "right-4" : "left-4"
          } bg-primary w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-mono text-sm p-1 sm:text-xs`}
        >
          {price}
        </p>
        <p className="capitalize text-xs font-mono">{update}</p>
        <h6 className="capitalize text-lg text-primary font-bold mt-0.5 mb-1 sm:text-sm">
          {name}
        </h6>
        <div className="flex items-center gap-1">
          <div className="flex">
            {ratesStar.map((rateStar) => (
              <span key={rateStar.id}>{rateStar.star}</span>
            ))}
          </div>
          <p className="font-mono text-sm sm:text-xs">({ratesTotal})</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseItem;
