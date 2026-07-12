import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import DecryptedText from "@/components/reactbits/DecryptedText";
import Typewriter from "@/components/animations/Typewriter";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as Locale;

  return (
    <section className="hero-accent-bloom relative flex min-h-screen items-center overflow-hidden pt-20 pb-16">
      <Container className="relative max-w-6xl">
        <div>
          <p className="font-mono text-sm text-accent sm:text-base">
            <span className="text-muted">$ </span>
            <Typewriter
              text={t("eyebrow")}
              speed={20}
              initialDelay={50}
              loop={false}
            />
          </p>
          <h1 className="mt-6 font-mono text-2xl font-bold leading-tight tracking-tight text-text sm:text-6xl">
            <DecryptedText
              text={t("headlineLead")}
              animateOn="view"
              sequential
              revealDirection="start"
              speed={18}
              className="text-text"
              encryptedClassName="text-accent/50"
            />
            <br />
            <DecryptedText
              text={t("headlineAccent")}
              animateOn="view"
              sequential
              revealDirection="start"
              speed={18}
              className="text-accent"
              encryptedClassName="text-accent/50"
            />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t("subtext")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg border border-accent bg-accent/10 px-6 py-3 text-center font-mono font-medium text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href={`https://portfolio.talonlikeaclaw.com/${locale}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-background/40 px-6 py-3 text-center font-mono font-medium text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("ctaSecondary")}
            </a>
          </div>
          <p className="mt-8 font-mono text-sm leading-relaxed text-muted">
            {t("proof")}
          </p>
          <p className="mt-6 font-mono text-sm text-muted">{t("location")}</p>
        </div>
      </Container>
    </section>
  );
}
