'use client'

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Desenvolvedora Front-end";

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
    <section className="flex w-full min-h-screen items-center px-12">
      <header className="flex flex-col gap-10 max-w-2xl">
        <h1 className="text-5xl font-black text-white">
          Vitória Pereira | <span className="text-white ml-2">{text}</span>
          <span className="inline-block w-[3px] h-[40px] bg-white ml-1 animate-pulse shadow-[0_0_10px_#581c87]"></span>
        </h1>
        
        <p className="italic text-white/80 text-lg">
          Desenvolvedora movida por ideias fora da caixa e focada em construir interfaces que não apenas funcionam, mas surpreendem.
        </p>

        <nav className="flex gap-5">
          <a 
            href="#projetos"
            className="bg-purple-400 text-white font-bold px-6 py-2 rounded-full border-2 border-purple-400 transition-all duration-300 ease-in-out hover:bg-purple-500 hover:border-none hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 active:scale-95 text-center"
          >
            Ver projetos
          </a>

          <a 
            href="#sobre"
            className="bg-transparent text-white font-medium px-6 py-2 rounded-full border-2 border-white/50 transition-all duration-300 ease-in-out hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 text-center backdrop-blur-sm"
          >
            Sobre mim
          </a>
        </nav>
      </header>

      <div className="w-1/2 flex justify-center">
      </div>
    </section>
  );
}
