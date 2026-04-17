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
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/emprunts-hero.png";

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
    desc: "Lien direct entre la gestion des remboursements et le moteur de simulation budgétaire pour mesurer immédiatement l’impact des emprunts.",
  },
  {
    icon: FileText,
    title: "Annexes budgétaires",
    desc: "Alimentation automatique des annexes budgétaires et génération directe des états préparatoires et des mandats.",
  },
  {
    icon: RefreshCw,
    title: "Refinancement automatique",
    desc: "Le refinancement ou la renégociation d’un emprunt s’intègre automatiquement sans ressaisie complète des données.",
  },
  {
    icon: Link2,
    title: "Chaîne financière intégrée",
    desc: "Connexion native avec la comptabilité, les écritures, le mandatement et le suivi comptable global.",
  },
];

const simulationItems = [
  {
    icon: LineChart,
    title: "Simulations multiples",
    desc: "Testez plusieurs scénarios pour un même emprunt et comparez instantanément les effets sur le budget.",
  },
  {
    icon: Scale,
    title: "Comparatif bancaire",
    desc: "Analysez point par point les offres des organismes prêteurs pour choisir la solution la plus adaptée.",
  },
  {
    icon: Zap,
    title: "Optimisation rapide",
    desc: "Identifiez rapidement les meilleures conditions de financement et les gains potentiels.",
  },
  {
    icon: RefreshCw,
    title: "Renégociation simplifiée",
    desc: "Renégociez et refinancez sans rupture dans le suivi historique de la dette.",
  },
];

const suiviItems = [
  { icon: BarChart3, label: "Suivi global et détaillé de la dette" },
  { icon: Landmark, label: "Vision multi-budgétaire de l’endettement" },
  { icon: TrendingDown, label: "Analyse de l’évolution par budget et par organisme" },
  { icon: LineChart, label: "Tableaux de synthèse avec graphiques" },
  { icon: Search, label: "Du détail d’un emprunt à la situation globale" },
];

const fonctionnalites = [
  "Tous types d’emprunts : garanties, fictifs, refinancés, renégociés, traditionnels",
  "Gestion de toutes les natures : constant, différé, taux variable, Euribor, capital constant…",
  "Calcul automatique des tableaux d’amortissement",
  "Historisation des changements de taux",
  "Gestion des ICNE avec mandatement automatique",
  "Recherches multiples : par emprunt, organisme prêteur, imputation…",
  "Gestion multi-normes : M14, M21, M4x, M1/5/7…",
  "Amortissement capital et intérêts différenciés",
];

const editionsItems = [
  { icon: FileText, label: "Tableaux d’amortissement" },
  { icon: Calendar, label: "Échéanciers des remboursements" },
  { icon: TrendingDown, label: "Extinction de la dette" },
  { icon: ClipboardList, label: "États préparatoires budgétaires" },
  { icon: BarChart3, label: "États de synthèse avec graphiques" },
];

const plusItems = [
  { icon: Globe, title: "Index & taux Internet", desc: "Mise à jour en ligne des natures d’index et des types de taux." },
  { icon: Link2, title: "Suite On-Line", desc: "Interfaçage avec l’ensemble des outils de la suite On-Line." },
  { icon: Table2, title: "Export Excel", desc: "Export de chaque tableau dans Excel avec possibilités de ré-import." },
  { icon: Bell, title: "Alertes échéances", desc: "Mémos et alertes sur les dates importantes pour ne rien oublier." },
  { icon: Coins, title: "Multi-devises", desc: "Gestion des emprunts en devises étrangères avec suivi adapté." },
  { icon: BadgeDollarSign, title: "Frais bancaires", desc: "Gestion complète des frais bancaires associés aux emprunts." },
  { icon: ArrowDownUp, title: "Emprunts inversés", desc: "Prise en charge des cas spécifiques et configurations particulières." },
  { icon: Mail, title: "Exports multi-formats", desc: "Éditions exportables par e-mail, HTML, XML et PDF." },
];

const beneficesItems = [
  "Réduction du temps de préparation budgétaire",
  "Vision immédiate de l’encours et des échéances",
  "Comparaison facilitée des offres bancaires",
  "Sécurisation du mandatement et du suivi comptable",
];

const cardClass =
  "rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

const iconBoxClass =
  "mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light shadow-sm";

