import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-lg leading-relaxed text-muted">
            {t("bio")}
          </p>
          <div className="mt-8 border-l-2 border-accent pl-6">
            <h3 className="font-mono text-lg font-semibold text-accent">
              {t("credTitle")}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{t("credBody")}</p>
            <a
              href="https://github.com/talonlikeaclaw?tab=stars"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              <span>{t("githubLink")}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
