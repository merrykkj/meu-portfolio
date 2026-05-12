'use client'

import { motion } from 'framer-motion'

export default function FunctionBanner() {
  return (
    <header className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-400">
      <motion.img
        src="/fundo2.png"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.img
        src="/shinobu6.png"
        alt="Shinobu Kocho"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="hidden lg:block absolute bottom-0 right-0 h-full w-auto object-contain z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/80 pointer-events-none z-20"
        aria-hidden="true"
      />
    </header>
  )
}
