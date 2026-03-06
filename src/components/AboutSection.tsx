import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";

export const AboutSection = () => {
  return (
    <section className="py-20 pb-32 bg-primary text-white relative overflow-hidden">
      <WatermarkPattern />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            QUEM SOMOS NÓS
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
          
          <div className="space-y-6 text-center text-lg leading-relaxed">
            <p className="font-semibold text-xl">
              "Nossa missão é promover o crescimento dos nossos cooperados e oferecer à sociedade uma odontologia acessível, humana e de excelência."
            </p>
            
            <p>
              Há mais de 25 anos, a Unidental é reconhecida pelos bons serviços prestados à comunidade cearense.
              Como cooperativa odontológica, seguimos os princípios do cooperativismo e acreditamos no nosso papel como veículo de transformação social.
            </p>
            
            <p>
              Nosso maior diferencial está no cuidado com as pessoas:
              os beneficiários são atendidos diretamente pelos dentistas que fazem parte da cooperativa — profissionais que conhecem de perto a realidade e valorizam cada paciente.
            </p>
            
            <p>
              Hoje, somos mais de 120 cirurgiões-dentistas cooperados, atuando em clínicas particulares espalhadas por Fortaleza e região metropolitana.
              Nossa estrutura conta ainda com equipes administrativas, técnicas e comerciais que garantem a qualidade do atendimento e o bom funcionamento de toda a operação.
            </p>
            
            <p className="font-semibold text-xl mt-8">
              Unidental. Cuidando de sorrisos, fortalecendo vínculos e transformando o cuidado em cooperativismo.
            </p>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/cooperado">
              <Button 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100 border-0 rounded-full px-8 py-6 text-lg font-bold"
              >
                SEJA UM COOPERADO!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
