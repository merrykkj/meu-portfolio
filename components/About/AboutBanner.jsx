'use client'
import { motion } from 'framer-motion'

export default function AboutBanner() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-30"
      aria-hidden="true"
    >
      <div className="w-full h-full relative">
        <motion.img
          src="/zenitsu7.png"
          alt=""
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          className="hidden lg:block absolute bottom-0 left-0 h-full w-auto object-contain object-left-bottom drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/80 z-20" />
    </div>
  )
}
