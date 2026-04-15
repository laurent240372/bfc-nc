import { motion } from "framer-motion";
import { BookOpen, Monitor, Users, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const formations = [
  { title: "Comptabilité publique", duree: "3 jours", desc: "Maîtrisez le module finance : budget, mandatement, reporting." },
  { title: "État civil", duree: "2 jours", desc: "Gestion complète des actes de naissance, mariage et décès." },
  { title: "Gestion électorale", duree: "1 jour", desc: "Listes électorales, procurations et organisation des scrutins." },
  { title: "Prise en main générale", duree: "1 jour", desc: "Découverte de l'environnement BFC et des fonctions de base." },
];

const methodes = [
  { icon: Monitor, title: "Sur site", desc: "Formations dispensées directement dans vos locaux pour un apprentissage en contexte réel." },
  { icon: Users, title: "Inter-collectivités", desc: "Sessions regroupant plusieurs collectivités pour le partage d'expérience." },
  { icon: BookOpen, title: "Supports dédiés", desc: "Documentation et guides pratiques fournis pour chaque formation." },
  { icon: Clock, title: "Suivi post-formation", desc: "Accompagnement téléphonique dans les semaines suivant la formation." },
];

const Formations = () => (
  <Layout>
    <section className="bg-navy-gradient py-20">
      <div className="container">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-4">
            Formations
          </span>
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            Formations professionnelles
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Des formations adaptées à chaque module pour garantir une prise en main efficace par vos équipes.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading badge="Catalogue" title="Nos formations" />
        <div className="grid gap-6 md:grid-cols-2">
          {formations.map((f, i) => (
            <motion.div key={f.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="rounded-xl border border-border bg-card p-6 card-hover">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-foreground">{f.title}</h3>
                <span className="rounded-full bg-blue-light px-3 py-1 text-xs font-medium text-accent">{f.duree}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20">
      <div className="container">
        <SectionHeading badge="Méthodologie" title="Nos méthodes de formation" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodes.map((m, i) => (
            <motion.div key={m.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="rounded-xl bg-card border border-border p-6 text-center card-hover">
              <m.icon className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-bold text-foreground">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Formations;
