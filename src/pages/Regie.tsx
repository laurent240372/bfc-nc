import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Wallet,
  Receipt,
  Landmark,
  ShieldCheck,
  RefreshCw,
  FileText,
  ClipboardList,
  Printer,
  Banknote,
  CreditCard,
  Coins,
  Send,
  Users,
  FolderArchive,
  Search,
  BadgeCheck,
  Building2,
  TimerReset,
  FileSpreadsheet,
  Bell,
  Ticket,
  Layers,
  Gauge,
  Workflow,
  Database,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/regie.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const preuves = [
  {
    icon: Wallet,
    title: "Encaissements",
    desc: "Reçus, règlements simples ou multiples et suivi des clients.",
  },
  {
    icon: ShieldCheck,
    title: "Contrôle caisse",
    desc: "Clôtures journalières, pointages et états de contrôle.",
  },
  {
    icon: Landmark,
    title: "Trésorerie",
    desc: "Remises, versements et transferts réglementaires.",
  },
  {
    icon: Building2,
    title: "Collectivités",
    desc: "Une solution pensée pour les régies locales.",
  },
];

const moduleCards = [
  {
    icon: Receipt,
    title: "Saisie des encaissements",
    desc: "Création des reçus, identification du client, produits encaissés et gestion des paiements.",
  },
  {
    icon: Banknote,
    title: "Clôture de caisse",
    desc: "Contrôle du numéraire, fonds de caisse, décaissements et éditions de clôture.",
  },
  {
    icon: CreditCard,
    title: "Moyens de paiement",
    desc: "Espèces, chèques, cartes, CESU, tickets et règlements multiples.",
  },
  {
    icon: ClipboardList,
    title: "Rôles de facturation",
    desc: "Intégration des rôles, encaissements, impayés, dégrèvements et suivi complet.",
  },
];

const beneficesMetier = [
  {
    title: "Sécuriser",
    desc: "Encadrez les opérations sensibles : encaissement, annulation, clôture et remise.",
  },
  {
    title: "Contrôler",
    desc: "Disposez d’états journaliers et mensuels pour vérifier l’activité de la régie.",
  },
  {
    title: "Centraliser",
    desc: "Regroupez clients, reçus, produits, rôles, règlements et éditions dans un même outil.",
  },
  {
    title: "Fluidifier",
    desc: "Simplifiez les échanges avec la Trésorerie, la comptabilité et les sous-régies.",
  },
];

const regieBlocks = [
  {
    title: "Utilisation quotidienne",
    items: [
      "Ouverture de la régie et contrôle de la caisse",
      "Encaissements des administrés au guichet",
      "Gestion des règlements simples ou multiples",
      "Réimpression ou annulation encadrée des reçus",
    ],
  },
  {
    title: "Clôture & remises",
    items: [
      "Clôture de caisse journalière",
      "Décompte physique des espèces",
      "Remise de chèques et CESU",
      "Préparation des versements Trésor ou CCP",
    ],
  },
  {
    title: "Rôles & recouvrement",
    items: [
      "Intégration des rôles de facturation",
      "Prélèvements automatiques et rejets",
      "Lettres de rappel",
      "Transfert des impayés en Trésorerie ou comptabilité",
    ],
  },
];

const processSteps = [
  {
    icon: Layers,
    label: "Paramétrer la régie, les produits et les moyens de paiement",
  },
  {
    icon: Receipt,
    label: "Saisir les encaissements et éditer les reçus",
  },
  {
    icon: Gauge,
    label: "Contrôler, pointer et clôturer la caisse",
  },
  {
    icon: Send,
    label: "Transmettre les remises, rôles et états aux partenaires",
  },
];

const controleItems = [
  { icon: ShieldCheck, label: "Contrôle des encaissements journaliers" },
  { icon: Banknote, label: "Clôture du numéraire et fonds de caisse" },
  { icon: FileSpreadsheet, label: "États mensuels par type de règlement" },
  { icon: Printer, label: "Journal de caisse et bordereaux de versement" },
  { icon: Landmark, label: "Remises Trésor ou CCP" },
  { icon: Search, label: "Recherche des reçus, clients et factures" },
  { icon: BadgeCheck, label: "Annulations encadrées et traçables" },
  { icon: Database, label: "Vérification et épuration des données" },
];

const fonctionnalites = [
  "Configuration générale de la régie",
  "Gestion des produits encaissables",
  "Gestion des banques et moyens de paiement",
  "Saisie des encaissements",
  "Règlements simples ou multiples",
  "Clôture de caisse journalière",
  "Remises de chèques et CESU",
  "États de pointage",
  "Clôture mensuelle",
  "Gestion des rôles de facturation",
  "Prélèvements automatiques",
  "Lettres de rappel",
  "Transfert Trésorerie",
  "Transfert comptabilité",
  "Gestion client",
  "Sous-régie",
  "Vente de tickets",
  "Outils de maintenance",
];

const editionsItems = [
  { icon: FileText, label: "État journalier des reçus" },
  { icon: CreditCard, label: "État journalier des règlements" },
  { icon: ClipboardList, label: "Produits globalisés" },
  { icon: FileSpreadsheet, label: "États mensuels de contrôle" },
  { icon: Printer, label: "Bordereaux de remise" },
  { icon: Landmark, label: "Documents de clôture" },
  { icon: Bell, label: "Lettres de rappel" },
  { icon: FolderArchive, label: "Archives et extractions CSV" },
];

