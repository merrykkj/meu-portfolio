'use client'
import { motion } from 'framer-motion'

export default function ProjectsBanner() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.img
        src="/mitsuri.png"
        alt=""
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.8 }}
        transition={{ duration: 1.3, ease: 'easeOut' }}
        className="hidden lg:block absolute inset-0 h-full w-full object-cover object-center" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-20" />
    </div>
  )
}