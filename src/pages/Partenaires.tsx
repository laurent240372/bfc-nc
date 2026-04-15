import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const partenaires = [
  { name: "Microsoft", desc: "Partenaire technologique — infrastructure cloud et outils de développement." },
  { name: "Oracle", desc: "Bases de données et solutions d'entreprise pour la fiabilité des données." },
  { name: "OPT-NC", desc: "Opérateur des postes et télécommunications de Nouvelle-Calédonie." },
  { name: "DINUM", desc: "Direction interministérielle du numérique — interopérabilité et standards." },
  { name: "CCI NC", desc: "Chambre de commerce et d'industrie — réseau économique local." },
  { name: "ADECAL", desc: "Agence de développement économique — accompagnement des entreprises." },
];

const Partenaires = () => (
  <Layout>
    <section className="bg-navy-gradient py-20">
      <div className="container">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-4">
            Partenaires
          </span>
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            Notre écosystème
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            BFC s'appuie sur un réseau de partenaires technologiques et institutionnels de confiance.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading badge="Réseau" title="Nos partenaires" description="Des acteurs majeurs du numérique et de l'économie calédonienne." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partenaires.map((p, i) => (
            <motion.div key={p.name} {...fadeUp} transition={{ delay: i * 0.08 }} className="rounded-xl border border-border bg-card p-6 card-hover">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-light">
                <span className="text-lg font-bold text-accent">{p.name.slice(0, 2)}</span>
              </div>
              <h3 className="font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Partenaires;
