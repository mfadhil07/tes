import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Proposal() {
  const [yes, setYes] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-white px-6">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-rose-300/30 blur-3xl" />

      {yes && <Confetti recycle={false} numberOfPieces={350} />}

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl rounded-[40px] border border-pink-200 bg-white/90 p-12 text-center shadow-[0_25px_80px_rgba(236,72,153,.18)] backdrop-blur"
      >
        {/* Icon */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mb-6 flex justify-center gap-3"
        >
          <Heart size={30} className="fill-pink-500 text-pink-500" />
          <Sparkles size={28} className="text-yellow-400" />
          <Heart size={30} className="fill-pink-500 text-pink-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-pink-600"
        >
          Ayu Merlina
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xl leading-10 text-gray-700"
        >
          Setelah semua yang sudah kusampaikan...
          <br />
          izinkan aku menyampaikan satu niat
          <br />
          yang paling serius.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-4xl font-bold leading-relaxed text-pink-500"
        >
          Ayu...
          <br />
          Setelah semua
          <br />
          yang sudah kusampaikan,
          <br />
          maukah kamu
          <br />
          menjadi istriku?
        </motion.h2>
        {!yes ? (
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setYes(true)}
            className="mt-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-5 text-lg font-semibold text-white shadow-xl transition"
          >
            🤍 InsyaAllah, Iya
          </motion.button>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
            >
              <Heart
                size={60}
                className="mx-auto fill-pink-500 text-pink-500"
              />
            </motion.div>

            <h2 className="mt-6 text-4xl font-bold text-pink-600">
              Terima Kasih ❤️
            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Aku sudah menyampaikan semua yang ada di hatiku.
              <br />
              <br />
              Sekarang...
              <br />
              aku akan menunggu jawabanmu.
              <br />
              <br />
              Tidak perlu terburu-buru, karena jawaban yang datang dari hati
              selalu layak untuk ditunggu.
              <br />
              <br />
              🤍
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
