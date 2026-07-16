"use client";

import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { services, additionalServices } from "@/data/services";
import type { Locale } from "@/i18n/routing";
import AnimatedCardIcon from "@/components/itshover/AnimatedCardIcon";
import PortfolioIcon from "@/components/itshover/PortfolioIcons";

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale() as Locale;

  return (
    <section id="services" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const animatedIcon = ["rocket", "router", "refresh", "gear"] as const;
            return (
              <SpotlightCard
                key={service.title.en}
                dataIconTrigger
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <PortfolioIcon name={animatedIcon[index]} size={24} className="text-accent" />
                </div>
                <h3 className="mb-3 font-mono text-xl font-semibold text-accent">
                  {service.title[locale]}
                </h3>
                <p className="leading-relaxed text-muted">
                  {service.description[locale]}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
        <div className="mt-10">
          <p className="mb-4 font-mono text-sm uppercase tracking-wider text-muted">
            {t("additionalTitle")}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {additionalServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title.en}
                  data-icon-trigger
                  className="flex gap-4 rounded-lg border border-border bg-card/50 p-5 transition-colors hover:border-accent/30"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/5">
                    <AnimatedCardIcon Icon={Icon} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-mono text-base font-semibold text-text">
                      {service.title[locale]}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {service.description[locale]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-8 text-center text-sm leading-relaxed text-muted">
          {t("docNote")}
        </p>
      </Container>
    </section>
  );
}
