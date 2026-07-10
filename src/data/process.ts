import type { LocalizedText } from "@/i18n/routing";

export interface ProcessStep {
  title: LocalizedText;
  description: LocalizedText;
}

export const steps: ProcessStep[] = [
  {
    title: { en: "Audit", fr: "Audit" },
    description: {
      en: "First, I learn what you have and where it hurts. You get a clear map of what is fragile, undocumented, or worth changing.",
      fr: "Je commence par comprendre votre système et ses points sensibles. Vous obtenez un portrait clair de ce qui est fragile, mal documenté ou à améliorer.",
    },
  },
  {
    title: { en: "Setup", fr: "Mise en place" },
    description: {
      en: "Then I build, migrate, or tidy up. Security, backups, and monitoring are part of the setup, not chores saved for later.",
      fr: "Ensuite, je construis, migre ou remets de l'ordre. Sécurité, sauvegardes et surveillance font partie du travail, pas d'une liste remise à plus tard.",
    },
  },
  {
    title: { en: "Documentation", fr: "Documentation" },
    description: {
      en: "Nothing ships without docs. Your team gets plain-language instructions and enough context to run the system without depending on me.",
      fr: "Rien ne part sans documentation. Votre équipe reçoit des instructions claires et assez de contexte pour gérer le système sans dépendre de moi.",
    },
  },
  {
    title: { en: "Support", fr: "Support" },
    description: {
      en: "Need help after handoff? I can answer questions, handle updates, or step in when something goes sideways. Ongoing support is optional, not a lock-in.",
      fr: "Besoin d'aide après le transfert? Je peux répondre aux questions, gérer les mises à jour ou intervenir quand ça dérape. Le soutien continu reste un choix, jamais une obligation.",
    },
  },
];
