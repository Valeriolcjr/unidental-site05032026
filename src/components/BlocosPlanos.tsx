import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Building2, Users } from "lucide-react";
import logoSymbolRed from "@/assets/logo-symbol-red.png";
export const BlocosPlanos = () => {
  const planos = [{
    id: "planos-pf",
    icon: User,
    title: "Plano Individual / Familiar",
    description: "Proteção completa para você e sua família. Cobertura total ANS com mensalidades acessíveis e atendimento humanizado.",
    features: ["Cobertura completa ANS", "Carências reduzidas", "Atendimento em toda Fortaleza e região", "Dentistas cooperados qualificados"],
    cta: "Ver planos PF",
    link: "https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA"
  }, {
    id: "planos-pj",
    icon: Building2,
    title: "Plano Empresarial",
    description: "Cuide da saúde bucal do seu time com planos corporativos sob medida. Propostas personalizadas para empresas de todos os portes.",
    features: ["Propostas personalizadas", "Gestão simplificada", "Benefício valorizado pelos colaboradores", "Consultoria especializada"],
    cta: "Solicitar proposta empresarial",
    link: "https://wa.me/5585989029054?text=Olá! Gostaria de solicitar uma proposta empresarial."
  }, {
    id: "planos-adesao",
    icon: Users,
    title: "Plano Coletivo por Adesão",
    description: "Para sindicatos, associações e entidades de classe. Benefícios exclusivos para grupos organizados.",
    features: ["Condições especiais para grupos", "Sem carência para emergências", "Atendimento prioritário", "Suporte dedicado"],
    cta: "Falar com consultor",
    link: "https://wa.me/5585989029054?text=Olá! Gostaria de saber mais sobre planos coletivos por adesão."
  }];
  return <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.03),transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <img alt="Unidental Logo" className="h-10 md:h-12 mx-auto mb-6" src="/lovable-uploads/f23dc989-87d8-4aa8-8958-c0d85ae3c52d.png" />
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Nossos Planos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Escolha o plano ideal para o seu momento
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planos.map((plano, index) => <Card key={index} id={plano.id} className="border-2 hover:border-primary transition-all hover:shadow-2xl flex flex-col group relative overflow-hidden rounded-2xl animate-fade-in" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-rose-400 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <plano.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plano.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {plano.description}
                </p>
                
                <ul className="space-y-3 flex-1">
                  {plano.features.map((feature, idx) => <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-rose-400 mt-1.5 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>)}
                </ul>

                <a href={plano.link} target="_blank" rel="noopener noreferrer" className="block mt-auto">
                  <Button className="w-full bg-gradient-to-r from-primary via-primary to-rose-400 hover:shadow-lg hover:scale-105 text-primary-foreground font-bold rounded-full py-6 transition-all duration-300">
                    {plano.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};