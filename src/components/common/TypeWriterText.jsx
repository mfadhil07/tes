import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText({ text }) {
  return (
    <div className="text-center text-xl leading-10 text-gray-700 whitespace-pre-line">
      <Typewriter
        words={[text]}
        cursor
        typeSpeed={35}
        deleteSpeed={0}
        delaySpeed={999999}
        loop={1}
      />
    </div>
  );
}
