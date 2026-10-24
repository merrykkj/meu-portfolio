
"use client";

const tecnologias = [
  { nome: "Next.js", imagem: "/nextjs.svg" },
  { nome: "React", imagem: "/react.svg" },
  { nome: "Tailwind CSS", imagem: "/tailwindcss.svg" },
  { nome: "Node.js", imagem: "/nodejs.svg" },
  { nome: "JavaScript", imagem: "/javascript.svg" },
  { nome: "Java", imagem: "/java.png" }
];

function BotaoOrnamental({ href, children, principal = false }) {
  return (
    <a
      href={href}
      className={`group relative flex h-[54px] w-full max-w-[245px] items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
        principal
          ? "hover:drop-shadow-[0_0_15px_rgba(235,43,79,0.55)]"
          : "hover:drop-shadow-[0_0_15px_rgba(194,120,210,0.45)]"
      }`}
    >
      <svg
        viewBox="0 0 270 65"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 4 H258 L267 14 V51 L258 61 H12 L3 51 V14 Z"
          fill={principal ? "#440818" : "#13091c"}
          fillOpacity="0.9"
          stroke={principal ? "#f04462" : "#b37ac2"}
          strokeWidth="1.3"
        />
        <path
          d="M20 0 H250 M20 65 H250"
          stroke={principal ? "#ff3d60" : "#c17cd2"}
          strokeWidth="1.5"
        />
        <path
          d="M0 24 V41 M270 24 V41"
          stroke={principal ? "#ff3d60" : "#c17cd2"}
          strokeWidth="1.5"
        />
        <path
          d="M15 10 H255 M15 55 H255"
          stroke={principal ? "#fa486a" : "#ad70bc"}
          strokeOpacity="0.3"
        />
      </svg>

      <span className="relative z-10 flex items-center gap-4 font-cinzel text-[15px] font-medium text-[#fff1f5] sm:text-[17px]">
        {children}

        {principal && (
          <span className="text-xl text-[#ff536f] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-12 lg:pt-24 xl:px-20"
    >

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-16 bg-gradient-to-t from-[#09040e]/60 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1750px]">
        <div className="flex w-full flex-col items-center text-center lg:w-[54%] xl:w-[52%]">
          <div className="mb-6 flex w-full max-w-[440px] items-center justify-center gap-5">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d5a6d8]/80" />

            <span className="font-cinzel text-[28px] leading-none text-[#f1c6ee]">
              ☾
            </span>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d5a6d8]/80" />
          </div>

          <p className="font-cinzel text-[10px] font-medium uppercase tracking-[0.18em] text-[#f0d6e8] sm:text-[12px] sm:tracking-[0.25em]">
            Portfólio • Desenvolvimento Web
          </p>

          <h1 className="mt-6 whitespace-normal font-cinzel text-[clamp(2.7rem,5vw,5.8rem)] font-normal leading-[1.08] tracking-[-0.055em] text-[#fff5fa] [text-shadow:0_3px_18px_rgba(0,0,0,0.75)]">
            Vitória Pereira
          </h1>

          <h2 className="mt-6 font-cinzel text-[clamp(1rem,1.9vw,1.85rem)] font-normal italic leading-relaxed text-[#e5a0e5] [text-shadow:0_3px_12px_rgba(0,0,0,0.8)]">
            Desenvolvedora de Software
          </h2>

          <div className="mt-9 flex w-full max-w-[590px] items-center justify-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#e2b2dc]/65" />


            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#e2b2dc]/65" />
          </div>

          <p className="mt-8 max-w-[550px] font-cinzel text-[13px] italic leading-[1.9] text-[#f5e7f1] [text-shadow:0_2px_12px_rgba(0,0,0,0.95)] sm:text-[15px] lg:text-[16px]">
            Transformando ideias em experiências digitais através de
            código, criatividade e design.
          </p>

          <nav className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
            <BotaoOrnamental href="#projetos" principal>
              Ver Projetos
            </BotaoOrnamental>

            <BotaoOrnamental href="#sobre">
              Sobre Mim
            </BotaoOrnamental>
          </nav>

          <div className="mt-12 w-full max-w-[610px] sm:mt-14">
            <ul className="grid grid-cols-3 items-start justify-items-center gap-x-3 gap-y-7 sm:grid-cols-6 sm:gap-x-4">
              {tecnologias.map((tech) => (
                <li
                  key={tech.nome}
                  className="group flex w-full flex-col items-center gap-3"
                >
                  <div className="flex h-[43px] w-[43px] items-center justify-center">
                    <img
                      src={tech.imagem}
                      alt={tech.nome}
                      title={tech.nome}
                      className="h-[32px] w-[32px] object-contain brightness-0 invert opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(225,145,235,0.8)] sm:h-[36px] sm:w-[36px]"
                    />
                  </div>

                  <span className="text-center text-[11px] text-[#f0d8ed] [text-shadow:0_2px_8px_rgba(0,0,0,0.9)] sm:text-[12px]">
                    {tech.nome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
