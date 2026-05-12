'use client'

import { useState, useEffect } from 'react'
import ProjectsBanner from './ProjectsBanner'
import { motion, AnimatePresence } from 'framer-motion'

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
            image: '/projects/zelos.jpg',
            video: '/projects/zelos.mp4',
            desc: 'Projeto desenvolvido durante Hackathon para otimizar a gestão de manutenção escolar. Atuei no front-end criando uma interface para registro de chamados via número de patrimônio, permitindo que técnicos e usuários acompanhem o status e o histórico de serviços em tempo real.',
            myStack: ['Next.js', 'Tailwind', 'React', 'Framer Motion', 'Shadcn/ui'],
            baseStack: ['Node.js', 'Express', 'MySQL'],
            tech: ['Next.js', 'Hackathon', 'Gestão']
        },
        {
            id: 2,
            title: 'NAVI',
            image: '/projects/beta.jpg',
            video: '/projects/beta.mp4',
            desc: 'Sistema de gerenciamento de estacionamento onde atuei no desenvolvimento da interface. Transformei regras de negócio complexas em um dashboard intuitivo, garantindo uma experiência fluida para o controle de pátio em tempo real.',
            myStack: ['Next.js', 'Tailwind', 'React', 'Framer Motion', 'Shadcn/ui'],
            baseStack: ['Node.js', 'MySQL', 'Docker', 'IoT (MQTT)', 'GitHub Actions'],
            tech: ['Next.js 14', 'Shadcn', 'TailwindCss'],
        },
    ]

    if (!isMounted) return null

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-pink-600 to-pink-900 px-6 py-20">
            <ProjectsBanner />

            <header className="relative z-40 mb-20 text-center">
                <h2 className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                    Projetos
                </h2>
            </header>

            <main className="container relative z-40 mx-auto flex justify-center">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:max-w-5xl">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/60"
                        >
                            <figure className="relative h-[240px] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            </figure>

                            <div className="p-6">
                                <h2 className="mb-4 text-3xl font-black italic text-pink-500 uppercase">
                                    {project.title}
                                </h2>
                                <p className="mb-6 leading-relaxed text-gray-300 text-sm line-clamp-3">
                                    {project.desc}
                                </p>
                                <ul className="mb-6 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-pink-400"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full rounded-full border border-white/10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-pink-600"
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
                    <aside className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        />

                        <motion.article
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-pink-500/30 bg-zinc-950 shadow-[0_0_80px_rgba(236,72,153,0.2)]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-6 top-5 z-50 text-3xl text-white transition hover:text-pink-500"
                            >
                                ✕
                            </button>

                            <div className="grid lg:grid-cols-2">
                                <figure className="relative min-h-[400px] bg-black">
                                    {selectedProject.video ? (
                                        <video
                                            src={selectedProject.video}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="h-full w-full object-cover"
                                        />
                                    )}
                                </figure>

                                <div className="flex flex-col justify-center p-10 overflow-y-auto max-h-[80vh] lg:max-h-none">
                                    <h2 className="mb-6 text-5xl font-black uppercase italic text-pink-500">
                                        {selectedProject.title}
                                    </h2>

                                    <p className="mb-8 text-lg leading-relaxed text-gray-300 font-medium">
                                        {selectedProject.desc}
                                    </p>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Minha Stack (Front-end)</h4>
                                            <ul className="flex flex-wrap gap-2">
                                                {(selectedProject.myStack || selectedProject.tech).map((tech) => (
                                                    <li key={tech} className="rounded-full border border-pink-500/50 bg-pink-500/10 px-4 py-2 text-xs font-bold text-pink-400 uppercase">
                                                        {tech}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {selectedProject.baseStack && (
                                            <div>
                                                <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Ecossistema (Back-end)</h4>
                                                <ul className="flex flex-wrap gap-2">
                                                    {selectedProject.baseStack.map((tech) => (
                                                        <li key={tech} className="rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-xs font-bold text-gray-400 uppercase">
                                                            {tech}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
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
