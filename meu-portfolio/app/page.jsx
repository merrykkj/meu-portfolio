
import Banner from "../components/Banner";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Whatsapp from "../components/FloatingButton";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full overflow-x-clip bg-[#1c0803]">
        <section
          id="hero"
          className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#240b3c]"
        >
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <Banner />
          </div>

          <div className="relative z-30 mx-auto flex w-full max-w-[1600px] flex-1 items-center px-4 sm:px-6 md:px-8 lg:px-12">
            <Hero />
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
