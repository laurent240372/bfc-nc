import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  BookOpen,
  Landmark,
  FolderArchive,
  ShieldCheck,
  RefreshCw,
  Building2,
  ScanLine,
  BadgeCheck,
  FileSpreadsheet,
  Send,
  ClipboardList,
  Scale,
  Archive,
  Shield,
  TimerReset,
  FileSignature,
  Globe,
  Workflow,
  Bell,
  Database,
  Printer,
  Search,
  Layers,
  Gauge,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/etat-civil-droit-commun-hero.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const preuves = [
  {
    icon: Shield,
    title: "Gestion réglementaire",
    desc: "Actes, registres, pièces et échanges officiels structurés.",
  },
  {
    icon: RefreshCw,
    title: "Chaîne documentaire",
    desc: "De la saisie à l’édition avec historique centralisé.",
  },
  {
    icon: TimerReset,
    title: "Gain de temps",
    desc: "Préparation guidée, éditions rapides et suivi clair.",
  },
  {
    icon: Building2,
    title: "Collectivités",
    desc: "Une solution adaptée aux services d’état civil.",
  },
];

const integrationCards = [
  {
    icon: FileText,
    title: "Saisie des actes",
    desc: "Naissances, mariages et actes saisis dans un environnement structuré.",
  },
  {
    icon: BookOpen,
    title: "Gestion des registres",
    desc: "Création des années, ouverture, clôture et organisation des registres.",
  },
  {
    icon: ClipboardList,
    title: "Éditions & pièces",
    desc: "Pré-édition, impression et édition définitive des documents officiels.",
  },
  {
    icon: FolderArchive,
    title: "Historique documentaire",
    desc: "Consultation des actes édités, documents numérisés et pièces jointes.",
  },
];

const beneficesMetier = [
  {
    title: "Structurer",
    desc: "Cadrez la préparation des actes, registres et opérations documentaires.",
  },
  {
    title: "Sécuriser",
    desc: "Réduisez les risques d’erreur grâce aux contrôles et validations.",
  },
  {
    title: "Dématérialiser",
    desc: "Préparez et suivez les échanges réglementaires avec l’INSEE.",
  },
  {
    title: "Historiser",
    desc: "Conservez les pièces, actes édités et documents numérisés.",
  },
];

const etatCivilBlocks = [
  {
    title: "Cycle complet de l’acte",
    items: [
      "Saisie guidée des informations",
      "Préparation des pièces associées",
      "Édition officielle et impression registre",
      "Historique documentaire centralisé",
    ],
  },
  {
    title: "Organisation des registres",
    items: [
      "Création des années et registres",
      "Ouverture, gestion et clôture",
      "Adaptation à l’organisation de la collectivité",
      "Suivi documentaire sur la durée",
    ],
  },
  {
    title: "Procédures avancées",
    items: [
      "Changements de prénom",
      "Corrections et ajustements documentaires",
      "Intégration d’actes numérisés",
      "Préparation des échanges INSEE",
    ],
  },
];

const processSteps = [
  {
    icon: Layers,
    label: "Saisir les informations de l’acte",
  },
  {
    icon: FileSignature,
    label: "Préparer les pièces et documents associés",
  },
  {
    icon: Printer,
    label: "Éditer les actes officiels et registres",
  },
  {
    icon: Send,
    label: "Archiver et transmettre les échanges réglementaires",
  },
];

const dematItems = [
  { icon: Send, label: "Transferts INSEE" },
  { icon: FileSignature, label: "Pièces officielles" },
  { icon: Printer, label: "Pré-édition et édition" },
  { icon: ScanLine, label: "Actes numérisés" },
  { icon: Globe, label: "Échanges dématérialisés" },
  { icon: Search, label: "Recherche documentaire" },
];

const controleItems = [
  { icon: ShieldCheck, label: "Gestion rigoureuse des actes et registres" },
  { icon: Scale, label: "Encadrement des procédures documentaires" },
  { icon: Landmark, label: "Suivi des opérations réglementaires" },
  { icon: BadgeCheck, label: "Validation des documents et pièces associées" },
  { icon: FileSpreadsheet, label: "Production cohérente des documents officiels" },
  { icon: Archive, label: "Archivage logique des actes et documents numérisés" },
  { icon: Database, label: "Historique centralisé par dossier" },
  { icon: Workflow, label: "Chaîne complète de la saisie à la transmission" },
];

