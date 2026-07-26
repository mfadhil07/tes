import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import story from "../../data/story";

export default function Intro() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-white px-6">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-rose-300/20 blur-3xl"></div>

      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative w-full max-w-3xl rounded-3xl bg-white/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,.18)] backdrop-blur-md md:p-12"
      >
        {/* Icon */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
        >
          <Heart
            size={55}
            className="mx-auto mb-6 fill-pink-500 text-pink-500"
          />
        </motion.div>

        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-center text-4xl font-bold text-pink-600 md:text-5xl"
        >
          {story.intro.title}
        </motion.h1>

        {/* Isi */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="whitespace-pre-line text-center text-lg leading-9 text-gray-700 md:text-xl md:leading-10"
        >
          {story.intro.content}
        </motion.p>

        {/* Garis */}
        <div className="my-10 border-t border-dashed border-pink-200"></div>

        {/* Footer */}
        <p className="text-center text-sm italic text-gray-500">
          "Semoga setiap kata yang kamu baca, bisa menyampaikan apa yang sulit
          kuucapkan."
        </p>
      </motion.div>
    </div>
  );
}
