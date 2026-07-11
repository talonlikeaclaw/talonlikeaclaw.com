import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import TrustBand from "@/components/sections/TrustBand";
import Services from "@/components/sections/Services";
import WhoIHelp from "@/components/sections/WhoIHelp";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import AnimatedSection from "@/components/animations/AnimatedSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AnimatedSection>
        <TrustBand />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Services />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <WhoIHelp />
      </AnimatedSection>
      <AnimatedSection>
        <Work />
      </AnimatedSection>
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Faq />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
}
