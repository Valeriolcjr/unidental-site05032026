import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Shield, Users, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Diferenciais = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const diferenciais = [
    {
      icon: Users,
      title: "Cooperativa odontológica do Ceará",
      description: "Mais de 25 anos cuidando de sorrisos cearenses",
    },
    {
      icon: MapPin,
      title: "Rede credenciada em todo o estado",
      description: "Dentistas cooperados em Fortaleza e região metropolitana",
    },
    {
      icon: Shield,
      title: "Cobertura completa ANS",
      description: "Todos os procedimentos regulamentados pela ANS",
    },
    {
      icon: Heart,
      title: "Atendimento humanizado",
      description: "Cuidado pessoal e próximo do dentista cooperado",
    },
    {
      icon: Award,
      title: "Excelência reconhecida",
      description: "Referência em qualidade e satisfação no Ceará",
    },
  ];

  const duplicatedDiferenciais = [...diferenciais, ...diferenciais, ...diferenciais];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden border-t border-primary/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_hsl(var(--primary)/0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_hsl(var(--accent)/0.06),transparent_40%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-foreground transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Por que escolher a Unidental?
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Diferenciais que fazem da Unidental a melhor escolha em odontologia
        </p>

        <div className="relative overflow-hidden -mx-4 px-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-primary/10 via-primary/5 to-transparent z-10 pointer-events-none" />

          <div
            className={`flex gap-4 md:gap-6 animate-scroll hover:[animation-play-state:paused] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: "max-content",
              transition: "opacity 0.7s ease-out",
            }}
          >
            {duplicatedDiferenciais.map((item, index) => (
              <div key={index} className="py-2">
                <Card
                  className="border-0 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex-shrink-0 w-[260px] md:w-[280px]"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-base font-bold mb-2 text-foreground min-h-[48px] flex items-center justify-center">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed min-h-[60px] flex items-center justify-center">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};