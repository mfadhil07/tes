import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import FloatingHearts from "./components/FloatingHearts";
import Hero from "./components/slides/Hero";
import Intro from "./components/slides/Intro";
import Letter from "./components/slides/Letter";
import Meet from "./components/slides/Meet";
import Timeline from "./components/slides/Timeline";
import AboutHer from "./components/slides/AboutHer";
import Future from "./components/slides/Future";
import Proposal from "./components/slides/Proposal";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [step, setStep] = useState(0);

  const slides = [Intro, Letter, Meet, Timeline, AboutHer, Future, Proposal];

  const CurrentSlide = slides[step];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setStep((prev) => Math.min(prev + 1, slides.length - 1));
      }

      if (e.key === "ArrowLeft") {
        setStep((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [slides.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setStep((prev) => Math.min(prev + 1, slides.length - 1)),

    onSwipedRight: () => setStep((prev) => Math.max(prev - 1, 0)),

    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (!opened) {
    return <Hero onOpen={() => setOpened(true)} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200">
      <ProgressBar current={step + 1} total={slides.length} />
      <FloatingHearts />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 80,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: -80,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex min-h-screen items-center justify-center px-6"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      <Navigation
        step={step}
        total={slides.length}
        onBack={() => setStep((prev) => Math.max(prev - 1, 0))}
        onNext={() => setStep((prev) => Math.min(prev + 1, slides.length - 1))}
      />
    </div>
  );
}
