import { UserCircle, Building, Users } from "lucide-react";

const portals = [
  {
    icon: UserCircle,
    title: "Portal do Cliente",
    subtitle: "Acesse seu painel exclusivo",
    ariaLabel: "Acessar Portal do Cliente",
    link: "https://unidental.s4e.com.br//SYS/?TipoUsuario=6",
  },
  {
    icon: Building,
    title: "Portal da Empresa",
    subtitle: "Área exclusiva para empresas parceiras",
    ariaLabel: "Acessar Portal da Empresa",
    link: "https://unidental.s4e.com.br//SYS/?TipoUsuario=2",
  },
  {
    icon: Users,
    title: "Portal do Cooperado",
    subtitle: "Acesse o sistema de integração e conformidade",
    ariaLabel: "Acessar Portal do Cooperado",
    link: "https://unidental.s4e.com.br//SYS/?TipoUsuario=3",
  },
];

export const PortalCards = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {portals.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <a
                key={index}
                href={portal.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={portal.ariaLabel}
                className="group block bg-[#A92025] rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#D3232A] hover:shadow-[0px_6px_14px_rgba(0,0,0,0.1)] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] active:bg-[#901C1C]"
              >
                <div className="flex items-center gap-5">
                  {/* Círculo do ícone */}
                  <div className="flex-shrink-0 bg-[#7A1C1C] rounded-full p-3 md:p-4 transition-transform duration-200 group-hover:scale-105">
                    <Icon 
                      className="h-9 w-9 md:h-12 md:w-12 text-white" 
                      strokeWidth={2}
                    />
                  </div>

                  {/* Textos */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight">
                      {portal.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 leading-snug transition-colors duration-200 group-hover:text-white">
                      {portal.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};