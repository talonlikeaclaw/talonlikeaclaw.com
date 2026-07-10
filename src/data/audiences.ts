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
      en: "Get dependable infrastructure without building a full IT department. I handle the technical plumbing so your team can get back to the actual business.",
      fr: "Profitez d'une infrastructure fiable sans monter un département informatique complet. Je m'occupe de la plomberie technique pour que votre équipe puisse se concentrer sur ses vraies priorités.",
    },
  },
  {
    icon: Network,
    title: { en: "Agencies", fr: "Agences" },
    description: {
      en: "Ship client projects without becoming their forever-DevOps team. I handle hosting, deployments, and handoff docs so everyone knows what they own.",
      fr: "Livrez vos projets clients sans devenir leur équipe DevOps pour toujours. Je gère l'hébergement, les déploiements et la documentation pour que chacun sache ce qu'il prend en charge.",
    },
  },
  {
    icon: Code2,
    title: { en: "Technical Founders", fr: "Fondateurs techniques" },
    description: {
      en: "Keep building your product while I make deployment smooth and repeatable. You get a setup you can own, hand off, and grow with.",
      fr: "Continuez à bâtir votre produit pendant que je rends les déploiements simples et reproductibles. Vous obtenez un système que vous pouvez gérer, transmettre et faire évoluer.",
    },
  },
];
