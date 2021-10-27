import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { cardAnimation, headingAnimation } from "../../animation";
import { useScroll } from "../../helpers/useScroll";
import Heading from "../ui/Heading";

const Features = () => {
  const { t } = useTranslation("FeatureTrans");
  const [element, controls] = useScroll();

  return (
    <section className="section container" ref={element}>
      <Heading
        heading={t("heading")}
        text={t("text")}
        variants={headingAnimation}
        animate={controls}
      />
      <div className="grid grid-cols-3 md:grid-cols-1 gap-5 sm:text-center">
        <motion.div
          className="bg-gray-100/30 shadow-md p-6 rounded sm:p-4"
          variants={cardAnimation}
          animate={controls}
          transition={{ delay: 0.4, type: "tween", duration: 0.7 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-3 text-primary sm:h-10 sm:w-10 sm:ml-auto sm:mr-auto sm:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <h3 className="mb-2 text-primary font-bold capitalize text-lg sm:text-sm">
            {t("featureHead1")}
          </h3>
          <p className="text-sm sm:text-xs">{t("featureText1")}</p>
        </motion.div>
        <motion.div
          className="bg-gray-100/30 shadow-md p-6 rounded sm:p-4"
          variants={cardAnimation}
          animate={controls}
          transition={{ delay: 0.6, type: "tween", duration: 0.7 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-3 text-primary sm:h-10 sm:w-10 sm:ml-auto sm:mr-auto sm:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <h3 className="mb-2 text-primary font-bold capitalize text-lg sm:text-sm">
            {t("featureHead2")}
          </h3>
          <p className="text-sm sm:text-xs">{t("featureText2")}</p>
        </motion.div>
        <motion.div
          className="bg-gray-100/30 shadow-md p-6 rounded sm:p-4"
          variants={cardAnimation}
          animate={controls}
          transition={{ delay: 0.8, type: "tween", duration: 0.7 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-12 w-12 mb-3 text-primary sm:h-10 sm:w-10 sm:ml-auto sm:mr-auto sm:block"
            stroke="currentColor"
            fill="none"
          >
            <path d="M2.06 14.68a1 1 0 0 0 .46.6l1.91 1.11v2.2a1 1 0 0 0 1 1h2.2l1.11 1.91a1 1 0 0 0 .86.5 1 1 0 0 0 .51-.14l1.9-1.1 1.91 1.1a1 1 0 0 0 1.37-.36l1.1-1.91h2.2a1 1 0 0 0 1-1v-2.2l1.91-1.11a1 1 0 0 0 .37-1.36L20.76 12l1.11-1.91a1 1 0 0 0-.37-1.36l-1.91-1.1v-2.2a1 1 0 0 0-1-1h-2.2l-1.1-1.91a1 1 0 0 0-.61-.46 1 1 0 0 0-.76.1L12 3.26l-1.9-1.1a1 1 0 0 0-1.36.36L7.63 4.43h-2.2a1 1 0 0 0-1 1v2.2l-1.9 1.1a1 1 0 0 0-.37 1.37l1.1 1.9-1.1 1.91a1 1 0 0 0-.1.77zm3.22-3.17L4.39 10l1.55-.9a1 1 0 0 0 .49-.86V6.43h1.78a1 1 0 0 0 .87-.5L10 4.39l1.54.89a1 1 0 0 0 1 0l1.55-.89.91 1.54a1 1 0 0 0 .87.5h1.77v1.78a1 1 0 0 0 .5.86l1.54.9-.89 1.54a1 1 0 0 0 0 1l.89 1.54-1.54.9a1 1 0 0 0-.5.86v1.78h-1.83a1 1 0 0 0-.86.5l-.89 1.54-1.55-.89a1 1 0 0 0-1 0l-1.51.89-.89-1.54a1 1 0 0 0-.87-.5H6.43v-1.78a1 1 0 0 0-.49-.81l-1.55-.9.89-1.54a1 1 0 0 0 0-1.05z"></path>
          </svg>
          <h3 className="mb-2 text-primary font-bold capitalize text-lg sm:text-sm">
            {t("featureHead3")}
          </h3>
          <p className="text-sm sm:text-xs">{t("featureText3")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
