import Cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import { cardAnimation, headingAnimation } from "../../animation";
import { useScroll } from "../../helpers/useScroll";
import Heading from "../ui/Heading";
import PagesHeader from "../ui/PagesHeader";
import CourseItem from "./CourseItem";
import { CoursesDataAr, CoursesDataEn } from "./CoursesData";

const Courses = () => {
  const { t } = useTranslation("CoursesTrans");
  const [element, controls] = useScroll();

  let content = Cookies.get("i18next") === "en" ? CoursesDataEn : CoursesDataAr;

  return (
    <>
      <PagesHeader bgImg="bg-back3" heading={t("courses")} />
      <section className="section container" ref={element}>
        <Heading
          heading={t("heading")}
          text={t("text")}
          animate={controls}
          variants={headingAnimation}
        />
        <div className="grid grid-cols-3 md:grid-cols-1 gap-5">
          {content.map((course) => (
            <CourseItem
              key={course.price}
              name={course.name}
              imgUrl={course.imgUrl}
              update={course.update}
              ratesStar={course.ratesStar}
              ratesTotal={course.ratesTotal}
              price={course.price}
              animate={controls}
              variants={cardAnimation}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
