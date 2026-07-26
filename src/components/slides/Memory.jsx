import { motion } from "framer-motion";

export default function Memory() {
  return (

    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >

        <img
          src="https://picsum.photos/600/700"
          className="rounded-3xl shadow-xl"
        />

      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex items-center"
      >

        <div>

          <h2 className="mb-6 text-5xl font-bold text-pink-600">

            Masih Ingat?

          </h2>

          <p className="text-xl leading-10 text-gray-700">


            <br /><br />
Ayu jemput aku di Kayukol dan kita kena hujan bareng. Aku basah kuyup, tapi aku senang tapi kasihan liat ayu kedingan dan baju ayu tipis.
          

            <br /><br />

            Bahwa seseorang
            di depanku
            akan menjadi orang
            yang sangat berarti
            dalam hidupku.

          </p>

        </div>

      </motion.div>

    </div>

  );
}