const fonctionnalites = [
  "Saisie des actes de naissance",
  "Gestion des mariages",
  "Gestion des registres annuels",
  "Pré-édition et édition définitive",
  "Historique des pièces jointes",
  "Intégration des actes numérisés",
  "Transfert INSEE",
  "Corrections documentaires",
  "Gestion des signataires",
  "Traitements réglementaires avancés",
];

const editionsItems = [
  { icon: FileText, label: "Éditions des actes officiels" },
  { icon: ClipboardList, label: "Pièces et documents associés" },
  { icon: BadgeCheck, label: "Préparation des notifications" },
  { icon: Archive, label: "Historique documentaire" },
  { icon: Send, label: "Transferts INSEE" },
  { icon: ScanLine, label: "Actes numérisés" },
  { icon: Database, label: "Suivi des dossiers" },
  { icon: FolderArchive, label: "Archivage documentaire" },
];

const EtatCivilDroitCommun = () => (
  <Layout>
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.28),transparent_58%)]" />
      <div className="absolute right-[-12rem] top-8 h-[38rem] w-[38rem] rounded-full border border-white/10" />
      <div className="absolute right-[-7rem] top-24 h-[28rem] w-[28rem] rounded-full border border-white/10" />
      <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_left,hsl(217_91%_60%/0.12),transparent_55%)]" />

      <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,720px)] lg:items-center xl:gap-14">
        <motion.div {...fadeUp} className="relative z-10 max-w-xl pt-2 xl:max-w-2xl lg:pr-6">
          <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Gestion des administrés
          </span>

          <h1 className="max-w-[12ch] text-4xl font-bold tracking-tight leading-[1.05] text-primary-foreground md:text-5xl lg:max-w-[11ch] lg:text-6xl xl:text-[4.25rem]">
            État civil <span className="text-accent">droit commun</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-[1.8] text-primary-foreground/80">
            Une solution complète pour gérer les actes, les registres, les éditions
            officielles, les pièces et les échanges réglementaires avec l’INSEE.
          </p>

          <p className="mt-3 max-w-lg text-base leading-[1.8] text-primary-foreground/60">
            Naissances, mariages, corrections, documents numérisés et procédures
            d’état civil dans un environnement métier conçu pour les collectivités.
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
                  alt="Logiciel État civil droit commun BFC"
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
          badge="Gestion intégrée"
          title="Un module complet pour les actes et registres"
          description="Le logiciel combine saisie, édition, historisation et dématérialisation pour sécuriser le traitement quotidien de l’état civil."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrationCards.map((c, i) => (
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
          title="Une solution pensée pour simplifier le quotidien"
          description="BFC État civil droit commun structure les traitements, sécurise les documents et fluidifie les échanges."
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
            description="Une vision claire des opérations du service, des registres, des documents et des principales procédures de gestion."
            center={false}
          />

          <div className="space-y-6">
            {etatCivilBlocks.map((block) => (
              <div key={block.title}>
                <h4 className="mb-2 flex items-center gap-2 font-bold text-foreground">
                  <BookOpen className="h-4 w-4 text-accent" />
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
              Cycle de traitement
            </p>

            <h3 className="mt-4 text-2xl font-bold text-foreground">
              Une chaîne complète de la saisie à la transmission
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
          badge="Interopérabilité"
          title="Éditions, pièces et dématérialisation"
          description="Le module prépare les documents officiels, organise les pièces et sécurise les échanges réglementaires avec l’INSEE."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dematItems.map((d, i) => (
            <motion.div
              key={d.label}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                <d.icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-foreground">
                {d.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Conformité"
          title="Contrôle & conformité"
          description="Des fonctions métier pour encadrer les traitements, fiabiliser les documents et structurer les opérations réglementaires."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {controleItems.map((c, i) => (
            <motion.div
              key={c.label}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                <c.icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-foreground">
                {c.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            badge="Fonctionnalités clés"
            title="Les essentiels de l’état civil"
            description="Les briques indispensables pour couvrir l’ensemble du cycle de gestion des actes, registres et documents."
            center={false}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {fonctionnalites.map((f, i) => (
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
            badge="Éditions"
            title="Éditions & archivage"
            description="Un moteur documentaire complet pour produire les actes, suivre les dossiers et structurer l’archivage."
            center={false}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {editionsItems.map((e, i) => (
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
            Découvrez comment la solution État civil droit commun BFC peut accompagner
            votre collectivité au quotidien.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Demander une démonstration <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/logiciels/administres"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Découvrir les administrés
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default EtatCivilDroitCommun;