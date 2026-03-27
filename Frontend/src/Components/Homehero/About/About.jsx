import React from "react";
import "./About.css";

import aboutMain from "../../../assets/about1.webp";
import aboutFlower from "../../../assets/About2.webp";
import aboutToast from "../../../assets/About3.webp";

const About = () => {
  const base = "bridelyAbout";

  return (
    <section className={base}>
      <div className={`${base}__bgSoft`}></div>
      <div className={`${base}__bgLines`}></div>
      <div className={`${base}__glow ${base}__glow--one`}></div>
      <div className={`${base}__glow ${base}__glow--two`}></div>
      <div className={`${base}__square`}></div>

      <div className={`${base}__container`}>
        <div className={`${base}__content`}>
          <span className={`${base}__subtitle`}>About Bridely</span>

          <h2 className={`${base}__title`}>
            What We do, We do
            <br />
            With Passion
          </h2>

          <p className={`${base}__text`}>
            We create elegant wedding moments with thoughtful planning,
            beautiful styling, and a premium experience that feels timeless,
            graceful, and unforgettable.
          </p>

          <button className={`${base}__button`} type="button">
            Learn More
          </button>
        </div>

        <div className={`${base}__visual`}>
          <div className={`${base}__iconWrap`}>
            <span className={`${base}__icon ${base}__icon--heart`}>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 28C16 28 5 20.7 5 11.9C5 8.2 7.8 5.5 11.4 5.5C13.8 5.5 15.3 6.7 16 8C16.7 6.7 18.2 5.5 20.6 5.5C24.2 5.5 27 8.2 27 11.9C27 20.7 16 28 16 28Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <span className={`${base}__icon ${base}__icon--flower`}>
              <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34 58C34 41 34 28 42 18"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M42 19C47 14 53 13 58 16C58 22 55 27 50 30C46 27 43 24 42 19Z"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 19C37 14 31 13 26 16C26 22 29 27 34 30C38 27 41 24 42 19Z"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 19C43 12 47 8 54 7C56 12 55 17 51 21"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M31 46C37 42 43 42 49 46"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className={`${base}__icon ${base}__icon--bird`}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M52 28C67 27 77 38 78 51C79 67 66 79 51 79C36 79 24 67 24 53C24 44 29 38 37 35C38 28 44 23 52 23C60 23 66 28 68 35"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M47 55C54 58 61 58 68 55"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M35 57L21 62L30 49"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M60 31C63 23 70 18 79 18"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M76 11V25"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M69 16H84"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="58" cy="46" r="2.5" fill="currentColor" />
              </svg>
            </span>
          </div>

          <div className={`${base}__stack`}>
            <div className={`${base}__card ${base}__card--main`}>
              <img src={aboutMain} alt="Wedding couple" className={`${base}__img`} />
            </div>

            <div className={`${base}__card ${base}__card--flower`}>
              <img src={aboutFlower} alt="Wedding bouquet" className={`${base}__img`} />
            </div>

            <div className={`${base}__card ${base}__card--toast`}>
              <img src={aboutToast} alt="Celebration toast" className={`${base}__img`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;