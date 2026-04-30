import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Link2,
  FileSignature,
  Send,
  FileText,
  Stamp,
  Globe,
  ShieldCheck,
  Scale,
  Landmark,
  Clock,
  RefreshCw,
  AlertTriangle,
  BookOpen,
  FileBarChart,
  Award,
  BarChart3,
  PieChart,
  ClipboardList,
  Workflow,
  CheckCircle2,
  TrendingUp,
  Zap,
  MousePointerClick,
  CalendarClock,
  Keyboard,
  StickyNote,
  Bell,
  Eye,
  Layers,
  LayoutGrid,
  Mail,
  Download,
  Database,
  Share2,
  BadgeCheck,
  Shield,
  TimerReset,
  Building2,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/compta-hero-clean.png";
import dematImg from "@/assets/compta-demat.jpg";
import pilotageImg from "@/assets/compta-pilotage.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const screenshotCard =
  "relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/80 p-3 shadow-[0_30px_90px_rgba(15,60,130,0.24)] backdrop-blur-xl";

const screenshotImg =
  "w-full rounded-[1.05rem] border border-slate-200/80 object-contain shadow-[0_10px_30px_rgba(15,23,42,0.08)]";

const preuves = [
  {
    icon: Shield,
    title: "Conformité réglementaire",
    desc: "Nomenclatures, maquettes officielles et contrôles intégrés.",
  },
  {
    icon: RefreshCw,
    title: "Chaîne financière unifiée",
    desc: "De l'engagement au mandatement, avec traçabilité complète.",
  },
  {
    icon: TimerReset,
    title: "Gain de temps",
    desc: "Automatisation des traitements récurrents et des contrôles.",
  },
  {
    icon: Building2,
    title: "Pensé pour les collectivités",
    desc: "Une solution adaptée aux réalités de la gestion publique locale.",
  },
];

const integrationCards = [
  {
    icon: Layers,
    title: "Intégration complète",
    desc: "Paie, emprunts, amortissements, facturation et gestion des biens interfacés nativement.",
  },
  {
    icon: LayoutGrid,
    title: "Multi-nomenclatures",
    desc: "Compatible M14, M22, M41 à M49 et M52.",
  },
  {
    icon: RefreshCw,
    title: "Pluriannualité AP/CP & AE/CP",
    desc: "Gestion des projections et crédits multi-exercices.",
  },
  {
    icon: TrendingUp,
    title: "Chaîne automatisée",
    desc: "Engagement, liquidation, mandatement et titres de recettes tracés.",
  },
];

const dematItems = [
  { icon: Send, label: "Protocole d'Échange Standard (PES v2)" },
  { icon: FileSignature, label: "Signature & certification électronique" },
  { icon: Stamp, label: "Parapheur électronique intégré" },
  { icon: FileText, label: "Pièces justificatives numérisées" },
  { icon: Link2, label: "Télétransmission sécurisée vers la Trésorerie" },
  { icon: Globe, label: "Web-services & API documentés" },
];

const controleItems = [
  { icon: ShieldCheck, label: "Centre de contrôle intégré avant mandatement" },
  { icon: Scale, label: "Contrôle automatique des seuils de marchés publics" },
  { icon: Landmark, label: "Gestion des dépôts de garantie et retenues" },
  { icon: Clock, label: "Délais de paiement réglementaires suivis automatiquement" },
  { icon: AlertTriangle, label: "Calcul automatique des intérêts moratoires" },
  { icon: BookOpen, label: "Plan de comptes officiel mis à jour automatiquement" },
  { icon: FileBarChart, label: "Maquettes budgétaires officielles (BP, BS, CA, DM)" },
  { icon: Award, label: "Éditions FCTVA conformes et déclarations automatisées" },
];

const beneficesMetier = [
  {
    title: "Sécuriser",
    desc: "Réduisez les risques d'erreur grâce aux contrôles intégrés et à la conformité automatique.",
  },
  {
    title: "Automatiser",
    desc: "Fluidifiez les tâches répétitives et la chaîne financière pour gagner du temps.",
  },
  {
    title: "Piloter",
    desc: "Disposez d'une vision claire des dépenses, recettes, restes à réaliser et projections.",
  },
  {
    title: "Collaborer",
    desc: "Structurez les validations, les visas et les droits d'accès par service.",
  },
];

const pilotageBlocks = [
  {
    title: "Vision financière",
    items: [
      "Situation financière globale en temps réel",
      "Compte administratif et états budgétaires personnalisés",
      "Projections pluriannuelles AP/CP et AE/CP",
      "Historiques et ratios financiers",
    ],
  },
  {
    title: "Workflows & validation",
    items: [
      "Workflow de validation des achats et engagements",
      "Circuits de certification des factures paramétrables",
      "Profils utilisateurs et droits d'accès par service",
      "Visa électronique multi-niveaux",
    ],
  },
  {
    title: "Suivi opérationnel",
    items: [
      "Préparation budgétaire collaborative",
      "Suivi par gestionnaire, service ou programme",
      "Gestion analytique multi-niveaux",
      "Traçabilité complète de chaque opération",
    ],
  },
];

