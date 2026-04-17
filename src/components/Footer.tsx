import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoBfc from "@/assets/logoNonTransparent.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-5 inline-flex rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
            <img
              src={logoBfc}
              alt="BFC Nouvelle-Calédonie"
              className="h-12 w-auto"
            />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Depuis 1992
          </p>

          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            BFC développe des solutions informatiques dédiées aux collectivités,
            avec une expertise reconnue en gestion financière et en services aux administrés
            en Nouvelle-Calédonie et à Wallis-et-Futuna.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Solutions
          </h4>
          <div className="flex flex-col gap-2.5">
            <Link
              to="/logiciels/comptabilite"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Comptabilité / Finance
            </Link>
            <Link
              to="/logiciels/administres"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Gestion des administrés
            </Link>
            <Link
              to="/formations"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Formations
            </Link>
            <Link
              to="/services"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Services & Assistance
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Entreprise
          </h4>
          <div className="flex flex-col gap-2.5">
            <Link
              to="/societe"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              La société
            </Link>
            <Link
              to="/partenaires"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Partenaires
            </Link>
            <Link
              to="/actualites"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Actualités
            </Link>
            <Link
              to="/contact"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Contact
          </h4>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span>(687) 43 21 62</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <span>assistance@bfc.nc</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="leading-relaxed">
                14 rue Théodore Monod<br />
                Immeuble Arbé<br />
                BP 1519<br />
                98830 Dumbéa<br />
                Nouvelle-Calédonie
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} BFC Nouvelle-Calédonie. Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link to="/mentions-legales" className="transition-colors hover:text-accent">
            Mentions légales
          </Link>
          <Link to="/politique-confidentialite" className="transition-colors hover:text-accent">
            Confidentialité
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;