
"use client";

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-400">
      <motion.img
        src="/fundo2.png"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <motion.img
        src="/shinobu6.png"
        alt="Shinobu Kocho"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="absolute bottom-0 right-0 hidden h-full w-auto max-w-none object-contain object-right-bottom drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] md:block"
      />

      <div className="absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-b from-black/90 via-black/40 to-transparent md:h-48" />

      <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:h-48" />
    </div>
  );
}
