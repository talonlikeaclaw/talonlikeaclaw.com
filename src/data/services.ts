import {
  Rocket,
  Server,
  LifeBuoy,
  ArrowLeftRight,
  Boxes,
  Activity,
  type LucideIcon,
} from "lucide-react";
import type { LocalizedText } from "@/i18n/routing";

export interface Service {
  icon: LucideIcon;
  title: LocalizedText;
  description: LocalizedText;
}

export const services: Service[] = [
  {
    icon: Rocket,
    title: { en: "Deployment Sprint", fr: "Sprint de déploiement" },
    description: {
      en: "Get your application deployed and live, fast. I containerize your app, configure the environment, and ship it to the cloud or your own hardware with monitoring and backups in place.",
      fr: "Déployez votre application et mettez-la en ligne, rapidement. Je conteneurise votre application, configure l'environnement et la livre sur le cloud ou votre propre matériel avec surveillance et sauvegardes en place.",
    },
  },
  {
    icon: Server,
    title: {
      en: "Infrastructure Setup",
      fr: "Configuration de l'infrastructure",
    },
    description: {
      en: "Build out servers, networking, and storage from scratch. I set up virtualization, containers, and automated configuration so your infrastructure is reproducible and documented.",
      fr: "Construisez vos serveurs, votre réseau et votre stockage à partir de zéro. Je configure la virtualisation, les conteneurs et l'automatisation pour que votre infrastructure soit reproductible et documentée.",
    },
  },
  {
    icon: Activity,
    title: { en: "Monitoring & Alerts", fr: "Surveillance et alertes" },
    description: {
      en: "Know when something breaks before your users tell you. I set up uptime checks, alerts, dashboards, and log visibility so issues are easier to detect and respond to quickly.",
      fr: "Soyez averti lorsqu'un problème survient avant que vos utilisateurs ne vous le signalent. Je mets en place des vérifications de disponibilité, des alertes, des tableaux de bord et une visibilité sur les logs pour détecter et résoudre les incidents rapidement.",
    },
  },
  {
    icon: LifeBuoy,
    title: { en: "Maintenance & Support", fr: "Maintenance et support" },
    description: {
      en: "Keep systems running with an ongoing retainer. I handle updates, monitor for issues, verify backups, and fix problems before they reach your users.",
      fr: "Gardez vos systèmes en fonctionnement avec un forfait continu. Je gère les mises à jour, surveille les problèmes, vérifie les sauvegardes et règle les incidents avant qu'ils n'atteignent vos utilisateurs.",
    },
  },
  {
    icon: ArrowLeftRight,
    title: { en: "Migration", fr: "Migration" },
    description: {
      en: "Move existing applications and servers to new infrastructure with minimal downtime. I plan the cutover, migrate data, and verify everything works before the switch.",
      fr: "Déplacez vos applications et serveurs existants vers une nouvelle infrastructure avec un minimum d'indisponibilité. Je planifie le basculement, migre les données et vérifie que tout fonctionne avant la transition.",
    },
  },
  {
    icon: Boxes,
    title: { en: "Self-hosting Consulting", fr: "Conseil en auto-hébergement" },
    description: {
      en: "Draw on deep, hands-on knowledge of the open-source landscape. I evaluate and self-host dozens of tools in my own homelab, so I can recommend and configure the right stack for your exact needs.",
      fr: "Profitez d'une connaissance approfondie et concrète du paysage open source. J'évalue et j'auto-héberge des dizaines d'outils dans mon propre homelab, ce qui me permet de recommander et configurer la bonne pile pour vos besoins précis.",
    },
  },
];
