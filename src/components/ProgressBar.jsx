export default function ProgressBar({
  current,
  total,
}) {
  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-white/40">

      <div
        className="h-full bg-pink-500 transition-all duration-500"
        style={{
          width: `${(current / total) * 100}%`,
        }}
      />

    </div>
  );
}