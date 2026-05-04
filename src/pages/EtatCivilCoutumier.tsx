import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ScrollText,
  Users,
  Printer,
  ShieldCheck,
  FolderArchive,
  Search,
  FileCheck,
  Scale,
  Landmark,
  Shield,
  RefreshCw,
  TimerReset,
  Building2,
  BookOpen,
  CheckCircle2,
  FileSignature,
  Send,
  Globe,
  Workflow,
  ClipboardList,
  Bell,
  Database,
  BadgeCheck,
  UserCheck,
  AlertTriangle,
  Stamp,
  HeartHandshake,
  Baby,
  Layers,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/etat-civil-coutumier-hero.png";


const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const preuves = [
  {
    icon: Shield,
    title: "Cadre réglementaire",
    desc: "Actes, registres et éditions coutumières structurés.",
  },
  {
    icon: RefreshCw,
    title: "Processus homogènes",
    desc: "Un parcours clair de la saisie à l’impression.",
  },
  {
    icon: TimerReset,
    title: "Gain de temps",
    desc: "Recherche des personnes et réutilisation des données.",
  },
  {
    icon: Building2,
    title: "Collectivités",
    desc: "Une solution adaptée à la Nouvelle-Calédonie.",
  },
];

const integrationCards = [
  {
    icon: Landmark,
    title: "Gestion de l’entité",
    desc: "Paramétrage de la commune, centres d’état civil et éléments de fonctionnement.",
  },
  {
    icon: FolderArchive,
    title: "Registres annuels",
    desc: "Création et suivi des registres originaux par type d’acte.",
  },
  {
    icon: Users,
    title: "Préposés & officiers",
    desc: "Gestion des préposés, prises de fonction et qualités.",
  },
  {
    icon: UserCheck,
    title: "Fichier personnes",
    desc: "Base centralisée pour éviter les ressaisies et fiabiliser les actes.",
  },
];

const beneficesMetier = [
  {
    title: "Fiabiliser",
    desc: "Réduisez les risques d’erreur avec saisie structurée et contrôles métier.",
  },
  {
    title: "Centraliser",
    desc: "Regroupez actes, registres, personnes, préposés et éditions.",
  },
  {
    title: "Fluidifier",
    desc: "Accélérez les traitements grâce aux informations déjà connues.",
  },
  {
    title: "Encadrer",
    desc: "Structurez les opérations sensibles de validation, impression et clôture.",
  },
];

const coutumierBlocks = [
  {
    title: "Gestion quotidienne",
    items: [
      "Création des registres par année et type d’acte",
      "Recherche des personnes pour éviter les ressaisies",
      "Gestion des préposés et qualités associées",
      "Suivi centralisé des actes et éditions",
    ],
  },
  {
    title: "Organisation du service",
    items: [
      "Parcours clair de création, validation et impression",
      "Production des avis, copies, extraits et bulletins",
      "Gestion des situations particulières et transcriptions",
      "Clôture annuelle des registres et rééditions",
    ],
  },
  {
    title: "Qualité des données",
    items: [
      "Réutilisation des informations déjà présentes",
      "Contrôles lors des opérations sensibles",
      "Outils de vérification et d’épuration",
      "Meilleure cohérence du fichier administratif",
    ],
  },
];

const processSteps = [
  {
    icon: Layers,
    label: "Créer les registres et préparer l’environnement",
  },
  {
    icon: UserCheck,
    label: "Rechercher ou créer la personne concernée",
  },
  {
    icon: ScrollText,
    label: "Saisir, valider et imprimer l’acte coutumier",
  },
  {
    icon: FolderArchive,
    label: "Éditer, archiver et suivre les documents associés",
  },
];

const dematItems = [
  { icon: Send, label: "Éditions PDF des avis, copies, extraits et bulletins" },
  { icon: FileSignature, label: "Validation des actes par impression de l’original" },
  { icon: Printer, label: "Impressions sur papier registre" },
  { icon: ScrollText, label: "Transcriptions d’actes et statut coutumier" },
  { icon: Globe, label: "Circuit documentaire lisible" },
  { icon: Search, label: "Recherche rapide des personnes et actes" },
];

const controleItems = [
  { icon: ShieldCheck, label: "Traçabilité des créations, validations et impressions" },
  { icon: Stamp, label: "Gestion encadrée des pièces justificatives" },
  { icon: Scale, label: "Respect des procédures de saisie et transcription" },
  { icon: AlertTriangle, label: "Réédition contrôlée des actes originaux" },
  { icon: BadgeCheck, label: "Suivi des actes en état de projet" },
  { icon: Database, label: "Cohérence du fichier personnes" },
  { icon: ClipboardList, label: "Éditions des tables, avis et documents de clôture" },
  { icon: Workflow, label: "Processus homogène de la saisie à l’archivage" },
];

