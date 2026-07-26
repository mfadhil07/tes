import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const items = [
  "Senyummu 😊",
  "Kesabaranmu 🤍",
  "Kecantikanmu 🌸",
  "Kesederhaanmu 🌼",
  "Semangatmu 💪",
  "Perhatianmu ❤️",
  "Kebaikanmu 🌷",
  "Kelembutanmu 🌹",
];

export default function AboutHer() {

  return (

    <div className="max-w-5xl">

      <h1 className="mb-16 text-center text-5xl font-bold text-pink-600">

        Yang Aku Sukai Darimu

      </h1>

      <div className="grid gap-8 md:grid-cols-2">

        {items.map((item,index)=>(

          <motion.div

            key={index}

            initial={{
              opacity:0,
              y:60
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:index*.15
            }}

            className="rounded-3xl bg-white p-8 shadow-xl"

          >

            <Heart
              className="mb-4 fill-pink-500 text-pink-500"
            />

            <h2 className="text-2xl font-semibold">

              {item}

            </h2>

          </motion.div>

        ))}

      </div>

    </div>

  )

}