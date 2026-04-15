import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const articles = [
  { date: "12 Avr 2026", title: "Mise à jour majeure du module Finance v5.2", excerpt: "Découvrez les nouvelles fonctionnalités de reporting avancé, tableaux de bord personnalisables et interface de suivi de trésorerie en temps réel.", category: "Produit" },
  { date: "28 Mar 2026", title: "Formation État Civil à Lifou", excerpt: "Retour sur la session de formation organisée pour les agents de la mairie de Lifou. 15 agents formés sur le module d'état civil.", category: "Formation" },
  { date: "15 Mar 2026", title: "Nouveau partenariat technologique", excerpt: "BFC renforce son écosystème avec un partenariat stratégique pour offrir de meilleures performances et une sécurité accrue.", category: "Partenariat" },
  { date: "02 Mar 2026", title: "Webinaire : les bonnes pratiques de la comptabilité publique", excerpt: "Un webinaire gratuit pour découvrir les bonnes pratiques et optimiser l'utilisation de nos outils financiers.", category: "Événement" },
  { date: "15 Fév 2026", title: "BFC participe au Salon du Numérique NC", excerpt: "Retrouvez-nous au stand B12 pour des démonstrations en direct de nos solutions et des échanges avec nos experts.", category: "Événement" },
  { date: "01 Fév 2026", title: "Migration réussie pour la Province Nord", excerpt: "La Province Nord a terminé avec succès sa migration vers la dernière version de notre plateforme.", category: "Produit" },
];

const Actualites = () => (
  <Layout>
    <section className="bg-navy-gradient py-20">
      <div className="container">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-4">
            Actualités
          </span>
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            Nos dernières actualités
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Suivez les évolutions de nos solutions, nos événements et notre actualité.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}>
              <div className="group rounded-xl border border-border bg-card p-6 card-hover cursor-pointer h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-full bg-blue-light px-3 py-1 text-xs font-medium text-accent">{a.category}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {a.date}
                  </div>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Actualites;
