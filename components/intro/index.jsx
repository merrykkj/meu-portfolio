'use client'; // Necessário para usar State e Framer Motion
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          // Animação de saída: sobe 100% da tela
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-6"
        >
          {/* Botão X para fechar */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-10 right-10 text-3xl font-bold hover:text-yellow-500 transition-colors"
          >
            ✕
          </button>

          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-black mb-6">Bem-vindo ao meu Portfólio temático!</h2>
            <p className="text-lg text-gray-300 mb-10 italic">
              "Desenvolvedora movida por ideias fora da caixa..."
            </p>

            <button
              onClick={() => setIsVisible(false)}
              className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              Ver Portfólio
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
