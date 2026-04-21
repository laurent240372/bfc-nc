import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calculator,
  Users,
  Shield,
  Headphones,
  TrendingUp,
  Clock,
  Award,
  ArrowRight,
  Calendar,
  ChevronRight,
  Building2,
  MapPinned,
  BadgeCheck,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import dashboardHero from "@/assets/dashboard-hero.png";

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
  {
    title: "Comptabilité",
    image: imgComptabilite,
    desc: "Budget, mandats, titres et suivi financier complet, conformes aux nomenclatures en vigueur.",
    link: "/logiciels/comptabilite",
  },
  {
    title: "Gestion des biens",
    image: imgGestionBiens,
    desc: "Suivi du patrimoine mobilier et immobilier, amortissements, inventaire et transmission à la Trésorerie.",
    link: "/logiciels/gestion-des-biens",
  },
  {
    title: "Tableaux de bord",
    image: imgTableauxBord,
    desc: "Indicateurs stratégiques, analyse financière et pilotage de la collectivité.",
    link: "/logiciels/tableaux-bord",
  },
  {
    title: "Emprunts & dette",
    image: imgEmprunts,
    desc: "Gestion des emprunts, simulation, suivi de l'endettement et analyse de son évolution.",
    link: "/logiciels/emprunts",
  },
  {
    title: "Paie",
    image: imgPaie,
    desc: "Bulletins, carrière, congés, éditions réglementaires et mandatement automatique.",
    link: "/logiciels/paie",
  },
];

const administresModules = [
  {
    title: "État civil droit commun",
    image: imgEtatCivil,
    desc: "Naissances, mariages, décès et actes officiels",
    link: "/logiciels/etat-civil-droit-commun",
  },
  {
    title: "État civil coutumier",
    image: imgEtatCivilCoutumier,
    desc: "Registres coutumiers adaptés au droit local",
    link: "/logiciels/etat-civil-coutumier",
  },
  {
    title: "Élections",
    image: imgElections,
    desc: "Listes électorales, scrutins et résultats",
    link: "/logiciels/elections",
  },
  {
    title: "Population",
    image: imgPopulation,
    desc: "Fichier population et gestion des administrés",
    link: "/logiciels/population",
  },
  {
    title: "Régie",
    image: imgRegie,
    desc: "Encaissements, quittances et suivi des paiements",
    link: "/logiciels/regie",
  },
  {
    title: "Facturation enfance",
    image: imgFacturationEnfance,
    desc: "Cantine, périscolaire et activités enfance",
    link: "/logiciels/facturation-enfance",
  },
];

const avantages = [
  {
    icon: Shield,
    title: "Sécurité",
    desc: "Données protégées et conformes aux réglementations locales.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    desc: "Des outils fiables et optimisés pour les traitements quotidiens.",
  },
  {
    icon: Clock,
    title: "Disponibilité",
    desc: "Support réactif et maintenance régulière.",
  },
  {
    icon: Award,
    title: "Expertise",
    desc: "Plus de 30 ans d'expérience auprès des collectivités.",
  },
  {
    icon: Headphones,
    title: "Accompagnement",
    desc: "Formation, assistance et suivi dans la durée.",
  },
  {
    icon: Users,
    title: "Proximité",
    desc: "Une équipe locale, proche de vos besoins métier.",
  },
];

