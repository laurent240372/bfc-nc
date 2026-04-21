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
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/etat-civil-coutumier-hero.png";
import gestionDocEditionImg from "@/assets/GestionDocEdition.jpg";
import pilotageOrganisationImg from "@/assets/PilotageOrganisation.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const preuves = [
  {
    icon: Shield,
    title: "Cadre réglementaire maîtrisé",
    desc: "Une gestion structurée des actes, registres et éditions de l’état civil coutumier.",
  },
  {
    icon: RefreshCw,
    title: "Processus homogènes",
    desc: "De la saisie à l’impression, les traitements suivent un parcours métier clair.",
  },
  {
    icon: TimerReset,
    title: "Gain de temps",
    desc: "Recherche des personnes, réutilisation des données et éditions rapides.",
  },
  {
    icon: Building2,
    title: "Pensé pour les collectivités",
    desc: "Une solution adaptée aux réalités administratives de Nouvelle-Calédonie.",
  },
];

const integrationCards = [
  {
    icon: Landmark,
    title: "Gestion de l’entité",
    desc: "Paramétrage de la commune, des centres d’état civil et des éléments nécessaires au fonctionnement du service.",
  },
  {
    icon: FolderArchive,
    title: "Registres annuels",
    desc: "Création et suivi des registres originaux par type d’acte, avec gestion de la clôture annuelle.",
  },
  {
    icon: Users,
    title: "Préposés & officiers",
    desc: "Gestion des préposés, prises de fonction et qualités pour sécuriser la production des actes.",
  },
  {
    icon: UserCheck,
    title: "Fichier personnes",
    desc: "Base centralisée des personnes pour éviter les ressaisies et fiabiliser les créations d’actes.",
  },
];

const beneficesMetier = [
  {
    title: "Fiabiliser",
    desc: "Réduisez les risques d’erreur avec une saisie structurée, des recherches rapides et des contrôles métier.",
  },
  {
    title: "Centraliser",
    desc: "Regroupez actes, registres, personnes, préposés et éditions dans un seul environnement de travail.",
  },
  {
    title: "Fluidifier",
    desc: "Accélérez les traitements grâce à la reprise des informations déjà connues dans le fichier personnes.",
  },
  {
    title: "Encadrer",
    desc: "Structurez les opérations sensibles avec des étapes claires de validation, d’impression et de clôture.",
  },
];

const dematItems = [
  { icon: Send, label: "Éditions PDF des avis, copies, extraits et bulletins" },
  { icon: FileSignature, label: "Validation des actes par impression de l’original" },
  { icon: Printer, label: "Gestion des impressions sur papier registre" },
  { icon: ScrollText, label: "Transcriptions d’actes et accès au statut coutumier" },
  { icon: Globe, label: "Circuit documentaire lisible pour les agents" },
  { icon: Search, label: "Recherche rapide des personnes et des actes" },
];

const controleItems = [
  { icon: ShieldCheck, label: "Traçabilité des créations, validations et impressions" },
  { icon: Stamp, label: "Gestion encadrée des pièces justificatives" },
  { icon: Scale, label: "Respect des procédures de saisie et de transcription" },
  { icon: AlertTriangle, label: "Réédition contrôlée des actes originaux" },
  { icon: BadgeCheck, label: "Suivi des actes en état de projet" },
  { icon: Database, label: "Vérification de la cohérence du fichier personnes" },
  { icon: ClipboardList, label: "Éditions des tables, avis et documents de clôture" },
  { icon: Workflow, label: "Processus homogène de la saisie à l’archivage" },
];

