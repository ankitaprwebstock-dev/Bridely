import React from "react";
import "./Plan.css";

const Plan = () => {
  const base = "bridelyPlan";

  const planItems = [
    {
      title: "Entertainment",
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="4" fill="currentColor" opacity="0.18" />
          <circle cx="96" cy="82" r="4" fill="currentColor" opacity="0.18" />
          <circle cx="88" cy="20" r="3" fill="currentColor" opacity="0.14" />
          <path d="M42 72L61 32L79 44L60 84C57 90 50 93 44 90C38 87 36 79 42 72Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/>
          <path d="M61 32L82 19" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M82 19L88 25" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M72 51L90 28" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M39 69C33 63 33 53 40 47L49 39" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M48 56L54 62" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M33 27V18" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/>
          <path d="M29 22H37" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/>
          <path d="M93 51V43" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/>
          <path d="M89 47H97" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/>
          <path d="M61 24V16" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/>
          <path d="M73 30L79 24" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/>
          <path d="M50 28L44 22" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/>
          <circle cx="54" cy="64" r="9" fill="#EAA593" fillOpacity="0.9" />
        </svg>
      ),
    },
    {
      title: "Dining",
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="32" r="4" fill="currentColor" opacity="0.18" />
          <circle cx="100" cy="84" r="4" fill="currentColor" opacity="0.18" />
          <path d="M28 43V76" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M23 43V58" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M33 43V58" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M87 34V76" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M83 34V50C83 54 86 57 90 57H91" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M45 49H75C82 49 87 54 87 61V76H33V61C33 54 38 49 45 49Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/>
          <path d="M51 49V42C51 37 55 33 60 33C65 33 69 37 69 42V49" stroke="currentColor" strokeWidth="2.3"/>
          <path d="M60 53C65 53 69 57 69 62V66H51V62C51 57 55 53 60 53Z" fill="#EAA593"/>
          <path d="M20 86H100" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" opacity="0.35"/>
          <path d="M98 26V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M95 23H101" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Decor",
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="78" r="4" fill="currentColor" opacity="0.18" />
          <circle cx="94" cy="88" r="4" fill="currentColor" opacity="0.18" />
          <path d="M30 78V47C30 31 42 20 58 20H62C78 20 90 31 90 47V78" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/>
          <path d="M30 78H90" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M38 20C38 35 34 42 24 48" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M82 20C82 35 86 42 96 48" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M46 52C46 45 52 39 60 39C68 39 74 45 74 52" stroke="currentColor" strokeWidth="2.3"/>
          <path d="M60 74C67 69 73 62 73 56C73 50 68 46 63 46C61 46 60 47 60 49C60 47 59 46 57 46C52 46 47 50 47 56C47 62 53 69 60 74Z" fill="#EAA593"/>
          <path d="M18 94V86" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 90H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M84 24V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M80 20H88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Swag & Gifting",
      icon: (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="36" r="4" fill="currentColor" opacity="0.18" />
          <circle cx="90" cy="92" r="4" fill="currentColor" opacity="0.18" />
          <path d="M34 44H86V82H34V44Z" stroke="currentColor" strokeWidth="2.3"/>
          <path d="M30 44H90V56H30V44Z" stroke="currentColor" strokeWidth="2.3"/>
          <path d="M60 44V82" stroke="currentColor" strokeWidth="2.3"/>
          <path d="M50 33C50 28 54 24 59 24C65 24 69 28 69 33C69 39 65 44 60 44C55 44 50 39 50 33Z" fill="#EAA593"/>
          <path d="M60 44C52 44 46 38 46 31C46 24 50 20 56 20C61 20 66 24 60 44Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/>
          <path d="M60 44C68 44 74 38 74 31C74 24 70 20 64 20C59 20 54 24 60 44Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/>
          <path d="M78 67L92 53" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M86 49L95 58" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M82 52L87 47" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M22 86V80" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 83H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M96 27V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M93 24H99" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className={base}>
      <div className={`${base}__bgGlow ${base}__bgGlow--leftTop`}></div>
      <div className={`${base}__bgGlow ${base}__bgGlow--rightBottom`}></div>
      <div className={`${base}__softSquare ${base}__softSquare--one`}></div>
      <div className={`${base}__softSquare ${base}__softSquare--two`}></div>
      <div className={`${base}__softSquare ${base}__softSquare--three`}></div>

      <div className={`${base}__container`}>
        <div className={`${base}__gridWrap`}>
          {planItems.map((item, index) => (
            <div
              className={`${base}__card`}
              key={item.title}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={`${base}__iconBox`}>{item.icon}</div>
              <h3 className={`${base}__cardTitle`}>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className={`${base}__content`}>
          <div className={`${base}__sealWrap`}>
            <div className={`${base}__sealGlow`}></div>
            <div className={`${base}__seal`}>
              <svg viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 64H158" stroke="currentColor" strokeWidth="1.8" opacity="0.28" />
                <path
                  d="M90 10L100 22L116 24L105 35L108 50L90 42L72 50L75 35L64 24L80 22L90 10Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M56 58C56 39 71 24 90 24C109 24 124 39 124 58"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M43 58C52 45 64 37 78 34"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M137 58C128 45 116 37 102 34"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M63 58C63 49 69 42 78 40C81 48 84 53 90 58"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M117 58C117 49 111 42 102 40C99 48 96 53 90 58"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M51 64C58 52 69 44 81 43"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M129 64C122 52 111 44 99 43"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>

          <h2 className={`${base}__title`}>
            Let’s Plan Your Next
            <br />
            Event Together
          </h2>

          <p className={`${base}__text`}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
            tempor incididunt.
          </p>

          <button className={`${base}__button`} type="button">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plan;