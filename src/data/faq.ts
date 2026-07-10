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
      en: "It depends on your team, budget, and data needs. Cloud is faster to set up and scales easily; self-hosting gives you control and lower long-term costs but needs hardware or someone to maintain it. I assess your situation and recommend honestly, even if that means a mix of both.",
      fr: "Cela dépend de votre équipe, de votre budget et de vos besoins en données. Le cloud est plus rapide à mettre en place et évolue facilement. L'auto-hébergement offre du contrôle et des coûts réduits à long terme, mais nécessite du matériel ou quelqu'un pour le maintenir. J'évalue votre situation et je recommande honnêtement, même s'il s'agit d'un mélange des deux.",
    },
  },
  {
    question: {
      en: "How do you price your work?",
      fr: "Comment fixez-vous vos prix ?",
    },
    answer: {
      en: "I work on a project basis with fixed quotes agreed up front, so you know the cost before we start. For ongoing support, I offer monthly retainers. Pricing depends on scope, complexity, and the level of ongoing responsibility involved.",
      fr: "Je travaille au forfait avec des prix fixes convenus à l'avance, pour que vous connaissiez le coût avant de commencer. Pour le soutien continu, j'offre des forfaits mensuels. Le prix dépend de la portée, de la complexité et du niveau de responsabilité continue requis.",
    },
  },
  {
    question: {
      en: "Will I be dependent on you after the project?",
      fr: "Serai-je dépendant de vous après le projet ?",
    },
    answer: {
      en: "No. Everything I build comes with plain-language documentation, so your team can understand and maintain it. I'm available for ongoing support if you want it, but you're never locked in.",
      fr: "Non. Tout ce que je construis est accompagné d'une documentation claire, pour que votre équipe puisse comprendre et maintenir le système. Je suis disponible pour un soutien continu si vous le souhaitez, mais vous n'êtes jamais prisonnier.",
    },
  },
  {
    question: {
      en: "Do you provide ongoing support?",
      fr: "Offrez-vous du soutien continu ?",
    },
    answer: {
      en: "Yes. Through a monthly retainer I handle updates, monitor for issues, verify backups, and fix problems before they reach your users. You can also bring me back for one-off work anytime.",
      fr: "Oui. Via un forfait mensuel, je gère les mises à jour, surveille les problèmes, vérifie les sauvegardes et règle les incidents avant qu'ils n'atteignent vos utilisateurs. Vous pouvez aussi me rappeler pour du travail ponctuel à tout moment.",
    },
  },
  {
    question: {
      en: "Can you work with my existing team or stack?",
      fr: "Pouvez-vous travailler avec mon équipe ou ma pile technique existante ?",
    },
    answer: {
      en: "Absolutely. I partner with dev and design agencies and can slot into your existing workflow and tooling. If you have a team, I document everything so they can take over confidently.",
      fr: "Absolument. Je travaille avec des agences de développement et de design et je peux m'intégrer à votre flux de travail et à vos outils existants. Si vous avez une équipe, je documente tout pour qu'elle puisse reprendre le flambeau en confiance.",
    },
  },
  {
    question: {
      en: "Do you work remotely or on-site?",
      fr: "Travaillez-vous à distance ou sur place ?",
    },
    answer: {
      en: "I'm based in Montréal and work with clients remotely across Québec and beyond. On-site visits are possible for local projects when it makes sense.",
      fr: "Je suis basé à Montréal et je travaille à distance avec des clients partout au Québec et ailleurs. Des visites sur place sont possibles pour les projets locaux lorsque cela a du sens.",
    },
  },
  {
    question: {
      en: "How do we get started?",
      fr: "Comment commencer ?",
    },
    answer: {
      en: "Send me an email and tell me what you're trying to solve. I'll reply with a few questions, and if we're a fit, we start with an audit to map out the work before anything moves.",
      fr: "Écrivez-moi et dites-moi ce que vous essayez de résoudre. Je répondrai avec quelques questions, et si nous sommes compatibles, nous commençons par un audit pour planifier le travail avant tout déplacement.",
    },
  },
];
