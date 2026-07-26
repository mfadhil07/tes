import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Future() {
  return (
    <div className="relative flex items-center justify-center px-6">
      {/* Background Love */}
      <Heart
        className="absolute left-10 top-10 fill-pink-200 text-pink-200 opacity-40"
        size={60}
      />

      <Heart
        className="absolute right-12 bottom-16 fill-rose-200 text-rose-200 opacity-40"
        size={70}
      />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl rounded-3xl border border-pink-200 bg-white/90 p-10 shadow-[0_20px_60px_rgba(236,72,153,0.25)] backdrop-blur"
      >
        {/* Love Icon */}
        <div className="mb-6 flex justify-center gap-2">
          <Heart className="fill-pink-500 text-pink-500" size={24} />
          <Sparkles className="text-pink-400" size={22} />
          <Heart className="fill-pink-500 text-pink-500" size={24} />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-center text-5xl font-bold text-pink-600"
        >
          Harapanku
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center text-2xl leading-10 text-gray-700"
        >
         Aku tidak menjanjikan hidup yang sempurna.
<br />
<br />
Tapi aku berjanji akan selalu berusaha menjadi seseorang yang bisa
membuatmu merasa dicintai, dihargai, dan dijaga.
<br />
<br />
Dan jika kamu benar-benar ingin melangkah bersamaku, aku ingin kita
menjalani proses ini dengan keseriusan.
<br />
<br />
Mulai dari sekarang sampai hari Lebaran nanti, aku ingin kita tetap
menjaga komunikasi, saling mengenal lebih dalam, dan membangun
kepercayaan satu sama lain.
<br />
<br />
InsyaAllah setelah Lebaran, jika Allah memberikan jalan dan kita sama-sama
yakin, aku ingin datang dengan niat yang lebih serius untuk melamarmu.
<br />
<br />
Untuk langkah selanjutnya, tentang kapan kita menikah, biarlah menjadi
keputusan yang kita bicarakan bersama dengan keluarga kita masing-masing.
Karena aku ingin hubungan ini bukan hanya tentang kita berdua, tapi juga
tentang menyatukan dua keluarga dengan cara yang baik dan penuh berkah.
<br />
<br />
Semoga Allah memudahkan setiap langkah kita, jika memang kamu adalah
orang yang Allah pilih untuk menjadi teman hidupku. ❤️
        </motion.p>

        {/* Footer Love */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <Heart size={18} className="fill-pink-400 text-pink-400" />
          <span className="text-sm italic text-pink-500">Untuk Ayu ❤️</span>
          <Heart size={18} className="fill-pink-400 text-pink-400" />
        </div>

        {/* Corner Love */}
        <Heart
          className="absolute left-5 top-5 fill-pink-100 text-pink-100"
          size={22}
        />

        <Heart
          className="absolute bottom-5 right-5 fill-pink-100 text-pink-100"
          size={22}
        />
      </motion.div>
    </div>
  );
}
