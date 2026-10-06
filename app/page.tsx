import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Trust from "@/components/Trust/Trust";
import Portfolio from "@/components/Portfolio/Portfolio";
import Styles from "@/components/Styles/Styles";
import Why from "@/components/Why/Why";
import Pricing from "@/components/Pricing/Pricing";
import Process from "@/components/Process/Process";
import Quote from "@/components/Quote/Quote";
import Testimonials from "@/components/Testimonials/Testimonials";
import Areas from "@/components/Areas/Areas";
import Faq from "@/components/Faq/Faq";
import Consultation from "@/components/Consultation/Consultation";
import JsonLd from "@/components/JsonLd";

// Ordem = jornada do comprador (docs/NICHO-TEMPLATE.md §2).
export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Trust />
      <Portfolio />
      <Styles />
      <Why />
      <Pricing />
      <Process />
      <Quote />
      <Testimonials />
      <Areas />
      <Faq />
      <Consultation />
    </>
  );
}
