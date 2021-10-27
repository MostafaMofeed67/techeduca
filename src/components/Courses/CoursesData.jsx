import img1 from "../../assets/images/c1.jpg";
import img2 from "../../assets/images/c2.jpg";
import img3 from "../../assets/images/c3.jpg";
import img4 from "../../assets/images/c4.jpg";
import img5 from "../../assets/images/c5.jpg";
import img6 from "../../assets/images/c6.jpg";
import img7 from "../../assets/images/c7.jpeg";
import img8 from "../../assets/images/c8.jpg";
import img9 from "../../assets/images/c9.jpg";
import img10 from "../../assets/images/c10.jpg";

const starFull = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4 "
    fill="rgba(251, 191, 36)"
  >
    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
  </svg>
);

const starHalf = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="rgba(251, 191, 36)"
  >
    <path d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z"></path>
  </svg>
);

const starEmpty = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="rgba(251, 191, 36)"
  >
    <path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path>
  </svg>
);

export const CoursesDataEn = [
  {
    imgUrl: `${img1}`,
    update: "Updated 21/08/2021",
    name: "Javascript beginners course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starHalf, id: "s5" },
    ],
    ratesTotal: "299",
    price: "$49.99",
  },
  {
    imgUrl: `${img2}`,
    update: "Updated 12/06/2020",
    name: "HTML & CSS Advanced Course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starFull, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "400",
    price: "$60.28",
  },
  {
    imgUrl: `${img3}`,
    update: "Updated 30/12/2019",
    name: "Python beginners course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starHalf, id: "s3" },
      { star: starEmpty, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "155",
    price: "$20.04",
  },
  {
    imgUrl: `${img4}`,
    update: "Updated 02/01/2021",
    name: "Web Design crash course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starHalf, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "252",
    price: "$50.36",
  },
  {
    imgUrl: `${img5}`,
    update: "Updated 31/09/2020",
    name: "Vue Advanced course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "355",
    price: "$60.25",
  },
  {
    imgUrl: `${img6}`,
    update: "Updated 21/08/2021",
    name: "Angular beginners course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starHalf, id: "s2" },
      { star: starHalf, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starHalf, id: "s5" },
    ],
    ratesTotal: "105",
    price: "$15.64",
  },
  {
    imgUrl: `${img7}`,
    update: "Updated 03/11/2019",
    name: "Vue crash course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starHalf, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "149",
    price: "$20.01",
  },
  {
    imgUrl: `${img8}`,
    update: "Updated 12/9/2021",
    name: "Django advanced course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starFull, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "320",
    price: "$40.99",
  },
  {
    imgUrl: `${img9}`,
    update: "Updated 26/05/2020",
    name: "Nodejs beginners course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "243",
    price: "$24.05",
  },
  {
    imgUrl: `${img10}`,
    update: "Updated 01/06/2021",
    name: "Github crash course",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "136",
    price: "$10.47",
  },
];
export const CoursesDataAr = [
  {
    imgUrl: `${img1}`,
    update: "أخر تحديث 21/08/2021",
    name: "لغة الجافاسكربت للمبتدئين",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starHalf, id: "s5" },
    ],
    ratesTotal: "299",
    price: "$49.99",
  },
  {
    imgUrl: `${img2}`,
    update: "أخر تحديث 12/06/2020",
    name: "دورة متقدمه فى لغه HTML & CSS",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starFull, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "400",
    price: "$60.28",
  },
  {
    imgUrl: `${img3}`,
    update: "أخر تحديث 30/12/2019",
    name: "لغة البايثون للمبتدئين",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starHalf, id: "s3" },
      { star: starEmpty, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "155",
    price: "$20.04",
  },
  {
    imgUrl: `${img4}`,
    update: "أخر تحديث 02/01/2021",
    name: "دورة تصميم مواقع",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starHalf, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "252",
    price: "$50.36",
  },
  {
    imgUrl: `${img5}`,
    update: "أخر تحديث 31/09/2020",
    name: "دورة متقدمة فى Vue",

    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "355",
    price: "$60.25",
  },
  {
    imgUrl: `${img6}`,
    update: "أخر تحديث 21/08/2021",
    name: "لغة الأنجولار للمبتدئين",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starHalf, id: "s2" },
      { star: starHalf, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starHalf, id: "s5" },
    ],
    ratesTotal: "105",
    price: "$15.64",
  },
  {
    imgUrl: `${img7}`,
    update: "أخر تحديث 03/11/2019",
    name: "دورة تعليم لغه Vue",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starHalf, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "149",
    price: "$20.01",
  },
  {
    imgUrl: `${img8}`,
    update: "أخر تحديث 12/9/2021",
    name: " دورة متقدمة فى Django",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starFull, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "320",
    price: "$40.99",
  },
  {
    imgUrl: `${img9}`,
    update: "أخر تحديث 26/05/2020",
    name: "للمبتدئين Nodejs لغه",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "243",
    price: "$24.05",
  },
  {
    imgUrl: `${img10}`,
    update: "أخر تحديث 01/06/2021",
    name: "دورة تعليم Github",
    ratesStar: [
      { star: starFull, id: "s1" },
      { star: starFull, id: "s2" },
      { star: starFull, id: "s3" },
      { star: starHalf, id: "s4" },
      { star: starEmpty, id: "s5" },
    ],
    ratesTotal: "136",
    price: "$10.47",
  },
];
