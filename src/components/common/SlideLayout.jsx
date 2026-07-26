import { motion } from "framer-motion";
import Background from "./Background";

export default function SlideLayout({ children, theme = "pink" }) {
  return (
    <Background theme={theme}>
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: -60,
          scale: 0.97,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-20"
      >
        {children}
      </motion.div>
    </Background>
  );
}
