import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hero({ onOpen }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-white">
      {/* Background */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-300/20 blur-3xl" />

      {/* Floating Heart */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-10"
      >
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-center"
      >
        <p className="uppercase tracking-[8px] text-pink-500">Untuk</p>

        <h1 className="mt-4 text-5xl font-bold text-gray-800">Ayu Merlina</h1>

        <p className="mt-6 text-gray-600">
          Sebuah surat yang kutulis
          <br />
          dari hati.
        </p>

        {/* Envelope */}

        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: -2,
          }}
          transition={{
            duration: 0.3,
          }}
          className="mx-auto mt-12 w-[320px]"
        >
          <div className="relative h-56">
            {/* Shadow */}

            <div className="absolute bottom-0 left-1/2 h-5 w-64 -translate-x-1/2 rounded-full bg-black/10 blur-xl" />

            {/* Letter */}

            <motion.div
              animate={{
                y: [-8, -20, -8],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute left-1/2 top-4 h-36 w-56 -translate-x-1/2 rounded-t-xl bg-white shadow-lg"
            >
              <div className="mt-5 space-y-3 px-5">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="h-2 w-3/4 rounded bg-gray-200"></div>
                <div className="h-2 w-5/6 rounded bg-gray-200"></div>
              </div>
            </motion.div>

            {/* Envelope */}

            <div className="absolute bottom-0 h-40 w-full rounded-b-xl bg-pink-400 shadow-2xl">
              {/* Left */}

              <div
                className="absolute left-0 top-0 h-full w-1/2 bg-pink-500"
                style={{
                  clipPath: "polygon(0 0,100% 50%,0 100%)",
                }}
              />

              {/* Right */}

              <div
                className="absolute right-0 top-0 h-full w-1/2 bg-pink-500"
                style={{
                  clipPath: "polygon(100% 0,0 50%,100% 100%)",
                }}
              />

              {/* Top Flap */}

              <motion.div
                whileHover={{
                  rotateX: 180,
                }}
                style={{
                  transformOrigin: "top",
                }}
                className="absolute top-0 h-20 w-full bg-pink-300"
              />
            </div>
          </div>
        </motion.div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={onOpen}
          className="mt-12 rounded-full bg-pink-500 px-10 py-4 text-lg font-semibold text-white shadow-xl"
        >
          💌 Buka Surat
        </motion.button>
      </motion.div>
    </div>
  );
}
