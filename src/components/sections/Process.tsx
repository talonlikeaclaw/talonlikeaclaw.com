import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { steps } from "@/data/process";
import type { Locale } from "@/i18n/routing";

export default function Process() {
  const t = useTranslations("process");
  const locale = useLocale() as Locale;

  return (
    <section id="process" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-6 top-2 bottom-2 w-px bg-border sm:left-8"
            aria-hidden
          />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <AnimatedSection
                key={step.title.en}
                delay={i * 0.12}
                distance={48}
                duration={0.8}
              >
                <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-card font-mono text-sm font-semibold text-accent sm:h-16 sm:w-16 sm:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-2 sm:pt-4">
                    <h3 className="font-mono text-xl font-semibold text-text sm:text-2xl">
                      {step.title[locale]}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">
                      {step.description[locale]}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
