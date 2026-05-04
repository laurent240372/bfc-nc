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
  Shield,
  TimerReset,
  Layers,
  TrendingUp,
  Workflow,
  Gauge,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/tableaux-bord-hero.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const preuves = [
  {
    icon: BarChart3,
    title: "Vision consolidée",
    desc: "Indicateurs, ratios et tendances financières lisibles.",
  },
  {
    icon: Landmark,
    title: "Subventions suivies",
    desc: "Montants, taux, versements et soldes maîtrisés.",
  },
  {
    icon: Shield,
    title: "Contrôle intégré",
    desc: "Sommes à appeler vérifiées avant déclenchement.",
  },
  {
    icon: FileText,
    title: "Justificatifs générés",
    desc: "Courriers, états et documents de suivi produits rapidement.",
  },
];

const moduleCards = [
  {
    icon: BarChart3,
    title: "Indicateurs & ratios",
    desc: "Visualisation synthétique des données et aide à l’analyse financière pour suivre les tendances clés.",
  },
  {
    icon: Landmark,
    title: "Suivi des subventions",
    desc: "Gestion des subventions d’investissement, montants, taux et modalités de versement.",
  },
  {
    icon: Calculator,
    title: "Sommes à appeler",
    desc: "Contrôle des montants mobilisables selon l’avancement réel des opérations.",
  },
  {
    icon: Send,
    title: "Appels de fonds",
    desc: "Déclenchement des demandes de versement et suivi des dossiers financés.",
  },
];

const beneficesMetier = [
  {
    title: "Analyser",
    desc: "Disposez d’une lecture claire des indicateurs financiers, ratios et tendances.",
  },
  {
    title: "Contrôler",
    desc: "Vérifiez les montants mobilisables avant chaque appel de fonds.",
  },
  {
    title: "Suivre",
    desc: "Pilotez les subventions, versements reçus et soldes à percevoir.",
  },
  {
    title: "Justifier",
    desc: "Produisez les courriers, états et pièces nécessaires aux financeurs.",
  },
];

const pilotageBlocks = [
  {
    title: "Pilotage financier",
    items: [
      "Indicateurs clés et ratios financiers",
      "Vision consolidée des opérations",
      "Analyse des tendances et écarts",
      "Suivi de l’avancement réel des dossiers",
    ],
  },
  {
    title: "Suivi des subventions",
    items: [
      "Montants attribués et taux de financement",
      "Calendrier prévisionnel des versements",
      "Contrôle des sommes à appeler",
      "Suivi du solde restant à percevoir",
    ],
  },
  {
    title: "Production documentaire",
    items: [
      "Courriers d’appel de fonds",
      "États de mandatement",
      "Justificatifs pour organismes financeurs",
      "Certificat d’achèvement des opérations",
    ],
  },
];

const processSteps = [
  {
    icon: Layers,
    label: "Paramétrage des opérations financées",
  },
  {
    icon: Landmark,
    label: "Saisie des subventions et modalités de versement",
  },
  {
    icon: Gauge,
    label: "Contrôle des sommes à appeler",
  },
  {
    icon: FileSpreadsheet,
    label: "Suivi des fonds reçus et clôture",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Opérations financées",
    desc: "Lien entre les opérations, les écritures d’investissement et les subventions.",
  },
  {
    icon: TrendingUp,
    title: "Calendrier de versement",
    desc: "Gestion des acomptes, tranches et versements conditionnés.",
  },
  {
    icon: ClipboardList,
    title: "États justificatifs",
    desc: "Production des pièces nécessaires aux financeurs et à la validation comptable.",
  },
  {
    icon: BadgeCheck,
    title: "Certificat d’achèvement",
    desc: "Finalisation du dossier et suivi du solde jusqu’à clôture complète.",
  },
];

const highlights = [
  "Ratios et analyse décisionnelle",
  "Suivi des subventions d’investissement",
  "Contrôle des montants mobilisables",
  "Appels de fonds et courriers associés",
  "Gestion des versements reçus",
  "Certificat d’achèvement",
  "États de mandatement",
  "Suivi opérationnel des dossiers financés",
];

