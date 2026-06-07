import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Idss from "./pages/Idss";
import Privacidade from "./pages/Privacidade";
import Cooperado from "./pages/Cooperado";
import ClinicasRadiologicas from "./pages/ClinicasRadiologicas";
import EncontreDentista from "./pages/EncontreDentista";
import NotFound from "./pages/NotFound";
import { PrivacyPopup } from "@/components/PrivacyPopup"; // 👈 ADICIONE ESTA LINHA

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/idss" element={<Idss />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/cooperado" element={<Cooperado />} />
          <Route path="/clinicas-radiologicas" element={<ClinicasRadiologicas />} />
          <Route path="/encontre-dentista" element={<EncontreDentista />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* 👈 ADICIONE O POPUP AQUI (FORA DO Routes) */}
        <PrivacyPopup />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;