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
    desc: "Une organisation structurée des actes, registres, pièces et échanges officiels.",
  },
  {
    icon: RefreshCw,
    title: "Chaîne documentaire fluide",
    desc: "De la saisie à l’édition, avec historisation et gestion des pièces associées.",
  },
  {
    icon: TimerReset,
    title: "Gain de temps",
    desc: "Préparation guidée des actes, éditions simplifiées et suivi centralisé.",
  },
  {
    icon: Building2,
    title: "Pensé pour les collectivités",
    desc: "Une solution adaptée aux usages quotidiens des services d’état civil.",
  },
];

const integrationCards = [
  {
    icon: FileText,
    title: "Saisie des actes",
    desc: "Naissances, mariages et autres actes sont saisis dans un environnement structuré avec contrôles, signataire, déclarant et informations complémentaires.",
  },
  {
    icon: BookOpen,
    title: "Gestion des registres",
    desc: "Création des années, ouverture, clôture et organisation des registres selon la structure retenue par la collectivité.",
  },
  {
    icon: ClipboardList,
    title: "Éditions & pièces",
    desc: "Constitution des pièces, pré-édition, impression et édition définitive des documents officiels destinés au registre ou aux administrés.",
  },
  {
    icon: FolderArchive,
    title: "Historique documentaire",
    desc: "Consultation centralisée des actes édités, documents numérisés et pièces jointes rattachées à chaque dossier.",
  },
];

const beneficesMetier = [
  {
    title: "Structurer",
    desc: "Cadrez la préparation des actes, la tenue des registres et les opérations documentaires dans un environnement cohérent.",
  },
  {
    title: "Sécuriser",
    desc: "Réduisez les risques d’erreur grâce aux contrôles, aux étapes de validation et à la gestion documentaire centralisée.",
  },
  {
    title: "Dématérialiser",
    desc: "Préparez et suivez les échanges réglementaires avec l’INSEE dans un flux lisible et sécurisé.",
  },
  {
    title: "Historiser",
    desc: "Conservez un suivi fiable des pièces, des actes édités et des documents numérisés rattachés aux dossiers.",
  },
];

const dematItems = [
  { icon: Send, label: "Paramétrage et génération des transferts INSEE" },
  { icon: FileSignature, label: "Préparation des documents et pièces officielles" },
  { icon: Printer, label: "Pré-édition et édition définitive des actes" },
  { icon: ScanLine, label: "Intégration des documents et actes numérisés" },
  { icon: Globe, label: "Suivi des échanges dématérialisés réglementaires" },
  { icon: Search, label: "Consultation rapide des pièces et de l’historique" },
];

const controleItems = [
  { icon: ShieldCheck, label: "Gestion rigoureuse des actes et registres" },
  { icon: Scale, label: "Encadrement des procédures documentaires" },
  { icon: Landmark, label: "Suivi structuré des opérations réglementaires" },
  { icon: BadgeCheck, label: "Validation des documents et des pièces associées" },
  { icon: FileSpreadsheet, label: "Production cohérente des documents officiels" },
  { icon: Archive, label: "Archivage logique des actes et documents numérisés" },
  { icon: Database, label: "Historique centralisé par dossier" },
  { icon: Workflow, label: "Chaîne complète de la saisie à la transmission" },
];

const pilotageBlocks = [
  {
    title: "Cycle complet de l’acte",
    items: [
      "Saisie des informations dans un environnement guidé",
      "Préparation des pièces et documents associés",
      "Édition officielle et impression registre",
      "Historique documentaire centralisé",
    ],
  },
  {
    title: "Organisation des registres",
    items: [
      "Création des années et registres",
      "Ouverture, gestion et clôture des registres",
      "Adaptation aux modes d’organisation de la collectivité",
      "Suivi documentaire structuré sur la durée",
    ],
  },
  {
    title: "Procédures avancées",
    items: [
      "Gestion des changements de prénom",
      "Corrections et ajustements documentaires",
      "Intégration d’actes numérisés",
      "Préparation et suivi des échanges INSEE",
    ],
  },
];

const usageItems = [
  { icon: FileText, label: "Saisie guidée des actes et informations associées" },
  { icon: BookOpen, label: "Gestion claire des années et registres" },
  { icon: Printer, label: "Pré-édition, édition et impression simplifiées" },
  { icon: ScanLine, label: "Consultation des actes et pièces numérisées" },
  { icon: Bell, label: "Repérage des traitements et étapes à finaliser" },
  { icon: CheckCircle2, label: "Parcours homogène pour les agents du service" },
];

const fonctionnalites = [
  "Saisie des actes de naissance",
  "Gestion des mariages",
  "Gestion des registres annuels",
  "Pré-édition et édition définitive",
  "Historique des pièces jointes",
  "Intégration des actes numérisés",
  "Transfert INSEE",
  "Corrections et ajustements documentaires",
  "Gestion des signataires et paramètres",
  "Traitements réglementaires avancés",
];

