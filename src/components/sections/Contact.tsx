import { useTranslations } from "next-intl";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MailIcon from "@/components/icons/MailIcon";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const contactLinks = [
  { key: "github", href: "https://github.com/talonlikeaclaw", icon: GithubIcon },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/talon-dunbar",
    icon: LinkedinIcon,
  },
];

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3 sm:gap-6">
          <a
            href="mailto:talon@talonlikeaclaw.com"
            className="group col-span-2 flex items-center justify-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-3 transition-all hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:gap-3 sm:px-6 sm:py-4"
          >
            <MailIcon size={20} className="text-accent group-hover:text-black" />
            <span className="break-all font-mono text-accent group-hover:text-black">talon@talonlikeaclaw.com</span>
          </a>
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 transition-all hover:border-accent/50 hover:bg-card/80 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:gap-3 sm:px-6 sm:py-4"
              >
                <Icon size={20} className="text-accent" />
                <span className="break-all font-mono text-text">{t(link.key)}</span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
