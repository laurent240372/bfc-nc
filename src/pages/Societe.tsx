import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Target,
  Briefcase,
  CheckCircle,
  ArrowRight,
  MapPinned,
  BadgeCheck,
  CalendarDays,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import logoBfc from "@/assets/logo-BFC-FondBlanc.png";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const clients = [
  "Mairie de Nouméa",
  "Province Sud",
  "Province Nord",
  "Province des Îles Loyauté",
  "Mairie de Dumbéa",
  "Mairie de Mont-Dore",
  "Mairie de Païta",
  "Mairie de Koné",
];

const stats = [
  { icon: CalendarDays, label: "Création de BFC", value: "1992" },
  { icon: Users, label: "Collectivités accompagnées", value: "30+" },
  { icon: Target, label: "Modules métiers déployés", value: "50+" },
  { icon: Briefcase, label: "Ans d’expérience", value: "30+" },
];

const proofs = [
  {
    icon: BadgeCheck,
    title: "Depuis 1992",
    text: "Plus de 30 ans d’expertise dans les logiciels métiers pour collectivités.",
  },
  {
    icon: MapPinned,
    title: "Expertise locale",
    text: "Des solutions pensées pour les réalités réglementaires de Nouvelle-Calédonie.",
  },
  {
    icon: Building2,
    title: "Proximité",
    text: "Une équipe basée à Nouméa pour accompagner les utilisateurs au quotidien.",
  },
];

const Societe = () => (
  <Layout>
    <section className="relative overflow-hidden bg-navy-gradient py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.22),transparent_58%)]" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeUp}>
          <span className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            La société
          </span>

          <h1 className="text-4xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-6xl">
            Une expertise locale au service des collectivités depuis{" "}
            <span className="text-accent">1992</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
            BFC conçoit et édite des logiciels métiers pour accompagner la gestion
            financière et les services aux administrés des collectivités de
            Nouvelle-Calédonie et de Wallis-et-Futuna.
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
              Nous contacter
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute -inset-10 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-6 left-16 right-16 h-16 rounded-full bg-slate-950/35 blur-2xl" />

          <div className="relative max-w-[560px] rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-[0_35px_90px_rgba(4,17,44,0.55)] ring-1 ring-white/10 backdrop-blur">
            <img
              src={logoBfc}
              alt="Logo BFC"
              width={900}
              height={520}
              className="w-full object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>

    <section className="-mt-10 relative z-10 pb-10">
      <div className="container">
        <div className="grid gap-4 rounded-[1.75rem] border border-white/70 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur md:grid-cols-3 md:p-6">
          {proofs.map((item, i) => (
            <motion.div
              key={item.title}
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
                <p className="font-semibold text-slate-950">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="container relative grid gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Notre histoire
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Une entreprise née d’un besoin local, devenue un partenaire de confiance
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            BFC est née en 1992 de la volonté d’accompagner les collectivités locales
            dans leur transformation numérique et la modernisation de leurs outils de
            gestion.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Basée à Nouméa, notre équipe assure un accompagnement personnalisé :
            installation, formation, support technique, maintenance et évolution des
            solutions selon les besoins métier.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:-translate-y-0.5 hover:opacity-95"
          >
            Contacter l’équipe
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.1 }}>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-light ring-1 ring-blue-100">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="text-3xl font-bold text-slate-950">{s.value}</div>
                <div className="mt-1 text-sm leading-relaxed text-slate-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading badge="Nos clients" title="Ils nous font confiance" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium text-slate-800">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container">
        <motion.div
          {...fadeUp}
          className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12"
        >
          <SectionHeading
            badge="Recrutement"
            title="Rejoignez notre équipe"
            description="Nous recherchons des talents passionnés par la tech et le service public. Envoyez votre candidature !"
            align="center"
          />

          <a
            href="mailto:recrutement@bfc.nc"
            className="mt-8 inline-flex rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Postuler par email
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Societe;