import { NewNavigation } from "@/components/NewNavigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TrustedCompanies } from "@/components/TrustedCompanies";
import { Testimonials } from "@/components/Testimonials";
import { Diferenciais } from "@/components/Diferenciais";
import { BlocosPlanos } from "@/components/BlocosPlanos";
import { AcoesSociaisResumido } from "@/components/AcoesSociaisResumido";
import { DiretoriaResumida } from "@/components/DiretoriaResumida";
import { ClubeVantagensResumido } from "@/components/ClubeVantagensResumido";
import { QuemSomos } from "@/components/QuemSomos";
import { InstagramSection } from "@/components/InstagramSection";
import { IdssSection } from "@/components/IdssSection";
import { LocationSection } from "@/components/LocationSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { NewFooter } from "@/components/NewFooter";
import { QuickAccess } from "@/components/QuickAccess";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewNavigation />
      <HeroCarousel />
      <QuickAccess />
      <Testimonials />
      <TrustedCompanies />
      <Diferenciais />
      <BlocosPlanos />
      <AcoesSociaisResumido />
      <DiretoriaResumida />
      <ClubeVantagensResumido />
      <QuemSomos />
      <InstagramSection />
      <IdssSection />
      <LocationSection />
      <WhatsAppButton />
      <NewFooter />
    </div>
  );
};

export default Index;
