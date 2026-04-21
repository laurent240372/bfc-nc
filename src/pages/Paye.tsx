import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Wallet,
  FileSpreadsheet,
  BadgeCheck,
  Briefcase,
  Building2,
  RefreshCw,
  FileText,
  ShieldCheck,
  FolderArchive,
  Activity,
  Calculator,
  Landmark,
  Receipt,
  Send,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/paye-hero.png";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const moduleCards = [
  {
    icon: Briefcase,
    title: "Gestion des carrières",
    desc:
      "Création et suivi des carrières agents avec paramétrage précis des postes, catégories, services et informations administratives.",
  },
  {
    icon: Wallet,
    title: "Création des bulletins",
    desc:
      "Production des bulletins par période avec sélection des groupes et des agents concernés, dans une logique claire et sécurisée.",
  },
  {
    icon: RefreshCw,
    title: "Variables & recalculs",
    desc:
      "Ajustement des variables de paie, reports sur les bulletins suivants et prise en compte immédiate dans les traitements.",
  },
  {
    icon: BadgeCheck,
    title: "Validation des salaires",
    desc:
      "Clôture des bulletins, contrôle des traitements en cours et validation des salaires avant transfert vers la comptabilité.",
  },
  {
    icon: FileSpreadsheet,
    title: "Déclarations sociales",
    desc:
      "Gestion des déclarations CAFAT, CLR et mutuelles avec génération des fichiers numériques et télétransmissions associées.",
  },
  {
    icon: FolderArchive,
    title: "Documents & Xemelios",
    desc:
      "Intégration des documents agents et alimentation des flux Xemelios avec gestion des pièces jointes liées aux dossiers.",
  },
];

const benefitsCards = [
  {
    icon: ShieldCheck,
    title: "Production sécurisée",
    text:
      "Contrôles, validations et étapes de traitement structurées pour fiabiliser la production mensuelle des bulletins.",
  },
  {
    icon: BadgeCheck,
    title: "Conformité réglementaire",
    text:
      "Déclarations sociales, états réglementaires et flux attendus par les organismes intégrés au même environnement.",
  },
  {
    icon: Landmark,
    title: "Interopérabilité comptable",
    text:
      "Transfert des salaires vers la comptabilité via génération de flux PES pour fluidifier la chaîne jusqu'à la Trésorerie.",
  },
];

const highlights = [
  {
    icon: Building2,
    title: "Cycle complet de la paie",
    text:
      "De la carrière agent à l'édition du bulletin, la solution couvre l'ensemble des étapes métier avec une interface opérationnelle pensée pour les collectivités.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité réglementaire",
    text:
      "Le logiciel accompagne la production des états, déclarations et flux attendus par les organismes et les partenaires institutionnels.",
  },
  {
    icon: Landmark,
    title: "Passerelle vers la comptabilité",
    text:
      "Les salaires peuvent être transférés en comptabilité via génération de flux PES pour fluidifier la chaîne de traitement jusqu'à la Trésorerie.",
  },
  {
    icon: Activity,
    title: "Suivi RH complémentaire",
    text:
      "Gestion des visites médicales, suivi des informations agents et centralisation des éléments utiles au pilotage quotidien.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Créer ou mettre à jour la carrière",
    text:
      "Le dossier agent intègre les éléments de carrière nécessaires à la paie : dates, service, emploi, catégorie, grade, échelon et paramètres associés.",
  },
  {
    number: "02",
    title: "Préparer la période de paie",
    text:
      "Les bulletins sont créés par période avec possibilité de cibler un groupe ou une sélection d'agents selon l'organisation de la collectivité.",
  },
  {
    number: "03",
    title: "Contrôler et ajuster",
    text:
      "Les variables de bulletin peuvent être modifiées avant validation afin d'intégrer les ajustements nécessaires aux traitements de paie.",
  },
  {
    number: "04",
    title: "Valider puis transmettre",
    text:
      "Après clôture, les salaires sont transférables vers la comptabilité et les déclarations sociales peuvent être produites dans le même environnement métier.",
  },
];

const regulatoryCards = [
  {
    icon: Receipt,
    title: "CAFAT",
    desc:
      "Génération des fichiers déclaratifs numériques à déposer sur les plateformes dédiées.",
  },
  {
    icon: FileText,
    title: "CLR",
    desc:
      "Production des documents déclaratifs, formats PDF ou numériques et télétransmission selon les besoins.",
  },
  {
    icon: Send,
    title: "Mutuelle des fonctionnaires",
    desc:
      "Bordereaux récapitulatifs et envois associés dans un flux simple et opérationnel.",
  },
  {
    icon: Calculator,
    title: "État aux caisses",
    desc:
      "Éditions récapitulatives, détail par agent et export Excel pour contrôle et exploitation.",
  },
];