const pilotageBlocks = [
  {
    title: "Gestion quotidienne",
    items: [
      "Création des registres par année et par type d’acte",
      "Recherche des personnes pour éviter les ressaisies",
      "Gestion des préposés et des qualités associées",
      "Suivi centralisé des actes et des éditions",
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

const usageItems = [
  { icon: RefreshCw, label: "Parcours de saisie simple et cohérent" },
  { icon: Search, label: "Recherche rapide sur les personnes et les actes" },
  { icon: Printer, label: "Impression directe avec aperçu PDF" },
  { icon: ClipboardList, label: "Éditions usuelles accessibles rapidement" },
  { icon: Bell, label: "Gestion claire des actes à valider ou rééditer" },
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

const actCards = [
  {
    icon: Baby,
    title: "Naissance",
    desc: "Saisie guidée des informations de l’enfant, du déclarant, des parents, des rattachements et impression de l’acte original.",
  },
  {
    icon: HeartHandshake,
    title: "Reconnaissance & adoption",
    desc: "Gestion des filiations, parents, témoins et références à l’acte coutumier avec assistance à la ressaisie minimale.",
  },
  {
    icon: Users,
    title: "Mariage & dissolution",
    desc: "Traitement des unions, dissolutions, témoins et informations associées dans un cadre structuré et homogène.",
  },
  {
    icon: FileCheck,
    title: "Décès & transcriptions",
    desc: "Saisie des décès, transcriptions d’actes et opérations particulières avec contrôle des pièces et du circuit documentaire.",
  },
];

const EtatCivilCoutumier = () => (
  <Layout>
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.15),transparent_60%)]" />
      <div className="container relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_820px] lg:items-start xl:gap-12">
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
            Registres annuels, saisie des actes, recherche des personnes, éditions,
            transcriptions et contrôles métier dans un environnement structuré pour les collectivités.
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
                alt="Illustration État civil coutumier"
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
          title="Une organisation complète de l’état civil coutumier"
          description="Les principales briques métier communiquent dans un même environnement pour faciliter la tenue du fichier et la gestion des actes."
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
          description="Au-delà des fonctionnalités, BFC État civil coutumier structure les traitements et améliore la fiabilité du service."
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
      <div className="container grid items-stretch gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div {...fadeUp} className="flex h-full flex-col">
          <SectionHeading
            badge="Éditions & traitements"
            title="Éditions, validation et gestion documentaire"
            description="Un circuit simple pour produire les actes, générer les éditions usuelles et sécuriser les validations métier."
            center={false}
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {dematItems.map((d, i) => (
              <motion.div
                key={d.label}
                {...fadeUp}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-light">
                  <d.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium leading-6 text-foreground">
                  {d.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="flex h-full"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.10)] h-full w-full min-h-[100%]">
            <img
              src={gestionDocEditionImg}
              alt="Éditions et gestion de l'état civil coutumier"
              loading="lazy"
              width={900}
              height={900}
              className="block h-full w-full object-cover"
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
          description="Des fonctions métier pour encadrer les opérations sensibles, renforcer la cohérence des données et sécuriser les éditions."
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
      <div className="container">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <SectionHeading
            badge="Pilotage"
            title="Pilotage & organisation"
            description="Une vision claire des opérations du service, de l’organisation des registres et des principales procédures de gestion au quotidien."
          />
        </motion.div>

        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="flex h-full"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.10)] h-full w-full min-h-[100%]">
              <img
                src={pilotageOrganisationImg}
                alt="Pilotage et organisation de l'état civil coutumier"
                loading="lazy"
                width={1000}
                height={900}
                className="block h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="flex h-full flex-col justify-between">
            <div className="space-y-5 h-full">
              {pilotageBlocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h4 className="mb-3 flex items-center gap-2 text-[1.02rem] font-bold text-foreground">
                    <BookOpen className="h-4 w-4 text-accent" />
                    {block.title}
                  </h4>

                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[0.95rem] leading-7 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Actes traités"
          title="Les principales procédures couvertes par le logiciel"
          description="Le logiciel centralise les différentes procédures et harmonise les traitements pour fluidifier le travail du service."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {actCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-white">
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
            description="Les briques essentielles pour couvrir l’ensemble du cycle de gestion des actes et des registres."
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
            Découvrez comment la solution État civil coutumier BFC peut accompagner votre collectivité au quotidien.
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