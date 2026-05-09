'use client'

import { motion } from 'framer-motion'

export default function AboutBanner() {
  return (
    <header className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-900 via-orange-700 to-yellow-400">
      
      <motion.img
        src="/.png"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.img
        src="/zenitsu2.png"
        alt="Zenitsu Agatsuma"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="hidden md:block absolute bottom-0 left-0 h-[90%] w-auto object-contain z-30 drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]"
      />

      <div className="absolute inset-0 flex items-center justify-end px-10 md:px-20 z-40">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-xl text-right"
        >
          <h2 className="text-yellow-400 text-center text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            Sobre Mim
          </h2>
          <p className="text-white text-lg md:text-xl text-justify leading-relaxed p-6 rounded-lg backdrop-blur-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ratione nesciunt quod ex sunt sit ullam, 
            quia corporis iusto ducimus laudantium corrupti fuga similique distinctio dolore nihil 
            delectus dignissimos!
          </p>
        </motion.div>
      </div>

      {/* Overlay para legibilidade */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/80 pointer-events-none z-20"
        aria-hidden="true"
      />
    </header>
  )
}
