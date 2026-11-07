import React from "react";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const Gallery = ({ onImageClick }) => {
  const { gallery } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="gallery"
      ref={ref}
      className={`animate-on-scroll ${inView ? "visible" : ""}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <h2>Gallery</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {gallery.map((image, index) => (
          <button
            key={index}
            type="button"
            className="group block w-full text-left"
            aria-label={`Open gallery image ${index + 1}`}
            onClick={() => onImageClick(image)}
          >
            <div className="tile tile-square bg-light-card dark:bg-dark-card">
              <img src={image} alt="" loading="lazy" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
