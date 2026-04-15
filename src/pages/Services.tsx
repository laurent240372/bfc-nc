import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Headphones, Wrench, Phone, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Headphones,
    title: "Support technique",
    desc: "Assistance téléphonique et télémaintenance pour résoudre vos problèmes rapidement. Notre équipe est disponible du lundi au vendredi.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Mises à jour régulières, corrections, évolutions fonctionnelles et adaptation aux nouvelles réglementations calédoniennes.",
  },
  {
    icon: Phone,
    title: "Assistance sur site",
    desc: "Intervention directe dans vos locaux pour les problèmes complexes nécessitant un diagnostic approfondi.",
  },
];

const Services = () => (
  <Layout>
    <section className="bg-navy-gradient py-20">
      <div className="container">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-4">
            Services & Assistance
          </span>
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            Un accompagnement complet
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Support réactif, maintenance régulière et assistance de proximité pour garantir la continuité de vos services.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading badge="Nos services" title="Comment nous vous accompagnons" />
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-card p-8 card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-light">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-navy-gradient py-20">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-primary-foreground">Besoin d'assistance ?</h2>
          <p className="mt-4 text-primary-foreground/70">Notre équipe est à votre disposition pour toute demande de support.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-all">
            Nous contacter <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
