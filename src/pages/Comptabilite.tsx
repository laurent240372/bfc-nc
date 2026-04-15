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
  History,
  Users,
  ClipboardList,
  Workflow,
  CheckCircle2,
  PackageSearch,
  TrendingUp,
  Zap,
  MousePointerClick,
  CalendarClock,
  Keyboard,
  StickyNote,
  Bell,
  Eye,
  Layers,
  Table2,
  DollarSign,
  Printer,
  LayoutGrid,
  Mail,
  Download,
  Database,
  Share2,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/compta-hero.jpg";
import dematImg from "@/assets/compta-demat.jpg";
import pilotageImg from "@/assets/compta-pilotage.jpg";

/* ─── animation helper ─── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/* ─── data ─── */
const integrationCards = [
  {
    icon: Layers,
    title: "Intégration complète",
    desc: "Paie, emprunts, amortissements, facturation et gestion des biens interfacés nativement.",
  },
  {
    icon: LayoutGrid,
    title: "Ergonomie unifiée",
    desc: "Interface commune à tous les modules pour une prise en main immédiate.",
  },
  {
    icon: RefreshCw,
    title: "Traitements partagés",
    desc: "Mandatement automatique, écritures croisées et consolidation en temps réel.",
  },
  {
    icon: TrendingUp,
    title: "Efficacité globale",
    desc: "Gain de temps sur l'ensemble de la chaîne financière grâce à l'automatisation.",
  },
];

const dematItems = [
  { icon: Send, label: "Protocole d'Échange Standard (PES v2)" },
  { icon: FileSignature, label: "Signature électronique" },
  { icon: Stamp, label: "Parapheur électronique" },
  { icon: FileText, label: "Pièces jointes numérisées" },
  { icon: Link2, label: "Télétransmission sécurisée" },
  { icon: Globe, label: "Web-services documentés" },
];

const controleItems = [
  { icon: ShieldCheck, label: "Centre de contrôle intégré" },
  { icon: Scale, label: "Contrôle des seuils de marchés" },
  { icon: Landmark, label: "Gestion des dépôts de garantie" },
  { icon: DollarSign, label: "Suivi des disponibilités" },
  { icon: Clock, label: "Délais de paiement réglementaires" },
  { icon: RefreshCw, label: "Mises à jour réglementaires automatiques" },
  { icon: AlertTriangle, label: "Calcul des intérêts moratoires" },
  { icon: BookOpen, label: "Plan de compte à jour" },
  { icon: FileBarChart, label: "Maquettes budgétaires officielles" },
  { icon: Award, label: "Éditions FCTVA conformes" },
];

const pilotageBlocks = [
  {
    title: "Vision financière",
    items: [
      "Situation financière globale en temps réel",
      "Compte de résultat & états budgétaires personnalisés",
      "Historiques pluriannuels complets",
    ],
  },
  {
    title: "Organisation & workflow",
    items: [
      "Profils utilisateurs et droits d'accès",
      "Workflow de validation multi-niveaux",
      "Circuits de certification paramétrables",
    ],
  },
  {
    title: "Suivi opérationnel",
    items: [
      "Préparation budgétaire collaborative",
      "Suivi par gestionnaire ou service",
      "Gestion des commandes et fournisseurs",
      "Traçabilité complète des opérations",
    ],
  },
];

const usageItems = [
  { icon: Zap, label: "Prise en main rapide" },
  { icon: MousePointerClick, label: "Assistants et cycles de gestion guidés" },
  { icon: CalendarClock, label: "Procédures de fin d'année automatisées" },
  { icon: Keyboard, label: "Saisie au kilomètre & raccourcis clavier" },
  { icon: ClipboardList, label: "Modèles d'engagements et de mandats" },
  { icon: StickyNote, label: "Mémos, alertes et planification" },
  { icon: Bell, label: "Notifications et rappels automatiques" },
  { icon: Eye, label: "Consultation immédiate des restes à réaliser" },
];

const fonctionnalites = [
  "Gestion analytique multi-niveaux",
  "Historiques synthétiques",
  "Visualisation des montants en temps réel",
  "Interfaçage bureautique (Word, Excel)",
  "Gestion des engagements",
  "Gestion des tiers pluri-budgétaire",
  "Multi-imputation",
  "Pré-mandatement automatique",
  "Moteur de graphiques intégré",
  "Éditions PDF / Mail / HTML",
];

