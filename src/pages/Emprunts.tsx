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
  Shield,
  Layers,
  Gauge,
  TimerReset,
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

const preuves = [
  {
    icon: Calculator,
    title: "Simulation budgétaire",
    desc: "Impact immédiat des emprunts sur vos budgets.",
  },
  {
    icon: Scale,
    title: "Comparatif bancaire",
    desc: "Analyse claire des offres et conditions de financement.",
  },
  {
    icon: Shield,
    title: "Mandatement sécurisé",
    desc: "ICNE, échéances et écritures intégrés à la chaîne financière.",
  },
  {
    icon: TrendingDown,
    title: "Dette maîtrisée",
    desc: "Vision globale de l’encours et des échéances à venir.",
  },
];

const integrationCards = [
  {
    icon: Calculator,
    title: "Simulation budgétaire",
    desc: "Lien direct entre remboursements et simulation budgétaire pour mesurer immédiatement l’impact des emprunts.",
  },
  {
    icon: FileText,
    title: "Annexes budgétaires",
    desc: "Alimentation automatique des annexes budgétaires, états préparatoires et mandats.",
  },
  {
    icon: RefreshCw,
    title: "Refinancement automatique",
    desc: "Refinancement ou renégociation intégrés automatiquement sans ressaisie complète.",
  },
  {
    icon: Link2,
    title: "Chaîne financière intégrée",
    desc: "Connexion native avec la comptabilité, les écritures, le mandatement et le suivi global.",
  },
];

const simulationItems = [
  {
    icon: LineChart,
    title: "Simulations multiples",
    desc: "Testez plusieurs scénarios pour comparer les effets sur le budget.",
  },
  {
    icon: Scale,
    title: "Comparatif bancaire",
    desc: "Analysez les offres des organismes prêteurs point par point.",
  },
  {
    icon: Zap,
    title: "Optimisation rapide",
    desc: "Identifiez les meilleures conditions de financement et les gains potentiels.",
  },
  {
    icon: RefreshCw,
    title: "Renégociation simplifiée",
    desc: "Renégociez et refinancez sans rupture dans le suivi historique.",
  },
];

const detteBlocks = [
  {
    title: "Suivi de l’endettement",
    items: [
      "Suivi global et détaillé de la dette",
      "Vision multi-budgétaire de l’endettement",
      "Analyse par budget et par organisme",
      "Tableaux de synthèse avec graphiques",
    ],
  },
  {
    title: "Gestion des emprunts",
    items: [
      "Emprunts garantis, fictifs, refinancés ou renégociés",
      "Taux constant, variable, différé ou Euribor",
      "Calcul automatique des tableaux d’amortissement",
      "Historisation des changements de taux",
    ],
  },
  {
    title: "Éditions & exports",
    items: [
      "Tableaux d’amortissement",
      "Échéanciers des remboursements",
      "Extinction de la dette",
      "Exports PDF, Excel, HTML, XML et e-mail",
    ],
  },
];

