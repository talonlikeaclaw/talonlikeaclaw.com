import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("metadata");

  return {
    metadataBase: new URL("https://talonlikeaclaw.com"),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      url: "https://talonlikeaclaw.com",
      siteName: "Talon Dunbar",
      locale: locale === "fr" ? "fr_CA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "theme-color": "#0a0a0f",
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
