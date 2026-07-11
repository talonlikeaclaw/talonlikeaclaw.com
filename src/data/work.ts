import type { LocalizedText } from "@/i18n/routing";

export interface Highlight {
  text: LocalizedText;
}

export interface CaseStudy {
  title: LocalizedText;
  description: LocalizedText;
  highlights?: Highlight[];
  technologies: string[];
  image: string;
  note?: LocalizedText;
  liveUrl?: string;
  githubUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: { en: "DawsAsset", fr: "DawsAsset" },
    description: {
      en: "An asset-tracking platform built with a team for Dawson College, replacing spreadsheets across four departments.",
      fr: "Une plateforme de suivi d'équipements construite en équipe pour le Cégep Dawson, en remplacement des tableurs de quatre départements.",
    },
    highlights: [
      {
        text: {
          en: "Selected Odoo after interviewing each department and comparing open-source options",
          fr: "Choix d'Odoo après avoir rencontré chaque département et comparé les options open source",
        },
      },
      {
        text: {
          en: "Repeatable environments, automated checks, encrypted connections, and scheduled backups",
          fr: "Environnements reproductibles, vérifications automatisées, connexions chiffrées et sauvegardes planifiées",
        },
      },
      {
        text: {
          en: "Clear handoff documentation so the college team can run and maintain it independently",
          fr: "Documentation claire pour que l'équipe du cégep puisse l'exploiter et le maintenir en toute autonomie",
        },
      },
    ],
    technologies: ["Python", "Odoo", "PostgreSQL", "Docker"],
    image: "dawsasset.webp",
    note: {
      en: "Live production deployment at Dawson College.",
      fr: "Déploiement en production au Cégep Dawson.",
    },
    githubUrl: "https://github.com/talonlikeaclaw/dawsasset",
  },
  {
    title: { en: "The Coral Reef", fr: "The Coral Reef" },
    description: {
      en: "A real-time multiplayer card game built with a team and hosted end to end on managed cloud infrastructure.",
      fr: "Un jeu de cartes multijoueur en temps réel construit en équipe et hébergé de bout en bout sur une infrastructure cloud gérée.",
    },
    highlights: [
      {
        text: {
          en: "Dedicated storage and a separate database keep the live environment tidy and resilient",
          fr: "Un stockage dédié et une base de données séparée gardent l'environnement en ligne propre et résilient",
        },
      },
      {
        text: {
          en: "Consistent development and production environments reduce deployment surprises",
          fr: "Des environnements cohérents en développement et en production réduisent les surprises au déploiement",
        },
      },
      {
        text: {
          en: "Every change is checked automatically and promoted through staging before release",
          fr: "Chaque modification est vérifiée automatiquement et passe par un environnement de test avant sa mise en ligne",
        },
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Socket.IO",
      "Docker",
      "GitLab CI",
    ],
    image: "coralreef.webp",
    note: {
      en: "Live at thecoralreef.club.",
      fr: "En ligne au thecoralreef.club.",
    },
    liveUrl: "https://thecoralreef.club/",
    githubUrl: "https://github.com/talonlikeaclaw/the-coral-reef",
  },
  {
    title: { en: "Self-Hosted Homelab", fr: "Self-Hosted Homelab" },
    description: {
      en: "More than 17 services running on my own hardware, where I test the tools and patterns I recommend to clients.",
      fr: "Plus de 17 services sur mon propre matériel, où je teste les outils et les méthodes que je recommande à mes clients.",
    },
    highlights: [
      {
        text: {
          en: "The full environment is defined as code and can be rebuilt from scratch",
          fr: "L'environnement complet est défini sous forme de code et peut être reconstruit depuis zéro",
        },
      },
      {
        text: {
          en: "Automated, redundant backups are stored both on-site and off-site",
          fr: "Des sauvegardes automatisées et redondantes sont conservées sur place et à distance",
        },
      },
      {
        text: {
          en: "Disk health and service uptime are monitored continuously, with alerts when something drifts",
          fr: "L'état des disques et la disponibilité des services sont surveillés en continu, avec des alertes au moindre écart",
        },
      },
    ],
    technologies: ["Proxmox", "TrueNAS", "Docker", "Ansible", "OpenTofu"],
    image: "homelab.webp",
    note: {
      en: "17+ services in production.",
      fr: "Plus de 17 services en production.",
    },
  },
];
