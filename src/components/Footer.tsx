import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoBfc from "@/assets/logo-bfc.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4">
            <img src={logoBfc} alt="BFC Nouvelle-Calédonie" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Éditeur de logiciels pour les collectivités de Nouvelle-Calédonie. Plus de 20 ans d'expertise au service du secteur public.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Solutions</h4>
          <div className="flex flex-col gap-2">
            <Link to="/logiciels/comptabilite" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Comptabilité / Finance</Link>
            <Link to="/logiciels/administres" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Gestion des administrés</Link>
            <Link to="/formations" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Formations</Link>
            <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Services & Assistance</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Entreprise</h4>
          <div className="flex flex-col gap-2">
            <Link to="/societe" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">La société</Link>
            <Link to="/partenaires" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Partenaires</Link>
            <Link to="/actualites" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Actualités</Link>
            <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Phone className="h-4 w-4 text-accent" /> +687 28 XX XX
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="h-4 w-4 text-accent" /> contact@bfc.nc
            </div>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4 text-accent mt-0.5" /> Nouméa, Nouvelle-Calédonie
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} BFC Nouvelle-Calédonie. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
