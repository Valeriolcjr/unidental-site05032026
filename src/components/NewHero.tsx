import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export const NewHero = () => {
  return <section className="relative overflow-hidden">
      <div className="relative h-[620px] md:h-[680px] pt-20">
        <img
          src={heroBanner}
          alt="Unidental"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-left">
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" style={{
              animationDelay: '0.2s'
            }}>
                Cuidar do seu sorriso é a nossa missão.
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed animate-fade-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]" style={{
              animationDelay: '0.4s'
            }}>
                Planos odontológicos completos para você, sua família, empresas e associações — com atendimento próximo e a força da cooperativa cearense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-up" style={{
              animationDelay: '0.6s'
            }}>
                <a href="#planos-pf">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-8 py-6 text-base w-full shadow-lg transition-all duration-300 hover:scale-105">
                    Quero plano individual/familiar
                  </Button>
                </a>
                <a href="#planos-pj">
                  <Button size="lg" className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-primary font-bold rounded-full px-8 py-6 text-base w-full shadow-lg transition-all duration-300 hover:scale-105">
                    Solicitar proposta empresarial
                  </Button>
                </a>
                <a href="#planos-adesao">
                  <Button size="lg" className="bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 font-bold rounded-full px-8 py-6 text-base w-full transition-all duration-300">
                    Planos por associação (Adesão)
                  </Button>
                </a>
              </div>
              
              {/* Stats animados */}
              
            </div>
          </div>
        </div>
        
        {/* Scroll indicator animado */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>;
};