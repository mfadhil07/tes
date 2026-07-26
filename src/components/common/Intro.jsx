import SlideLayout from "../common/SlideLayout";
import TypewriterText from "../common/TypewriterText";
import story from "../../data/story";

export default function Intro() {
  return (
    <SlideLayout theme="paper">
      <div className="max-w-3xl rounded-3xl bg-white/70 p-10 shadow-2xl backdrop-blur">
        <h1 className="mb-10 text-center text-5xl font-bold text-pink-600">
          {story.intro.title}
        </h1>

        <TypewriterText text={story.intro.content} />
      </div>
    </SlideLayout>
  );
}
    