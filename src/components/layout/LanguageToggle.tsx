import { getLocale, getTranslations } from "next-intl/server";
import { GlobeIcon } from "@/components/itshover/PortfolioIcons";
import { routing, type Locale } from "@/i18n/routing";

export default async function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("nav");

  const otherLocale =
    routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

  return (
    <a
      href={`/${otherLocale}/`}
      aria-label={t("toggleLanguageAria")}
      className={`flex items-center gap-1.5 rounded-lg border border-border bg-card/50 p-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${className}`}
    >
      <GlobeIcon size={20} />
      <span>{otherLocale.toUpperCase()}</span>
    </a>
  );
}
