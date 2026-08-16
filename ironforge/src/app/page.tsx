import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingActions from "@/components/FloatingActions";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Trainers />
        <Features />
        <Gallery />
        <Schedule />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
      <FloatingActions />
    </>
  );
}
