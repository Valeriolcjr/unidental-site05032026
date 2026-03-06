import skylerLogo from "@/assets/skyler-logo.png";
import uniclinicLogo from "@/assets/uniclinic-logo.png";
import sindifortLogo from "@/assets/sindifort-logo.png";
import coaphLogo from "@/assets/coaph-logo.png";
import uniateneuLogo from "@/assets/uniateneu-logo.png";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";

const companies = [
  { name: "Skyler", logo: skylerLogo },
  { name: "Hospital Uniclinic", logo: uniclinicLogo },
  { name: "Sindifort", logo: sindifortLogo },
  { name: "Coaph", logo: coaphLogo },
  { name: "UniAteneu", logo: uniateneuLogo },
];

export const TrustedCompanies = () => {
  return (
    <>
      {/* Seção Empresas que confiam */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Título e Subtítulo */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Empresas que confiam na Unidental
            </h2>
            <div className="w-[60px] h-[3px] bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Parcerias que reforçam nossa credibilidade e o compromisso com a saúde bucal em grandes instituições.
            </p>
          </div>

          {/* Carrossel de Logos com Scroll Contínuo */}
          <div className="max-w-6xl mx-auto relative">
            <div className="overflow-hidden">
              <div className="flex animate-[scroll_10s_linear_infinite] md:animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
                {/* Primeira sequência */}
                {companies.map((company, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 px-8 md:px-10"
                  >
                    <div className="bg-white rounded-lg p-10 md:p-12 flex items-center justify-center h-52 md:h-60 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                      <img
                        src={company.logo}
                        alt={`Logo ${company.name}`}
                        className="max-h-[180px] md:max-h-[200px] w-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
                {/* Segunda sequência (duplicada para efeito infinito) */}
                {companies.map((company, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 px-8 md:px-10"
                  >
                    <div className="bg-white rounded-lg p-10 md:p-12 flex items-center justify-center h-52 md:h-60 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                      <img
                        src={company.logo}
                        alt={`Logo ${company.name}`}
                        className="max-h-[180px] md:max-h-[200px] w-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Gradiente lateral esquerdo */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
            {/* Gradiente lateral direito */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      {/* Seção CTA Parceiro - Separada */}
      <section className="py-16 md:py-16 bg-primary relative overflow-hidden min-h-[300px] md:min-h-0">
        <WatermarkPattern />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quer ser nosso parceiro corporativo?
            </h3>
            <p className="text-white/80 text-base mb-6">
              Fale com nossa equipe e conheça os benefícios dos planos empresariais da Unidental.
            </p>
            <a
              href="https://wa.me/5585989702177?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20planos%20empresariais%20da%20Unidental."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-gray-100 hover:scale-105"
            >
              FALE CONOSCO
            </a>
          </div>
        </div>
      </section>
    </>
  );
};