'use client'
import { useState, useEffect } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'sobre', 'contato']
      
      sections.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const colors = {
    hero: 'hover:text-purple-500 hover:drop-shadow-[0_0_10px_#a855f7]',
    sobre: 'hover:text-yellow-400 hover:drop-shadow-[0_0_10px_#facc15]',
    contato: 'hover:text-pink-500 hover:drop-shadow-[0_0_10px_#ec4899]'
  }

  const currentHover = colors[activeSection] || colors.hero

  return (
    <header className="fixed top-0 left-0 w-full h-12 py-3 backdrop-blur-md z-[999] bg-black/50">
      <nav aria-label="Navegação principal">
        <ul className="flex justify-center gap-7 text-white font-[family-name:var(--font-shojumaru)]">
          <li>
            <a 
              href="/" 
              aria-current={activeSection === 'hero' ? 'page' : undefined}
              className={`${currentHover} transition-all duration-300 hover:scale-110 block`}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#sobre" 
              aria-current={activeSection === 'sobre' ? 'page' : undefined}
              className={`${currentHover} transition-all duration-300 hover:scale-110 block`}
            >
              Sobre
            </a>
          </li>
          <li>
            <a 
              href="#contato" 
              aria-current={activeSection === 'contato' ? 'page' : undefined}
              className={`${currentHover} transition-all duration-300 hover:scale-110 block`}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
