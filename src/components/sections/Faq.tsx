import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/sections/FaqItem";
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
            <FaqItem
              key={item.question.en}
              question={item.question[locale]}
              answer={item.answer[locale]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
