'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Desenvolvedora de Software";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex w-full min-h-screen items-center px-6 md:px-12 py-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.5, 0], y: -150, x: [0, 30, -30, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 1.5 }}
            className="absolute w-3 h-3 bg-purple-400 rounded-full blur-[2px]"
            style={{ left: `${Math.random() * 100}%`, bottom: '5%' }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col gap-4 max-w-3xl w-full items-center md:items-start text-center md:text-left">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
        >
          Vitória Pereira
        </motion.h1>

        <div className="min-h-[60px] flex items-center" aria-live="polite">
          <p className="text-xl md:text-3xl text-purple-200 font-light uppercase tracking-[0.2em] drop-shadow-md">
            {text}
          </p>
          <span className="inline-block w-[2px] h-[25px] md:h-[35px] bg-purple-400 ml-2 animate-pulse shadow-[0_0_15px_#a855f7]" />
        </div>

        <nav className="flex flex-wrap justify-center md:justify-start gap-5 mt-6">
          <a
            href="#projetos"
            className="bg-purple-600 text-white font-bold px-10 py-4 rounded-full hover:bg-purple-500 transition-all shadow-[0_10px_25px_rgba(147,51,234,0.4)] hover:scale-105 active:scale-95"
          >
            Ver projetos
          </a>
          <a
            href="#sobre"
            className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all hover:border-white/40"
          >
            Sobre mim
          </a>
        </nav>

        <div className="mt-16 flex flex-col items-center md:items-start w-full">
          <h2 className="text-[12px] uppercase tracking-[0.4em] text-purple-300/80 font-bold mb-8">
            Main Stack & Software Focus
          </h2>

          <ul className="flex flex-wrap justify-center md:justify-start gap-10 items-center list-none p-0">
            {[
              { name: 'Next.js', src: '/nextjs.svg' },
              { name: 'React', src: '/react.svg' },
              { name: 'Tailwind CSS', src: '/tailwindcss.svg' },
              { name: 'Node.js', src: '/nodejs.svg' },
              { name: 'JavaScript', src: '/javascript.svg' }
            ].map((tech) => (
              <li key={tech.name}>
                <motion.img
                  src={tech.src}
                  alt={`Logo ${tech.name}`}
                  title={tech.name}
                  whileHover={{ scale: 1.25, y: -5 }}
                  className="h-8 md:h-9 opacity-100 hover:opacity-100 transition-all cursor-pointer filter hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                />
              </li>
            ))}

            <li className="relative group">
              <motion.img
                src="/java.png"
                alt="Logo Java"
                title="Estudando Java"
                whileHover={{ scale: 1.25, y: -5 }}
                className="h-8 md:h-9 opacity-50 hover:opacity-100 transition-all cursor-pointer filter hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              />
              <span className="absolute -top-3 -right-3 text-[8px] bg-purple-600 px-2 py-0.5 rounded-full text-white font-black shadow-lg border border-purple-400 animate-bounce">
                START
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
