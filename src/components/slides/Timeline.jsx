import { motion } from "framer-motion";
import { CalendarHeart, Heart } from "lucide-react";

import photo1 from "/images/1.JPG";
import photo2 from "/images/3.JPG";
import photo3 from "/images/2.JPG";
import photo4 from "/images/5.png";

const photos = [
  {
    image: photo2,
    title: "Senyummu",
    date: "Foto Favoritku",
    text: "Senyummu selalu punya cara sederhana untuk membuat hariku terasa lebih tenang. Entah kenapa, setiap melihatnya, aku merasa kayak pengen aku cubitt wkwkw.",
    rotate: "-rotate-6",
  },
  {
    image: photo1,
    title: "Lembutnya Hatimu",
    date: "",
    text: "Yang membuatku jatuh hati bukan hanya wajahmu, tetapi kelembutan sikapmu. Caramu berbicara, menghargai orang lain, dan memperlakukan semua dengan baik membuatku semakin kagum setiap hari.",
    rotate: "rotate-3",
  },
  {
    image: photo3,
    title: "Cantik Apa Adanya",
    date: "",
    text: "Kamu tidak perlu berusaha menjadi siapa pun. Kesederhanaanmu sudah cukup membuatmu terlihat begitu cantik di mataku.",
    rotate: "-rotate-2",
  },
  {
    image: photo4,
    title: "Anugerah Terindah",
    date: "Foto Terakhir kita bertemu",
    text: "Jika suatu hari Allah mengizinkan aku menjadi imam dalam hidupmu, aku ingin memastikan senyum itu tetap ada, menjagamu dengan sebaik-baiknya, dan mencintaimu karena Allah setiap hari.",
    rotate: "rotagte-6",
  },
];

export default function Timeline() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-white py-20">
      {/* Background Blur */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-rose-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <CalendarHeart className="mx-auto mb-4 text-pink-500" size={55} />

          <h1 className="text-center text-5xl font-extrabold text-pink-600">
            Ayu Merlina
          </h1>

          <div className="flex justify-center mt-3 gap-2">
            <Heart className="fill-pink-500 text-pink-500" size={18} />
            <Heart className="fill-rose-400 text-rose-400" size={14} />
            <Heart className="fill-pink-500 text-pink-500" size={18} />
          </div>

          <p className="mt-5 text-center text-lg italic text-gray-500">
            "Beberapa foto yang selalu membuatku tersenyum."
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
                rotate: -8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.25,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
              }}
              className={`mx-auto w-full max-w-sm ${photo.rotate}`}
            >
              <div className="rounded-xl bg-white p-4 shadow-2xl">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-72 w-full rounded-2xl object-cover shadow-md"
                />

                <div className="mt-5">
                  <h2 className="text-2xl font-bold text-pink-500">
                    {photo.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">{photo.date}</p>

                  <p className="mt-4 leading-8 text-gray-700">{photo.text}</p>

                  <Heart
                    size={18}
                    className="mt-5 fill-pink-500 text-pink-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
