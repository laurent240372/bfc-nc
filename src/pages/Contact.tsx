import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Contact = () => {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Votre message a bien été envoyé. Nous reviendrons vers vous rapidement.");
    setForm({ nom: "", email: "", sujet: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-navy-gradient py-20">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-4">
              Contact
            </span>
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
              Contactez-nous
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
              Une question, une demande de devis ou une démonstration ? Notre équipe est à votre écoute.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-5">
          <motion.div {...fadeUp} className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-foreground mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="votre@email.nc"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Sujet</label>
                <input
                  type="text"
                  required
                  value={form.sujet}
                  onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Demande de démonstration, support, etc."
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Décrivez votre besoin..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-all w-fit"
              >
                Envoyer <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Nos coordonnées</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Téléphone</h3>
                  <p className="text-sm text-muted-foreground">+687 28 XX XX</p>
                  <p className="text-xs text-muted-foreground mt-1">Lun - Ven : 7h30 - 16h30</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">contact@bfc.nc</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Adresse</h3>
                  <p className="text-sm text-muted-foreground">Nouméa, Nouvelle-Calédonie</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
