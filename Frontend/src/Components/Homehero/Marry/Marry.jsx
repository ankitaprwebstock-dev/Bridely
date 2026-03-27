import React, { useMemo, useState } from "react";
import "./Marry.css";

const Marry = () => {
  const base = "bridelyMarry";

  const stories = useMemo(
    () => [
      {
        title: "Marry Jain & Jamie Foster",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices.",
        image:
          "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Sophia Reed & Ethan Clarke",
        text: "Beautiful memories begin with thoughtful planning, premium styling, and heartfelt details that turn a wedding day into an unforgettable story.",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Olivia James & Noah Walker",
        text: "From elegant ceremonies to dreamy portraits, every celebration deserves a graceful presentation with timeless decor and joyful moments.",
        image:
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const activeStory = stories[activeIndex];
  const nextStory = stories[(activeIndex + 1) % stories.length];

  return (
    <section className={base}>
      <div className={`${base}__bgBase`}></div>
      <div className={`${base}__bgWatercolor`}></div>
      <div className={`${base}__bgLines`}></div>
      <div className={`${base}__bgGlow ${base}__bgGlow--one`}></div>
      <div className={`${base}__bgGlow ${base}__bgGlow--two`}></div>

      <div className={`${base}__softSquare ${base}__softSquare--one`}></div>
      <div className={`${base}__softSquare ${base}__softSquare--two`}></div>
      <div className={`${base}__softSquare ${base}__softSquare--three`}></div>

      <div className={`${base}__container`}>
        <div className={`${base}__topDecor`}>
          <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M71 37C90 36 103 49 104 65C105 84 88 101 69 101C50 101 35 85 35 67C35 55 42 48 52 43C53 34 60 29 70 29C80 29 88 34 91 43"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M63 72C72 76 81 76 90 72"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M49 76L30 83L42 65"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M82 37C87 27 97 21 109 21"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M106 12V30"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M97 20H115"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <circle cx="79" cy="58" r="3.2" fill="currentColor" />
            <path
              d="M20 28C23 22 28 18 35 18"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M27 13V21"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M14 58C19 52 26 50 33 51"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M16 48L21 54"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M100 44C106 41 112 42 117 46"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </div>

        <div className={`${base}__visualBlock`}>
          <div className={`${base}__mainImageFrame`}>
            <img
              src={activeStory.image}
              alt={activeStory.title}
              className={`${base}__mainImage`}
            />
          </div>

          <div className={`${base}__sideImageFrame`}>
            <img
              src={nextStory.image}
              alt={nextStory.title}
              className={`${base}__sideImage`}
            />
          </div>

          <div className={`${base}__contentCard`}>
            <div className={`${base}__quoteIcon`}>
              <svg viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="currentColor" />
                <path
                  d="M22 35C22 28.6 25.4 24.1 31.9 21L33.6 24C29.5 26.2 28.2 28.8 28 32H33V43H22V35ZM38 35C38 28.6 41.4 24.1 47.9 21L49.6 24C45.5 26.2 44.2 28.8 44 32H49V43H38V35Z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            <h2 className={`${base}__title`}>{activeStory.title}</h2>

            <p className={`${base}__text`}>{activeStory.text}</p>

            <button className={`${base}__button`} type="button">
              <span className={`${base}__buttonIcon`}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M8 6L17 12L8 18V6Z" fill="currentColor" />
                </svg>
              </span>
              <span>See the Story</span>
            </button>
          </div>

          <div className={`${base}__navButtons`}>
            <button
              type="button"
              className={`${base}__navBtn`}
              onClick={prevSlide}
              aria-label="Previous story"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M14.5 6L8.5 12L14.5 18"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className={`${base}__navBtn`}
              onClick={nextSlide}
              aria-label="Next story"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M9.5 6L15.5 12L9.5 18"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marry;