const editionsItems = [
  { icon: Award, label: "Éditions FCTVA" },
  { icon: Printer, label: "Bons de commande" },
  { icon: LayoutGrid, label: "Moteur d'éditions personnalisables" },
  { icon: BarChart3, label: "Balances graphiques" },
  { icon: FileBarChart, label: "Maquettes budgétaires officielles" },
  { icon: PieChart, label: "Répartition analytique" },
  { icon: Mail, label: "Export PDF / HTML / Mail" },
  { icon: Download, label: "Mise à jour par internet" },
  { icon: Database, label: "Plan comptable actualisé automatiquement" },
  { icon: Share2, label: "Tableaux de bord & partage des états" },
];

/* ─── component ─── */
const Comptabilite = () => (
  <Layout>
    {/* ───── 1. HERO ───── */}
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.15),transparent_60%)]" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-6">
            Module Finance
          </span>
          <h1 className="text-4xl font-bold leading-[1.15] text-primary-foreground md:text-5xl lg:text-6xl">
            Comptabilité &amp; <span className="text-accent">Finance</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-primary-foreground/80 leading-[1.8]">
            Une solution complète pour piloter les finances des collectivités locales, conforme à la réglementation en vigueur.
          </p>
          <p className="mt-3 max-w-lg text-base text-primary-foreground/60 leading-[1.8]">
            Gestion en temps réel des dépenses et recettes, conformité réglementaire et intégration native avec les modules Paie, Emprunts, Amortissements et Gestion des biens.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
            >
              Demander une démo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/logiciels"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Tous les modules
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl">
            <img src={heroImg} alt="Dashboard Comptabilité BFC" width={1280} height={720} className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* ───── 2. GESTION FINANCIÈRE INTÉGRÉE ───── */}
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
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <c.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 3. DÉMATÉRIALISATION ───── */}
    <section className="bg-muted py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
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
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                  <d.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground leading-relaxed">{d.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <img src={dematImg} alt="Dématérialisation et PES v2" loading="lazy" width={800} height={512} className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* ───── 4. CONTRÔLE ET CONFORMITÉ ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Conformité"
          title="Contrôle & conformité"
          description="Un centre de contrôle intégré pour garantir la conformité réglementaire et la fiabilité de chaque opération financière."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {controleItems.map((c, i) => (
            <motion.div
              key={c.label}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                <c.icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground leading-relaxed">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 5. PILOTAGE ET ORGANISATION ───── */}
    <section className="bg-muted py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <img src={pilotageImg} alt="Tableaux de bord financiers" loading="lazy" width={800} height={512} className="w-full" />
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
                <h4 className="mb-2 font-bold text-foreground flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-accent" />
                  {block.title}
                </h4>
                <ul className="space-y-1.5 pl-6">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
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

    {/* ───── 6. SIMPLICITÉ D'USAGE ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Ergonomie"
          title="Simplicité d'usage"
          description="Une interface pensée pour le quotidien des agents : assistants, raccourcis, modèles et alertes pour gagner en efficacité."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {usageItems.map((u, i) => (
            <motion.div
              key={u.label}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 card-hover"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-light">
                <u.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground leading-relaxed">{u.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 7. FONCTIONNALITÉS CLÉS ───── */}
    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Fonctionnalités"
          title="Fonctionnalités clés"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {fonctionnalites.map((f, i) => (
            <motion.div
              key={f}
              {...fadeUp}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium text-foreground">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 8. ÉDITIONS ET OUVERTURE ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Éditions"
          title="Éditions & ouverture"
          description="Un moteur d'éditions complet et personnalisable, avec des exports multiples et une mise à jour automatique des référentiels."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {editionsItems.map((e, i) => (
            <motion.div
              key={e.label}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                <e.icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground leading-relaxed">{e.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 9. CTA ───── */}
    <section className="bg-navy-gradient py-20">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Demander une démonstration
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-primary-foreground/70 leading-relaxed">
            Découvrez comment la solution Comptabilité BFC peut accompagner votre collectivité au quotidien.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-all"
            >
              Demander une démonstration <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all"
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
