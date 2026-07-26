import { motion } from "framer-motion";
import { Heart, Feather, Sparkles } from "lucide-react";
import story from "../../data/story";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.45,
      delayChildren: 0.8,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Letter() {
  const paragraphs = story.letter.content
    .split("\n")
    .filter((item) => item.trim() !== "");

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 px-5 py-14">
      {/* Glow Background */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-pink-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-300/30 blur-3xl"
      />

      {/* Paper */}

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
          scale: 0.7,
          rotate: -4,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative w-full max-w-5xl overflow-hidden rounded-[40px] bg-[#fffdf7] shadow-[0_40px_90px_rgba(0,0,0,.18)]"
      >
        {/* Decoration */}

        <div className="absolute left-0 top-0 h-full w-5 bg-pink-300"></div>

        <div className="absolute left-10 top-0 h-full w-[2px] bg-red-300/40"></div>

        {/* Header */}

        <div className="border-b border-dashed border-gray-300 p-10">
          <div className="flex items-center justify-between">
            <Feather className="text-pink-500" />

            <p className="text-gray-500"> 26 Juli 2026</p>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mt-6 flex justify-center"
          >
            <Heart size={55} className="fill-pink-500 text-pink-500" />
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="font-script mt-6 text-center text-5xl text-pink-600"
          >
            {story.letter.title}
          </motion.h1>
        </div>

        {/* Body */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-7 p-10 text-lg leading-10 text-gray-700"
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p key={index} variants={item} className="text-center">
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Divider */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            delay: 3,
            duration: 1,
          }}
          className="border-t border-dashed border-gray-300"
        />

        {/* Footer */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.5,
          }}
          className="p-10"
        >
          <div className="flex justify-end">
            <Sparkles size={24} className="mr-2 text-yellow-500" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
