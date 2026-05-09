import Banner from '../components/banner'
import Header from '../components/header'
import Hero from '../components/hero';
import IntroOverlay from '../components/intro';
export default function Home() {
  return (
    <>

   <Header/>

    <main>
    <Banner/>
    <IntroOverlay/>
    <div class="absolute inset-0 flex items-center justify-center">
    <Hero/>
    </div>

    </main>
    </>
  );
}
