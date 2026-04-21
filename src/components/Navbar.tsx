import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import logoBfc from "@/assets/logo-bfc.png";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "La société", path: "/societe" },
  {
    label: "Logiciels",
    path: "/logiciels",
    children: [
      {
        label: "Comptabilité & Finance",
        items: [
          { label: "Comptabilité", path: "/logiciels/comptabilite" },
          { label: "Gestion des biens", path: "/logiciels/gestion-des-biens" },
          { label: "Tableaux de bord", path: "/logiciels/tableaux-bord" },
          { label: "Emprunts & dette", path: "/logiciels/emprunts" },
          { label: "Paie", path: "/logiciels/paie" },
        ],
      },
      {
        label: "Gestion des administrés",
        items: [
          {
            label: "État civil droit commun",
            path: "/logiciels/etat-civil-droit-commun",
          },
          {
            label: "État civil coutumier",
            path: "/logiciels/etat-civil-coutumier",
          },
          {
            label: "Élections",
            path: "/logiciels/elections",
          },
          {
            label: "Population",
            path: "/logiciels/population",
          },
          {
            label: "Régie",
            path: "/logiciels/regie",
          },
          {
            label: "Facturation enfance",
            path: "/logiciels/facturation-enfance",
          },
        ],
      },
    ],
  },
  { label: "Formations", path: "/formations" },
  { label: "Services", path: "/services" },
  { label: "Partenaires", path: "/partenaires" },
  { label: "Actualités", path: "/actualites" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  const hasActiveChild = (
    children: { label: string; items: { label: string; path: string }[] }[]
  ) => {
    return children.some((group) => group.items.some((item) => isActive(item.path)));
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-white/92 backdrop-blur-xl shadow-sm">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center">
          <div className="inline-flex items-center rounded-xl bg-white px-3 py-2 ring-1 ring-slate-200 shadow-sm transition hover:shadow-md">
            <img
              src={logoBfc}
              alt="BFC Nouvelle-Calédonie"
              className="h-12 w-auto object-contain"
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`inline-flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${isActive(item.path) || hasActiveChild(item.children)
                    ? "bg-accent/10 text-accent"
                    : "text-slate-600 hover:bg-slate-100 hover:text-accent"
                    }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full mt-3 w-[560px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                    >
                      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-5 py-4">
                        <div className="flex items-center gap-2 text-accent">
                          <Sparkles className="h-4 w-4" />
                          <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                            Solutions métiers
                          </p>
                        </div>
                        <p className="mt-2 text-sm text-slate-600">
                          Découvrez les modules BFC conçus pour les collectivités.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 p-4">
                        {item.children.map((group) => (
                          <div
                            key={group.label}
                            className="rounded-xl border border-slate-200 bg-slate-50/70 p-3"
                          >
                            <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                              {group.label}
                            </p>

                            <div className="mt-2 space-y-1.5">
                              {group.items.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`group block rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${isActive(child.path)
                                    ? "bg-accent/10 text-accent"
                                    : "text-slate-700 hover:bg-white hover:text-accent hover:shadow-sm"
                                    }`}
                                >
                                  <span className="inline-flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-accent" />
                                    {child.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${isActive(item.path)
                  ? "bg-accent/10 text-accent"
                  : "text-slate-600 hover:bg-slate-100 hover:text-accent"
                  }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            Nous contacter
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive(item.path)
                      ? "bg-accent/10 text-accent"
                      : "text-slate-700 hover:bg-slate-100 hover:text-accent"
                      }`}
                  >
                    {item.label}
                  </Link>

                  {item.children?.map((group) => (
                    <div key={group.label} className="ml-3 mt-2 rounded-xl bg-slate-50 p-2">
                      <p className="px-2 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {group.label}
                      </p>

                      {group.items.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${isActive(child.path)
                            ? "bg-accent/10 text-accent"
                            : "text-slate-600 hover:bg-white hover:text-accent"
                            }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;