import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  BadgeCheck,
  Building2,
} from "lucide-react";
import logoBfc from "@/assets/logo-BFC-FondBlanc.png";

const adresseBfc =
  "14 rue Théodore Monod, Immeuble Arbé, BP 1519, 98830 Dumbéa, Nouvelle-Calédonie";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(adresseBfc);

const Footer = () => (
  <footer className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.18),transparent_58%)]" />
    <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
    <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

    <div className="container relative py-16">
      <div className="mb-12 grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur md:grid-cols-3">
        {[
          {
            icon: BadgeCheck,
            title: "Depuis 1992",
            text: "Plus de 30 ans d’expertise métier.",
          },
          {
            icon: Building2,
            title: "Collectivités",
            text: "Des solutions pensées pour le secteur public.",
          },
          {
            icon: MapPin,
            title: "Nouvelle-Calédonie",
            text: "Une équipe locale proche du terrain.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-2xl p-4 transition hover:bg-white/[0.06]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 ring-1 ring-accent/20">
              <item.icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/65">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.9fr_0.9fr_1.25fr]">
        <div>
          <div className="mb-6 inline-flex rounded-2xl bg-white p-4 shadow-2xl shadow-black/20 ring-1 ring-white/40">
            <img
              src={logoBfc}
              alt="BFC Nouvelle-Calédonie"
              className="h-12 w-auto"
            />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Logiciels métiers pour collectivités
          </p>

          <p className="max-w-sm text-sm leading-7 text-white/70">
            BFC développe des solutions informatiques dédiées aux collectivités,
            avec une expertise reconnue en gestion financière et en services aux
            administrés en Nouvelle-Calédonie et à Wallis-et-Futuna.
          </p>

          <Link
            to="/societe"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:translate-x-1"
          >
            Découvrir BFC
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Solutions
          </h4>
          <div className="flex flex-col gap-3">
            {[
              ["Comptabilité / Finance", "/logiciels/comptabilite"],
              ["Gestion des administrés", "/logiciels/administres"],
              ["Formations", "/formations"],
              ["Services & Assistance", "/services"],
            ].map(([label, href]) => (
              <Link
                key={label}
                to={href}
                className="group inline-flex items-center gap-2 text-sm text-white/65 transition-all hover:translate-x-1 hover:text-accent"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/25 transition group-hover:bg-accent" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Entreprise
          </h4>
          <div className="flex flex-col gap-3">
            {[
              ["La société", "/societe"],
              ["Partenaires", "/partenaires"],
              ["Actualités", "/actualites"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                to={href}
                className="group inline-flex items-center gap-2 text-sm text-white/65 transition-all hover:translate-x-1 hover:text-accent"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/25 transition group-hover:bg-accent" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Contact
          </h4>

          <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="flex items-center gap-3 text-sm text-white/80">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              <span>(687) 43 21 62</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/80">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Mail className="h-4 w-4 text-accent" />
              </div>
              <span>assistance@bfc.nc</span>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Voir l’emplacement de BFC sur Google Maps"
              className="group flex items-start gap-3 rounded-2xl border border-accent/25 bg-accent/10 p-3 text-sm text-white/85 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/15 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-lg shadow-accent/25 ring-4 ring-accent/15 transition group-hover:scale-105">
                <MapPin className="h-5 w-5" />
              </div>

              <span className="leading-relaxed">
                <span className="mb-1 block font-semibold text-white">
                  Nous localiser
                </span>
                14 rue Théodore Monod
                <br />
                Immeuble Arbé
                <br />
                BP 1519
                <br />
                98830 Dumbéa
                <br />
                Nouvelle-Calédonie
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} BFC Nouvelle-Calédonie. Tous droits
          réservés.
        </p>

        <div className="flex flex-wrap gap-5">
          <Link
            to="/mentions-legales"
            className="transition-colors hover:text-accent"
          >
            Mentions légales
          </Link>
          <Link
            to="/politique-confidentialite"
            className="transition-colors hover:text-accent"
          >
            Confidentialité
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;