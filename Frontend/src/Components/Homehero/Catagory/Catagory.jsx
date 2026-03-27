import React, { useEffect, useRef, useState } from "react";
import "./Catagory.css";


import chairImg from "../../../assets/chair.webp";
import weddingWallImg from "../../../assets/wedding.webp";
import cateringImg from "../../../assets/Catering.webp";
import flowersImg from "../../../assets/Flowers.webp";

const Catagory = () => {
  const base = "bridelyCatagory";
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(current);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  const categoryCards = [
    {
      id: 1,
      title: "Chairs",
      image: chairImg,
      alt: "Wedding chairs by the beach",
      className: `${base}__card ${base}__card--top`,
    },
    {
      id: 2,
      title: "Wedding Walls",
      image: weddingWallImg,
      alt: "Wedding wall decoration",
      className: `${base}__card ${base}__card--upper`,
    },
    {
      id: 3,
      title: "Catering",
      image: cateringImg,
      alt: "Wedding catering table setup",
      className: `${base}__card ${base}__card--bottom`,
    },
    {
      id: 4,
      title: "Metal Circles & Flowers",
      image: flowersImg,
      alt: "Metal circles and flower decoration",
      className: `${base}__card ${base}__card--lower`,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${base} ${show ? `${base}--show` : ""}`}
    >
      <div className={`${base}__backgroundLines`}>
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className={`${base}__line`}></span>
        ))}
      </div>

      <div className={`${base}__softShape ${base}__softShape--left`}></div>
      <div className={`${base}__softShape ${base}__softShape--right`}></div>

      <div className={`${base}__floral ${base}__floral--right`}>
        <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M204 15C171 44 168 82 191 110C214 137 258 141 290 121C264 148 261 189 283 217C305 245 346 253 378 236C346 265 342 309 363 338C382 365 421 376 452 365C420 391 414 428 430 460"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M220 88C194 65 160 68 140 93C121 117 121 154 140 177C112 160 79 164 58 187C37 210 35 247 52 274C25 257 -9 261 -31 285C-52 309 -56 347 -42 375"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M220 88C246 65 280 68 300 93C319 117 319 154 300 177C328 160 361 164 382 187C403 210 405 247 388 274C415 257 449 261 471 285C492 309 496 347 482 375"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M208 124C176 124 151 148 151 179C151 211 176 235 208 235C240 235 265 211 265 179C265 148 240 124 208 124Z"
            stroke="currentColor"
            strokeWidth="6"
            opacity="0.45"
          />
          <path
            d="M208 96L223 140L270 147L233 176L244 222L208 196L172 222L183 176L146 147L193 140L208 96Z"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinejoin="round"
            opacity="0.45"
          />
        </svg>
      </div>

      <div className={`${base}__container`}>
        <div className={`${base}__content`}>
          <div className={`${base}__badge`}>
            <svg viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 54C26 46 30 34 25 22C34 24 42 21 48 13C53 21 61 24 70 22C65 34 69 46 80 54C68 54 58 60 52 70C46 60 36 54 16 54Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path
                d="M62 54C72 46 76 34 71 22C80 24 88 21 94 13C99 21 107 24 116 22C111 34 115 46 126 54C114 54 104 60 98 70C92 60 82 54 62 54Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path
                d="M39 38C45 30 47 22 44 14C50 15 55 13 59 8C62 13 67 15 73 14C70 22 72 30 79 38C71 38 65 42 61 49C57 42 51 38 39 38Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className={`${base}__title`}>
            Includes Various
            <br />
            Product Categories
          </h2>

          <p className={`${base}__description`}>
            Elegant wedding essentials crafted to elevate every celebration with
            stylish décor, refined setups, and premium event details.
          </p>

          <button type="button" className={`${base}__button`}>
            Learn More
          </button>
        </div>

        <div className={`${base}__cards`}>
          {categoryCards.map((item) => (
            <article key={item.id} className={item.className}>
              <div className={`${base}__imageWrap`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`${base}__image`}
                />
              </div>
              <h3 className={`${base}__cardTitle`}>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>

      <div className={`${base}__icons`}>
        <span className={`${base}__icon ${base}__icon--sparkle`}>
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 5C31.5 16 36 21 47 23C36 24.5 31.5 29 30 40C28.5 29 24 24.5 13 23C24 21 28.5 16 30 5Z"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <span className={`${base}__icon ${base}__icon--heartOne`}>
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 49C30 49 10 37.5 10 22.5C10 15.5 15.5 10 22.5 10C27 10 30.5 12.5 33 17C35.5 12.5 39 10 43.5 10C50.5 10 56 15.5 56 22.5C56 37.5 36 49 36 49H30Z"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="23" r="1.7" fill="currentColor" />
            <circle cx="32" cy="27" r="1.7" fill="currentColor" />
          </svg>
        </span>

        <span className={`${base}__icon ${base}__icon--heartTwo`}>
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 49C30 49 10 37.5 10 22.5C10 15.5 15.5 10 22.5 10C27 10 30.5 12.5 33 17C35.5 12.5 39 10 43.5 10C50.5 10 56 15.5 56 22.5C56 37.5 36 49 36 49H30Z"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className={`${base}__icon ${base}__icon--heartThree`}>
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 49C30 49 10 37.5 10 22.5C10 15.5 15.5 10 22.5 10C27 10 30.5 12.5 33 17C35.5 12.5 39 10 43.5 10C50.5 10 56 15.5 56 22.5C56 37.5 36 49 36 49H30Z"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Catagory;