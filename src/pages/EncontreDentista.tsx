import { useEffect } from 'react';
import { NewNavigation } from "@/components/NewNavigation";
import { Footer } from "@/components/Footer";

const EncontreDentista = () => {
  useEffect(() => {
    window.location.href = "https://unidental.s4e.com.br/SYS/Rede_Atendimento/Rede_Atendimento.aspx?modal=1";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <NewNavigation />
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D3232A] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Redirecionando para a rede de atendimento...</p>
          <p className="text-gray-400 text-sm mt-2">Aguarde um momento</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EncontreDentista;