export default function Paye() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy-gradient py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.16),transparent_60%)]" />

        <div className="container relative grid items-center gap-14 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <span className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
              Module Paie
            </span>

            <h1 className="text-4xl font-bold leading-[1.05] text-primary-foreground md:text-5xl lg:text-6xl">
              Gestion de la <span className="text-accent">paie</span> &
              <br />
              ressources humaines
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-[1.8] text-primary-foreground/80">
              Une solution complète pour gérer les carrières, produire les bulletins,
              piloter les validations, générer les déclarations réglementaires et
              transmettre les flux vers la comptabilité.
            </p>

            <p className="mt-3 max-w-xl text-base leading-[1.8] text-primary-foreground/70">
              Gestion des agents, variables de paie, états réglementaires, transfert PES
              et suivi documentaire dans un environnement métier conçu pour les collectivités.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-95"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/logiciels"
                className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Tous les modules
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-start justify-center lg:justify-end lg:self-start lg:pt-8 xl:pt-10"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,hsl(217_91%_60%/0.24),transparent_70%)] blur-3xl" />

            <div className="relative z-10 w-full max-w-[560px] overflow-visible md:max-w-[720px] lg:max-w-[860px] xl:max-w-[980px]">
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white/5 shadow-[0_30px_80px_rgba(4,17,44,0.45)] ring-1 ring-white/10 backdrop-blur-sm">
                <img
                  src={heroImg}
                  alt="Logiciel de paie BFC"
                  loading="eager"
                  decoding="async"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="-mt-8 relative z-10 pb-4">
        <div className="container">
          <div className="grid gap-4 rounded-2xl border border-primary-foreground/10 bg-[rgba(10,28,74,0.92)] p-4 shadow-[0_20px_50px_rgba(4,17,44,0.25)] backdrop-blur md:grid-cols-3 md:p-6">
            {benefitsCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-xl p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp}>
            <SectionHeading
              badge="Fonctionnalités"
              title="Une couverture métier complète pour la paie"
              description="Le logiciel accompagne les services dans la gestion quotidienne des agents, des traitements de paie et des obligations déclaratives."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {moduleCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-blue-light p-3 text-accent ring-1 ring-blue-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              {...fadeUp}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 lg:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Pilotage opérationnel
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Une chaîne de traitement fluide, de l&apos;agent à la Trésorerie
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                La solution met en avant une logique métier complète : gestion structurée
                des agents, production fiable des bulletins, validation sécurisée et
                ouverture vers la comptabilité comme vers les organismes déclaratifs.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-blue-light p-3 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Processus"
              title="Un workflow métier clair et sécurisé"
              description="Chaque étape suit une logique simple pour sécuriser la production de la paie et fluidifier le travail des équipes."
              align="center"
              theme="dark"
            />
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-sm font-semibold tracking-[0.2em] text-blue-300">
                  {step.number}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Déclarations & éditions"
              title="Les obligations réglementaires intégrées au quotidien"
              description="Le module centralise les productions attendues pour les organismes sociaux et facilite les contrôles avant transmission."
              align="center"
            />
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {regulatoryCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-accent shadow-sm ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white shadow-2xl shadow-slate-200/60 md:p-12"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Pourquoi choisir BFC
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Une paie pensée pour les exigences terrain des collectivités
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  La solution combine gestion administrative, production des bulletins,
                  déclarations réglementaires, suivi documentaire et intégration comptable
                  dans un environnement cohérent, robuste et simple à exploiter.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Création et suivi des carrières agents",
                  "Bulletins, variables, validation et suppression sécurisée",
                  "CAFAT, CLR, mutuelles et états aux caisses",
                  "Xemelios, documents agents et transfert comptable PES",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-10 text-center shadow-sm md:px-10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Vous souhaitez moderniser la gestion de la paie de votre collectivité ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Découvrez une solution métier complète, connectée à vos processus de gestion,
              conçue pour sécuriser les traitements et simplifier le quotidien des équipes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Demander une démonstration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/logiciels/comptabilite"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-accent"
              >
                Découvrir la comptabilité
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}