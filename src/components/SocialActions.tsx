import socialActionDiaC from "@/assets/social-action-dia-c.jpg";
import socialActionPRF from "@/assets/social-action-prf.jpg";
import socialActionFEC from "@/assets/social-action-fec.jpg";
const actions = [{
  title: "Dia C",
  subtitle: "Levando saúde bucal e alegria a crianças em situação de vulnerabilidade.",
  image: socialActionDiaC
}, {
  title: "Evento PRF",
  subtitle: "Dia especial de cuidado e alegria para crianças com câncer.",
  image: socialActionPRF
}, {
  title: "Dia das Crianças FEC",
  subtitle: "Ação de saúde bucal e educação na sede do Fortaleza Esporte Clube.",
  image: socialActionFEC
}];
export const SocialActions = () => {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          NOSSAS AÇÕES SOCIAIS
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4 text-primary">
          <p>
            Na Unidental, acreditamos que cuidar de sorrisos vai muito além do consultório.
            Nosso compromisso também é com a comunidade — promovendo saúde, educação e cidadania.
          </p>
          <p>
            Realizamos ações de prevenção e educação em saúde bucal, atendimentos gratuitos para pessoas em situação de vulnerabilidade e projetos sociais que levam informação e bem-estar a quem mais precisa.
          </p>
          <p>
            Essas iniciativas reforçam o nosso propósito cooperativista: transformar a saúde bucal em um instrumento de inclusão e qualidade de vida.
            Estamos sempre em movimento, firmando novas parcerias e ampliando o alcance das nossas ações.
          </p>
          
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 text-primary">
          Confira algumas das nossas ações sociais:
        </h3>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actions.map((action, index) => <div key={index} className="group relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"></div>
                <img src={action.image} alt={action.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20 transition-all duration-300 group-hover:pb-8">
                  <h4 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:translate-y-[-4px]">{action.title}</h4>
                  <p className="text-white/90 transition-all duration-300 group-hover:translate-y-[-4px]">{action.subtitle}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};