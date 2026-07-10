import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const secondaryLinks = [
  { key: "github", href: "https://github.com/talonlikeaclaw", icon: Github },
  {
    key: "linkedin",
    href: "https://linkedin.com/in/talon-dunbar-181b17300",
    icon: Linkedin,
  },
];

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="mx-auto max-w-2xl text-center">
          <a
            href="mailto:talonlikeaclaw@proton.me"
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-8 py-4 font-mono text-lg font-medium text-accent transition-all hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <Mail size={20} />
            <span>{t("emailButton")}</span>
          </a>
          <p className="mt-4 font-mono text-sm text-muted">
            talonlikeaclaw@proton.me
          </p>
          <div className="mt-8 flex justify-center gap-6">
            {secondaryLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <Icon size={16} />
                  <span>{t(link.key)}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
