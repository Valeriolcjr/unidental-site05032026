import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Award, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Shield,
    title: "Cobertura Completa",
    description: "Atendimento odontológico completo para toda a família",
  },
  {
    icon: Users,
    title: "Rede Credenciada",
    description: "Ampla rede de dentistas credenciados em todo o Brasil",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Consultas agendadas com rapidez e conveniência",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Profissionais altamente qualificados e experientes",
  },
  {
    icon: Heart,
    title: "Cuidado Personalizado",
    description: "Tratamento individualizado para suas necessidades",
  },
  {
    icon: Sparkles,
    title: "Preços Acessíveis",
    description: "Planos com valores que cabem no seu bolso",
  },
];

export const Benefits = () => {
  return (
    <section id="vantagens" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Seja Nosso <span className="text-primary">Cooperado!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ganhe benefícios e vários descontos especiais sendo um cooperado da Unidental!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a href="#cooperado">Quero Esses Benefícios</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
