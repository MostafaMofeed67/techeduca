import React from "react";
import Heading from "../../ui/Heading";

import "swiper/swiper-bundle.css";
import SwiperPage from "./SwiperPage";
import { useTranslation } from "react-i18next";
import { useScroll } from "../../../helpers/useScroll";
import { fromUpLeft, headingAnimation } from "../../../animation";

const Community = () => {
  const { t } = useTranslation("ExpertsTrans");
  const [element, controls] = useScroll();

  return (
    <section className="section container " dir="ltr" ref={element}>
      <Heading
        heading={t("heading")}
        text={t("text")}
        variants={headingAnimation}
        animate={controls}
      />
      <SwiperPage variants={fromUpLeft} animate={controls} />
    </section>
  );
};

export default Community;
