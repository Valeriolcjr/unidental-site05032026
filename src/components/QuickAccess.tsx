import { MessageCircle, Search, FileText, Building2, TrendingUp, Users, Smile, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import tissPortalIcon from "@/assets/tiss-portal-icon.png";
import empresaPortalIcon from "@/assets/cliente-portal-icon.png";
import clienteFamiliaIcon from "@/assets/cliente-familia-icon.png";

const portals = [
  { 
    icon: null,
    image: clienteFamiliaIcon,
    title: "Portal do Cliente", 
    subtitle: "Clique para acessar",
    href: "https://pinss.unidental.com.br/",
    isImage: true
  },
  { 
    icon: null,
    image: empresaPortalIcon,
    title: "Portal da Empresa", 
    subtitle: "Clique para acessar",
    href: "https://comercial.unidental.com.br/",
    isImage: true
  },
  { 
    icon: null,
    image: tissPortalIcon,
    title: "Portal TISS", 
    subtitle: "Clique para acessar",
    href: "https://tiss.unidental.com.br/",
    isImage: true
  },
];

const quickLinks = [
  { 
    icon: MessageCircle, 
    title: "Atendimento WhatsApp", 
    href: "https://wa.me/5585989702177?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site,%20sou%20cliente%20e%20gostaria%20de%20falar%20com%20o%20suporte."
  },
  { 
    icon: FileText, 
    title: "2ª Via de Boleto", 
    href: "https://pinss.unidental.com.br/"
  },
  { 
    icon: Search, 
    title: "Encontre um Dentista", 
    href: "/encontre-dentista"
  },
  { 
    icon: Home, 
    title: "Clínicas Radiológicas", 
    href: "/clinicas-radiologicas"
  },
  { 
    icon: TrendingUp, 
    title: "Imposto de Renda", 
    href: "https://pinss.unidental.com.br/"
  },
  { 
    icon: Users, 
    title: "Quero ser Cliente", 
    href: "https://wa.me/5585989702177?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20ser%20cliente.%20"
  },
  { 
    icon: Smile, 
    title: "Quero ser Cooperado", 
    href: "/cooperado"
  },
];

export const QuickAccess = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {portals.map((portal, index) => {
            return (
              <a
                key={index}
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-primary hover:bg-primary/90 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    {portal.isImage ? (
                      <img src={portal.image} alt={portal.title} className="h-14 w-14 md:h-16 md:w-16 object-contain" />
                    ) : (
                      <portal.icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                      {portal.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {portal.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Quick Access Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight">
              ACESSO<br />RÁPIDO
            </h2>
            <div className="w-20 h-1 bg-primary mt-4" />
            <p className="text-muted-foreground mt-4 text-base">
              Encontre aqui os principais serviços e atalhos da Unidental.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith("http");
                const isLast = index === quickLinks.length - 1;
                
                const LinkContent = (
                  <div className={`group flex items-center gap-4 p-5 md:p-6 hover:bg-primary/5 transition-all duration-200 cursor-pointer ${!isLast ? 'border-b border-border/50' : ''}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="flex-grow text-lg font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300">
                      {link.title}
                    </span>
                    <ChevronRight className="h-5 w-5 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                );

                return isExternal ? (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {LinkContent}
                  </a>
                ) : (
                  <Link key={index} to={link.href}>
                    {LinkContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};