/* ─── component ─── */
const Emprunts = () => (
  <Layout>
    {/* ───── 1. HERO ───── */}
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.18),transparent_60%)]" />
      <div className="absolute right-[-120px] top-[-80px] hidden h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl lg:block" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,640px)]">
        <motion.div {...fadeUp} className="relative z-10 max-w-2xl">
          <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Module Finance
          </span>

          <h1 className="max-w-[11ch] text-4xl font-bold leading-[1.05] tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Emprunts & <span className="text-accent">dette</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-[1.8] text-primary-foreground/80">
            Pilotez vos emprunts, sécurisez vos échéances et visualisez l’évolution de votre endettement dans une solution totalement intégrée à votre comptabilité.
          </p>

          <p className="mt-3 max-w-xl text-base leading-[1.8] text-primary-foreground/60">
            Simulations, comparatifs bancaires, refinancement, mandatement automatique et suivi multi-budgétaire dans les cadres M1/5/7, M14, M21 et M4x.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
            >
              Demander une démo <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Voir les fonctionnalités
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-lg border border-primary-foreground/10 bg-white/5 px-4 py-2 text-sm text-primary-foreground/80 backdrop-blur">
              Refinancement automatique
            </div>
            <div className="rounded-lg border border-primary-foreground/10 bg-white/5 px-4 py-2 text-sm text-primary-foreground/80 backdrop-blur">
              Suivi multi-budgétaire
            </div>
            <div className="rounded-lg border border-primary-foreground/10 bg-white/5 px-4 py-2 text-sm text-primary-foreground/80 backdrop-blur">
              Simulation comparative
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,hsl(217_91%_60%/0.22),transparent_70%)] blur-3xl" />

          <div className="relative overflow-visible">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white/5 shadow-[0_30px_80px_rgba(4,17,44,0.45)] backdrop-blur-sm">
              <img
                src={heroImg}
                alt="Interface Gestion des Emprunts BFC"
                width={1280}
                height={720}
                className="w-full"
              />
            </div>

            <div className="absolute -left-6 top-8 hidden rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white shadow-xl backdrop-blur lg:block">
              <div className="text-xs uppercase tracking-wide text-white/60">Encours total</div>
              <div className="mt-1 text-lg font-bold">12,7 M CFP</div>
            </div>

            <div className="absolute -right-4 bottom-10 hidden rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-900 shadow-xl lg:block">
              <div className="text-xs uppercase tracking-wide text-slate-500">Échéances à venir</div>
              <div className="mt-1 text-lg font-bold">Vision instantanée</div>
            </div>
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
              className={cardClass}
            >
              <div className={iconBoxClass}>
                <c.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
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
              className={cardClass}
            >
              <div className={iconBoxClass}>
                <s.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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
          title="Suivi de l’endettement"
          description="La gestion multi-budgétaire permet de définir finement la granularité de vos états de situation."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {suiviItems.map((r, i) => (
            <motion.div
              key={r.label}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-light shadow-sm">
                <r.icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-foreground">{r.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 5. FONCTIONNALITÉS CLÉS ───── */}
    <section id="fonctionnalites" className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading badge="Fonctionnalités" title="Les fonctions de base" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fonctionnalites.map((f, i) => (
            <motion.div
              key={f}
              {...fadeUp}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
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
              className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-light shadow-sm">
                <e.icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-foreground">{e.label}</span>
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
              className={cardClass}
            >
              <div className={iconBoxClass}>
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 8. BÉNÉFICES ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Bénéfices"
          title="Ce que le module vous apporte au quotidien"
          description="Une meilleure maîtrise de la dette, moins de ressaisies et plus de visibilité pour les équipes financières."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {beneficesItems.map((item, i) => (
            <motion.div
              key={item}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CheckCircle2 className="mb-4 h-6 w-6 text-accent" />
              <p className="text-sm font-medium leading-relaxed text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 9. CTA ───── */}
    <section className="relative overflow-hidden bg-navy-gradient py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(217_91%_60%/0.16),transparent_60%)]" />
      <div className="container text-center">
        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-3xl rounded-3xl border border-primary-foreground/10 bg-white/5 px-8 py-12 backdrop-blur"
        >
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Maîtrisez votre endettement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-foreground/70">
            Simulez, comparez et pilotez vos emprunts avec précision grâce à une solution complète, intégrée et pensée pour les collectivités.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
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

export default Emprunts;