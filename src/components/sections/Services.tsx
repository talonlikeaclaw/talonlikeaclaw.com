import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import type { Locale } from "@/i18n/routing";

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale() as Locale;

  return (
    <section id="services" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title.en}
                className="relative overflow-hidden rounded-lg border border-border bg-card p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-3 font-mono text-xl font-semibold text-accent">
                  {service.title[locale]}
                </h3>
                <p className="leading-relaxed text-muted">
                  {service.description[locale]}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
