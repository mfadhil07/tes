import FloatingHearts from "../FloatingHearts";

const themes = {
  pink: "bg-gradient-to-br from-rose-100 via-pink-50 to-white",

  paper: "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100",

  sunset: "bg-gradient-to-br from-orange-200 via-pink-200 to-purple-300",

  gallery: "bg-gradient-to-br from-slate-900 via-slate-800 to-black",

  night: "bg-gradient-to-br from-slate-950 via-indigo-950 to-black",
};

export default function Background({ children, theme = "pink" }) {
  return (
    <div className={`relative min-h-screen overflow-hidden ${themes[theme]}`}>
      <div className="pointer-events-none absolute inset-0 z-0">
        <FloatingHearts />
      </div>

      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl"></div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-300/20 blur-3xl"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
