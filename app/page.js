import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollProgress />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Features />
          <Stats />
          <Process />
          <Contact />
          <FAQ />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
