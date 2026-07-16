import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { Menu, X } from "lucide-react";
import { MailIcon } from "@/components/itshover/PortfolioIcons";

const navLinks = [
  { href: "#services", key: "services" },
  { href: "#work", key: "work" },
  { href: "#process", key: "process" },
  { href: "#about", key: "about" },
];

export default async function Navbar() {
  const t = await getTranslations("nav");

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a
            href="#"
            className="font-mono text-xl font-bold text-text hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:text-3xl"
          >
            talonlikeaclaw
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-lg text-text hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {t(link.key)}
              </a>
            ))}
            <LanguageToggle />
            <a
              href="#contact"
              className="flex items-center justify-center rounded-lg border border-accent bg-accent/10 p-2 text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              aria-label={t("contactMeAria")}
            >
              <MailIcon size={20} />
            </a>
          </div>

          {/* Mobile navigation uses native controls so it remains usable without hydration. */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <a
              href="#contact"
              className="flex items-center justify-center rounded-lg border border-accent bg-accent/10 p-2 text-accent transition-colors hover:bg-accent hover:text-black"
              aria-label={t("contactMeAria")}
            >
              <MailIcon size={20} />
            </a>
            <details className="group">
              <summary
                className="list-none text-muted hover:text-text focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden"
                aria-label={t("toggleMenuAria")}
              >
                <Menu size={24} className="group-open:hidden" />
                <X size={24} className="hidden group-open:block" />
              </summary>
              <div className="absolute left-0 right-0 top-20 border-y border-border bg-background/95 py-4">
                <Container>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block py-2 font-mono text-lg text-text transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                      {t(link.key)}
                    </a>
                  ))}
                </Container>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </nav>
  );
}
