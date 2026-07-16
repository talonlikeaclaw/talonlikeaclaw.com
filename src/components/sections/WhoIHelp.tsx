"use client";

import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { audiences } from "@/data/audiences";
import type { Locale } from "@/i18n/routing";
import AnimatedCardIcon from "@/components/itshover/AnimatedCardIcon";

export default function WhoIHelp() {
  const t = useTranslations("who");
  const locale = useLocale() as Locale;

  return (
    <section id="who" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <SpotlightCard
                key={audience.title.en}
                dataIconTrigger
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <AnimatedCardIcon Icon={Icon} />
                </div>
                <h3 className="mb-3 font-mono text-xl font-semibold text-accent">
                  {audience.title[locale]}
                </h3>
                <p className="leading-relaxed text-muted">
                  {audience.description[locale]}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
