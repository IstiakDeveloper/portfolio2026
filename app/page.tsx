import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import OtherProjects from "@/components/OtherProjects";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      {/* Sticky Top Navigation Bar */}
      <Navbar />

      <main className="flex-1 flex flex-col w-full">
        {/* Hero Area */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services / What I Do Section */}
        <Services />

        {/* Case Studies / Projects */}
        <Projects />

        {/* Other Selected Projects Grid */}
        <OtherProjects />

        {/* Technology Tools Stack */}
        <TechStack />

        {/* Testimonials (Conditionally hidden by default inside the component itself) */}
        <Testimonials />

        {/* Contact Form & Upwork/LinkedIn triggers */}
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />

      {/* WhatsApp Floating Overlay */}
      <WhatsAppFAB />
    </>
  );
}
