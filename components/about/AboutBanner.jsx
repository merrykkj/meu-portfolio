'use client'
import { motion } from 'framer-motion'

export default function AboutBanner() {
  return (
    <div
      alt=""
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <motion.img
        src="/zenitsu2.png"
        alt=""
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: 'easeOut' }}
        className="hidden md:block absolute bottom-0 left-20 h-[90%] w-auto object-contain z-30 drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-20" />
    </div>
  )
}