import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, CheckCircle2, Smile } from "lucide-react";

export const ComoFunciona = () => {
  const passos = [
    {
      icon: Search,
      numero: "1",
      title: "Escolha seu plano",
      description: "Individual, familiar, empresarial ou por adesão"
    },
    {
      icon: FileText,
      numero: "2",
      title: "Preencha seus dados",
      description: "Processo rápido e simples, 100% online"
    },
    {
      icon: CheckCircle2,
      numero: "3",
      title: "Receba proposta ou contrate",
      description: "Análise rápida e aprovação facilitada"
    },
    {
      icon: Smile,
      numero: "4",
      title: "Comece a usar",
      description: "Acesso imediato à nossa rede credenciada"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary via-background to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_hsl(var(--primary)/0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,_hsl(var(--accent)/0.05),transparent_40%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Como funciona?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Processo simples e rápido para você começar a cuidar do seu sorriso
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {passos.map((passo, index) => (
            <div key={index} className="relative">
              <Card className="h-full border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {passo.numero}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <passo.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {passo.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {passo.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Seta de conexão entre cards (desktop) */}
              {index < passos.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-primary"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-primary rotate-45 -mr-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