const editionsItems = [
  { icon: FileText, label: "Éditions des actes officiels" },
  { icon: ClipboardList, label: "Pièces et documents associés" },
  { icon: BadgeCheck, label: "Préparation des notifications" },
  { icon: Archive, label: "Historique documentaire centralisé" },
  { icon: Send, label: "Transferts réglementaires INSEE" },
  { icon: ScanLine, label: "Consultation des actes numérisés" },
  { icon: Database, label: "Suivi des dossiers et des pièces" },
  { icon: FolderArchive, label: "Archivage des documents et éditions" },
];

const EtatCivilDroitCommun = () => (
  <Layout>
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.15),transparent_60%)]" />
      <div className="container relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_820px] lg:items-start xl:gap-12">
        <motion.div {...fadeUp} className="relative z-10 max-w-xl pt-2 xl:max-w-2xl lg:pr-6">
          <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Gestion des administrés
          </span>

          <h1 className="max-w-[12ch] text-4xl font-bold tracking-tight leading-[1.05] text-primary-foreground md:text-5xl lg:max-w-[11ch] lg:text-6xl xl:text-[4.25rem]">
            État civil <span className="text-accent">droit commun</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-[1.8] text-primary-foreground/80">
            Une solution complète pour gérer la saisie des actes, la tenue des registres,
            l’édition des documents officiels, l’historique des pièces et la dématérialisation
            des échanges avec l’INSEE.
          </p>

          <p className="mt-3 max-w-lg text-base leading-[1.8] text-primary-foreground/60">
            Naissances, mariages, corrections, registres, documents numérisés et procédures
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
          className="relative flex items-start justify-center lg:justify-end lg:self-start lg:pt-8 xl:pt-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,hsl(217_91%_60%/0.22),transparent_70%)] blur-3xl" />

          <div className="relative z-10 overflow-visible w-full max-w-[520px] md:max-w-[700px] lg:max-w-[820px] xl:max-w-[980px]">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white/5 shadow-[0_30px_80px_rgba(4,17,44,0.45)] backdrop-blur-sm">
              <img
                src={heroImg}
                alt="Logiciel État civil droit commun BFC"
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
          title="Un module complet pour la gestion des actes et des registres"
          description="Le logiciel combine saisie, édition, historisation et dématérialisation pour sécuriser le traitement quotidien de l’état civil."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrationCards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <c.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
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
          description="Au-delà des fonctionnalités, BFC État civil droit commun structure les traitements, sécurise les documents et fluidifie les échanges."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {beneficesMetier.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <SectionHeading
            badge="Interopérabilité"
            title="Éditions, pièces et dématérialisation"
            description="Le module prépare les documents officiels, organise les pièces et sécurise les échanges réglementaires avec l’INSEE."
            center={false}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {dematItems.map((d, i) => (
              <motion.div
                key={d.label}
                {...fadeUp}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                  <d.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium leading-relaxed text-foreground">{d.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <img
              src={heroImg}
              alt="État civil droit commun et échanges INSEE"
              loading="lazy"
              width={800}
              height={512}
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
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
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                <c.icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-foreground">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="flex items-center justify-center">
          <img
            src={heroImg}
            alt="Pilotage et organisation de l'état civil droit commun"
            loading="lazy"
            width={800}
            height={512}
            className="w-full max-w-[700px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
          />
        </motion.div>

        <motion.div {...fadeUp}>
          <SectionHeading
            badge="Pilotage"
            title="Pilotage & organisation"
            description="Une vision claire des opérations du service, des registres et des principales procédures de gestion."
            center={false}
          />
          <div className="space-y-6">
            {pilotageBlocks.map((block) => (
              <div key={block.title}>
                <h4 className="mb-2 flex items-center gap-2 font-bold text-foreground">
                  <BookOpen className="h-4 w-4 text-accent" />
                  {block.title}
                </h4>
                <ul className="space-y-1.5 pl-6">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Ergonomie"
          title="Simplicité d’usage"
          description="Une interface conçue pour le quotidien des agents : repérage rapide, édition simple et traitements homogènes."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {usageItems.map((u, i) => (
            <motion.div
              key={u.label}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-light">
                <u.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-foreground">{u.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            badge="Fonctionnalités"
            title="Fonctionnalités clés"
            description="Les briques essentielles pour couvrir l’ensemble du cycle de gestion des actes, des registres et des documents."
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
            title="Éditions & ouverture"
            description="Un moteur documentaire complet pour produire les actes, suivre les dossiers et structurer l’archivage."
            center={false}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {editionsItems.map((e, i) => (
              <motion.div
                key={e.label}
                {...fadeUp}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                  <e.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium leading-relaxed text-foreground">{e.label}</span>
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
            Découvrez comment la solution État civil droit commun BFC peut accompagner votre collectivité au quotidien.
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