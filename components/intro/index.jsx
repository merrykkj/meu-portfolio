'use client'; 
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section

          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-6"
        >
          <img 
            src="/shinobu7.png" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" 
            alt=""
          />

          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-black mb-6">Bem-vindo ao meu Portfólio temático!</h2>
            <p className="text-lg text-gray-300 mb-10 italic">
              "Desenvolvedora movida por ideias fora da caixa..."
            </p>

            <button
              onClick={() => setIsVisible(false)}
              className="bg-pink-800 text-black font-bold py-3 px-10 rounded-full hover:bg-pink-400 transition-all transform hover:scale-105 shadow-[0_0_15px_#991b1b] font-[family-name:var(--font-shojumaru)]"
            >
              Ver Portfólio
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