const actualites = [
  {
    date: "12 Avr 2026",
    title: "Mise à jour majeure du module Finance",
    excerpt: "De nouvelles fonctionnalités de reporting et de suivi financier sont désormais disponibles.",
  },
  {
    date: "28 Mar 2026",
    title: "Formation État civil à Lifou",
    excerpt: "Retour sur une session dédiée à l'accompagnement des agents sur le terrain.",
  },
  {
    date: "15 Mar 2026",
    title: "Nouveau partenariat technologique",
    excerpt: "BFC renforce son écosystème pour accompagner l'évolution des usages numériques.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const preuves = [
  {
    icon: BadgeCheck,
    value: "Depuis 1992",
    label: "Une expertise durable au service du secteur public",
  },
  {
    icon: MapPinned,
    value: "Expertise locale",
    label: "Des solutions pensées pour la Nouvelle-Calédonie",
  },
  {
    icon: Building2,
    value: "Collectivités",
    label: "Des outils adaptés aux réalités du terrain",
  },
];

const Index = () => (
  <Layout>
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.16),transparent_60%)]" />
      <div className="container relative grid items-center gap-14 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <span className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Solutions métiers pour les collectivités
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] text-primary-foreground md:text-5xl lg:text-6xl">
            La suite logicielle des collectivités en{" "}
            <span className="text-accent">Nouvelle-Calédonie</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-[1.8] text-primary-foreground/80">
            BFC conçoit des logiciels métiers pour accompagner la gestion financière,
            les services aux administrés et les besoins quotidiens des collectivités.
          </p>

          <p className="mt-3 max-w-xl text-base leading-[1.8] text-primary-foreground/60">
            Des solutions adaptées à la législation locale, portées par une équipe de proximité
            et plus de 30 ans d'expérience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/logiciels"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Découvrir nos logiciels
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Demander une démonstration
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
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white/5 shadow-2xl ring-1 ring-white/10">
            <img
              src={dashboardHero}
              alt="Dashboard logiciel BFC"
              width={1280}
              height={800}
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>

    <section className="-mt-8 relative z-10 pb-4">
      <div className="container">
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm md:grid-cols-3 md:p-6">
          {preuves.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl p-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-light">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{item.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Nos solutions"
          title="Une suite logicielle métier complète"
          description="Des outils conçus pour répondre aux exigences opérationnelles et réglementaires des collectivités."
        />

        <motion.div {...fadeUp} className="mb-16">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-light">
                <Calculator className="h-6 w-6 text-accent" />
              </div>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-foreground">
                  Comptabilité & Finance
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Une gamme complète d'outils pour piloter la gestion financière de la collectivité,
                  dans le respect des réglementations en vigueur.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {financeModules.map((m, i) => (
                <Link key={m.title} to={m.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group h-full overflow-hidden rounded-xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={m.image}
                        alt={m.title}
                        loading="lazy"
                        width={768}
                        height={512}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="mb-2 text-sm font-bold text-foreground">{m.title}</h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {m.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <Link
              to="/logiciels"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              Voir tous les modules Finance
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-light">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-foreground">
                  Gestion des administrés
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Des applications dédiées à l'administration locale, articulées autour d'une base administrés unique.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {administresModules.map((m, i) => (
                <Link key={m.title} to={m.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group h-full overflow-hidden rounded-xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={m.image}
                        alt={m.title}
                        loading="lazy"
                        width={768}
                        height={512}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-foreground">{m.title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {m.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <Link
              to="/logiciels/administres"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              Découvrir le module Administrés
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Pourquoi BFC"
          title="Une approche fondée sur l'expertise, la proximité et la fiabilité"
          description="Nous accompagnons les collectivités avec des outils robustes, un support réactif et une connaissance concrète des enjeux locaux."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {avantages.map((a, i) => (
            <motion.div
              key={a.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light">
                <a.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div {...fadeUp}>
            <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
              À propos de BFC
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Un partenaire historique des collectivités du Pacifique
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Créée en 1992, BFC développe des solutions informatiques pour répondre
              aux besoins croissants des collectivités dans les domaines de la gestion
              financière et des services aux administrés.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Grâce à la qualité de ses produits et de son accompagnement, BFC s'est imposée
              comme un partenaire de référence auprès des principales collectivités de
              Nouvelle-Calédonie et de Wallis-et-Futuna.
            </p>
            <Link
              to="/societe"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              En savoir plus sur BFC
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.12 }}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-background p-6 ring-1 ring-border">
                <p className="text-sm font-medium text-muted-foreground">Création</p>
                <p className="mt-2 text-3xl font-bold text-foreground">1992</p>
              </div>
              <div className="rounded-2xl bg-background p-6 ring-1 ring-border">
                <p className="text-sm font-medium text-muted-foreground">Implantation</p>
                <p className="mt-2 text-3xl font-bold text-foreground">Nouméa</p>
              </div>
              <div className="rounded-2xl bg-background p-6 ring-1 ring-border">
                <p className="text-sm font-medium text-muted-foreground">Spécialité</p>
                <p className="mt-2 text-xl font-bold text-foreground">Gestion publique locale</p>
              </div>
              <div className="rounded-2xl bg-background p-6 ring-1 ring-border">
                <p className="text-sm font-medium text-muted-foreground">Zone d'intervention</p>
                <p className="mt-2 text-xl font-bold text-foreground">NC & Wallis-et-Futuna</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading badge="Actualités" title="Les dernières nouvelles" />

        <div className="grid gap-6 md:grid-cols-3">
          {actualites.map((a, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {a.date}
                </div>
                <h3 className="font-bold text-foreground transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/actualites"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            Voir toutes les actualités
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-navy-gradient py-20">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Prêt à moderniser votre collectivité ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Contactez notre équipe pour découvrir des solutions adaptées à vos besoins
            et bénéficier d'un accompagnement de proximité.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            Contactez-nous
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;