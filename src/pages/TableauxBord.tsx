import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  BadgeCheck,
  Landmark,
  FileSpreadsheet,
  FileText,
  RefreshCw,
  Building2,
  Activity,
  ShieldCheck,
  Calculator,
  Send,
  ClipboardList,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/tableaux-bord-hero.png";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const moduleCards = [
  {
    icon: BarChart3,
    title: "Indicateurs & ratios",
    desc:
      "Visualisation synthétique des données et aide à l’analyse financière pour piloter les opérations et suivre les tendances clés.",
  },
  {
    icon: Landmark,
    title: "Suivi des subventions",
    desc:
      "Gestion des subventions d’investissement, de leur montant, de leur taux et des modalités de versement associées.",
  },
  {
    icon: Calculator,
    title: "Contrôle des sommes à appeler",
    desc:
      "Vérification des montants mobilisables avant déclenchement des appels de fonds, selon l’avancement réel des opérations.",
  },
  {
    icon: Send,
    title: "Appels de fonds",
    desc:
      "Déclenchement des demandes de versement et suivi opérationnel des dossiers financés par les organismes partenaires.",
  },
  {
    icon: FileText,
    title: "Courriers & états justificatifs",
    desc:
      "Génération des états de mandatement et des courriers nécessaires pour appuyer les demandes de versement.",
  },
  {
    icon: FileSpreadsheet,
    title: "Versements & achèvement",
    desc:
      "Enregistrement des fonds reçus, suivi du solde et gestion du certificat d’achèvement pour finaliser les financements.",
  },
];

const benefitsCards = [
  {
    icon: Activity,
    title: "Analyse décisionnelle",
    text:
      "Suivi des données clés pour piloter les opérations, objectiver les arbitrages et renforcer la lisibilité des finances.",
  },
  {
    icon: ShieldCheck,
    title: "Suivi des financements",
    text:
      "Contrôle des subventions, des versements et de l’avancement des dossiers dans un environnement métier structuré.",
  },
  {
    icon: ClipboardList,
    title: "Justificatifs & courriers",
    text:
      "Production des états de mandatement et génération des courriers d’appel de fonds pour sécuriser les demandes.",
  },
];

const highlights = [
  {
    icon: Building2,
    title: "Un tableau de bord métier",
    text:
      "Le module ne se limite pas à l’affichage d’indicateurs : il accompagne aussi le suivi opérationnel des dossiers financés.",
  },
  {
    icon: RefreshCw,
    title: "Données comptables actualisées",
    text:
      "Les données peuvent être mises à jour afin de conserver une vision fiable de l’avancement et des montants à mobiliser.",
  },
  {
    icon: BadgeCheck,
    title: "Travaux en régie intégrés",
    text:
      "Le suivi peut intégrer les travaux en régie grâce à des ventilations analytiques spécifiques rattachées aux opérations.",
  },
  {
    icon: FileText,
    title: "Production documentaire",
    text:
      "Le module facilite la rédaction des états justificatifs, des courriers et des éléments attendus par les organismes financeurs.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Paramétrer le référentiel",
    text:
      "Articles, adresses de provenance, opérations financées et éventuels travaux en régie sont préparés dans le module.",
  },
  {
    number: "02",
    title: "Saisir la subvention",
    text:
      "La saisie s’appuie sur le texte d’octroi et sur les modalités de versement prévues dans le calendrier de financement.",
  },
  {
    number: "03",
    title: "Contrôler les sommes à appeler",
    text:
      "Le module aide à vérifier les montants mobilisables en fonction de l’avancement et des règles définies au paramétrage.",
  },
  {
    number: "04",
    title: "Générer et suivre les versements",
    text:
      "Appel de fonds, courrier, enregistrement des fonds reçus et certificat d’achèvement permettent de suivre le dossier jusqu’au solde final.",
  },
];

const useCases = [
  {
    icon: Landmark,
    title: "Paramétrage des opérations",
    desc:
      "Lien entre les opérations financées et les écritures d’investissement pour structurer le suivi des subventions.",
  },
  {
    icon: BarChart3,
    title: "Calendrier de versement",
    desc:
      "Gestion des acomptes, des tranches d’avancement et des versements conditionnés à l’état d’avancement des travaux.",
  },
  {
    icon: FileText,
    title: "État des mandatements",
    desc:
      "Production des pièces justificatives nécessaires à la validation comptable et à l’envoi aux financeurs.",
  },
  {
    icon: FileSpreadsheet,
    title: "Suivi des fonds reçus",
    desc:
      "Enregistrement des versements perçus et suivi du reste à mobiliser jusqu’à la clôture complète de l’opération.",
  },
];

