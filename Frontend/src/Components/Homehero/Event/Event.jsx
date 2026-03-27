import React, { useState } from "react";
import "./Event.css";

const Event = () => {
  const base = "bridelyEvent";
  const [activeCard, setActiveCard] = useState(2);

  const teamMembers = [
    {
      name: "Alisha Rees",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80&grayscale",
    },
    {
      name: "Rhys Carter",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80&grayscale",
    },
    {
      name: "Kyle Buckley",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80&grayscale",
    },
    {
      name: "Maisie Walton",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80&grayscale",
    },
  ];

  return (
    <section className={base}>
      <div className={`${base}__bg`}></div>
      <div className={`${base}__lines`}></div>
      <div className={`${base}__wash`}></div>

      <div className={`${base}__ornament ${base}__ornament--right`}>
        <svg viewBox="0 0 260 430" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.42" stroke="currentColor" strokeWidth="2.2">
            <path d="M130 18C162 49 183 86 183 122C183 160 160 186 130 186C100 186 77 160 77 122C77 86 98 49 130 18Z" />
            <path d="M130 89C154 113 168 139 168 165C168 191 152 208 130 208C108 208 92 191 92 165C92 139 106 113 130 89Z" />
            <path d="M68 102C100 113 119 133 119 157C119 181 98 198 68 198C38 198 17 181 17 157C17 133 36 113 68 102Z" />
            <path d="M192 102C224 113 243 133 243 157C243 181 222 198 192 198C162 198 141 181 141 157C141 133 160 113 192 102Z" />
            <path d="M64 208C95 219 114 240 114 265C114 291 94 309 64 309C34 309 14 291 14 265C14 240 33 219 64 208Z" />
            <path d="M196 208C227 219 246 240 246 265C246 291 226 309 196 309C166 309 146 291 146 265C146 240 165 219 196 208Z" />
            <path d="M130 214C155 239 170 267 170 295C170 325 153 345 130 345C107 345 90 325 90 295C90 267 105 239 130 214Z" />
            <path d="M130 145V381" />
            <path d="M34 265H226" />
          </g>
        </svg>
      </div>

      <div className={`${base}__hearts`}>
        <span className={`${base}__heart ${base}__heart--star`}>
          <svg viewBox="0 0 36 36" fill="none">
            <path
              d="M18 4L21 15L32 18L21 21L18 32L15 21L4 18L15 15L18 4Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className={`${base}__heart ${base}__heart--peach`}>
          <svg viewBox="0 0 42 42" fill="none">
            <path
              d="M21 35C21 35 7 25.4 7 14.7C7 10 10.5 6.5 15.1 6.5C18 6.5 19.8 7.8 21 9.9C22.2 7.8 24 6.5 26.9 6.5C31.5 6.5 35 10 35 14.7C35 25.4 21 35 21 35Z"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className={`${base}__heart ${base}__heart--mintOne`}>
          <svg viewBox="0 0 42 42" fill="none">
            <path
              d="M21 35C21 35 7 25.4 7 14.7C7 10 10.5 6.5 15.1 6.5C18 6.5 19.8 7.8 21 9.9C22.2 7.8 24 6.5 26.9 6.5C31.5 6.5 35 10 35 14.7C35 25.4 21 35 21 35Z"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className={`${base}__heart ${base}__heart--mintTwo`}>
          <svg viewBox="0 0 42 42" fill="none">
            <path
              d="M21 35C21 35 7 25.4 7 14.7C7 10 10.5 6.5 15.1 6.5C18 6.5 19.8 7.8 21 9.9C22.2 7.8 24 6.5 26.9 6.5C31.5 6.5 35 10 35 14.7C35 25.4 21 35 21 35Z"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className={`${base}__container`}>
        <div className={`${base}__content`}>
          <div className={`${base}__sealWrap`}>
            <div className={`${base}__sealGlow`}></div>
            <div className={`${base}__seal`}>
              <svg viewBox="0 0 170 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 62H146" stroke="currentColor" strokeWidth="1.8" opacity="0.28" />
                <path
                  d="M85 10L94 21L109 23L98 33L101 48L85 40L69 48L72 33L61 23L76 21L85 10Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M53 58C53 40 67 26 85 26C103 26 117 40 117 58"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M41 58C49 46 60 38 73 35"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M129 58C121 46 110 38 97 35"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M58 58C58 50 64 43 72 41C75 48 78 53 85 58"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M112 58C112 50 106 43 98 41C95 48 92 53 85 58"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <h2 className={`${base}__title`}>
            Meet Our Creative
            <br />
            Event Organizer
          </h2>

          <p className={`${base}__text`}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
            tempor incididunt.
          </p>

          <button className={`${base}__button`} type="button">
            Learn More
          </button>
        </div>

        <div className={`${base}__teamGrid`}>
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className={`${base}__memberCard ${
                activeCard === index ? `${base}__memberCard--active` : ""
              } ${base}__memberCard--${index + 1}`}
              onClick={() => setActiveCard(index)}
            >
              <div className={`${base}__imageWrap`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={`${base}__image`}
                />

                <div
                  className={`${base}__socialBar ${
                    activeCard === index ? `${base}__socialBar--show` : ""
                  }`}
                >
                  <button className={`${base}__socialBtn`} type="button" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.5 21V13.7H16L16.4 10.8H13.5V8.95C13.5 8.1 13.77 7.52 15 7.52H16.5V4.92C15.76 4.83 15.02 4.79 14.28 4.8C12.08 4.8 10.58 6.13 10.58 8.58V10.8H8.2V13.7H10.58V21H13.5Z" />
                    </svg>
                  </button>

                  <button className={`${base}__socialBtn`} type="button" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 7.04C20.29 7.35 19.53 7.56 18.74 7.66C19.56 7.17 20.19 6.39 20.49 5.46C19.72 5.91 18.88 6.24 18 6.41C17.27 5.64 16.24 5.16 15.1 5.16C12.92 5.16 11.19 6.99 11.19 9.11C11.19 9.42 11.22 9.72 11.29 10.01C8.03 9.86 5.15 8.32 3.21 5.98C2.87 6.57 2.67 7.25 2.67 7.98C2.67 9.35 3.38 10.56 4.43 11.28C3.79 11.27 3.19 11.09 2.67 10.81V10.86C2.67 12.78 4.06 14.36 5.89 14.72C5.57 14.8 5.24 14.84 4.89 14.84C4.65 14.84 4.42 14.82 4.19 14.78C4.66 16.38 6.15 17.55 7.91 17.58C6.54 18.61 4.84 19.22 3 19.22C2.66 19.22 2.33 19.2 2 19.16C3.79 20.31 5.91 21 8.19 21C15.09 21 18.86 15.43 18.86 10.61C18.86 10.45 18.86 10.29 18.85 10.14C19.59 9.63 20.24 8.99 21 7.04Z" />
                    </svg>
                  </button>

                  <button className={`${base}__socialBtn`} type="button" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.75 3H16.25C18.87 3 21 5.13 21 7.75V16.25C21 18.87 18.87 21 16.25 21H7.75C5.13 21 3 18.87 3 16.25V7.75C3 5.13 5.13 3 7.75 3ZM7.6 4.9C6.11 4.9 4.9 6.11 4.9 7.6V16.4C4.9 17.89 6.11 19.1 7.6 19.1H16.4C17.89 19.1 19.1 17.89 19.1 16.4V7.6C19.1 6.11 17.89 4.9 16.4 4.9H7.6ZM16.95 6.32C17.5 6.32 17.95 6.77 17.95 7.32C17.95 7.87 17.5 8.32 16.95 8.32C16.4 8.32 15.95 7.87 15.95 7.32C15.95 6.77 16.4 6.32 16.95 6.32ZM12 7.85C14.29 7.85 16.15 9.71 16.15 12C16.15 14.29 14.29 16.15 12 16.15C9.71 16.15 7.85 14.29 7.85 12C7.85 9.71 9.71 7.85 12 7.85ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <h3 className={`${base}__name`}>{member.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;