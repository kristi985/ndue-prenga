import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <Products />
          <About />
          <Features />
          <Gallery />
          <Process />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
