import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";

const cloudPlatforms = ["Azure", "Cloudflare", "AWS"];
const selfHostedPlatforms = ["Proxmox", "Docker", "TrueNAS"];

export default function TrustBand() {
  const t = useTranslations("trust");

  return (
    <section className="border-y border-border bg-card/30 py-8">
      <Container>
        <p className="mb-4 text-center text-sm leading-relaxed text-muted">
          {t("framing")}
        </p>
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-12">
          <PlatformGroup label={t("cloudLabel")} platforms={cloudPlatforms} />
          <PlatformGroup
            label={t("selfHostedLabel")}
            platforms={selfHostedPlatforms}
          />
        </div>
      </Container>
    </section>
  );
}

function PlatformGroup({
  label,
  platforms,
}: {
  label: string;
  platforms: string[];
}) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
      <span className="font-mono text-sm uppercase tracking-wider text-accent sm:text-base">
        {label}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-4 font-mono text-sm text-text sm:text-base">
        {platforms.map((platform) => (
          <span key={platform}>{platform}</span>
        ))}
      </div>
    </div>
  );
}
