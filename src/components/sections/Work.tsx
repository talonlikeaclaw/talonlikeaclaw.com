import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/work";
import type { Locale } from "@/i18n/routing";

export default function Work() {
  const t = useTranslations("work");
  const locale = useLocale() as Locale;

  return (
    <section id="work" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="space-y-6">
          {caseStudies.map((project) => (
            <article
              key={project.title.en}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent/50 md:flex-row"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:w-2/5">
                <Image
                  src={`/projects/${project.image}`}
                  alt={
                    locale === "fr"
                      ? `Capture d'écran de ${project.title[locale]}`
                      : `Screenshot of ${project.title[locale]}`
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="mb-3 font-mono text-xl font-semibold text-accent">
                  {project.title[locale]}
                </h3>
                <p className="leading-relaxed text-muted">
                  {project.description[locale]}
                </p>
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight.text.en}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span
                          className="shrink-0 font-mono text-accent"
                          aria-hidden
                        >
                          ▸
                        </span>
                        <span>{highlight.text[locale]}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                      <Github size={16} />
                      <span>{t("linkCode")}</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                      <ExternalLink size={16} />
                      <span>{t("linkLive")}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={`https://portfolio.talonlikeaclaw.com/${locale}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <span>{t("seeMore")}</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
