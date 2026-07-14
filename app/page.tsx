import type { Metadata } from "next";
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
import Preloader from "@/components/Preloader";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title: "Istiak Hossain | Remote Website Developer & Software Developer",
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <About />
        <Services />
        <Projects />
        <OtherProjects />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFAB />
      <Preloader />
    </>
  );
}
