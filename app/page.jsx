import Banner from '../components/Banner'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Whatsapp from '../components/FloatingButton'
export default function Home() {
  return (
    <>
        <Header />
        <main>
          <section id="hero" className="relative w-full h-screen">
            <Banner />
            <div className="absolute inset-0 z-30 pointer-events-none container mx-auto px-8 pt-24">
              <div className="pointer-events-auto">
                <Hero />
              </div>
            </div>
          </section>
          <About />

          <Projects />

          <Contact />

          <Whatsapp />
        </main>
        <Footer />
      </>
      );
}

