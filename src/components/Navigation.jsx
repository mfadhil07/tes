import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navigation({
  step,
  total,
  onNext,
  onBack,
}) {
  return (
    <div className="fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full bg-white/80 px-4 py-3 shadow-xl backdrop-blur">

      <button
        onClick={onBack}
        disabled={step === 0}
        className="rounded-full p-3 transition hover:bg-pink-100 disabled:opacity-30"
      >
        <ChevronLeft />
      </button>

      <span className="font-semibold text-gray-700">
        {step + 1} / {total}
      </span>

      <button
        onClick={onNext}
        disabled={step === total - 1}
        className="rounded-full bg-pink-500 p-3 text-white transition hover:bg-pink-600 disabled:opacity-30"
      >
        <ChevronRight />
      </button>

    </div>
  );
}