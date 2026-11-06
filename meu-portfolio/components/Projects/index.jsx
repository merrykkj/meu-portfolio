
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "ZELOS",
        image: "/zelos.png",
        badge: "Hackathon",
        github: "https://github.com/merrykkj/zelos",
        desc: "Projeto desenvolvido durante Hackathon para otimizar a gestão de manutenção escolar. Atuei no front-end criando uma interface para registro de chamados via número de patrimônio, permitindo que técnicos e usuários acompanhem o status e o histórico de serviços em tempo real.",
        shortDesc: "Projeto desenvolvido durante Hackathon para otimizar a gestão de manutenção escolar. Atuei no front-end criando uma interface para registro de chamados via número de patrimônio.",
        myStack: ["Next.js", "Tailwind", "React", "Framer Motion", "Shadcn/ui"],
        baseStack: ["Node.js", "Express", "MySQL"],
        tech: ["Next.js", "Hackathon", "Gestão"],
    },
    {
        id: 2,
        title: "NAVI",
        image: "/navi.png",
        badge: "Dashboard",
        github: "https://github.com/merrykkj/Navi",
        desc: "Sistema de gerenciamento de estacionamento onde atuei no desenvolvimento da interface. Transformei regras de negócio complexas em um dashboard intuitivo, garantindo uma experiência fluida para o controle de pátio em tempo real.",
        shortDesc: "Sistema de gerenciamento de estacionamento onde atuei no desenvolvimento da interface. Transformei regras de negócio complexas em um dashboard intuitivo e responsivo.",
        myStack: ["Next.js", "Tailwind", "React", "Framer Motion", "Shadcn/ui"],
        baseStack: ["Node.js", "MySQL", "Docker", "IoT (MQTT)", "GitHub Actions"],
        tech: ["Next.js 14", "Shadcn", "TailwindCSS"],
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <section
            id="projetos"
            className="relative isolate min-h-screen w-full bg-[#190819] bg-[url('/akaza-projetos.png')] bg-cover bg-center bg-no-repeat text-white lg:bg-[-120px_top]"    >
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-[#190819] via-[#190819]/75 to-transparent sm:h-56 lg:h-72" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-[#190819] via-[#190819]/65 to-transparent sm:h-56 lg:h-72" />

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1800px] flex-col px-5 pb-20 pt-24 sm:px-10 lg:items-end lg:px-12 lg:pb-24 lg:pt-16 xl:px-20">
                <div className="w-full lg:w-[66%] xl:w-[64%]">
                    <header className="mb-10 text-center lg:mb-12">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#ffc0df] sm:text-sm">
                            Arte da Destruição
                        </p>

                        <h2 className="text-[clamp(2.7rem,5.5vw,6rem)] font-black uppercase italic leading-[1.1] tracking-[-0.055em] text-[#ffb5d8]">
                            Meus Projetos
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#f0dce7] sm:text-base">
                            Cada projeto representa um novo desafio, uma habilidade
                            aperfeiçoada e uma evolução na minha jornada como desenvolvedora.
                        </p>
                    </header>

                    <div className="flex flex-col gap-6">
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-[22px] border-2 border-[#ff5ba8] bg-[#210b23]/90 shadow-[0_0_20px_rgba(255,65,149,0.25)] transition-all duration-500 hover:border-[#ff9cca] hover:shadow-[0_0_35px_rgba(255,65,149,0.45)]"
                            >
                                <div className="grid overflow-hidden rounded-[20px] md:grid-cols-[47%_53%]">
                                    <div className="relative min-h-[220px] overflow-hidden bg-[#260c24] sm:min-h-[280px] md:min-h-[300px]">
                                        <Image
                                            src={project.image}
                                            alt={`Prévia do projeto ${project.title}`}
                                            fill
                                            priority={index === 0}
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                            className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                                        />
                                    </div>

                                    <div className="relative flex flex-col justify-center px-6 py-7 sm:px-8 md:px-7 lg:px-9">
                                        <h3 className="mb-4 text-3xl font-black uppercase italic tracking-tight text-[#ffd5e9] sm:text-4xl">
                                            {project.title}
                                        </h3>

                                        <p className="mb-5 text-sm leading-6 text-[#ead7e2] sm:text-[15px]">
                                            {project.shortDesc}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-[#e94499]/60 bg-[#5d1744]/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#ffe3f0] sm:text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedProject(project)}
                                            className="mt-6 w-fit rounded-xl border border-[#fa65b0] bg-[#57183e]/80 px-5 py-3 text-xs font-bold uppercase uppercase tracking-wider text-[#ffe3f0] transition-all duration-300 hover:bg-[#df398c] hover:shadow-[0_0_20px_rgba(255,85,170,0.6)]"
                                        >
                                            Ver Projeto
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Detalhes do projeto ${selectedProject.title}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 20 }}
                            transition={{ duration: 0.25 }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative flex max-h-[88dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#f05aa7]/60 bg-[#1c0b20] shadow-[0_0_55px_rgba(232,51,135,0.3)]"
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Fechar modal"
                                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#18091d]/90 text-xl text-white transition hover:bg-[#d83a8a]"
                            >
                                ×
                            </button>

                            <div className="overflow-y-auto overscroll-contain">
                                <div className="relative h-48 w-full bg-[#290d28] sm:h-64">
                                    <Image
                                        src={selectedProject.image}
                                        alt={`Imagem do projeto ${selectedProject.title}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 672px"
                                        className="object-contain"
                                    />

                                    <span className="absolute bottom-4 left-6 rounded-full border border-[#f67bb8] bg-[#6a1949]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                                        {selectedProject.badge}
                                    </span>
                                </div>

                                <div className="p-6 sm:p-9">
                                    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <h2 className="text-3xl font-black uppercase italic text-[#ff93c7] sm:text-4xl">
                                            {selectedProject.title}
                                        </h2>

                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-xl border border-[#e95da5]/60 bg-[#601b47]/50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#d43a88]"
                                        >
                                            Ver Repositório
                                        </a>
                                    </div>

                                    <p className="mb-7 text-sm leading-7 text-[#e4cbd9]">
                                        {selectedProject.desc}
                                    </p>

                                    <div className="grid gap-6 border-t border-[#e95da5]/25 pt-6 sm:grid-cols-2">
                                        <div>
                                            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#ff9acb]">
                                                Minha Stack (Front-end)
                                            </h3>

                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.myStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-lg border border-[#ec60aa]/35 bg-[#ec60aa]/10 px-3 py-1.5 text-xs text-[#ffc1df]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#ff9acb]">
                                                Base Stack (Back-end)
                                            </h3>

                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.baseStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#e3cedb]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
