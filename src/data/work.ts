import type { LocalizedText } from "@/i18n/routing";

export interface Highlight {
  technical: LocalizedText;
  plain: LocalizedText;
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
      en: "An Odoo asset-tracking platform I built with a team for Dawson College, replacing spreadsheet tracking across four departments.",
      fr: "Une plateforme Odoo de suivi d'équipements que j'ai construite en équipe pour le Cégep Dawson, remplaçant les tableurs dans quatre départements.",
    },
    highlights: [
      {
        technical: {
          en: "Requirements gathered through stakeholder meetings; Odoo chosen over other open-source options",
          fr: "Besoins recueillis lors de réunions avec les parties prenantes ; Odoo choisi face à d'autres solutions open source",
        },
        plain: {
          en: "Met with each department to understand their needs, then picked the best-fit software from the available open-source options",
          fr: "Rencontres avec chaque département pour cerner leurs besoins, puis choix du logiciel open source le mieux adapté",
        },
      },
      {
        technical: {
          en: "Containerized dev setup and hardened production docker-compose on a vSphere VM behind nginx and HTTPS",
          fr: "Environnement de développement conteneurisé et stack docker-compose de production durcie sur une VM vSphere derrière nginx et HTTPS",
        },
        plain: {
          en: "A secure, standardized setup that runs identically in development and production, with encrypted connections",
          fr: "Une installation sécurisée et standardisée, identique en développement et en production, avec des connexions chiffrées",
        },
      },
      {
        technical: {
          en: "CI for lint and tests, a deploy script for rollouts, cron for data backups",
          fr: "CI pour le lint et les tests, un script pour les déploiements, cron pour les sauvegardes de données",
        },
        plain: {
          en: "Automated checks catch errors before release, updates ship smoothly, and data backs up on a schedule",
          fr: "Des vérifications automatiques détectent les erreurs avant la mise en ligne, les mises à jour se déploient sans accroc et les données sont sauvegardées régulièrement",
        },
      },
      {
        technical: {
          en: "Full documentation written so the teachers and department chair can maintain it after handoff",
          fr: "Documentation complète rédigée pour que les enseignants et la direction du département puissent la maintenir après la transmission",
        },
        plain: {
          en: "Clear documentation so the team can run and maintain it themselves, with no dependency on me",
          fr: "Une documentation claire pour que l'équipe puisse l'exploiter et le maintenir elle-même, sans dépendre de moi",
        },
      },
    ],
    technologies: ["Python", "Odoo", "PostgreSQL", "Docker"],
    image: "dawsasset.jpg",
    note: {
      en: "Live production deployment at Dawson College.",
      fr: "Déploiement en production au Cégep Dawson.",
    },
    githubUrl: "https://github.com/talonlikeaclaw/dawsasset",
  },
  {
    title: { en: "The Coral Reef", fr: "The Coral Reef" },
    description: {
      en: "A real-time multiplayer platform I built with a team and host for a nautical card game, live end to end.",
      fr: "Une plateforme multijoueur en temps réel que j'ai construite en équipe et que j'héberge pour un jeu de cartes nautique, en ligne de bout en bout.",
    },
    highlights: [
      {
        technical: {
          en: "Runs on Azure with Blob storage and a remote MongoDB",
          fr: "Tourne sur Azure avec Blob storage et une base MongoDB distante",
        },
        plain: {
          en: "Hosted on managed cloud infrastructure with dedicated storage and a separate database",
          fr: "Hébergé sur une infrastructure cloud gérée, avec un stockage dédié et une base de données distincte",
        },
      },
      {
        technical: {
          en: "Containerized dev and production environments",
          fr: "Environnements de développement et de production conteneurisés",
        },
        plain: {
          en: "A consistent setup across development and production, so what works locally works live",
          fr: "Un environnement identique en développement et en production : ce qui fonctionne en local fonctionne en ligne",
        },
      },
      {
        technical: {
          en: "GitLab CI runs lint, unit tests, and builds, then archives and deploys via the az CLI",
          fr: "GitLab CI exécute le lint, les tests unitaires et les builds, puis archive et déploie via az CLI",
        },
        plain: {
          en: "Every change is automatically checked, packaged, and rolled out without manual steps",
          fr: "Chaque modification est automatiquement vérifiée, empaquetée et déployée sans étape manuelle",
        },
      },
      {
        technical: {
          en: "Separate dev and production rollouts triggered by merge to staging or a new tag",
          fr: "Déploiements de développement et de production distincts déclenchés par une fusion sur staging ou un nouveau tag",
        },
        plain: {
          en: "Updates flow through separate staging and live environments, released only when ready",
          fr: "Les mises à jour passent par des environnements de test et de production distincts, publiées uniquement quand tout est prêt",
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
    image: "coralreef.jpg",
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
      en: "17+ self-hosted services I run on my own hardware. The lab where I test the tools I recommend to clients.",
      fr: "Plus de 17 services auto-hébergés que j'opère sur mon propre matériel. Le laboratoire où je teste les outils que je recommande à mes clients.",
    },
    highlights: [
      {
        technical: {
          en: "Infrastructure as code with Proxmox and OpenTofu; Ansible, Docker, and Docker Compose provision and maintain the services",
          fr: "Infrastructure as code avec Proxmox et OpenTofu ; Ansible, Docker et Docker Compose provisionnent et entretiennent les services",
        },
        plain: {
          en: "The whole environment is defined as code, so it can be rebuilt or reproduced exactly from scratch",
          fr: "L'ensemble de l'environnement est défini sous forme de code, donc reconstruisable ou reproduit à l'identique depuis zéro",
        },
      },
      {
        technical: {
          en: "Game servers (Minecraft, Valheim), Vaultwarden, PrivateBin, Homebox, File Browser, Immich, TrueNAS Scale, plus my own plant tracker and chore tracker",
          fr: "Serveurs de jeu (Minecraft, Valheim), Vaultwarden, PrivateBin, Homebox, File Browser, Immich, TrueNAS Scale, plus mon suivi de plantes et mon suivi de tâches",
        },
        plain: {
          en: "Self-hosted alternatives to commercial services: password manager, photo storage, file sharing, inventory, and game servers",
          fr: "Des alternatives auto-hébergées aux services commerciaux : gestionnaire de mots de passe, stockage de photos, partage de fichiers, inventaire, serveurs de jeu, et quelques applications que j'ai développées",
        },
      },
      {
        technical: {
          en: "Proxmox backups sync to a remote VPS; NAS volumes backed up via rsync",
          fr: "Les sauvegardes Proxmox se synchronisent vers un VPS distant ; volumes NAS sauvegardés via rsync",
        },
        plain: {
          en: "Automated, redundant backups stored both on-site and off-site, so nothing is lost if hardware fails",
          fr: "Des sauvegardes automatisées et redondantes, stockées sur place et à distance, pour ne rien perdre en cas de panne matérielle",
        },
      },
      {
        technical: {
          en: "Disk and service monitoring with Scrutiny, Uptime Kuma, and Prometheus + Grafana",
          fr: "Surveillance des disques et services avec Scrutiny, Uptime Kuma et Prometheus + Grafana",
        },
        plain: {
          en: "Constant monitoring of disk health and service uptime, with alerts before anything reaches the user",
          fr: "Surveillance continue de l'état des disques et de la disponibilité des services, avec des alertes avant que quoi que ce soit n'atteigne l'utilisateur",
        },
      },
    ],
    technologies: ["Proxmox", "TrueNAS", "Docker", "Ansible", "OpenTofu"],
    image: "homelab.jpg",
    note: {
      en: "17+ services in production.",
      fr: "Plus de 17 services en production.",
    },
  },
  {
    title: { en: "Godash", fr: "Godash" },
    description: {
      en: "A terminal dashboard I'm building to monitor Proxmox, straight from the command line.",
      fr: "Un tableau de bord terminal que je développe pour surveiller Proxmox, directement depuis la ligne de commande.",
    },
    technologies: ["Go", "Bubble Tea", "Proxmox API"],
    image: "godash.jpg",
    note: {
      en: "Core monitoring features complete, in active development.",
      fr: "Fonctionnalités de surveillance de base complétées, en développement actif.",
    },
    githubUrl: "https://github.com/talonlikeaclaw/godash",
  },
];
