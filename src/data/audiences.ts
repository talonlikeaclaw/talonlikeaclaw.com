import {
  Building2,
  Network,
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
      en: "Reliable infrastructure for your client projects, without the DevOps overhead. I handle hosting, deployment, and documentation so your agency can hand off with confidence.",
      fr: "Une infrastructure fiable pour vos projets clients, sans le fardeau du DevOps. Je gère l'hébergement, le déploiement et la documentation pour que votre agence puisse transmettre en toute confiance.",
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
