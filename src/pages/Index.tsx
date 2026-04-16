import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Users, Shield, Headphones, TrendingUp, Clock, Award, ArrowRight, Calendar, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import dashboardHero from "@/assets/dashboard-hero.jpg";

import imgComptabilite from "@/assets/modules/comptabilite.jpg";
import imgGestionBiens from "@/assets/modules/gestion-biens.jpg";
import imgTableauxBord from "@/assets/modules/tableaux-bord.jpg";
import imgEmprunts from "@/assets/modules/emprunts.jpg";
import imgPaie from "@/assets/modules/paie.jpg";
import imgEtatCivil from "@/assets/modules/etat-civil.jpg";
import imgEtatCivilCoutumier from "@/assets/modules/etat-civil-coutumier.jpg";
import imgElections from "@/assets/modules/elections.jpg";
import imgPopulation from "@/assets/modules/population.jpg";
import imgRegie from "@/assets/modules/regie.jpg";
import imgFacturationEnfance from "@/assets/modules/facturation-enfance.jpg";

const financeModules = [
  { title: "Comptabilité", image: imgComptabilite, desc: "Gestion en temps réel des finances, conforme aux nomenclatures M14, M22, M4x et M1-5-7. Budget, mandatement, titres de recettes et suivi financier complet.", link: "/logiciels/comptabilite" },
  { title: "Gestion des biens", image: imgGestionBiens, desc: "Suivi complet du patrimoine mobilier et immobilier de la collectivité. Gestion des amortissements, inventaire et transmission à la Trésorerie.", link: "/logiciels/gestion-des-biens" },
  { title: "Tableaux de bord", image: imgTableauxBord, desc: "Indicateurs stratégiques et pluriannuels pour piloter votre collectivité. Analyse des données financières et suivi des ratios.", link: "/logiciels/tableaux-bord" },
  { title: "Emprunts & dette", image: imgEmprunts, desc: "Gestion et simulation des emprunts selon les normes M14, M22, M4x et M1-5-7. Suivi de l'endettement et analyse de son évolution.", link: "/logiciels/emprunts" },
  { title: "Paie", image: imgPaie, desc: "Gestion complète des agents : bulletins de salaire, congés et carrière. Éditions réglementaires (CAFAT, mutuelle, DADS…) et mandatement automatique.", link: "/logiciels/paie" },
];

const administresModules = [
  { title: "État civil droit commun", image: imgEtatCivil, desc: "Naissances, mariages, décès et actes officiels" },
  { title: "État civil coutumier", image: imgEtatCivilCoutumier, desc: "Registres coutumiers adaptés au droit local" },
  { title: "Élections", image: imgElections, desc: "Listes électorales, scrutins et résultats" },
  { title: "Population", image: imgPopulation, desc: "Fichier population et gestion des administrés" },
  { title: "Régie", image: imgRegie, desc: "Encaissements, quittances et suivi des paiements" },
  { title: "Facturation enfance", image: imgFacturationEnfance, desc: "Cantine, périscolaire et activités enfance" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const avantages = [
  { icon: Shield, title: "Sécurité", desc: "Données protégées et conformes aux réglementations locales" },
  { icon: TrendingUp, title: "Performance", desc: "Solutions optimisées pour des traitements rapides et fiables" },
  { icon: Clock, title: "Disponibilité", desc: "Support réactif et maintenance régulière garantie" },
  { icon: Award, title: "Expertise", desc: "Plus de 20 ans d'expérience en Nouvelle-Calédonie" },
  { icon: Headphones, title: "Accompagnement", desc: "Formations sur site et assistance technique dédiée" },
  { icon: Users, title: "Proximité", desc: "Équipe locale à Nouméa, proche de vos besoins" },
];

const actualites = [
  { date: "12 Avr 2026", title: "Mise à jour majeure du module Finance", excerpt: "Découvrez les nouvelles fonctionnalités de reporting avancé..." },
  { date: "28 Mar 2026", title: "Formation État Civil à Lifou", excerpt: "Retour sur la session de formation organisée pour les agents..." },
  { date: "15 Mar 2026", title: "Nouveau partenariat technologique", excerpt: "BFC renforce son écosystème avec un partenariat stratégique..." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.15),transparent_60%)]" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-6">
            Expert des logiciels pour collectivités en Nouvelle-Calédonie
          </span>
          <h1 className="text-4xl font-bold leading-[1.15] text-primary-foreground md:text-5xl lg:text-6xl">
            Logiciels métiers pour collectivités en <span className="text-accent">Nouvelle-Calédonie</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-primary-foreground/80 leading-[1.8]">
            Des solutions complètes pour la gestion des collectivités&nbsp;: comptabilité, administrés, état civil et gestion quotidienne.
          </p>
          <p className="mt-3 max-w-lg text-base text-primary-foreground/60 leading-[1.8]">
            BFC accompagne les collectivités avec des logiciels adaptés à la législation locale et un support de proximité.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/logiciels"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
            >
              Découvrir nos logiciels <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Demander une démo
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl">
            <img src={dashboardHero} alt="Dashboard logiciel BFC" width={1280} height={800} className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Solutions */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Nos solutions"
          title="Une suite logicielle métier complète"
          description="Des outils conçus spécifiquement pour répondre aux exigences des collectivités de Nouvelle-Calédonie."
        />

        {/* Comptabilité & Finance */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-light">
                <Calculator className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Comptabilité & Finance</h3>
                <p className="text-muted-foreground text-sm">Une gamme complète d'outils pour la gestion financière des collectivités locales, conformes à la réglementation en vigueur.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-6">
              {financeModules.map((m, i) => (
                <Link key={m.title} to={m.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group rounded-xl border border-border bg-background overflow-hidden card-hover cursor-pointer transition-shadow hover:shadow-lg"
                  >
                    <div className="aspect-[3/2] overflow-hidden">
                      <img src={m.image} alt={m.title} loading="lazy" width={768} height={512} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm text-foreground mb-1.5">{m.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            <Link to="/logiciels" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
              Voir tous les modules Finance <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Gestion des administrés */}
        <motion.div {...fadeUp}>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-light">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Gestion des administrés</h3>
                <p className="text-muted-foreground text-sm">Des applications de gestion et des solutions Internet articulées autour d'une base administrés unique.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
              {administresModules.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-xl border border-border bg-background overflow-hidden card-hover cursor-pointer"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={m.image} alt={m.title} loading="lazy" width={768} height={512} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-foreground">{m.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link to="/logiciels/administres" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
              Découvrir le module Administrés <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Avantages */}
    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Pourquoi BFC"
          title="Les avantages de nos solutions"
          description="Une approche complète pour accompagner la transformation numérique de votre collectivité."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {avantages.map((a, i) => (
            <motion.div
              key={a.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl bg-card p-6 border border-border card-hover"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                <a.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Actualités */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Actualités"
          title="Les dernières nouvelles"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {actualites.map((a, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <div className="group rounded-xl border border-border bg-card p-6 card-hover cursor-pointer">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3" /> {a.date}
                </div>
                <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/actualites" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
            Voir toutes les actualités <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA Contact */}
    <section className="bg-navy-gradient py-20">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Prêt à moderniser votre collectivité ?
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-lg mx-auto">
            Contactez-nous pour une démonstration gratuite de nos solutions adaptées à vos besoins.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-all"
          >
            Contactez-nous <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
