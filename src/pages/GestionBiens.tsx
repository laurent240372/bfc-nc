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
  Landmark,
  Download,
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
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const integrationCards = [
  { icon: Calculator, title: "Simulation budgétaire", desc: "Lien direct entre amortissements et simulation budgétaire." },
  { icon: Link2, title: "Interface Comptabilité", desc: "Connexion directe avec la comptabilité." },
  { icon: RefreshCw, title: "Chaîne financière", desc: "Mandatement automatique et suivi des écritures." },
  { icon: Layers, title: "Multi-budgets", desc: "Gestion différenciée des budgets." },
];

const GestionBiens = () => (
  <Layout>

    {/* HERO */}
    <section className="relative overflow-hidden bg-navy-gradient py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.22),transparent_55%)]" />
      <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">

        {/* TEXTE */}
        <motion.div {...fadeUp}>
          <span className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Module Patrimoine
          </span>

          <h1 className="text-4xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-6xl">
            Gestion des <span className="text-accent">biens</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
            Le suivi complet du patrimoine mobilier et immobilier des collectivités,
            de l’amortissement à l’inventaire.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Demander une démo
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/logiciels"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Tous les modules
            </Link>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-accent/20 blur-3xl rounded-full" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <img src={heroImg} className="w-full object-contain" />
          </div>
        </motion.div>

      </div>
    </section>

    {/* INTEGRATION */}
    <section className="bg-slate-50 py-20">
      <div className="container">
        <SectionHeading
          title="Gestion intégrée"
          description="Une chaîne financière complète et connectée."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {integrationCards.map((c, i) => (
            <motion.div key={i} {...fadeUp} className="card-premium">
              <div className="icon-box">
                <c.icon />
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
<section className="bg-navy-gradient py-20">
  <div className="container text-center">
    <motion.div {...fadeUp}>
      <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
        Simplifiez la gestion de votre patrimoine
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
        Un module complet pour maîtriser vos biens et vos amortissements.
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-95"
        >
          Demander une démonstration
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  </div>
</section>

  </Layout>
);

export default GestionBiens;