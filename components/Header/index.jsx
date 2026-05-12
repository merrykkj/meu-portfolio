'use client'
import { useState, useEffect } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )

    const sections = ['hero', 'sobre', 'contato']
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const colors = {
    hero: 'hover:text-purple-500 hover:drop-shadow-[0_0_10px_#a855f7]',
    sobre: 'hover:text-yellow-400 hover:drop-shadow-[0_0_10px_#facc15]',
    contato: 'hover:text-purple-500 hover:drop-shadow-[0_0_10px_#ec4899]',
    projetos: 'hover:text-pink-500 hover:drop-shadow-[0_0_10px_#ec4899]'
  }

  const hoverStyle = colors[activeSection]

  return (
    <header className="fixed top-0 w-full h-12 py-3 backdrop-blur-md z-[999] bg-black/50">
      <nav aria-label="Navegação principal">
        <ul className="flex justify-center gap-7 text-white font-[family-name:var(--font-shojumaru)]">
          {['hero', 'sobre', 'contato'].map((item) => {
            const isActive = item === 'home' ? activeSection === 'hero' : activeSection === item;

            return (
              <li key={item}>
                <a
                  href={item === 'home' ? '/' : `#${item}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`${hoverStyle} transition-all duration-300 hover:scale-110 block capitalize`}
                >
                  {item}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
