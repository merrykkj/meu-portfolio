
"use client";

import { motion } from "framer-motion";
import AboutBanner from "./AboutBanner";

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#080b05]"
    >
      <AboutBanner />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1900px] grid-cols-1 items-center justify-items-center px-4 py-20 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:justify-items-stretch lg:gap-5 lg:px-12 xl:gap-10 xl:px-16">
        <div className="hidden lg:block" />

        <div className="relative isolate w-full max-w-[650px] min-w-0 overflow-hidden rounded-[2rem] border border-[#667d30]/25 bg-[#080a06]/95 px-6 py-10 shadow-[0_25px_90px_rgba(0,0,0,0.6)] sm:px-9 sm:py-12 md:rounded-[2.5rem] md:bg-[#080a06]/90 lg:max-w-none lg:px-12 lg:py-14 xl:px-14">
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#18200c]/35 via-transparent to-[#0b0e07]/60" />

          <div
            className="pointer-events-none absolute -right-7 top-0 z-0 h-40 w-40 bg-contain bg-right-top bg-no-repeat opacity-70 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
            style={{
              backgroundImage: "url('/lirio-aranha.png')",
              backgroundSize: "100% auto",
              backgroundPosition: "right top",
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-12 -right-8 z-0 h-52 w-52 bg-contain bg-right-bottom bg-no-repeat opacity-65 sm:h-60 sm:w-60 lg:h-72 lg:w-72"
            style={{
              backgroundImage: "url('/lirio-aranha.png')",
              backgroundSize: "100% auto",
              backgroundPosition: "right bottom",
            }}
          />

          <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-tl-[2rem] border-l border-t border-[#a4c639]/30 md:rounded-tl-[2.5rem]" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-br-[2rem] border-b border-r border-[#a4c639]/20 md:rounded-br-[2.5rem]" />

          <div className="relative z-10">
            <header className="mb-9">
              <div className="mb-6 h-[3px] w-20 bg-[#b5df24] shadow-[0_0_18px_rgba(181,223,36,0.5)]" />

              <div className="relative inline-block">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 -top-7 select-none text-[120px] font-black leading-none text-[#8caf25]/10 sm:text-[150px]"
                >
                  ○
                </span>

                <h2
                  id="about-title"
                  className="relative text-[clamp(4rem,7vw,7rem)] font-black italic uppercase leading-[0.9] tracking-[-0.075em] text-[#f2f0e8]"
                >
                  SOBRE
                </h2>
              </div>

              <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#b5df24] sm:text-xs sm:tracking-[0.35em]">
                Vitória Pereira / Portfólio
              </p>
            </header>

            <div className="space-y-7">
              <p className="border-l-[3px] border-[#b5df24] pl-5 text-base font-normal leading-[1.75] text-[#f1f0e9] sm:text-lg lg:text-xl">
                Sou Vitória, estudante de Desenvolvimento de
                Sistemas na{" "}
                <strong className="font-bold text-[#b5df24]">
                  FATEC Ipiranga.
                </strong>{" "}
                Minha missão é traduzir conceitos complexos
                em interfaces memoráveis.
              </p>

              <p className="ml-1 border-l border-[#a4c639]/40 pl-5 text-sm font-light italic leading-[1.9] text-[#a5a5a0] sm:text-base lg:text-lg">
                Acredito que um bom código deve ser acompanhado
                de uma experiência visual impecável. Meu objetivo
                é construir interfaces que não apenas funcionem,
                mas que também encantem quem as utiliza.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <motion.a
                href="/curriculo-vitoria.pdf"
                download="Curriculo_Vitoria.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#c3e62b] to-[#779b22] px-7 py-3.5 text-sm font-bold text-[#101506] shadow-[0_8px_30px_rgba(153,196,35,0.2)] transition-shadow duration-300 hover:shadow-[0_8px_35px_rgba(153,196,35,0.4)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>

                Baixar currículo
              </motion.a>
            </div>

            <footer className="mt-10 border-t border-[#9ab338]/20 pt-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b5df24] opacity-30" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#b5df24]" />
                </span>

                <span className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.15em] text-[#c2c7b5] sm:tracking-[0.22em]">
                  Disponível para novos desafios
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
