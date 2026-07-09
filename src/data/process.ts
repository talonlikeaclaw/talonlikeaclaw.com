import type { LocalizedText } from "@/i18n/routing";

export interface ProcessStep {
  title: LocalizedText;
  description: LocalizedText;
}

export const steps: ProcessStep[] = [
  {
    title: { en: "Audit", fr: "Audit" },
    description: {
      en: "I start by understanding what you have and where it hurts. I review your current setup, flag what's fragile or undocumented, and map out what needs to change before anything moves.",
      fr: "Je commence par comprendre ce que vous avez et où se situe le problème. J'examine votre configuration actuelle, j'identifie ce qui est fragile ou non documenté, et je planifie ce qui doit changer avant tout déplacement.",
    },
  },
  {
    title: { en: "Setup", fr: "Mise en place" },
    description: {
      en: "Then I build and deploy. I configure your servers or cloud environment, deploy your applications, and set up security and backups so everything runs reliably from day one.",
      fr: "Ensuite, je construis et déploie. Je configure vos serveurs ou votre environnement cloud, je déploie vos applications, et je mets en place la sécurité et les sauvegardes pour que tout fonctionne de manière fiable dès le premier jour.",
    },
  },
  {
    title: { en: "Documentation", fr: "Documentation" },
    description: {
      en: "Nothing ships without docs. I write clear, plain-language documentation for everything I set up, so your team understands how it works and isn't dependent on me to keep it running.",
      fr: "Rien ne passe en production sans documentation. Je rédige une documentation claire et en termes simples pour tout ce que j'installe, afin que votre équipe comprenne le fonctionnement et ne dépende pas de moi pour le maintien.",
    },
  },
  {
    title: { en: "Support", fr: "Support" },
    description: {
      en: "After handoff, I stay available. Whether it's answering questions, applying updates, or handling an incident, you have someone who already knows your systems and can respond fast.",
      fr: "Après la transmission, je reste disponible. Pour répondre à des questions, appliquer des mises à jour ou gérer un incident, vous avez quelqu'un qui connaît déjà vos systèmes et peut réagir rapidement.",
    },
  },
];
