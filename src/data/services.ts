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
    title: { en: "Application Deployment", fr: "Déploiement d'applications" },
    description: {
      en: "Get your app live without crossing your fingers. I package it, configure its environment, and add monitoring and backups from day one.",
      fr: "Mettez votre application en ligne sans croiser les doigts. Je la conteneurise, configure son environnement et ajoute surveillance et sauvegardes dès le départ.",
    },
  },
  {
    icon: Server,
    title: {
      en: "Infrastructure Setup",
      fr: "Configuration de l'infrastructure",
    },
    description: {
      en: "Start with infrastructure your team can actually understand. I set up servers, networking, storage, and automation so the whole thing is reproducible and documented.",
      fr: "Partez avec une infrastructure que votre équipe peut vraiment comprendre. Je configure serveurs, réseau, stockage et automatisation pour que tout soit reproductible et documenté.",
    },
  },
  {
    icon: ArrowLeftRight,
    title: { en: "Migration", fr: "Migration" },
    description: {
      en: "Move without the usual moving-day chaos. I plan the cutover, migrate your data, and test the new setup before traffic follows.",
      fr: "Changez d'infrastructure sans le chaos d'un jour de déménagement. Je planifie la transition, migre les données et teste le nouveau système avant d'y envoyer le trafic.",
    },
  },
  {
    icon: LifeBuoy,
    title: { en: "Maintenance & Support", fr: "Maintenance et support" },
    description: {
      en: "Keep things healthy after launch. I handle updates, watch for trouble, check backups, and fix issues before they become everyone else's problem.",
      fr: "Gardez vos systèmes en santé après le lancement. Je gère les mises à jour, surveille les problèmes, vérifie les sauvegardes et règle les incidents avant qu'ils ne touchent vos utilisateurs.",
    },
  },
];

export const additionalServices: Service[] = [
  {
    icon: Activity,
    title: { en: "Monitoring & Alerts", fr: "Surveillance et alertes" },
    description: {
      en: "Hear about problems from your monitoring, not your users. Get useful alerts, dashboards, and logs without drowning in noise.",
      fr: "Apprenez les problèmes par votre surveillance, pas par vos utilisateurs. Obtenez des alertes, tableaux de bord et journaux utiles, sans vous noyer dans le bruit.",
    },
  },
  {
    icon: Boxes,
    title: { en: "Self-hosting Consulting", fr: "Conseil en auto-hébergement" },
    description: {
      en: "Choose open-source tools that fit your needs and your appetite for maintenance. I help you compare, configure, and own the right stack.",
      fr: "Choisissez des outils open source adaptés à vos besoins et à votre envie de les maintenir. Je vous aide à comparer, configurer et prendre en main la bonne solution.",
    },
  },
];
