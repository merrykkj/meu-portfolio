'use client'
import { useState, useEffect } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )

    const sections = ['hero', 'sobre', 'contato', 'projetos']
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const colors = {
    hero: 'hover:text-purple-500 hover:drop-shadow-[0_0_10px_#a855f7]',
    sobre: 'hover:text-yellow-400 hover:drop-shadow-[0_0_10px_#facc15]',
    contato: 'hover:text-purple-500 hover:drop-shadow-[0_0_10px_#ec4899]',
    projetos: 'hover:text-pink-500 hover:drop-shadow-[0_0_10px_#ec4899]'
  }

  const hoverStyle = colors[activeSection]

  return (
    <header className="fixed top-0 left-0 w-full md:h-12 py-3 backdrop-blur-md z-[999] bg-black/50 transition-all duration-300">
      <nav aria-label="Navegação principal" className="container mx-auto px-6 flex items-center justify-between md:justify-center">
        

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isOpen}
          className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 rounded md:hidden text-white focus:outline-none z-50 relative"
        >
          <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <ul className={`
          flex flex-col md:flex-row items-center justify-center gap-8 md:gap-7 text-white font-[family-name:var(--font-shojumaru)] text-lg md:text-base
          fixed inset-0 bg-black/95 md:bg-transparent md:static 
          w-full h-screen md:h-auto transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'}
        `}>
          {['home', 'sobre', 'projetos', 'contato'].map((item) => {
            const isActive = item === 'home' ? activeSection === 'hero' : activeSection === item;

            return (
              <li key={item} className="w-full text-center md:w-auto">
                <a
                  href={item === 'home' ? '/' : `#${item}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`${hoverStyle} transition-all duration-300 hover:scale-110 block capitalize py-2 md:py-0`}
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