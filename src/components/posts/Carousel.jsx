import React, { useState, useEffect } from "react";

const carouselImages = [
  {
    src: "https://images.fairtrade.net/article/_articleFull/26196_MangoHarvest_870.jpg",
    caption: "Neuigkeiten zum Bauern-Protest",
    subCaption: "Das sagen betroffene darüber",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWr3gMc3PwTOYwknLhnJP1GRXDG1KVQbsHAA&s",
    caption: "Weitere Neuigkeiten",
    subCaption: "Informationen aus erster Hand",
  },
  {
    src: "https://i.ytimg.com/vi/toGH5K8tZXs/maxresdefault.jpg",
    caption: "Aktuelle Entwicklungen",
    subCaption: "Bleiben Sie informiert",
  },
];

const Carousel = ({ styleContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  return (
    <div className="relative w-full  overflow-hidden ">
      <div
        className="flex transition-transform duration-700 gap-5"
        style={{ transform: `translateX(-${currentIndex * 105}%)` }}
      >
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`relative w-full flex-shrink-0 h-32 ${styleContent}`}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute top-4 left-4 text-white">
              <h1 className="text-lg font-bold shadow-md">{image.caption}</h1>
              <p>{image.subCaption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white flex gap-2 rounded-full p-1 absolute bottom-2 right-2 ">
        {carouselImages.map((_, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
