'use client'
import AboutBanner from './AboutBanner'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section
            id="sobre"
            aria-labelledby="about-title"
            className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-orange-950 via-orange-800 to-amber-500"
        >
            <AboutBanner />

            <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-20 z-40">
                <motion.article
                    initial={{ opacity: 0, x: 100, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-2xl p-8 md:p-12 bg-white/10 border border-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '5rem' }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-1 bg-amber-400 mb-8 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)]"
                    />

                    <header>
                        <h2
                            id="about-title"
                            className="text-amber-400 text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                        >
                            Sobre
                        </h2>
                    </header>

                    <div className="space-y-4 text-gray-100 text-lg md:text-xl leading-relaxed font-light">
                        <p>
                            Sou Vitória, estudante de Desenvolvimento de Sistemas na{' '}
                            <strong className="text-amber-300">
                                FATEC Ipiranga
                            </strong>{' '}
                            e apaixonada por tecnologia e design.
                            Atualmente, foco em evoluir minhas habilidades criando interfaces modernas e intuitivas.
                        </p>

                        <p>
                            Tenho conhecimentos em{' '}
                            <strong className="text-amber-300">
                                HTML, CSS, JavaScript, React, Tailwind CSS e Node.js
                            </strong>
                            , com foco em Front-End.
                            Gosto de unir criatividade e organização para transformar ideias em projetos funcionais e marcantes.
                        </p>
                    </div>
                </motion.article>
            </div>
        </section>
    )
}