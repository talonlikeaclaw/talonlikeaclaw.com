import type { LocalizedText } from "@/i18n/routing";

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export const faq: FaqItem[] = [
  {
    question: {
      en: "Cloud or self-hosted: which should I choose?",
      fr: "Cloud ou auto-hébergé : lequel choisir ?",
    },
    answer: {
      en: "It depends. Cloud is quick to start and easy to scale. Self-hosting gives you more control, but someone still has to care for the hardware. I will recommend what fits, including a mix of both when that is the sensible answer.",
      fr: "Ça dépend. Le cloud démarre vite et évolue facilement. L'auto-hébergement donne plus de contrôle, mais quelqu'un doit s'occuper du matériel. Je recommande ce qui convient, y compris un mélange des deux quand c'est la réponse la plus sensée.",
    },
  },
  {
    question: {
      en: "How do you price your work?",
      fr: "Comment fixez-vous vos prix ?",
    },
    answer: {
      en: "Most projects use a fixed quote agreed before work starts. Ongoing support uses a monthly retainer. The price depends on scope, complexity, and how much responsibility you want me to take on.",
      fr: "La plupart des projets sont facturés à prix fixe, convenu avant le début du travail. Le soutien continu fonctionne avec un forfait mensuel. Le prix dépend de la portée, de la complexité et du niveau de responsabilité souhaité.",
    },
  },
  {
    question: {
      en: "Will I be dependent on you after the project?",
      fr: "Serai-je dépendant de vous après le projet ?",
    },
    answer: {
      en: "No. You get clear documentation and ownership of the setup. I can stay involved if you want support, but leaving should never require an escape plan.",
      fr: "Non. Vous recevez une documentation claire et gardez le contrôle du système. Je peux rester disponible si vous voulez du soutien, mais partir ne devrait jamais demander un plan d'évasion.",
    },
  },
  {
    question: {
      en: "Do you provide ongoing support?",
      fr: "Offrez-vous du soutien continu ?",
    },
    answer: {
      en: "Yes. A monthly retainer can cover updates, monitoring, backup checks, and incident response. You can also bring me back for one-off work when needed.",
      fr: "Oui. Un forfait mensuel peut couvrir les mises à jour, la surveillance, la vérification des sauvegardes et les incidents. Vous pouvez aussi me rappeler pour un besoin ponctuel.",
    },
  },
  {
    question: {
      en: "Can you work with my existing team or stack?",
      fr: "Pouvez-vous travailler avec mon équipe ou ma pile technique existante ?",
    },
    answer: {
      en: "Absolutely. I can work with your developers, designers, tools, and existing workflow. I document what changes so your team can take over with confidence.",
      fr: "Absolument. Je peux travailler avec vos développeurs, designers, outils et méthodes actuelles. Je documente les changements pour que votre équipe puisse reprendre le tout en confiance.",
    },
  },
  {
    question: {
      en: "Do you work remotely or on-site?",
      fr: "Travaillez-vous à distance ou sur place ?",
    },
    answer: {
      en: "Both. I work remotely with clients across Québec and beyond. For local Montréal projects, I can visit on-site when it is genuinely useful.",
      fr: "Les deux. Je travaille à distance avec des clients au Québec et ailleurs. Pour les projets montréalais, je peux me déplacer quand une visite est vraiment utile.",
    },
  },
  {
    question: {
      en: "How do we get started?",
      fr: "Comment commencer ?",
    },
    answer: {
      en: "Send me an email with the problem, the setup, or even the messy version of both. I will ask a few questions, then suggest the most useful next step. That is often an audit, but not always.",
      fr: "Envoyez-moi un courriel avec le problème, le système ou même la version un peu brouillon des deux. Je poserai quelques questions, puis proposerai la prochaine étape la plus utile. C'est souvent un audit, mais pas toujours.",
    },
  },
];
