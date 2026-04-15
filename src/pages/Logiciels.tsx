import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Users, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import dashboardAdmin from "@/assets/dashboard-administres.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const modules = [
  {
    icon: Calculator,
    title: "Comptabilité & Finance",
    description: "Gestion budgétaire, mandatement, titres de recettes, suivi de trésorerie et reporting financier complet.",
    image: dashboardHero,
    link: "/logiciels/comptabilite",
    features: ["Budget prévisionnel", "Mandats et titres", "Trésorerie", "Reporting"],
  },
  {
    icon: Users,
    title: "Gestion des administrés",
    description: "État civil, listes électorales, gestion des cimetières et suivi de la population en un seul outil.",
    image: dashboardAdmin,
    link: "/logiciels/administres",
    features: ["État civil", "Élections", "Cimetières", "Population"],
  },
];

const Logiciels = () => (
  <Layout>
    <section className="bg-navy-gradient py-20">
      <div className="container">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-4">
            Nos logiciels
          </span>
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            Des solutions complètes pour chaque besoin
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Nos modules couvrent l'ensemble des besoins de gestion des collectivités, de la comptabilité à l'état civil.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container flex flex-col gap-20">
        {modules.map((m, i) => (
          <motion.div key={m.title} {...fadeUp} transition={{ delay: i * 0.1 }} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-light mb-4">
                <m.icon className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{m.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{m.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {m.features.map((f) => (
                  <span key={f} className="rounded-full bg-blue-light px-3 py-1 text-xs font-medium text-accent">{f}</span>
                ))}
              </div>
              <Link to={m.link} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                Voir les fonctionnalités <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="overflow-hidden rounded-xl border border-border shadow-lg">
                <img src={m.image} alt={m.title} loading="lazy" width={1280} height={800} className="w-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Logiciels;
