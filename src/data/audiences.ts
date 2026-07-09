import {
  Building2,
  Network,
  HeartHandshake,
  Code2,
  type LucideIcon,
} from "lucide-react";
import type { LocalizedText } from "@/i18n/routing";

export interface Audience {
  icon: LucideIcon;
  title: LocalizedText;
  description: LocalizedText;
}

export const audiences: Audience[] = [
  {
    icon: Building2,
    title: { en: "Small Businesses", fr: "Petites entreprises" },
    description: {
      en: "Get reliable infrastructure without hiring a full IT team. I handle deployments, servers, and documentation so your team can focus on running the business.",
      fr: "Bénéficiez d'une infrastructure fiable sans embaucher une équipe informatique complète. Je gère les déploiements, les serveurs et la documentation pour que votre équipe puisse se concentrer sur l'activité.",
    },
  },
  {
    icon: Network,
    title: { en: "Agencies", fr: "Agences" },
    description: {
      en: "Outsource the hosting, deployment, and DevOps for your client projects to someone who documents everything. I partner with dev and design agencies that need reliable infrastructure they can hand off with confidence.",
      fr: "Externalisez l'hébergement, le déploiement et le DevOps de vos projets clients auprès de quelqu'un qui documente tout. Je travaille avec des agences de développement et de design qui ont besoin d'une infrastructure fiable à transmettre en toute confiance.",
    },
  },
  {
    icon: HeartHandshake,
    title: { en: "Nonprofits", fr: "Organismes sans but lucratif" },
    description: {
      en: "Stretch limited resources with self-hosted or low-cost cloud setups that stay documented and maintainable by volunteers and small teams.",
      fr: "Tirez le maximum de ressources limitées avec des installations auto-hébergées ou cloud à faible coût qui restent documentées et maintenables par des bénévoles et de petites équipes.",
    },
  },
  {
    icon: Code2,
    title: { en: "Technical Founders", fr: "Fondateurs techniques" },
    description: {
      en: "Ship your product without getting bogged down in infrastructure. I set up reproducible deployments you can hand off, own, or scale as you grow.",
      fr: "Lancez votre produit sans vous enliser dans l'infrastructure. Je mets en place des déploiements reproductibles que vous pouvez transmettre, posséder ou faire évoluer à mesure que vous grandissez.",
    },
  },
];
