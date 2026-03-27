import React, { useEffect, useRef, useState } from "react";
import "./Vedio.css";

const Vedio = () => {
  const base = "weddingVedio";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(current);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <>
      <section
        ref={sectionRef}
        className={`${base} ${isVisible ? `${base}--visible` : ""}`}
      >
        <div className={`${base}__bg ${base}__bg--one`}></div>
        <div className={`${base}__bg ${base}__bg--two`}></div>

        <div className={`${base}__shape ${base}__shape--one`}></div>
        <div className={`${base}__shape ${base}__shape--two`}></div>
        <div className={`${base}__shape ${base}__shape--three`}></div>
        <div className={`${base}__shape ${base}__shape--four`}></div>

        <div className={`${base}__container`}>
          <div className={`${base}__videoWrap`}>
            <div className={`${base}__videoCard`}>
              <div className={`${base}__glow`}></div>

              <img
                className={`${base}__image`}
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
                alt="Wedding event"
              />

              <div className={`${base}__overlay`}></div>

              <button
                type="button"
                className={`${base}__playButton`}
                aria-label="Play wedding video"
                onClick={openVideo}
              >
                <span className={`${base}__playRing`}></span>
                <span className={`${base}__playIconWrap`}>
                  <span className={`${base}__playIcon`}></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className={`${base}__modal`} onClick={closeVideo}>
          <div
            className={`${base}__modalContent`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={`${base}__closeButton`}
              onClick={closeVideo}
              aria-label="Close video"
            >
              ×
            </button>

            <div className={`${base}__videoFrame`}>
              <iframe
                src="https://www.youtube.com/embed/1B4qCF3_LmI?autoplay=1&rel=0"
                title="Wedding Dummy Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Vedio;