export default function TableauxBord() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy-gradient py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.16),transparent_60%)]" />

        <div className="container relative grid items-center gap-14 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <span className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
              Module Finance
            </span>

            <h1 className="text-4xl font-bold leading-[1.05] text-primary-foreground md:text-5xl lg:text-6xl">
              Tableaux de bord &
              <br />
              <span className="text-accent">pilotage financier</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-[1.8] text-primary-foreground/80">
              Un module d’analyse et de suivi pour piloter les opérations, visualiser
              les indicateurs clés, gérer les subventions d’investissement et déclencher
              les appels de fonds en lien avec l’avancement réel des dossiers.
            </p>

            <p className="mt-3 max-w-xl text-base leading-[1.8] text-primary-foreground/70">
              Vision consolidée, tableaux de ratios, suivi des financements, contrôle des
              sommes à appeler et production des états justificatifs dans un environnement
              métier conçu pour les collectivités.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-95"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/logiciels"
                className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Tous les modules
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-start justify-center lg:justify-end lg:self-start lg:pt-8 xl:pt-10"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,hsl(217_91%_60%/0.24),transparent_70%)] blur-3xl" />

            <div className="relative z-10 w-full max-w-[560px] overflow-visible md:max-w-[720px] lg:max-w-[860px] xl:max-w-[980px]">
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white/5 shadow-[0_30px_80px_rgba(4,17,44,0.45)] ring-1 ring-white/10 backdrop-blur-sm">
                <img
                  src={heroImg}
                  alt="Logiciel Tableaux de bord BFC"
                  loading="eager"
                  decoding="async"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="-mt-8 relative z-10 pb-4">
        <div className="container">
          <div className="grid gap-4 rounded-2xl border border-primary-foreground/10 bg-[rgba(10,28,74,0.92)] p-4 shadow-[0_20px_50px_rgba(4,17,44,0.25)] backdrop-blur md:grid-cols-3 md:p-6">
            {benefitsCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-xl p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp}>
            <SectionHeading
              badge="Fonctionnalités"
              title="Un outil d’analyse, de suivi et de déclenchement"
              description="Le module combine vision synthétique, suivi des financements et production opérationnelle pour transformer les données en actions concrètes."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {moduleCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-blue-light p-3 text-accent ring-1 ring-blue-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              {...fadeUp}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 lg:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Pilotage opérationnel
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Un tableau de bord qui ne se limite pas à l’affichage
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Le module ne sert pas uniquement à consulter des indicateurs. Il permet aussi
                de structurer les opérations financées, de suivre l’avancement des dossiers,
                de contrôler les sommes à appeler et de produire les documents nécessaires au
                versement des subventions.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-blue-light p-3 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Processus"
              title="Un workflow structuré pour le suivi des subventions"
              description="Du paramétrage initial jusqu’au versement final, le module accompagne chaque étape du cycle de financement."
              align="center"
              theme="dark"
            />
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-sm font-semibold tracking-[0.2em] text-blue-300">
                  {step.number}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Cas d’usage"
              title="Un outil puissant pour le suivi des subventions"
              description="Le module transforme le suivi des financements en un processus lisible, contrôlable et directement exploitable par les équipes."
              align="center"
            />
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-accent shadow-sm ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white shadow-2xl shadow-slate-200/60 md:p-12"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Pourquoi choisir BFC
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Un véritable outil de pilotage, bien au-delà du reporting
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Le module combine lecture synthétique des données, suivi opérationnel
                  et génération documentaire pour offrir aux collectivités un outil de
                  pilotage concret, lisible et directement exploitable.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Ratios et analyse décisionnelle",
                  "Appels de fonds et suivi des subventions",
                  "Contrôle des montants à mobiliser",
                  "Gestion des versements et du certificat d’achèvement",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-10 text-center shadow-sm md:px-10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Vous souhaitez mieux piloter vos opérations et vos financements ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Découvrez un module conçu pour transformer les données comptables et les
              subventions en outils de pilotage concrets, lisibles et exploitables.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Demander une démonstration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/logiciels/comptabilite"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-accent"
              >
                Découvrir la comptabilité
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}