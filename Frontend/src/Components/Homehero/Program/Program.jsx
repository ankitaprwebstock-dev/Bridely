import React from "react";
import "./Program.css";

const Program = () => {
  const base = "bridelyProgram";

  const images = {
    main: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    top: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    bottom: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
  };

  return (
    <section className={base}>
      <div className={`${base}__bg`}></div>
      <div className={`${base}__watercolor ${base}__watercolor--right`}></div>
      <div className={`${base}__watercolor ${base}__watercolor--left`}></div>

      <div className={`${base}__ornament ${base}__ornament--left`}>
        <svg viewBox="0 0 300 460" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" stroke="currentColor" strokeWidth="2.2">
            <path d="M150 24C186 57 210 98 210 142C210 188 184 217 150 217C116 217 90 188 90 142C90 98 114 57 150 24Z" />
            <path d="M150 106C177 132 193 161 193 191C193 222 175 243 150 243C125 243 107 222 107 191C107 161 123 132 150 106Z" />
            <path d="M79 122C114 134 136 156 136 184C136 211 113 231 79 231C45 231 22 211 22 184C22 156 44 134 79 122Z" />
            <path d="M221 122C256 134 278 156 278 184C278 211 255 231 221 231C187 231 164 211 164 184C164 156 186 134 221 122Z" />
            <path d="M74 241C108 253 129 276 129 304C129 333 107 354 74 354C41 354 19 333 19 304C19 276 40 253 74 241Z" />
            <path d="M226 241C260 253 281 276 281 304C281 333 259 354 226 354C193 354 171 333 171 304C171 276 192 253 226 241Z" />
            <path d="M150 248C177 275 195 307 195 338C195 372 176 394 150 394C124 394 105 372 105 338C105 307 123 275 150 248Z" />
            <path d="M150 168V430" />
            <path d="M40 304H260" />
          </g>
        </svg>
      </div>

      <div className={`${base}__container`}>
        <div className={`${base}__top`}>
          <div className={`${base}__badgeWrap`}>
            <div className={`${base}__badgeGlow`}></div>

            <div className={`${base}__badge`}>
              <svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="bridelySoftGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d="M45 40C63 20 83 12 110 12C137 12 157 20 175 40"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="4 9"
                />

                <path
                  d="M70 57C70 36 87 22 110 22C133 22 150 36 150 57"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                <path
                  d="M110 30L117 41L130 43L120 52L123 66L110 58L97 66L100 52L90 43L103 41L110 30Z"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                  filter="url(#bridelySoftGlow)"
                />

                <path
                  d="M82 88C88 76 97 69 110 69C123 69 132 76 138 88"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                <path
                  d="M73 98C82 86 94 79 110 79C126 79 138 86 147 98"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                <path
                  d="M58 116H162"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                <path
                  d="M71 116L79 101L88 116L97 101L106 116L114 101L123 116L132 101L141 116L149 101L157 116"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M90 56C95 50 102 47 110 47C118 47 125 50 130 56"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.75"
                />

                <circle cx="110" cy="69" r="2.8" fill="currentColor" opacity="0.9" />
                <circle cx="86" cy="90" r="2" fill="currentColor" opacity="0.55" />
                <circle cx="134" cy="90" r="2" fill="currentColor" opacity="0.55" />

                <path
                  d="M24 44C36 25 53 13 73 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path
                  d="M196 44C184 25 167 13 147 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.55"
                />

                <text
                  x="110"
                  y="10"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="11"
                  letterSpacing="5"
                >
                  15+ YEARS OF EXPERIENCE
                </text>
              </svg>
            </div>
          </div>

          <h2 className={`${base}__title`}>
            The Unrivaled Scenery, Unforgettable
            <br />
            Wedding Program
          </h2>
        </div>

        <div className={`${base}__gallery`}>
          <div className={`${base}__galleryLeft`}>
            <div className={`${base}__card ${base}__card--main`}>
              <img src={images.main} alt="Wedding couple" className={`${base}__img`} />
            </div>
          </div>

          <div className={`${base}__galleryRight`}>
            <div className={`${base}__card ${base}__card--top`}>
              <img src={images.top} alt="Wedding ceremony" className={`${base}__img`} />
            </div>

            <div className={`${base}__card ${base}__card--bottom`}>
              <img src={images.bottom} alt="Wedding decor" className={`${base}__img`} />
            </div>
          </div>
        </div>

        <div className={`${base}__bottomArea`}>
          <button className={`${base}__button`} type="button">
            Make Reservations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Program;