const usageItems = [
  { icon: Zap, label: "Prise en main rapide et interface intuitive" },
  { icon: MousePointerClick, label: "Assistants et cycles de gestion guidés" },
  { icon: CalendarClock, label: "Fin d'année et rattachements automatisés" },
  { icon: Keyboard, label: "Saisie rapide et raccourcis clavier" },
  { icon: ClipboardList, label: "Modèles d'engagements, mandats et titres" },
  { icon: Bell, label: "Rappels automatiques sur délais et échéances" },
];

const fonctionnalites = [
  "Gestion analytique multi-niveaux",
  "Multi-imputation fonctionnelle et analytique",
  "Gestion des tiers pluri-budgétaire",
  "Pluriannualité AP/CP & AE/CP",
  "Pré-mandatement automatique",
  "Nomenclatures M14, M22, M41-M49, M52",
  "Historiques synthétiques et pluriannuels",
  "Interfaçage bureautique",
  "Graphiques et ratios intégrés",
  "Éditions PDF / Mail / HTML",
];

const editionsItems = [
  { icon: Award, label: "Éditions FCTVA automatisées" },
  { icon: FileBarChart, label: "Maquettes officielles BP, BS, CA, DM" },
  { icon: BarChart3, label: "Balances graphiques et comparatives" },
  { icon: PieChart, label: "Répartition analytique multi-niveaux" },
  { icon: Mail, label: "Exports PDF, HTML et Mail" },
  { icon: Download, label: "Mises à jour réglementaires par internet" },
  { icon: Database, label: "Plan comptable et banques actualisés" },
  { icon: Share2, label: "Tableaux de bord préconfigurés" },
];

const Comptabilite = () => (
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
            Comptabilité &amp; <span className="text-accent">Finance</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-[1.8] text-primary-foreground/80">
            Une solution complète pour piloter les finances des collectivités locales,
            conforme aux nomenclatures M14, M22, M41 à M49 et M52.
          </p>

          <p className="mt-3 max-w-lg text-base leading-[1.8] text-primary-foreground/60">
            Gestion en temps réel des dépenses et recettes, pluriannualité AP/CP et AE/CP,
            conformité réglementaire automatique et intégration native avec les autres modules métiers.
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
                  alt="Dashboard Comptabilité BFC"
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
          title="Une gestion financière intégrée"
          description="Tous les modules financiers communiquent nativement pour une efficacité maximale sur l'ensemble de la chaîne comptable."
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
          description="Au-delà des fonctionnalités, BFC Comptabilité structure la gestion financière et fluidifie les échanges entre services."
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
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/70 py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 bg-[radial-gradient(circle,hsl(217_91%_60%/0.16),transparent_65%)]" />
      <div className="pointer-events-none absolute right-0 top-20 h-[18rem] w-[18rem] bg-[radial-gradient(circle,hsl(217_91%_60%/0.18)_1px,transparent_1px)] [background-size:18px_18px] opacity-40" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeUp}>
          <SectionHeading
            badge="Interopérabilité"
            title="Dématérialisation & interopérabilité"
            description="Un système ouvert, conforme au Protocole d'Échange Standard, pour une transmission fluide et sécurisée avec la Trésorerie."
            center={false}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {dematItems.map((d, i) => (
              <motion.div
                key={d.label}
                {...fadeUp}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-xl border border-border/80 bg-white/85 p-4 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                  <d.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium leading-relaxed text-foreground">{d.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-blue-200/50 blur-2xl" />
          <div className={screenshotCard}>
            <img
              src={dematImg}
              alt="Dématérialisation et PES v2"
              loading="lazy"
              width={800}
              height={512}
              className={screenshotImg}
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
          description="Un centre de contrôle intégré pour garantir la conformité réglementaire et la fiabilité de chaque opération."
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
              <span className="text-sm font-medium leading-relaxed text-foreground">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-slate-50 to-white py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />
      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="relative flex items-center justify-center">
          <div className="pointer-events-none absolute -left-16 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-200/70 to-transparent" />
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
          <div className={screenshotCard + " max-w-[680px]"}>
            <img
              src={pilotageImg}
              alt="Pilotage financier et tableaux de bord"
              loading="lazy"
              width={800}
              height={512}
              className={screenshotImg}
            />
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <SectionHeading
            badge="Pilotage"
            title="Pilotage & organisation"
            description="Visibilité globale sur la situation financière, workflow de validation et suivi opérationnel par service."
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
          title="Simplicité d'usage"
          description="Une interface pensée pour le quotidien des agents : assistants, raccourcis, modèles et alertes."
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
            description="Les briques essentielles pour couvrir l'ensemble du cycle comptable et budgétaire."
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
            description="Un moteur d'éditions complet et personnalisable, avec des exports multiples et des référentiels actualisés."
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
            Découvrez comment la solution Comptabilité BFC peut accompagner votre collectivité au quotidien.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Demander une démonstration <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Comptabilite;