const optionsCards = [
  {
    icon: Users,
    title: "Sous-régie",
    desc: "Échanges d’informations entre régie principale et sous-régies, avec remontée des encaissements.",
  },
  {
    icon: Ticket,
    title: "Vente de tickets",
    desc: "Gestion de produits tickets, impression billetterie et vente rapide au guichet.",
  },
  {
    icon: RefreshCw,
    title: "Prélèvements",
    desc: "Émission, gestion des rejets et validation des prélèvements automatiques.",
  },
  {
    icon: FolderArchive,
    title: "Maintenance",
    desc: "Vérification, épuration, archivage et outils de dépannage accompagnés.",
  },
];

const Regie = () => (
  <Layout>
    <section className="relative overflow-hidden bg-navy-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.28),transparent_58%)]" />
      <div className="absolute right-[-12rem] top-8 h-[38rem] w-[38rem] rounded-full border border-white/10" />
      <div className="absolute right-[-7rem] top-24 h-[28rem] w-[28rem] rounded-full border border-white/10" />
      <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_left,hsl(217_91%_60%/0.12),transparent_55%)]" />

      <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,720px)] lg:items-center xl:gap-14">
        <motion.div {...fadeUp} className="relative z-10 max-w-xl pt-2 xl:max-w-2xl lg:pr-6">
          <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Gestion des administrés
          </span>

          <h1 className="max-w-[12ch] text-4xl font-bold tracking-tight leading-[1.05] text-primary-foreground md:text-5xl lg:max-w-[11ch] lg:text-6xl xl:text-[4.25rem]">
            Régie & <span className="text-accent">encaissements</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-[1.8] text-primary-foreground/80">
            Une solution complète pour gérer les encaissements, les reçus, les moyens
            de paiement, les clôtures de caisse et les remises.
          </p>

          <p className="mt-3 max-w-lg text-base leading-[1.8] text-primary-foreground/60">
            Rôles de facturation, prélèvements, états de contrôle, transferts vers la
            Trésorerie, sous-régie et vente de tickets dans un environnement métier structuré.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Demander une démo <ArrowRight className="h-4 w-4" />
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
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-accent/25 blur-[90px]" />

          <div className="relative z-10 w-full max-w-[500px] md:max-w-[650px] lg:max-w-[700px] xl:max-w-[740px]">
            <div className="rounded-[2rem] bg-gradient-to-br from-white/20 to-white/5 p-3 shadow-[0_35px_100px_rgba(4,17,44,0.50)] ring-1 ring-white/15 backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.20)]">
                <img
                  src={heroImg}
                  alt="Logiciel Régie BFC"
                  loading="eager"
                  decoding="async"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="-mt-8 relative z-10 pb-4">
      <div className="container">
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm md:grid-cols-2 xl:grid-cols-4 md:p-6">
          {preuves.map((item, i) => (
            <motion.div
              key={item.title}
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
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
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
          badge="Gestion intégrée"
          title="Un module complet pour la régie"
          description="Le logiciel couvre les principales opérations quotidiennes : encaissements, clôtures, remises, rôles, états et transferts."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {moduleCards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <c.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Bénéfices métier"
          title="Une régie plus sûre, plus claire et plus simple à contrôler"
          description="Le module structure les opérations sensibles et facilite le travail quotidien du régisseur."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {beneficesMetier.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-slate-50 to-white py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div {...fadeUp}>
          <SectionHeading
            badge="Pilotage"
            title="Pilotage & organisation"
            description="Une vision claire de l’activité de la régie, des encaissements, des clôtures et des rôles de facturation."
            center={false}
          />

          <div className="space-y-6">
            {regieBlocks.map((block) => (
              <div key={block.title}>
                <h4 className="mb-2 flex items-center gap-2 font-bold text-foreground">
                  <Receipt className="h-4 w-4 text-accent" />
                  {block.title}
                </h4>
                <ul className="space-y-1.5 pl-6">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <div className="rounded-[2rem] border border-border/80 bg-card p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Cycle de traitement
            </p>

            <h3 className="mt-4 text-2xl font-bold text-foreground">
              Une chaîne complète de l’encaissement au contrôle
            </h3>

            <div className="mt-8 space-y-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  {...fadeUp}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-start gap-4 rounded-2xl border border-border/80 bg-white/80 p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-light">
                    <step.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      0{i + 1}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-foreground">
                      {step.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Contrôle"
          title="Clôtures, pointages et états de contrôle"
          description="Des outils pour sécuriser la journée, contrôler la caisse et préparer les documents attendus."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {controleItems.map((c, i) => (
            <motion.div
              key={c.label}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                <c.icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-foreground">
                {c.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Options"
          title="Rôles, sous-régie, tickets et maintenance"
          description="Des fonctions complémentaires pour couvrir les organisations plus avancées et les besoins spécifiques."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {optionsCards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                <c.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            badge="Fonctionnalités clés"
            title="Les essentiels de la régie"
            description="Les briques indispensables pour gérer les encaissements, les rôles, les clôtures et les contrôles."
            center={false}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {fonctionnalites.map((f, i) => (
              <motion.div
                key={f}
                {...fadeUp}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            badge="Éditions"
            title="Éditions & contrôles"
            description="Un ensemble d’états pour justifier les encaissements, suivre les règlements et préparer les clôtures."
            center={false}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {editionsItems.map((e, i) => (
              <motion.div
                key={e.label}
                {...fadeUp}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-light">
                  <e.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium leading-relaxed text-foreground">
                  {e.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-navy-gradient py-20">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Demander une démonstration
          </h2>

          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-primary-foreground/70">
            Découvrez comment la solution Régie BFC peut sécuriser les encaissements
            et simplifier le quotidien de votre collectivité.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Demander une démonstration <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/logiciels/administres"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Découvrir les administrés
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Regie;