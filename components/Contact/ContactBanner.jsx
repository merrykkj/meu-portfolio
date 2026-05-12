'use client'
import { motion } from 'framer-motion'

export default function ContactBanner() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.img
        src="/akaza5.jpg"
        alt=""
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-transparent to-black/60" />
    </div>
  )
}
