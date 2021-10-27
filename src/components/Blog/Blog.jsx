/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { fromLeft, fromRight } from "../../animation";

import blogImg1 from "../../assets/images/b1.jpg";
import blogImg2 from "../../assets/images/b2.jpg";
import blogImg3 from "../../assets/images/b3.jpg";
import blogImg4 from "../../assets/images/b4.png";
import { useScroll } from "../../helpers/useScroll";
import Button from "../ui/Button";
import PagesHeader from "../ui/PagesHeader";

const Blog = () => {
  const { t } = useTranslation("BlogTrans");
  const [element, controls] = useScroll();

  return (
    <>
      <PagesHeader bgImg="bg-back2" heading={t("blog")} />
      <section
        className="section container flex justify-between md:flex-col gap-y-10"
        ref={element}
      >
        <motion.div
          className="space-y-9"
          variants={fromLeft}
          animate={controls}
          transition={{ delay: 0.5 }}
        >
          <div className="rounded-xl shadow-md overflow-hidden w-full max-w-[40rem]">
            <div className="h-96">
              <img
                src={blogImg1}
                alt=""
                className=" h-full w-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3 md:p-3 md:py-6">
              <h2 className="text-2xl text-gray-800 capitalize md:text-base">
                {t("learn")}
              </h2>
              <p className="text-sm sm:text-xs">{t("lorem")}</p>
              <Button content={t("btn")} />
            </div>
          </div>

          <motion.div
            className="rounded-xl shadow-md overflow-hidden w-full max-w-[40rem]"
            variants={fromLeft}
            animate={controls}
            transition={{ delay: 0.5 }}
          >
            <div className="h-96">
              <img
                src={blogImg2}
                alt=""
                className=" h-full w-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3 md:p-3 md:py-6">
              <h2 className="text-2xl text-gray-800 capitalize md:text-base">
                {t("learn")}
              </h2>
              <p className="text-sm sm:text-xs">{t("lorem")}</p>
              <Button content={t("btn")} />
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl shadow-md overflow-hidden w-full max-w-[40rem]"
            variants={fromLeft}
            animate={controls}
            transition={{ delay: 0.5 }}
          >
            <div className="h-96">
              <img
                src={blogImg3}
                alt=""
                className=" h-full w-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3 md:p-3 md:py-6">
              <h2 className="text-2xl text-gray-800 capitalize md:text-base">
                {t("learn")}
              </h2>
              <p className="text-sm sm:text-xs">{t("lorem")}</p>
              <Button content={t("btn")} />
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl shadow-md overflow-hidden w-full max-w-[40rem]"
            variants={fromLeft}
            animate={controls}
            transition={{ delay: 0.5 }}
          >
            <div className="h-96">
              <img
                src={blogImg4}
                alt=""
                className=" h-full w-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3 md:p-3 md:py-6">
              <h2 className="text-2xl text-gray-800 capitalize md:text-base">
                {t("learn")}
              </h2>
              <p className="text-sm sm:text-xs">{t("lorem")}</p>
              <Button content={t("btn")} />
            </div>
          </motion.div>
        </motion.div>
        <div>
          <motion.div
            className="divide-y-2 max-w-full w-80 shadow-md p-4 rounded-md"
            variants={fromRight}
            animate={controls}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-gray-800 text-2xl font-black py-2">
              {t("categories")}
            </h2>
            <ul className="divide-y-2">
              <li className="py-2 ">
                <a
                  href="#"
                  className="hover:text-primary transition duration-500"
                >
                  {t("web_dev")}
                </a>
              </li>
              <li className="py-2 ">
                <a
                  href="#"
                  className="hover:text-primary transition duration-500"
                >
                  {t("web_des")}
                </a>
              </li>
              <li className="py-2 ">
                <a
                  href="#"
                  className="hover:text-primary transition duration-500"
                >
                  {t("app_dev")}
                </a>
              </li>
              <li className="py-2 ">
                <a
                  href="#"
                  className="hover:text-primary transition duration-500"
                >
                  {t("frontend")}
                </a>
              </li>
              <li className="py-2 ">
                <a
                  href="#"
                  className="hover:text-primary transition duration-500"
                >
                  {t("python_prog")}
                </a>
              </li>
              <li className="py-2 ">
                <a
                  href="#"
                  className="hover:text-primary transition duration-500"
                >
                  {t("javascript_hacks")}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
