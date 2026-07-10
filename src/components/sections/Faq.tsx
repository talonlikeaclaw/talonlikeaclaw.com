import { useTranslations, useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faq } from "@/data/faq";
import type { Locale } from "@/i18n/routing";

export default function Faq() {
  const t = useTranslations("faq");
  const locale = useLocale() as Locale;

  return (
    <section id="faq" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="mx-auto max-w-3xl">
          {faq.map((item) => (
            <details
              key={item.question.en}
              className="group border-b border-border"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-mono text-base font-medium text-text transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
                <span>{item.question[locale]}</span>
                <ChevronDown
                  size={20}
                  className="shrink-0 text-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pb-4 pr-8 leading-relaxed text-muted">
                {item.answer[locale]}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
