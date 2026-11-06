
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
      className="group relative flex h-[56px] w-full max-w-[235px] items-center justify-center transition-transform duration-300 hover:-translate-y-1"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 270 68"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M23 2 H247 L254 9 H260 V15 L268 23 V45 L260 53 V59 H254 L247 66 H23 L16 59 H10 V53 L2 45 V23 L10 15 V9 H16 Z"
          fill={principal ? "#52091a" : "#190c20"}
          fillOpacity="0.85"
          stroke={principal ? "#ff4a60" : "#c96b93"}
          strokeWidth="1.3"
        />
        <path
          d="M30 7 H240 M30 61 H240"
          stroke={principal ? "#ff6075" : "#b66589"}
          strokeOpacity="0.65"
          strokeWidth="0.7"
        />
        <path
          d="M2 34 L12 24 L22 34 L12 44 Z"
          fill={principal ? "#d92d49" : "#9b426b"}
          stroke="#ff9aa9"
          strokeWidth="0.6"
        />
        <path
          d="M268 34 L258 24 L248 34 L258 44 Z"
          fill={principal ? "#d92d49" : "#9b426b"}
          stroke="#ff9aa9"
          strokeWidth="0.6"
        />
        <path
          d="M135 0 L139 4 L135 8 L131 4 Z"
          fill={principal ? "#ff536a" : "#c26a91"}
        />
        <path
          d="M135 60 L139 64 L135 68 L131 64 Z"
          fill={principal ? "#ff536a" : "#c26a91"}
        />
      </svg>

      <span className="relative z-10 font-cinzel text-[16px] font-medium text-[#fff0f4] sm:text-[18px]">
        {children}
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative flex w-full min-h-screen items-center px-6 md:px-12 py-20 overflow-hidden">
      <div className="relative z-10 flex w-full flex-col items-center text-center lg:w-1/2">

        <h1 className="w-full font-cinzel text-[clamp(2.5rem,4.5vw,5rem)] font-normal leading-[1.2] tracking-[-0.055em] text-[#fff1f4] [text-shadow:0_0_16px_rgba(255,180,200,0.25),0_5px_20px_rgba(0,0,0,0.5)]">
          Vitória Pereira
        </h1>

        <div className="mt-7 flex w-full items-center justify-center gap-4">
          <span className="h-10 w-[2px] shrink-0 bg-[#f04462]" />

          <h2 className="font-cinzel text-[clamp(0.75rem,1.25vw,1.1rem)] font-medium uppercase leading-relaxed tracking-[0.13em] text-[#fff0f4] sm:tracking-[0.18em]">
            Desenvolvedora de Software
          </h2>

          <span className="h-10 w-[2px] shrink-0 bg-[#f04462]" />
        </div>

        <nav className="mt-10 flex w-full flex-wrap items-center justify-center gap-5">
          <BotaoOrnamental href="#projetos" principal>
            Ver projetos
          </BotaoOrnamental>

          <BotaoOrnamental href="#sobre">
            Sobre mim
          </BotaoOrnamental>
        </nav>

        <div className="mt-14 w-full max-w-[590px]">
          <h3 className="font-cinzel text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[#f3d3e6] sm:text-[13px] sm:tracking-[0.25em]">
            Main Stack & Software Focus
          </h3>

          <div className="mt-5 flex w-full items-center justify-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d45b83]/70" />

            <span className="text-lg leading-none text-[#ffc3d8]">
              ❀
            </span>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d45b83]/70" />
          </div>

          <ul className="mt-7 grid w-full grid-cols-3 items-center justify-items-center gap-x-4 gap-y-6 sm:grid-cols-6 sm:gap-x-5">
            {tecnologias.map((tech) => (
              <li
                key={tech.nome}
                className="flex h-[38px] w-[38px] items-center justify-center"
              >
                <img
                  src={tech.imagem}
                  alt={tech.nome}
                  title={tech.nome}
                  className="h-[30px] w-[30px] object-contain brightness-0 invert opacity-90 transition-all duration-300 hover:scale-110 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(255,120,180,0.7)] sm:h-[34px] sm:w-[34px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
