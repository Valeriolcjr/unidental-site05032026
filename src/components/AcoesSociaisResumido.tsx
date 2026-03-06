import { Button } from "@/components/ui/button";
import socialActionDiaC from "@/assets/social-action-dia-c.jpg";
import socialActionPRF from "@/assets/social-action-prf.jpg";
import socialActionFEC from "@/assets/social-action-fec.jpg";
export const AcoesSociaisResumido = () => {
  const acoes = [{
    img: socialActionDiaC,
    titulo: "Dia C",
    subtitulo: "Levando saúde bucal e alegria a crianças em situação de vulnerabilidade."
  }, {
    img: socialActionPRF,
    titulo: "Evento PRF",
    subtitulo: "Dia especial de cuidado e alegria para crianças com câncer."
  }, {
    img: socialActionFEC,
    titulo: "Dia das Crianças FEC",
    subtitulo: "Ação de saúde bucal e educação na sede do Fortaleza Esporte Clube."
  }];
  return <section id="acoes-sociais" className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_hsl(var(--primary)/0.04),transparent_40%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Ações Sociais
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Levando saúde bucal e transformação social para comunidades do Ceará
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {acoes.map((acao, index) => <div key={index} className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <img src={acao.img} alt={acao.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{acao.titulo}</h3>
                <p className="text-white/90 text-sm">{acao.subtitulo}</p>
              </div>
            </div>)}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Através das nossas ações sociais, levamos atendimento odontológico gratuito, 
            educação em saúde bucal e cuidado humanizado para quem mais precisa. 
            Acreditamos que sorrir é um direito de todos.
          </p>
        </div>

        <div className="text-center">
          <a href="#acoes-completas">
            
          </a>
        </div>
      </div>
    </section>;
};