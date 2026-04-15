import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  "Élaboration et suivi budgétaire",
  "Mandatement et titres de recettes",
  "Gestion de la trésorerie",
  "Interface avec le Trésor Public",
  "Reporting financier avancé",
  "Suivi des marchés publics",
  "Gestion des emprunts",
  "Tableaux de bord personnalisables",
];

const Comptabilite = () => (
  <Layout>
    <section className="bg-navy-gradient py-20">
      <div className="container">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-4">
            Module Finance
          </span>
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            Comptabilité & Finance
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Gérez l'ensemble de vos opérations financières avec un outil conçu pour les collectivités de Nouvelle-Calédonie.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-foreground">Fonctionnalités principales</h2>
          <div className="mt-8 grid gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-all">
            Demander une démo <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <img src={dashboardHero} alt="Module comptabilité" width={1280} height={800} className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Comptabilite;
