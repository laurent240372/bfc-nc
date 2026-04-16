import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Link2,
  Calculator,
  TrendingDown,
  BarChart3,
  RefreshCw,
  FileText,
  Calendar,
  ClipboardList,
  Landmark,
  Download,
  Mail,
  Table2,
  Globe,
  Zap,
  Bell,
  Coins,
  Search,
  LineChart,
  Scale,
  BadgeDollarSign,
  ArrowDownUp,
  Banknote,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/emprunts-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/* ─── data ─── */
const integrationCards = [
  {
    icon: Calculator,
    title: "Simulation budgétaire",
    desc: "L'état préparatoire budgétaire offre un lien direct entre la gestion des remboursements et le moteur de simulation budgétaire.",
  },
  {
    icon: FileText,
    title: "Annexes budgétaires",
    desc: "Alimentation automatique des annexes budgétaires et génération directe de la préparation des mandats.",
  },
  {
    icon: RefreshCw,
    title: "Refinancement automatique",
    desc: "Le refinancement ou la renégociation d'un emprunt se fait automatiquement sans recréation manuelle.",
  },
  {
    icon: Link2,
    title: "Chaîne financière",
    desc: "Intégration complète dans la chaîne financière : mandatement, écritures et suivi comptable.",
  },
];

const simulationItems = [
  {
    icon: LineChart,
    title: "Simulations multiples",
    desc: "Effectuez plusieurs simulations pour un même emprunt et comparez les scénarios.",
  },
  {
    icon: Scale,
    title: "Comparatif bancaire",
    desc: "Générez un comparatif point à point des offres des organismes prêteurs.",
  },
  {
    icon: Zap,
    title: "Meilleures conditions",
    desc: "Identifiez rapidement les meilleures propositions bancaires.",
  },
  {
    icon: RefreshCw,
    title: "Renégociation automatique",
    desc: "Refinancement et renégociation automatiques sans modification manuelle des emprunts existants.",
  },
];

const suiviItems = [
  { icon: BarChart3, label: "Suivi global et détaillé de la dette" },
  { icon: Landmark, label: "Vision multi-budgétaire de l'endettement" },
  { icon: TrendingDown, label: "Analyse de l'évolution de la dette par budget et par organisme" },
  { icon: LineChart, label: "Tableaux de synthèse avec graphiques" },
  { icon: Search, label: "Granularité du détail d'un emprunt à la situation globale" },
];

const fonctionnalites = [
  "Tous types d'emprunts : garanties, fictifs, refinancés, renégociés, traditionnels",
  "Gestion de toutes les natures : constant, différé, taux variable, Euribor, capital constant…",
  "Calcul automatique des tableaux d'amortissement",
  "Historisation des changements de taux",
  "Gestion des ICNE avec mandatement automatique",
  "Recherches multiples : par emprunt, organisme prêteur, imputation…",
  "Gestion multi-normes : M14, M21, M4x, M1/5/7…",
  "Amortissement capital et intérêts différenciés",
];

const editionsItems = [
  { icon: FileText, label: "Tableaux d'amortissement" },
  { icon: Calendar, label: "Échéanciers des remboursements" },
  { icon: TrendingDown, label: "Extinction de la dette" },
  { icon: ClipboardList, label: "États préparatoires budgétaires" },
  { icon: BarChart3, label: "États de synthèse avec graphiques" },
];

const plusItems = [
  { icon: Globe, title: "Index & taux Internet", desc: "Mise à jour par Internet des natures d'index et des types de taux." },
  { icon: Link2, title: "Suite On-Line", desc: "Interfaçage avec l'ensemble des outils de la suite On-Line." },
  { icon: Table2, title: "Export Excel", desc: "Export de chaque tableau dans Excel. Exports et ré-imports via Excel 2007." },
  { icon: Bell, title: "Alertes échéances", desc: "Alertes et mémos sur les dates d'échéance pour ne rien oublier." },
  { icon: Coins, title: "Multi-devises", desc: "Gestion multi-devises pour les emprunts en devises étrangères." },
  { icon: BadgeDollarSign, title: "Frais bancaires", desc: "Gestion complète des frais bancaires associés aux emprunts." },
  { icon: ArrowDownUp, title: "Emprunts inversés", desc: "Gestion des prêts : emprunts à l'envers." },
  { icon: Mail, title: "Exports multi-formats", desc: "Toutes les éditions exportables au format e-mail, HTML, XML et PDF." },
];

const Emprunts = () => (
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
            Emprunts & <span className="text-accent">dette</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-primary-foreground/80 leading-[1.8]">
            Gestion et simulation des divers types d'emprunts contractés dans le cadre des comptabilités M1/5/7, M14, M21, M4x. Situation et évolution de l'endettement.
          </p>
          <p className="mt-3 max-w-lg text-base text-primary-foreground/60 leading-[1.8]">
            Un système de gestion financière totalement intégré à la comptabilité, à la simulation budgétaire et au mandatement automatique.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
            >
              Demander une démo <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Voir les fonctionnalités
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl">
            <img src={heroImg} alt="Interface Gestion des Emprunts BFC" width={1280} height={720} className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* ───── 2. GESTION FINANCIÈRE INTÉGRÉE ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Gestion intégrée"
          title="Un système de gestion financière totalement intégré"
          description="Lien direct entre remboursements, simulation budgétaire, annexes et mandatement pour une chaîne financière sans rupture."
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

    {/* ───── 3. SIMULATION & OPTIMISATION ───── */}
    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Simulation"
          title="Simulation & optimisation des emprunts"
          description="Identifiez rapidement les meilleures propositions bancaires grâce aux simulations et comparatifs intégrés."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {simulationItems.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <s.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 4. SUIVI DE L'ENDETTEMENT ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Endettement"
          title="Suivi de l'endettement"
          description="La gestion multi-budgétaire permet de définir finement la granularité de vos états de situation."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {suiviItems.map((r, i) => (
            <motion.div
              key={r.label}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                <r.icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground leading-relaxed">{r.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 5. FONCTIONNALITÉS CLÉS ───── */}
    <section id="fonctionnalites" className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Fonctionnalités"
          title="Les fonctions de base"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

    {/* ───── 6. ÉDITIONS & ANALYSES ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Éditions"
          title="Éditions & analyses"
          description="Des éditions complètes et des états de synthèse avec graphiques pour piloter votre endettement."
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

    {/* ───── 7. LES + ───── */}
    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Les +"
          title="Les plus du module"
          description="Des fonctionnalités différenciantes pour une gestion avancée de la dette."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plusItems.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 8. CTA ───── */}
    <section className="bg-navy-gradient py-20">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Maîtrisez votre endettement
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-primary-foreground/70 leading-relaxed">
            Simulez, comparez et pilotez vos emprunts avec précision grâce à une solution complète et intégrée.
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

export default Emprunts;
