import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/1.JPG",
  "/images/2.JPG",
  "/images/4.JPG",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl">

      <h1 className="mb-10 text-center text-5xl font-bold text-pink-600">
        Galeri Kenangan
      </h1>

      <div className="relative">

        <AnimatePresence mode="wait">

          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity:0, scale:.9 }}
            animate={{ opacity:1, scale:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:.5 }}
            className="mx-auto h-[500px] rounded-3xl object-cover shadow-2xl"
          />

        </AnimatePresence>

        <button
          onClick={() =>
            setIndex((index - 1 + images.length) % images.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-4 shadow-xl"
        >
          <ChevronLeft/>
        </button>

        <button
          onClick={() =>
            setIndex((index + 1) % images.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-4 shadow-xl"
        >
          <ChevronRight/>
        </button>
      </div>
    </div>
  );
}