const actCards = [
  {
    icon: Baby,
    title: "Naissance",
    desc: "Saisie guidée de l’enfant, du déclarant, des parents et impression de l’acte original.",
  },
  {
    icon: HeartHandshake,
    title: "Reconnaissance & adoption",
    desc: "Gestion des filiations, parents, témoins et références à l’acte coutumier.",
  },
  {
    icon: Users,
    title: "Mariage & dissolution",
    desc: "Traitement des unions, dissolutions, témoins et informations associées.",
  },
  {
    icon: FileCheck,
    title: "Décès & transcriptions",
    desc: "Saisie des décès, transcriptions d’actes et opérations particulières.",
  },
];

const usageItems = [
  { icon: RefreshCw, label: "Parcours de saisie simple et cohérent" },
  { icon: Search, label: "Recherche rapide sur les personnes et les actes" },
  { icon: Printer, label: "Impression directe avec aperçu PDF" },
  { icon: ClipboardList, label: "Éditions usuelles accessibles rapidement" },
  { icon: Bell, label: "Actes à valider ou rééditer clairement repérés" },
  { icon: CheckCircle2, label: "Fonctions métier adaptées aux usages du terrain" },
];

const fonctionnalites = [
  "Création des registres originaux",
  "Gestion des préposés et qualités",
  "Fichier personnes centralisé",
  "Actes de naissance",
  "Actes de reconnaissance",
  "Actes d’adoption",
  "Actes de mariage",
  "Actes de dissolution de mariage",
  "Actes de décès",
  "Transcriptions d’actes",
];

const editionsItems = [
  { icon: Printer, label: "Avis, copies, extraits et bulletins" },
  { icon: BookOpen, label: "Tables annuelles et décennales" },
  { icon: FolderArchive, label: "Pages de garde et de clôture" },
  { icon: ScrollText, label: "Actes en état de projet" },
  { icon: ShieldCheck, label: "Réédition encadrée des originaux" },
  { icon: Database, label: "Vérification et qualité des données" },
  { icon: BadgeCheck, label: "Historique structuré des opérations" },
  { icon: Search, label: "Accès rapide aux actes et aux personnes" },
];

const EtatCivilCoutumier = () => (
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
            État civil <span className="text-accent">coutumier</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-[1.8] text-primary-foreground/80">
            Une solution complète pour gérer les registres, les personnes, les actes
            coutumiers, les transcriptions et les éditions officielles.
          </p>

          <p className="mt-3 max-w-lg text-base leading-[1.8] text-primary-foreground/60">
            Registres annuels, recherche des personnes, éditions, transcriptions et
            contrôles métier dans un environnement structuré pour les collectivités.
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
                  alt="Illustration État civil coutumier"
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
          title="Une organisation complète de l’état civil coutumier"
          description="Les principales briques métier communiquent dans un même environnement pour faciliter la tenue du fichier et la gestion des actes."
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
          description="BFC État civil coutumier structure les traitements et améliore la fiabilité du service."
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
            description="Une vision claire des opérations du service, de l’organisation des registres et des procédures quotidiennes."
            center={false}
          />

          <div className="space-y-6">
            {coutumierBlocks.map((block) => (
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
              Une chaîne complète de la création à l’archivage
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
      badge="Éditions & traitements"
      title="Éditions, validation et gestion documentaire"
      description="Un circuit simple pour produire les actes, générer les éditions usuelles et sécuriser les validations métier."
    />

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {dematItems.map((d, i) => (
        <motion.div
          key={d.label}
          {...fadeUp}
          transition={{ duration: 0.35, delay: i * 0.06 }}
          className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-light">
            <d.icon className="h-5 w-5 text-accent" />
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
          description="Des fonctions métier pour encadrer les opérations sensibles, renforcer la cohérence des données et sécuriser les éditions."
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
      <div className="container">
        <SectionHeading
          badge="Actes traités"
          title="Les principales procédures couvertes"
          description="Le logiciel centralise les différentes procédures et harmonise les traitements pour fluidifier le travail du service."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {actCards.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <item.icon className="h-5 w-5 text-accent" />
              </div>

              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
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
              className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-light">
                <u.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-foreground">
                {u.label}
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
            title="Les essentiels de l’état civil coutumier"
            description="Les briques indispensables pour couvrir l’ensemble du cycle de gestion des actes et des registres."
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
            description="Un moteur d’éditions complet pour produire les documents usuels, suivre les actes et structurer l’archivage."
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
            Découvrez comment la solution État civil coutumier BFC peut accompagner
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
              to="/logiciels/etat-civil-droit-commun"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Voir aussi l’état civil
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default EtatCivilCoutumier;