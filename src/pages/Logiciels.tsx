import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Users, ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import dashboardHero from "@/assets/dashboard-hero.png";
import dashboardAdmin from "@/assets/dashboard-administres.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const modules = [
  {
    icon: Calculator,
    title: "Comptabilité & Finance",
    description:
      "Gestion budgétaire, mandatement, titres de recettes, suivi de trésorerie et reporting financier complet.",
    image: dashboardHero,
    link: "/logiciels/comptabilite",
    features: ["Budget prévisionnel", "Mandats et titres", "Trésorerie", "Reporting"],
  },
  {
    icon: Users,
    title: "Gestion des administrés",
    description:
      "État civil, listes électorales, gestion des cimetières et suivi de la population en un seul outil.",
    image: dashboardAdmin,
    link: "/logiciels/administres",
    features: ["État civil", "Élections", "Cimetières", "Population"],
  },
];

const Logiciels = () => (
  <Layout>
    <section className="relative overflow-hidden bg-navy-gradient py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.22),transparent_55%)]" />
      <div className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Nos logiciels
          </span>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Des solutions complètes pour chaque besoin
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75">
            Nos modules couvrent l’ensemble des besoins de gestion des collectivités,
            de la comptabilité à l’état civil.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative flex flex-col gap-24">
        {modules.map((m, i) => {
          const Icon = m.icon;
          const reverse = i % 2 === 1;

          return (
            <motion.div
              key={m.title}
              {...fadeUp}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <div className={reverse ? "lg:order-2" : ""}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-light text-accent ring-1 ring-blue-100">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  {m.title}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  {m.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {m.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-blue-light px-3.5 py-1.5 text-xs font-semibold text-accent"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  to={m.link}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:translate-x-1"
                >
                  Voir les fonctionnalités
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className={reverse ? "lg:order-1" : ""}>
                <div className="group relative">
                  <div className="absolute -inset-8 rounded-[2rem] bg-accent/20 blur-3xl transition group-hover:bg-accent/25" />
                  <div className="absolute -bottom-6 left-8 right-8 h-16 rounded-full bg-slate-900/15 blur-2xl" />

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_28px_70px_rgba(15,23,42,0.16)] ring-1 ring-slate-200/70 backdrop-blur">
                    <div className="overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-white to-blue-50/70">
                      <img
                        src={m.image}
                        alt={m.title}
                        loading="lazy"
                        width={1280}
                        height={800}
                        className="w-full object-contain transition duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  </Layout>
);

export default Logiciels;