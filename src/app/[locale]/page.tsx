import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import TrustBand from "@/components/sections/TrustBand";
import Services from "@/components/sections/Services";
import WhoIHelp from "@/components/sections/WhoIHelp";
import Process from "@/components/sections/Process";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustBand />
      <Services />
      <WhoIHelp />
      <Process />
    </>
  );
}
