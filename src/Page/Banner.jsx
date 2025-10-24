import { useState, useEffect } from "react";
import slideimg1 from "../assets/slideimg1.png";
import slideimg2 from "../assets/image2.png";
import slideimg3 from "../assets/slideimg3.png";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Discover New Worlds",
      description:
        "Explore the best indie games crafted by passionate developers from around the globe.",
      image: slideimg1,
    },
    {
      id: 2,
      title: "Join the Battle",
      description:
        "Experience tactical gameplay, high-speed action, and competitive excitement.",
      image: slideimg2,
    },
    {
      id: 3,
      title: "Play Without Limits",
      description:
        "Dive into immersive open worlds and endless adventures waiting for you.",
      image: slideimg3,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full bg-[#f9fafb] rounded-2xl shadow-md overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`flex flex-col md:flex-row items-center justify-between transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 absolute inset-0 z-0"
            }`}
        >
          <div className="hidden md:block md:w-1/2 space-y-5 px-10 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {slide.title}
            </h2>
            <p className="text-gray-600">{slide.description}</p>
            <button className="btn bg-[#0cc0df] hover:bg-[#09b1cd] border-none text-white font-semibold">
              Explore Now
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full max-w-md rounded-xl object-contain"
            />
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400 hover:text-[#0cc0df] z-20"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400 hover:text-[#0cc0df] z-20"
      >
        ❯
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${current === i ? "bg-[#0cc0df]" : "bg-gray-300"
              } transition`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
