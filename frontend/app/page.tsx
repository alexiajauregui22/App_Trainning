import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Transformations from "@/components/sections/Transformations";
import Memberships from "@/components/sections/Memberships";
import Nutrition from "@/components/sections/Nutrition";
import { CtaBand, Footer } from "@/components/sections/CtaFooter";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Gallery />
        <Transformations />
        <Memberships />
        <Nutrition />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
