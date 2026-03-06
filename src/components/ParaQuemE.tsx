import { Card, CardContent } from "@/components/ui/card";
import { User, Building2, Users, Briefcase, ArrowRight } from "lucide-react";

export const ParaQuemE = () => {
  const cards = [
    {
      icon: User,
      title: "Pessoa Física",
      description: "Planos individuais e familiares com cobertura completa",
      link: "#planos-pf",
      gradient: "from-primary to-rose-400"
    },
    {
      icon: Building2,
      title: "Empresa (PJ)",
      description: "Soluções corporativas para cuidar do seu time",
      link: "#planos-pj",
      gradient: "from-accent to-blue-500"
    },
    {
      icon: Users,
      title: "Sindicato / Associação",
      description: "Planos coletivos por adesão com benefícios exclusivos",
      link: "#planos-adesao",
      gradient: "from-blue-500 to-primary"
    },
    {
      icon: Briefcase,
      title: "MEI",
      description: "Planos especiais para microempreendedores",
      link: "#planos-mei",
      gradient: "from-purple-500 to-accent"
    }
  ];

  return (
    <section id="planos" className="py-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--accent)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Para quem é a Unidental?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Encontre o plano ideal para o seu momento
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <a 
              key={index} 
              href={card.link}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-[2px] hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <Card className="relative bg-card h-full border-0">
                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${card.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {card.description}
                  </p>
                  <div className="text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
