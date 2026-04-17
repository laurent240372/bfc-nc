import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoBfc from "@/assets/logo-bfc.png";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "La société", path: "/societe" },
  {
    label: "Logiciels",
    path: "/logiciels",
    children: [
      { label: "Comptabilité / Finance", path: "/logiciels/comptabilite" },
      { label: "Gestion des administrés", path: "/logiciels/administres" },
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

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-white/92 backdrop-blur-xl shadow-sm">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center">
          <div className="inline-flex items-center rounded-xl bg-white px-3 py-2 ring-1 ring-slate-200 shadow-sm">
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
                  className={`inline-flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive(item.path)
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                            isActive(child.path)
                              ? "bg-accent/10 text-accent"
                              : "text-slate-600 hover:bg-slate-100 hover:text-accent"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive(item.path)
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
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "bg-accent/10 text-accent"
                        : "text-slate-700 hover:bg-slate-100 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.children?.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className={`ml-3 block rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive(child.path)
                          ? "bg-accent/10 text-accent"
                          : "text-slate-600 hover:bg-slate-100 hover:text-accent"
                      }`}
                    >
                      {child.label}
                    </Link>
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