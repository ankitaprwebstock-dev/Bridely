import React from "react";
import "./Homehero.css";
import heroImage from "../../assets/bridelyhero.webp";

const Homehero = () => {
  const base = "homeHeroWedding";

  return (
    <section className={base}>
      <div className={`${base}__bg-watercolor`}></div>
      <div className={`${base}__bg-lines`}></div>
      <div className={`${base}__glow`}></div>
      <div className={`${base}__mist ${base}__mist--one`}></div>
      <div className={`${base}__mist ${base}__mist--two`}></div>

      <div className={`${base}__leaf ${base}__leaf--topLeft`}>
        <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 172C47 140 67 112 82 80C92 58 103 40 126 24"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M83 82C68 60 66 36 74 14C92 26 102 42 103 62C103 70 99 78 92 86"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M98 68C121 59 140 40 150 16C164 34 167 51 161 66C154 82 139 90 118 88"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M58 112C37 100 21 81 12 58C31 58 47 64 57 76C67 88 68 100 58 112Z"
            fill="currentColor"
            fillOpacity="0.08"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="116" cy="49" r="3.8" fill="currentColor" fillOpacity="0.5" />
          <circle cx="141" cy="33" r="3" fill="currentColor" fillOpacity="0.45" />
          <circle cx="88" cy="61" r="3.2" fill="currentColor" fillOpacity="0.45" />
        </svg>
      </div>

      <div className={`${base}__leaf ${base}__leaf--bottomRight`}>
        <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="rotate(12 140 110)">
            <path
              d="M34 177C94 154 141 120 187 68"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M92 138C79 105 77 80 89 52C114 72 124 97 118 126"
              fill="currentColor"
              fillOpacity="0.1"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M124 120C117 89 121 63 143 39C161 59 166 85 153 110"
              fill="currentColor"
              fillOpacity="0.1"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M158 100C151 73 157 46 178 20C197 39 202 64 190 90"
              fill="currentColor"
              fillOpacity="0.1"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M70 156C59 130 60 108 73 83C91 101 97 125 89 148"
              fill="currentColor"
              fillOpacity="0.08"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>

      <div className={`${base}__sparkle ${base}__sparkle--one`}>
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 10L44 28L62 32L44 36L40 54L36 36L18 32L36 28L40 10Z" fill="currentColor" />
        </svg>
      </div>

      <div className={`${base}__sparkle ${base}__sparkle--two`}>
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 10L44 28L62 32L44 36L40 54L36 36L18 32L36 28L40 10Z" fill="currentColor" />
        </svg>
      </div>

      <div className={`${base}__container`}>
        <div className={`${base}__mediaWrap`}>
          <div className={`${base}__photoAura`}></div>

          <div className={`${base}__photoCard`}>
            <div className={`${base}__photoOverlay`}></div>

            <img
              src={heroImage}
              alt="Bride and groom"
              className={`${base}__photo`}
            />

            <div className={`${base}__badge`}>
              <span className={`${base}__badgeIcon`}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21C12 21 4 16.2 4 9.9C4 7.2 6.1 5 8.8 5C10.5 5 11.6 5.8 12 6.6C12.4 5.8 13.5 5 15.2 5C17.9 5 20 7.2 20 9.9C20 16.2 12 21 12 21Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div>
                <strong>Dream Wedding</strong>
                <span>Premium Moments</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${base}__content`}>
          <div className={`${base}__rings`}>
            <svg viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="44"
                cy="37"
                r="21"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <circle
                cx="78"
                cy="40"
                r="21"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M82 7L86 16H96L88.5 21.5L91.5 31L82 25.5L72.5 31L75.5 21.5L68 16H78L82 7Z"
                fill="currentColor"
              />
              <path
                d="M22 24C28 12 40 9 51 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.65"
              />
              <path
                d="M15 36C20 22 31 16 43 16"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.45"
              />
              <path
                d="M60 22C68 11 82 10 94 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
          </div>

          <span className={`${base}__eyebrow`}>Elegant Wedding Planning</span>

          <h1 className={`${base}__title`}>
            Perfect Weddings
            <span className={`${base}__titleAccent`}> Made Easy!</span>
          </h1>

          <p className={`${base}__text`}>
            Make your celebration unforgettable with premium wedding planning,
            graceful decor styling, dreamy venue concepts, and a smooth
            reservation experience designed for your special day.
          </p>

          <div className={`${base}__features`}>
            <div className={`${base}__feature`}>
              <span className={`${base}__featureIcon`}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3L14.7 8.3L20.5 9.1L16.2 13.2L17.2 19L12 16.2L6.8 19L7.8 13.2L3.5 9.1L9.3 8.3L12 3Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>Luxury Decor</span>
            </div>

            <div className={`${base}__feature`}>
              <span className={`${base}__featureIcon`}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 4V7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 4V7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="4"
                    y="6"
                    width="16"
                    height="14"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 10H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span>Easy Booking</span>
            </div>

            <div className={`${base}__feature`}>
              <span className={`${base}__featureIcon`}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21C12 21 4 16.2 4 9.9C4 7.2 6.1 5 8.8 5C10.5 5 11.6 5.8 12 6.6C12.4 5.8 13.5 5 15.2 5C17.9 5 20 7.2 20 9.9C20 16.2 12 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                  />
                </svg>
              </span>
              <span>Lovely Moments</span>
            </div>
          </div>

          <div className={`${base}__actions`}>
            <button className={`${base}__button`} type="button">
              <span className={`${base}__buttonIcon`}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 4V7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 4V7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="4"
                    y="6"
                    width="16"
                    height="14"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 10H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 14H9.01"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 14H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span>Make Reservations</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homehero;