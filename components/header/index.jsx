export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-12 py-3 backdrop-blur-md z-[999] bg-black/50">

      <nav aria-label="Navegação principal">
        <ul className="flex justify-center gap-7 text-white font-[family-name:var(--font-shojumaru)]">
          <li>
            <a href="/" className="hover:text-purple-500 hover:drop-shadow-[0_0_10px_#fff] transition-all duration-300 hover:scale-110 block">
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-purple-500 hover:drop-shadow-[0_0_10px_#fff] transition-all duration-300 hover:scale-110 block">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-purple-500 hover:drop-shadow-[0_0_10px_#fff] transition-all duration-300 hover:scale-110 block">
              Contato
            </a>
          </li>
        </ul>
      </nav>

    </header>
  );
}
