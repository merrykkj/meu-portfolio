'use client'

import { useState, useEffect } from 'react'
import ProjectsBanner from './ProjectsBanner'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const projects = [
        {
            id: 1,
            title: 'ZELOS',
            image: '/zelos.png',
            badge: 'Hackathon',
            github: 'https://github.com/merrykkj/zelos',
            desc: 'Projeto desenvolvido durante Hackathon para otimizar a gestão de manutenção escolar. Atuei no front-end criando uma interface para registro de chamados via número de patrimônio, permitindo que técnicos e usuários acompanhem o status e o histórico de serviços em tempo real.',
            myStack: ['Next.js', 'Tailwind', 'React', 'Framer Motion', 'Shadcn/ui'],
            baseStack: ['Node.js', 'Express', 'MySQL'],
            tech: ['Next.js', 'Hackathon', 'Gestão']
        },
        {
            id: 2,
            title: 'NAVI',
            image: '/navi.png',
            badge: 'Dashboard',
            github: 'https://github.com/merrykkj/Navi',
            desc: 'Sistema de gerenciamento de estacionamento onde atuei no desenvolvimento da interface. Transformei regras de negócio complexas em um dashboard intuitivo, garantindo uma experiência fluida para o controle de pátio em tempo real.',
            myStack: ['Next.js', 'Tailwind', 'React', 'Framer Motion', 'Shadcn/ui'],
            baseStack: ['Node.js', 'MySQL', 'Docker', 'IoT (MQTT)', 'GitHub Actions'],
            tech: ['Next.js 14', 'Shadcn', 'TailwindCss'],
        },
    ]

    if (!isMounted) return null

    return (
        <section id='projetos' className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-pink-600 to-pink-900 px-6 py-20">
            <ProjectsBanner />

            <header className="relative z-40 mb-20 text-center select-none">
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase italic tracking-tighter bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                    Projetos
                </h1>
            </header>

            <main className="container relative z-40 mx-auto flex justify-center">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:max-w-5xl w-full">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/40 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(236,72,153,0.2)]"
                        >
                            <figure className="relative h-[240px] overflow-hidden rounded-t-3xl isolate bg-zinc-900/50">
                                <Image
                                    src={project.image}
                                    alt={`Captura de tela do projeto ${project.title}`}
                                    width={600}
                                    height={350}
                                    priority={project.id === 1}
                                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                                />
                            </figure>

                            <div className="flex flex-1 flex-col p-8">
                                <h2 className="mb-3 text-3xl font-black uppercase italic tracking-tight text-pink-500">
                                    {project.title}
                                </h2>

                                <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-300 font-medium line-clamp-3">
                                    {project.desc}
                                </p>

                                <ul className="mb-8 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded-full bg-zinc-900/60 border border-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 group-hover:border-pink-500/20 group-hover:text-pink-400 transition-colors duration-300"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full mt-auto rounded-xl bg-zinc-900/80 border border-white/5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-pink-600 hover:border-pink-600 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                                >
                                    Ver Projeto
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <AnimatePresence>
                {selectedProject && (
                    <aside className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />

                        <motion.article
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative flex flex-col w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 backdrop-blur-md shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-5 top-5 z-50 rounded-full bg-black/40 p-2.5 text-white/70 transition hover:bg-black/70 hover:text-white"
                            >
                                <span className="block text-sm leading-none">✕</span>
                            </button>

                            <figure className="relative h-[260px] w-full overflow-hidden bg-zinc-900 shrink-0 isolate group">
                                <span className="absolute top-5 left-5 z-30 rounded-md bg-pink-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_4px_12px_rgba(236,72,153,0.4)]">
                                    {selectedProject.badge}
                                </span>

                                <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent z-10 pointer-events-none" />
                                    <Image
                                        src={selectedProject.image}
                                        alt={`Imagem expandida de ${selectedProject.title}`}
                                        width={800}
                                        height={450}
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                            </figure>

                            <div className="w-full flex flex-col p-8 sm:p-10">
                                <div className="flex items-center justify-between gap-4 mb-3">
                                    <h2 className="text-3xl font-black uppercase italic tracking-tight text-pink-500">
                                        {selectedProject.title}
                                    </h2>
                                    {selectedProject.github && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-300 transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-600 hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                                <path d="M9 18c-4.51 2-5-2-7-2" />
                                            </svg>
                                            Ver Repositório
                                        </a>
                                    )}
                                </div>

                                <p className="mb-8 text-sm leading-relaxed text-zinc-400 font-medium">
                                    {selectedProject.desc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-900">
                                    <div>
                                        <h4 className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-3">
                                            Minha Stack (Front-end)
                                        </h4>
                                        <ul className="flex flex-wrap gap-1.5">
                                            {selectedProject.myStack.map((tech) => (
                                                <li key={tech} className="rounded-lg bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 text-xs font-medium text-pink-400">
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-3">
                                            Base Stack (Back-end)
                                        </h4>
                                        <ul className="flex flex-wrap gap-1.5">
                                            {selectedProject.baseStack.map((tech) => (
                                                <li key={tech} className="rounded-lg bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-400">
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    </aside>
                )}
            </AnimatePresence>
        </section>
    )
}