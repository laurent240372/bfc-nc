import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Societe from "./pages/Societe";
import Logiciels from "./pages/Logiciels";
import Comptabilite from "./pages/Comptabilite";
import Administres from "./pages/Administres";
import GestionBiens from "./pages/GestionBiens";
import Emprunts from "./pages/Emprunts";
import TableauxBord from "./pages/TableauxBord";
import Paye from "./pages/Paye";
import EtatCivilDroitCommun from "./pages/EtatCivilDroitCommun";
import EtatCivilCoutumier from "./pages/EtatCivilCoutumier";
import Formations from "./pages/Formations";
import Services from "./pages/Services";
import Partenaires from "./pages/Partenaires";
import Actualites from "./pages/Actualites";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/societe" element={<Societe />} />
          <Route path="/logiciels" element={<Logiciels />} />
          <Route path="/logiciels/comptabilite" element={<Comptabilite />} />
          <Route path="/logiciels/gestion-des-biens" element={<GestionBiens />} />
          <Route path="/logiciels/emprunts" element={<Emprunts />} />
          <Route path="/logiciels/tableaux-bord" element={<TableauxBord />} />
          <Route path="/logiciels/paie" element={<Paye />} />
          <Route
            path="/logiciels/etat-civil-droit-commun"
            element={<EtatCivilDroitCommun />}
          />
          <Route
            path="/logiciels/etat-civil-coutumier"
            element={<EtatCivilCoutumier />}
          />
          <Route path="/logiciels/administres" element={<Administres />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;