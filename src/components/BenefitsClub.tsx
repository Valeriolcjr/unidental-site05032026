import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";
import sensodyneLogo from "../assets/sensodyne-logo.png";
import sicoobLogo from "../assets/sicoob-logo.png";
import captarLogo from "../assets/captar-logo.png";
import fourTLogo from "../assets/4t-logo.png";
import leadlandLogo from "../assets/leadland-logo.png";

const partners = [
  { 
    name: "4T Soluções", 
    description: "Desconto de 8% em todos os produtos e serviços." 
  },
  { 
    name: "Captar Soluções", 
    description: "Soluções integradas para gestão odontológica com benefícios exclusivos." 
  },
  { 
    name: "SICOOB", 
    description: "Descontos exclusivos em serviços financeiros para cooperados." 
  },
  { 
    name: "Sensodyne", 
    description: "Condições especiais em produtos de higiene bucal premium." 
  },
  { 
    name: "Lead Land", 
    description: "25% de desconto em estratégias de marketing digital e performance." 
  },
];

export const BenefitsClub = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-primary via-primary/95 to-[#F9F9F9] text-white overflow-hidden relative">
      <WatermarkPattern />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            CLUBE DE VANTAGENS
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-3 leading-relaxed">
            O Clube de Vantagens Unidental garante benefícios exclusivos para nossos cooperados.
          </p>
          
          <p className="max-w-3xl mx-auto text-base md:text-lg opacity-95 leading-relaxed">
            Descontos e parcerias com grandes marcas — mais valor para quem faz parte da cooperativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
          {partners.map((partner, index) => (
            <Card 
              key={index} 
              className="bg-white p-6 text-center flex flex-col rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-20 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                {partner.name === "4T Soluções" ? (
                <img 
                  src={fourTLogo} 
                  alt="4T Soluções" 
                  className="max-h-14 w-auto object-contain"
                />
              ) : partner.name === "Sensodyne" ? (
                <img 
                  src={sensodyneLogo} 
                  alt="Sensodyne" 
                  className="max-h-14 w-auto object-contain"
                />
              ) : partner.name === "SICOOB" ? (
                <img 
                  src={sicoobLogo} 
                  alt="SICOOB" 
                  className="max-h-14 w-auto object-contain"
                />
              ) : partner.name === "Captar Soluções" ? (
                <img 
                  src={captarLogo} 
                  alt="Captar Soluções" 
                  className="max-h-14 w-auto object-contain"
                />
              ) : partner.name === "Lead Land" ? (
                <img 
                  src={leadlandLogo} 
                  alt="Lead Land" 
                  className="max-h-14 w-auto object-contain"
                />
              ) : (
                <div className="text-4xl font-bold text-primary">
                  {partner.name.substring(0, 2)}
                </div>
              )}
              </div>
              <h4 className="text-lg font-bold text-primary mb-3 transition-colors flex-shrink-0">
                {partner.name}
              </h4>
              <p className="text-sm text-[#555555] leading-snug flex-grow">
                {partner.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Link to="/cooperado">
            <Button 
              className="bg-white text-primary hover:bg-primary hover:text-white border-0 rounded-3xl px-10 py-6 text-base md:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              TENHA ACESSO AO CLUBE
            </Button>
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Disponível exclusivamente para cooperados Unidental.
          </p>
        </div>
      </div>
    </section>
  );
};
