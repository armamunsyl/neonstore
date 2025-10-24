import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="relative w-full bg-[#f9fafb] rounded-2xl shadow-md overflow-hidden md:h-[480px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between w-full bg-white"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden md:block md:w-1/2 space-y-5 px-10 lg:px-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {slides[current].title}
            </h2>
            <p className="text-gray-600">{slides[current].description}</p>
            <button className="btn bg-[#0cc0df] hover:bg-[#09b1cd] border-none text-white font-semibold">
              Explore Now
            </button>
          </motion.div>
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-10"
          >
            <motion.img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-auto md:h-[400px] object-contain rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-[#0cc0df] z-20"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-[#0cc0df] z-20"
      >
        ❯
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              current === i ? "bg-[#0cc0df]" : "bg-gray-300"
            } transition`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
