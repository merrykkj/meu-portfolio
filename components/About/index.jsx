'use client'
import AboutBanner from './AboutBanner'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section
            id="sobre"
            aria-labelledby="about-title"
            className="relative flex min-h-screen w-full items-center overflow-hidden bg-gradient-to-br from-orange-900 via-orange-800 to-amber-600 py-12 md:py-20"
        >
            <AboutBanner />

            <div className="absolute inset-0 z-10 pointer-events-none bg-black/10" aria-hidden="true" />

            <div className="container relative z-40 mx-auto flex h-full items-center justify-center px-6 md:justify-end md:px-24">
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-xl p-10 md:p-14 bg-black/80 border border-white/10 backdrop-blur-3xl rounded-[3rem] shadow-2xl">        

                    <header className="relative mb-8 md:mb-10">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="absolute -top-4 left-0 h-[2px] w-20 origin-left bg-amber-400 shadow-[0_0_20px_#f59e0b]"
                            aria-hidden="true"
                        />
                        <h2
                            id="about-title"
                            className="text-5xl font-black italic leading-none text-white uppercase tracking-tighter drop-shadow-lg md:text-7xl lg:text-8xl"
                        >
                            Sobre
                        </h2>
                        <p className="mt-3 ml-1 text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                            Vitória Pereira / Portfolio
                        </p>
                    </header>

                    <div className="space-y-6 text-base text-white leading-relaxed md:space-y-8 md:text-xl">
                        <p className="relative">
                            <span className="absolute -left-5 top-0 bottom-0 w-1 bg-amber-400/50" aria-hidden="true" />
                            Sou Vitória, estudante de Desenvolvimento de Sistemas na{' '}
                            <strong className="font-bold text-amber-400">
                                FATEC Ipiranga
                            </strong>
                            . Minha missão é traduzir conceitos complexos em interfaces memoráveis.
                        </p>

                        <p className="border-l border-white/20 pl-5 text-sm font-light italic text-zinc-400 md:text-lg">
                            Acredito que um bom código deve ser acompanhado de uma experiência visual impecável. Meu objetivo é construir interfaces que não apenas funcionem, mas que também encantem quem as utiliza.
                        </p>
                    </div>

                    <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-40" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-orange-100">
                                Status: Disponível para novos desafios
                            </span>
                        </div>
                    </footer>
                </motion.div>
            </div>
        </section>
    )
}