const TableauxBord = () => (
  <Layout>
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.28),transparent_58%)]" />
      <div className="absolute right-[-12rem] top-8 h-[38rem] w-[38rem] rounded-full border border-white/10" />
      <div className="absolute right-[-7rem] top-24 h-[28rem] w-[28rem] rounded-full border border-white/10" />
      <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_left,hsl(217_91%_60%/0.12),transparent_55%)]" />

      <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,720px)] lg:items-center xl:gap-14">
        <motion.div {...fadeUp} className="relative z-10 max-w-xl pt-2 xl:max-w-2xl lg:pr-6">
          <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Module Finance
          </span>

          <h1 className="max-w-[12ch] text-4xl font-bold tracking-tight leading-[1.05] text-primary-foreground md:text-5xl lg:max-w-[11ch] lg:text-6xl xl:text-[4.25rem]">
            Tableaux de bord &amp; <span className="text-accent">pilotage</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-[1.8] text-primary-foreground/80">
            Une solution de pilotage financier pour visualiser les indicateurs clés,
            suivre les subventions d’investissement et contrôler les appels de fonds.
          </p>

          <p className="mt-3 max-w-lg text-base leading-[1.8] text-primary-foreground/60">
            Vision consolidée, ratios financiers, suivi des financements, contrôle
            des sommes à appeler et génération des états justificatifs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Demander une démo <ArrowRight className="h-4 w-4" />
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
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-accent/25 blur-[90px]" />

          <div className="relative z-10 w-full max-w-[500px] md:max-w-[650px] lg:max-w-[700px] xl:max-w-[740px]">
            <div className="rounded-[2rem] bg-gradient-to-br from-white/20 to-white/5 p-3 shadow-[0_35px_100px_rgba(4,17,44,0.50)] ring-1 ring-white/15 backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.20)]">
                <img
                  src={heroImg}
                  alt="Tableaux de bord BFC"
                  loading="eager"
                  decoding="async"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="-mt-8 relative z-10 pb-4">
      <div className="container">
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm md:grid-cols-2 xl:grid-cols-4 md:p-6">
          {preuves.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl p-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-light">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Fonctionnalités"
          title="Un outil d’analyse, de suivi et de déclenchement"
          description="Le module combine vision synthétique, suivi des financements et production opérationnelle pour transformer les données en actions concrètes."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {moduleCards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <c.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Bénéfices métier"
          title="Un pilotage clair pour sécuriser les financements"
          description="Au-delà du reporting, le module structure le suivi opérationnel des subventions et simplifie les échanges avec les financeurs."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {beneficesMetier.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-slate-50 to-white py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div {...fadeUp}>
          <SectionHeading
            badge="Pilotage"
            title="Pilotage & organisation"
            description="Une vision globale sur les opérations financées, les versements attendus et les justificatifs à produire."
            center={false}
          />

          <div className="space-y-6">
            {pilotageBlocks.map((block) => (
              <div key={block.title}>
                <h4 className="mb-2 flex items-center gap-2 font-bold text-foreground">
                  <BarChart3 className="h-4 w-4 text-accent" />
                  {block.title}
                </h4>
                <ul className="space-y-1.5 pl-6">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <div className="rounded-[2rem] border border-border/80 bg-card p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Workflow subventions
            </p>

            <h3 className="mt-4 text-2xl font-bold text-foreground">
              Un cycle complet jusqu’au solde final
            </h3>

            <div className="mt-8 space-y-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  {...fadeUp}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-start gap-4 rounded-2xl border border-border/80 bg-white/80 p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-light">
                    <step.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      0{i + 1}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-foreground">
                      {step.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Cas d’usage"
          title="Un outil puissant pour le suivi des subventions"
          description="Le module transforme le suivi des financements en un processus lisible, contrôlable et directement exploitable par les équipes."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            badge="Fonctionnalités clés"
            title="Les essentiels du pilotage financier"
            description="Les briques indispensables pour suivre les opérations, sécuriser les appels de fonds et produire les justificatifs attendus."
            center={false}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((f, i) => (
              <motion.div
                key={f}
                {...fadeUp}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            badge="Suivi opérationnel"
            title="Bien plus qu’un simple reporting"
            description="Le module accompagne les équipes dans le suivi réel des dossiers financés, depuis le paramétrage jusqu’à la clôture."
            center={false}
          />

          <div className="grid gap-4">
            {[
              {
                icon: Activity,
                label: "Analyse décisionnelle",
              },
              {
                icon: ShieldCheck,
                label: "Contrôle des financements",
              },
              {
                icon: Workflow,
                label: "Processus structuré",
              },
              {
                icon: TimerReset,
                label: "Gain de temps sur les justificatifs",
              },
            ].map((e, i) => (
              <motion.div
                key={e.label}
                {...fadeUp}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                  <e.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium leading-relaxed text-foreground">
                  {e.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-navy-gradient py-20">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Demander une démonstration
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-primary-foreground/70">
            Découvrez comment les tableaux de bord BFC peuvent aider votre collectivité
            à piloter ses opérations et ses financements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Demander une démonstration <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/logiciels/comptabilite"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Découvrir la comptabilité
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default TableauxBord;