import { motion } from "framer-motion";
import { Building2, Users, Target, Briefcase, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const clients = [
  "Mairie de Nouméa", "Province Sud", "Province Nord", "Province des Îles Loyauté",
  "Mairie de Dumbéa", "Mairie de Mont-Dore", "Mairie de Païta", "Mairie de Koné",
];

const Societe = () => (
  <Layout>
    <section className="bg-navy-gradient py-20">
      <div className="container">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-4">
            La société
          </span>
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            Votre partenaire numérique en Nouvelle-Calédonie
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Depuis plus de 20 ans, BFC conçoit et déploie des logiciels de gestion dédiés aux collectivités calédoniennes.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-foreground">Notre expertise</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            BFC est le spécialiste des solutions informatiques pour les collectivités territoriales en Nouvelle-Calédonie. Nous proposons des logiciels de gestion financière, d'état civil et de gestion des administrés, adaptés aux spécificités réglementaires locales.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Notre équipe, basée à Nouméa, assure un accompagnement personnalisé : installation, formation, support technique et maintenance.
          </p>
        </motion.div>
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Building2, label: "Fondée à Nouméa", value: "2003" },
              { icon: Users, label: "Collectivités clientes", value: "30+" },
              { icon: Target, label: "Modules déployés", value: "50+" },
              { icon: Briefcase, label: "Ans d'expérience", value: "20+" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center card-hover">
                <s.icon className="mx-auto mb-2 h-6 w-6 text-accent" />
                <div className="text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="bg-muted py-20">
      <div className="container">
        <SectionHeading badge="Nos clients" title="Ils nous font confiance" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((c) => (
            <motion.div key={c} {...fadeUp} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm font-medium text-foreground">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading badge="Recrutement" title="Rejoignez notre équipe" description="Nous recherchons des talents passionnés par la tech et le service public. Envoyez votre candidature !" />
        <div className="mx-auto max-w-md text-center">
          <a href="mailto:recrutement@bfc.nc" className="inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-all">
            Postuler par email
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Societe;
