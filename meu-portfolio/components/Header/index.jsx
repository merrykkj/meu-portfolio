
"use client";

import { useState, useEffect } from "react";

const sections = ["hero", "sobre", "projetos", "contato"];

const colors = {
  hero: "hover:text-red-500 hover:drop-shadow-[0_0_10px_#ef4444]",
  sobre: "hover:text-lime-400 hover:drop-shadow-[0_0_10px_#b5df24]",
  projetos: "hover:text-pink-500 hover:drop-shadow-[0_0_10px_#ec4899]",
  contato: "hover:text-[#b77d99] hover:drop-shadow-[0_0_10px_#b77d99]"
};

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function updateSection() {
      const position = window.scrollY + window.innerHeight * 0.35;
      let currentSection = "hero";

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;

          if (position >= top) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    }

    updateSection();

    window.addEventListener("scroll", updateSection, { passive: true });
    window.addEventListener("resize", updateSection);

    return () => {
      window.removeEventListener("scroll", updateSection);
      window.removeEventListener("resize", updateSection);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hoverStyle = colors[activeSection] || colors.hero;

  return (
    <header className="fixed left-0 top-0 z-[999] w-full bg-black/50 py-3 backdrop-blur-md transition-all duration-300 md:h-12">
      <nav
        aria-label="Navegação principal"
        className="container mx-auto flex items-center justify-between px-6 md:justify-center"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen
              ? "Fechar menu de navegação"
              : "Abrir menu de navegação"
          }
          aria-expanded={isOpen}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 rounded text-white focus:outline-none md:hidden"
        >
          <span
            className={`h-0.5 w-6 origin-center rounded-full bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 origin-center rounded-full bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <ul
          className={`
            fixed inset-0 flex h-screen w-full flex-col items-center justify-center
            gap-8 bg-black/95 text-lg text-white
            font-[family-name:var(--font-shojumaru)]
            transition-all duration-300 ease-in-out
            md:static md:h-auto md:w-auto md:flex-row md:gap-7
            md:bg-transparent md:text-base
            ${
              isOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"
            }
          `}
        >
          {["home", "sobre", "projetos", "contato"].map((item) => {
            const isActive =
              item === "home"
                ? activeSection === "hero"
                : activeSection === item;

            return (
              <li key={item} className="w-full text-center md:w-auto">
                <a
                  href={item === "home" ? "/" : `#${item}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`${hoverStyle} block py-2 capitalize transition-all duration-300 hover:scale-110 md:py-0`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
