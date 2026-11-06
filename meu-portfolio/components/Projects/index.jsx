
"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="projetos"
        className="relative isolate min-h-screen w-full bg-[#190819] bg-[url('/akaza-projetos.png')] bg-cover bg-center bg-no-repeat text-white lg:bg-[-120px_top]"
      >
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
                        className="mt-6 w-fit rounded-xl border border-[#fa65b0] bg-[#57183e]/80 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#ffe3f0] transition-all duration-300 hover:bg-[#df398c] hover:shadow-[0_0_20px_rgba(255,85,170,0.6)]"
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
      </section>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                key="project-modal"
                role="dialog"
                aria-modal="true"
                aria-label={`Detalhes do projeto ${selectedProject.title}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#100611]/85 p-3 backdrop-blur-md sm:p-5"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onClick={(event) => event.stopPropagation()}
                  className="relative flex max-h-[min(90dvh,720px)] w-full max-w-[900px] flex-col overflow-hidden rounded-[20px] border border-[#ff65b0]/75 bg-[#210b23] shadow-[0_0_55px_rgba(255,65,149,0.22)] sm:rounded-[26px]"
                >
                  <div className="flex shrink-0 items-center justify-between border-b border-[#ff65b0]/20 px-5 py-3 sm:px-7">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff65b0]" />

                      <span className="truncate text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9acb] sm:text-xs">
                        Arte da Destruição / Projeto {String(selectedProject.id).padStart(2, "0")}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      aria-label="Fechar modal"
                      className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ff8fc5]/40 bg-[#35112e] text-xl text-[#ffd5e9] transition hover:bg-[#b72e74]"
                    >
                      ×
                    </button>
                  </div>

                  <div className="min-h-0 overflow-y-auto overscroll-contain">
                    <div className="grid lg:grid-cols-[43%_57%]">
                      <div className="border-b border-[#ff65b0]/20 bg-[#2c0e2c] p-4 sm:p-6 lg:border-b-0 lg:border-r">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#ff65b0]/20 bg-[#190819] lg:aspect-[4/5]">
                          <Image
                            src={selectedProject.image}
                            alt={`Prévia do projeto ${selectedProject.title}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 380px"
                            className="object-contain"
                          />
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3">
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#dca8c6]">
                            Projeto em destaque
                          </span>

                          <span className="rounded-full border border-[#ff77b9]/50 bg-[#74204f]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#ffd5e9]">
                            {selectedProject.badge}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col p-5 sm:p-7 lg:p-8">
                        <h2 className="mb-4 text-3xl font-black uppercase italic leading-none tracking-tight text-[#ffb5d8] sm:text-4xl">
                          {selectedProject.title}
                        </h2>

                        <p className="mb-6 text-[13px] leading-6 text-[#f0dce7] sm:text-sm">
                          {selectedProject.desc}
                        </p>

                        <div className="space-y-5">
                          <div>
                            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff9acb]">
                              Minha Stack — Front-end
                            </h3>

                            <div className="flex flex-wrap gap-2">
                              {selectedProject.myStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-[#e94499]/50 bg-[#5d1744]/40 px-3 py-1.5 text-[11px] text-[#ffe3f0]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff9acb]">
                              Base Stack — Back-end
                            </h3>

                            <div className="flex flex-wrap gap-2">
                              {selectedProject.baseStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-[#ff9acb]/25 bg-[#3a1734]/60 px-3 py-1.5 text-[11px] text-[#e9cbdc]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-7 inline-flex w-full items-center justify-center rounded-xl border border-[#ff9acb]/70 bg-[#c5327c] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#e34596] sm:w-fit"
                        >
                          Ver Repositório no GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
