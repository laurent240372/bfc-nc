import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  RefreshCw,
  Link2,
  Calculator,
  Wrench,
  MapPin,
  Barcode,
  Camera,
  Search,
  FolderTree,
  FileText,
  Calendar,
  ClipboardList,
  Package,
  Building2,
  Boxes,
  Landmark,
  Download,
  Mail,
  Printer,
  Table2,
  Globe,
  Zap,
  Shield,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/gestion-biens-hero.png";

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
    desc: "L'état préparatoire budgétaire permet un lien direct entre la gestion des amortissements et le moteur de simulation budgétaire.",
  },
  {
    icon: Link2,
    title: "Interface Comptabilité",
    desc: "En interface permanente avec la Comptabilité, récupération et injection directe de l'intégralité des mouvements comptables.",
  },
  {
    icon: RefreshCw,
    title: "Chaîne financière",
    desc: "Intégration complète dans la chaîne financière : mandatement automatique des amortissements et suivi des écritures.",
  },
  {
    icon: Layers,
    title: "Multi-budgets",
    desc: "Différenciation des saisies entre budget de reprise des exercices antérieurs et budget en cours.",
  },
];

const assistantItems = [
  {
    icon: Wrench,
    title: "Assistants écritures",
    desc: "Les multiples assistants vous guident sur les écritures spécifiques telles que les cessions avec plus ou moins-values.",
  },
  {
    icon: Building2,
    title: "Affermage automatique",
    desc: "Le logiciel prend en charge toute la gestion des biens en affermage : branchez le pilote automatique !",
  },
  {
    icon: FolderTree,
    title: "Modèles & profils",
    desc: "Modèles de biens et profils d'amortissements préconfigurés pour accélérer les saisies autrefois longues et fastidieuses.",
  },
  {
    icon: Zap,
    title: "Saisies assistées",
    desc: "Les saisies assistées apportent la garantie d'un inventaire toujours à jour et conforme.",
  },
];

const rechercheItems = [
  { icon: Barcode, label: "Étiquetage codes-barres pour identification rapide" },
  { icon: Camera, label: "Fiche inventaire avec photo du bien" },
  { icon: MapPin, label: "Recherches géolocalisées et cartographie des biens" },
  { icon: FolderTree, label: "Regroupements par catégorie, service ou site" },
  { icon: Search, label: "Interrogation sur tous les champs : date, n° d'inventaire, libellé…" },
];

const fonctionnalites = [
  "Gestion centralisée de l'inventaire et de l'amortissement",
  "Gestion des subventions à amortir liée aux biens",
  "Calcul automatique du tableau d'amortissement, modifiable ligne par ligne",
  "Différenciation budget de reprise / budget en cours",
  "Liaison Trésorerie via Indigo Inventaire et PES",
  "Gestion des biens de faible valeur",
  "Gestion des travaux en cours",
  "Gestion des lots et des adjonctions",
];

const editionsItems = [
  { icon: FileText, label: "Certificat administratif" },
  { icon: Calendar, label: "Échéancier annuel et pluriannuel" },
  { icon: ClipboardList, label: "État de l'actif" },
  { icon: Package, label: "Liste des acquisitions et des cessions" },
  { icon: Shield, label: "État de contrôle de l'inventaire" },
  { icon: Landmark, label: "Historique de l'inventaire" },
  { icon: Calculator, label: "Échéancier des amortissements" },
];

const plusItems = [
  { icon: Globe, title: "Interfaces On-Line", desc: "Interfaces On-Line avec les éditions budgétaires pour un suivi en temps réel." },
  { icon: Download, title: "Mise à jour Internet", desc: "Mise à jour par Internet des jeux d'écritures spécifiques." },
  { icon: Table2, title: "Export Excel", desc: "Export de chaque tableau dans Excel pour une exploitation libre des données." },
  { icon: Camera, title: "Fiche inventaire enrichie", desc: "Fiche inventaire avec photo du bien et code-barre intégré." },
  { icon: Printer, title: "Exports multi-formats", desc: "Toutes les éditions exportables au format e-mail, HTML, XML et PDF." },
];

const GestionBiens = () => (
  <Layout>
    {/* ───── 1. HERO ───── */}
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.15),transparent_60%)]" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-6">
            Module Patrimoine
          </span>
          <h1 className="text-4xl font-bold leading-[1.15] text-primary-foreground md:text-5xl lg:text-6xl">
            Gestion des <span className="text-accent">biens</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-primary-foreground/80 leading-[1.8]">
            Le suivi complet du patrimoine mobilier et immobilier des collectivités, depuis le calcul des amortissements jusqu'à l'inventaire transmis à la Trésorerie.
          </p>
          <p className="mt-3 max-w-lg text-base text-primary-foreground/60 leading-[1.8]">
            En interface permanente avec la Comptabilité, le module assure la gestion des amortissements, la fiabilité de l'inventaire et l'intégration complète dans la chaîne financière.
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
          <div className="overflow-hidden rounded-xl border border-primary-foreground/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            <img src={heroImg} alt="Interface Gestion des biens BFC" width={1280} height={720} loading="lazy" decoding="async" className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* ───── 2. GESTION PATRIMONIALE INTÉGRÉE ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Gestion intégrée"
          title="Un système de gestion financière totalement intégré"
          description="Lien direct entre amortissements, simulation budgétaire et comptabilité pour une chaîne financière sans rupture."
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

    {/* ───── 3. AUTOMATISATION & TRAITEMENTS ───── */}
    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Automatisation"
          title="Automatisation & traitements"
          description="Moins de travail au quotidien grâce aux assistants, modèles et profils préconfigurés."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {assistantItems.map((a, i) => (
            <motion.div
              key={a.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <a.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── 4. SUIVI & RECHERCHE DES BIENS ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Recherche"
          title="Suivi & recherche des biens"
          description="Codes-barres, photos, géolocalisation et recherches avancées : retrouver un bien devient un véritable jeu d'enfant !"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {rechercheItems.map((r, i) => (
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
    <section className="bg-muted py-20 md:py-28">
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

    {/* ───── 6. ÉDITIONS & CONFORMITÉ ───── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Éditions"
          title="Éditions & conformité"
          description="Des éditions réglementaires complètes pour une gestion patrimoniale transparente et conforme."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          description="Des fonctionnalités différenciantes qui font la force du module Gestion des biens."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
            Optimisez la gestion de votre patrimoine
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-primary-foreground/70 leading-relaxed">
            Découvrez comment le module Gestion des biens simplifie l'inventaire, les amortissements et le suivi patrimonial de votre collectivité.
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

export default GestionBiens;
