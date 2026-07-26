import { motion } from "framer-motion";

export default function Meet() {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        src="/images/3.JPG"
        alt="Kenangan pertama"
        className="aspect-[4/5] rounded-3xl object-cover shadow-2xl"
      />

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h1 className="mb-6 text-5xl font-bold text-pink-600">Masih Ingat?</h1>

        <p className="text-xl leading-10 text-gray-700">
          Aku masih ingat bagaimana pertama kali kita jalan berdua.
          <br />
          <br />
          Kita makan bakso barupi ke Bius. Ayu yg jemput aku di Kayukol dan kita kena hujan bareng wkwkwkwkkk. Aku basah kuyup,
          tapi kasihan liat ayu kedingan dan baju ayu tipis lagi sama kayak foto di atas.

          Mungkin saat itu kita belum tahu bahwa pertemuan kecil itu akan
          menjadi awal dari cerita yang indah.
        </p>
      </motion.div>
    </div>
  );
}
