import Cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import Heading from "../../ui/Heading";
import CourseItem from "../../Courses/CourseItem";

import { CoursesDataAr, CoursesDataEn } from "../../Courses/CoursesData";
import { useScroll } from "../../../helpers/useScroll";
import { cardAnimation, headingAnimation } from "../../../animation";

const CoursesHome = () => {
  const { t } = useTranslation("CoursesTrans");

  const [element, controls] = useScroll();

  const popularCoursesEn = CoursesDataEn.slice(0, 6);
  const popularCoursesAr = CoursesDataAr.slice(0, 6);

  let content =
    Cookies.get("i18next") === "en" ? popularCoursesEn : popularCoursesAr;

  return (
    <section className="section container h-auto" ref={element}>
      <Heading
        heading={t("heading")}
        text={t("text")}
        variants={headingAnimation}
        animate={controls}
      />
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-auto  gap-5">
        {content.map((course) => (
          <CourseItem
            key={course.price}
            name={course.name}
            imgUrl={course.imgUrl}
            update={course.update}
            ratesStar={course.ratesStar}
            ratesTotal={course.ratesTotal}
            price={course.price}
            variants={cardAnimation}
            animate={controls}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesHome;
