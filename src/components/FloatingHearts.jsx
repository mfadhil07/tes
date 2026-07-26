import { motion } from "framer-motion";

const hearts = Array.from({ length: 30 });

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((_, index) => {
        const left = Math.random() * 100;
        const size = 16 + Math.random() * 22;
        const duration = 10 + Math.random() * 8;
        const delay = Math.random() * 10;
        const opacity = 0.2 + Math.random() * 0.35;

        const emojis = ["🤍", "🩷", "💕", "💖", "❤️"];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];

        return (
          <motion.div
            key={index}
            className="absolute select-none"
            style={{
              left: `${left}%`,
              bottom: "-40px",
              fontSize: `${size}px`,
              opacity,
            }}
            initial={{
              y: 0,
              x: 0,
              rotate: 0,
            }}
            animate={{
              y: -window.innerHeight - 200,
              x: [0, -20, 25, -15, 10, 0],
              rotate: [0, 15, -15, 10, -10, 0],
              scale: [1, 1.1, 1, 1.15, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </div>
  );
}
