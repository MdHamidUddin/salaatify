"use client"; // This component needs client-side interactivity

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using lucide-react for icons

// Updated images array with captions
const images = [
  {
    src: "./cover/1.jpeg",
    caption: "A serene mosque at dawn, bathed in soft light.",
  },
  {
    src: "./cover/2.jpeg",
    caption: "Intricate Islamic calligraphy, a timeless art form.",
  },
  {
    src: "./cover/3.jpeg",
    caption: "Pilgrims performing Tawaf around the Holy Kaaba.",
  },
  {
    src: "./cover/4.jpeg",
    caption: "Stunning Islamic architecture, a blend of history and beauty.",
  },
  {
    src: "./cover/5.jpeg",
    caption: "A peaceful prayer rug, inviting tranquility and reflection.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, [currentIndex]); // Restart interval if currentIndex changes

  return (
    <div className="relative mx-auto my-8 w-full max-w-7xl overflow-hidden rounded-xl shadow-2xl">
      {/* Carousel Image Container */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
        <Image
          // Use key to force re-render and trigger transition on image change
          key={currentIndex}
          src={images[currentIndex]?.src ?? ""}
          alt={
            images[currentIndex]?.caption ??
            `Carousel Image ${currentIndex + 1}`
          }
          fill
          className="object-cover opacity-100 transition-opacity duration-700 ease-in-out" // Increased duration for smoother fade
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/1200x400/CCCCCC/000000?text=Image+Load+Error";
          }} // Fallback for image loading errors
        />

        {/* Caption Overlay */}
        <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-black to-transparent p-4 text-center text-sm text-white sm:text-base md:text-lg">
          {images[currentIndex]?.caption}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-all duration-300 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-all duration-300 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {" "}
        {/* Increased z-index to ensure visibility */}
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "scale-125 bg-white"
                : "bg-gray-400 bg-opacity-70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