const processSteps = [
  {
    icon: Layers,
    label: "Saisir ou importer les emprunts",
  },
  {
    icon: Calculator,
    label: "Simuler les remboursements et impacts budgétaires",
  },
  {
    icon: Gauge,
    label: "Suivre les échéances et l’encours de dette",
  },
  {
    icon: FileText,
    label: "Générer les annexes, mandats et états",
  },
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

const plusItems = [
  { icon: Globe, title: "Index & taux Internet", desc: "Mise à jour en ligne des index et types de taux." },
  { icon: Link2, title: "Suite On-Line", desc: "Interfaçage avec les outils de la suite On-Line." },
  { icon: Table2, title: "Export Excel", desc: "Export des tableaux dans Excel avec ré-import possible." },
  { icon: Bell, title: "Alertes échéances", desc: "Mémos et alertes sur les dates importantes." },
  { icon: Coins, title: "Multi-devises", desc: "Gestion des emprunts en devises étrangères." },
  { icon: BadgeDollarSign, title: "Frais bancaires", desc: "Gestion des frais bancaires associés." },
  { icon: ArrowDownUp, title: "Emprunts inversés", desc: "Prise en charge des configurations particulières." },
  { icon: Mail, title: "Exports multi-formats", desc: "Éditions exportables par e-mail, HTML, XML et PDF." },
];

const beneficesItems = [
  "Réduction du temps de préparation budgétaire",
  "Vision immédiate de l’encours et des échéances",
  "Comparaison facilitée des offres bancaires",
  "Sécurisation du mandatement et du suivi comptable",
];

const Emprunts = () => (
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

          <h1 className="max-w-[11ch] text-4xl font-bold tracking-tight leading-[1.05] text-primary-foreground md:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Emprunts &amp; <span className="text-accent">dette</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-[1.8] text-primary-foreground/80">
            Pilotez vos emprunts, sécurisez vos échéances et visualisez l’évolution
            de votre endettement dans une solution intégrée à votre comptabilité.
          </p>

          <p className="mt-3 max-w-lg text-base leading-[1.8] text-primary-foreground/60">
            Simulations, comparatifs bancaires, refinancement, mandatement automatique
            et suivi multi-budgétaire dans les cadres M1/5/7, M14, M21 et M4x.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
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
                  alt="Interface Gestion des Emprunts BFC"
                  width={1280}
                  height={720}
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
          title="Un système de gestion financière totalement intégré"
          description="Lien direct entre remboursements, simulation budgétaire, annexes et mandatement pour une chaîne financière sans rupture."
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
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <s.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
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
            badge="Endettement"
            title="Pilotage & suivi de la dette"
            description="Une vision globale et détaillée de l’endettement, avec suivi multi-budgétaire, graphiques et accès au détail des emprunts."
            center={false}
          />

          <div className="space-y-6">
            {detteBlocks.map((block) => (
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
              Cycle de gestion
            </p>

            <h3 className="mt-4 text-2xl font-bold text-foreground">
              Une chaîne complète pour maîtriser l’emprunt
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

    <section id="fonctionnalites" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Fonctionnalités clés"
          title="Les essentiels de la gestion des emprunts"
          description="Un socle complet pour gérer les emprunts, les taux, les échéances, les ICNE et les normes budgétaires."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fonctionnalites.map((f, i) => (
            <motion.div
              key={f}
              {...fadeUp}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium text-foreground">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Les +"
          title="Les plus du module"
          description="Des fonctionnalités avancées pour une gestion de dette plus souple, connectée et complète."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plusItems.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            badge="Bénéfices"
            title="Ce que le module vous apporte au quotidien"
            description="Une meilleure maîtrise de la dette, moins de ressaisies et plus de visibilité pour les équipes financières."
            center={false}
          />

          <div className="grid gap-3">
            {beneficesItems.map((item, i) => (
              <motion.div
                key={item}
                {...fadeUp}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            badge="Suivi opérationnel"
            title="Des éditions utiles pour piloter l’endettement"
            description="Tableaux d’amortissement, échéanciers, extinction de dette et états de synthèse facilitent l’analyse et la préparation budgétaire."
            center={false}
          />

          <div className="grid gap-4">
            {[
              { icon: Calendar, label: "Échéanciers des remboursements" },
              { icon: TrendingDown, label: "Extinction de la dette" },
              { icon: ClipboardList, label: "États préparatoires budgétaires" },
              { icon: Search, label: "Recherche détaillée par emprunt ou organisme" },
              { icon: TimerReset, label: "Alertes sur les échéances importantes" },
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
            Maîtrisez votre endettement
          </h2>

          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-primary-foreground/70">
            Simulez, comparez et pilotez vos emprunts avec précision grâce à une
            solution complète, intégrée et pensée pour les collectivités.
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

export default Emprunts;