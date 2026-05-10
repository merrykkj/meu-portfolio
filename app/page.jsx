import Banner from '../components/banner'
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/Footer'
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

        <section id="sobre">
          <About />
        </section>
      </main>
      <Footer />
    </>
  );
}
