'use client'
import { motion } from 'framer-motion'

export default function functionBanner() {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-400">
      
            
      <motion.img 
        src="/fundo2.png" 
        alt="Background" 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 0.4, scale: 1 }}   
        transition={{ 
          duration: 1.5, 
          delay: 0.3, 
          ease: "easeOut" 
        }} 
        className="absolute inset-0 w-full h-full object-cover opacity-40" 
      />

      <motion.img 
        src="/shinobu6.png" 
        alt="Shinobu"
        initial={{ y: 200, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}   
        transition={{ 
        duration: 1.3,
        ease: "easeOut"
        }} 
        className="absolute bottom-0 right-0 h-[100%] w-auto object-contain z-0"      
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/70 pointer-events-none" />
      
    </section>
  )
};
