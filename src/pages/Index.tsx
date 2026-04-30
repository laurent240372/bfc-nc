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
  Sparkles,
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
    desc: "Budget, mandats, titres et suivi financier complet.",
    link: "/logiciels/comptabilite",
  },
  {
    title: "Gestion des biens",
    image: imgGestionBiens,
    desc: "Patrimoine, amortissements, inventaire et Trésorerie.",
    link: "/logiciels/gestion-des-biens",
  },
  {
    title: "Tableaux de bord",
    image: imgTableauxBord,
    desc: "Indicateurs, analyse financière et pilotage.",
    link: "/logiciels/tableaux-bord",
  },
  {
    title: "Emprunts & dette",
    image: imgEmprunts,
    desc: "Simulation, suivi de l’endettement et dette.",
    link: "/logiciels/emprunts",
  },
  {
    title: "Paie",
    image: imgPaie,
    desc: "Bulletins, carrière, congés et mandatement.",
    link: "/logiciels/paie",
  },
];

const administresModules = [
  {
    title: "État civil droit commun",
    image: imgEtatCivil,
    desc: "Naissances, mariages, décès et actes officiels.",
    link: "/logiciels/etat-civil-droit-commun",
  },
  {
    title: "État civil coutumier",
    image: imgEtatCivilCoutumier,
    desc: "Registres coutumiers adaptés au droit local.",
    link: "/logiciels/etat-civil-coutumier",
  },
  {
    title: "Élections",
    image: imgElections,
    desc: "Listes électorales, scrutins et résultats.",
    link: "/logiciels/elections",
  },
  {
    title: "Population",
    image: imgPopulation,
    desc: "Fichier population et gestion des administrés.",
    link: "/logiciels/population",
  },
  {
    title: "Régie",
    image: imgRegie,
    desc: "Encaissements, quittances et paiements.",
    link: "/logiciels/regie",
  },
  {
    title: "Facturation enfance",
    image: imgFacturationEnfance,
    desc: "Cantine, périscolaire et activités enfance.",
    link: "/logiciels/facturation-enfance",
  },
];

const avantages = [
  { icon: Shield, title: "Sécurité", desc: "Données protégées et conformes aux réglementations locales." },
  { icon: TrendingUp, title: "Performance", desc: "Des outils fiables et optimisés pour les traitements quotidiens." },
  { icon: Clock, title: "Disponibilité", desc: "Support réactif et maintenance régulière." },
  { icon: Award, title: "Expertise", desc: "Plus de 30 ans d'expérience auprès des collectivités." },
  { icon: Headphones, title: "Accompagnement", desc: "Formation, assistance et suivi dans la durée." },
  { icon: Users, title: "Proximité", desc: "Une équipe locale, proche de vos besoins métier." },
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

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const ModuleCard = ({ m, i }: { m: any; i: number }) => (
  <Link key={m.title} to={m.link}>
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.06 }}
      className="group h-full overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-blue-50">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-blue-500/10" />
        <img
          src={m.image}
          alt={m.title}
          loading="lazy"
          width={768}
          height={512}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h4 className="text-sm font-bold text-slate-950 transition group-hover:text-accent">
          {m.title}
        </h4>
        <p className="mt-2 text-xs leading-6 text-slate-600">{m.desc}</p>
      </div>
    </motion.div>
  </Link>
);

const Index = () => (
  <Layout>
    <section className="relative overflow-hidden bg-navy-gradient py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.22),transparent_58%)]" />
      <div className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute left-10 bottom-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeUp}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Solutions métiers pour les collectivités
          </span>

          <h1 className="text-4xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-6xl">
            La suite logicielle des collectivités en{" "}
            <span className="text-accent">Nouvelle-Calédonie</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
            BFC conçoit des logiciels métiers pour accompagner la gestion financière,
            les services aux administrés et les besoins quotidiens des collectivités.
          </p>

          <p className="mt-3 max-w-xl text-base leading-8 text-primary-foreground/60">
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
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-[2rem] bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-6 left-12 right-12 h-16 rounded-full bg-slate-950/35 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_35px_90px_rgba(4,17,44,0.55)] ring-1 ring-white/10 backdrop-blur">
            <div className="overflow-hidden rounded-[1.4rem] bg-white">
              <img
                src={dashboardHero}
                alt="Dashboard logiciel BFC"
                width={1280}
                height={800}
                className="w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="-mt-10 relative z-10 pb-8">
      <div className="container">
        <div className="grid gap-4 rounded-[1.75rem] border border-white/70 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur md:grid-cols-3 md:p-6">
          {preuves.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl p-4 transition hover:bg-blue-50/70"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-light ring-1 ring-blue-100">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-slate-950">{item.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative">
        <SectionHeading
          badge="Nos solutions"
          title="Une suite logicielle métier complète"
          description="Des outils conçus pour répondre aux exigences opérationnelles et réglementaires des collectivités."
        />

        <motion.div {...fadeUp} className="mb-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur md:p-10">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-light ring-1 ring-blue-100">
                <Calculator className="h-6 w-6 text-accent" />
              </div>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-slate-950">Comptabilité & Finance</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Une gamme complète d'outils pour piloter la gestion financière de la collectivité,
                  dans le respect des réglementations en vigueur.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {financeModules.map((m, i) => (
                <ModuleCard key={m.title} m={m} i={i} />
              ))}
            </div>

            <Link
              to="/logiciels"
              className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-accent transition hover:translate-x-1"
            >
              Voir tous les modules Finance
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur md:p-10">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-light ring-1 ring-blue-100">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-slate-950">Gestion des administrés</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Des applications dédiées à l'administration locale, articulées autour d'une base administrés unique.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {administresModules.map((m, i) => (
                <ModuleCard key={m.title} m={m} i={i} />
              ))}
            </div>

            <Link
              to="/logiciels/administres"
              className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-accent transition hover:translate-x-1"
            >
              Découvrir le module Administrés
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="bg-white py-20 md:py-28">
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
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-light ring-1 ring-blue-100">
                <a.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-slate-950">{a.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container">
        <div className="grid items-center gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div {...fadeUp}>
            <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
              À propos de BFC
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">
              Un partenaire historique des collectivités du Pacifique
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Créée en 1992, BFC développe des solutions informatiques pour répondre
              aux besoins croissants des collectivités dans les domaines de la gestion
              financière et des services aux administrés.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Grâce à la qualité de ses produits et de son accompagnement, BFC s'est imposée
              comme un partenaire de référence auprès des principales collectivités de
              Nouvelle-Calédonie et de Wallis-et-Futuna.
            </p>
            <Link
              to="/societe"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:translate-x-1"
            >
              En savoir plus sur BFC
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.12 }}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Création", "1992"],
                ["Implantation", "Nouméa"],
                ["Spécialité", "Gestion publique locale"],
                ["Zone d'intervention", "NC & Wallis-et-Futuna"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <p className="text-sm font-medium text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading badge="Actualités" title="Les dernières nouvelles" />

        <div className="grid gap-6 md:grid-cols-3">
          {actualites.map((a, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <div className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70">
                <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="h-3 w-3" />
                  {a.date}
                </div>
                <h3 className="font-bold text-slate-950 transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{a.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/actualites"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition hover:translate-x-1"
          >
            Voir toutes les actualités
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-navy-gradient py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.18),transparent_60%)]" />
      <div className="container relative text-center">
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