import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 pt-20 text-center">
      <p className="font-mono text-sm text-muted">{t("locale")}</p>
      <h1 className="font-mono text-3xl font-semibold text-text sm:text-4xl">
        talonlikeaclaw<span className="text-accent">.com</span>
      </h1>
      <p className="max-w-md text-muted">{t("placeholder")}</p>
    </div>
  );
}
