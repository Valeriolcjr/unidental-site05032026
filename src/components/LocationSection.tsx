import { MapPin, Phone, Clock, Check, Car, Navigation } from "lucide-react";
import somosCoop from "../assets/somos-coop.png";

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título e Introdução */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D3232A] mb-3">
            ONDE ESTAMOS
          </h2>
          <div className="w-[60px] h-[2px] bg-[#D3232A] mx-auto mb-6"></div>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Estamos na Aldeota — uma região central e de fácil acesso em Fortaleza.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mapa Google Maps */}
          <div className="mb-10 overflow-hidden rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2847364234673!2d-38.52746368523658!3d-3.742394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748f1c0c0c0c0d%3A0x1c0c0c0c0c0c0c0d!2sR.%20Vicente%20Linhares%2C%20500%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060135-270!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização Unidental"
            ></iframe>
          </div>

          {/* Bloco de Informações */}
          <div className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.04)] p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Coluna Esquerda - Informações de Contato */}
              <div className="space-y-8">
                {/* Endereço */}
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#D3232A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-[#333333] mb-1 text-base">Endereço</p>
                    <p className="text-[#333333] leading-relaxed">
                      R. Vicente Linhares, 500 – 606<br />
                      Bairro Aldeota, Fortaleza – CE<br />
                      CEP: 60135-270
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir//R.+Vicente+Linhares,+500+-+Aldeota,+Fortaleza+-+CE,+60135-270"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#D3232A] text-sm mt-2 hover:underline transition-all"
                    >
                      <Navigation className="h-4 w-4" />
                      Ver rotas no Google Maps
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#D3232A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-[#333333] mb-1 text-base">Telefone</p>
                    <a 
                      href="tel:+558534332333"
                      className="text-[#333333] hover:text-[#D3232A] transition-colors"
                    >
                      (85) 3433-2333
                    </a>
                  </div>
                </div>

                {/* Horário de Atendimento */}
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-[#D3232A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-[#333333] mb-2 text-base">Horário de atendimento</p>
                    <div className="text-[#333333] space-y-1 text-sm leading-relaxed">
                      <p>Segunda a quinta: 08h às 18h</p>
                      <p>Sexta-feira: 08h às 17h</p>
                      <p>Sábado e domingo: fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Direita - Diferenciais */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Check className="h-6 w-6 text-[#D3232A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <span className="text-[#444444] leading-relaxed">Local de fácil acesso</span>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#D3232A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <span className="text-[#444444] leading-relaxed">Região central</span>
                </div>

                <div className="flex items-start space-x-4">
                  <Car className="h-6 w-6 text-[#D3232A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <span className="text-[#444444] leading-relaxed">Estacionamento com segurança</span>
                </div>

                {/* Imagem Somos Coop */}
                <div className="pt-6 pb-4">
                  <img 
                    src={somosCoop} 
                    alt="Somos Coop" 
                    className="h-12 w-auto object-contain"
                  />
                </div>

                {/* Botão WhatsApp */}
                <div>
                  <a
                    href="https://wa.me/5585989702177?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full lg:w-auto text-center bg-[#D3232A] text-white font-bold text-base px-8 py-4 rounded-3xl transition-all duration-200 hover:bg-white hover:text-[#D3232A] hover:shadow-[0_0_0_1px_#D3232A] focus:outline-none focus:ring-2 focus:ring-[#D3232A] focus:ring-offset-2"
                  >
                    Falar com nossa equipe no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
