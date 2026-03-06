import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift } from "lucide-react";

export const ClubeVantagensResumido = () => {
  return (
    <section id="clube-vantagens" className="py-24 bg-gradient-to-b from-primary/5 to-primary/10 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                <Gift className="h-10 w-10" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Clube de Vantagens
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <strong>Exclusivo para cooperados!</strong> Descontos especiais em estabelecimentos parceiros, 
                serviços e produtos. Aproveite benefícios que vão além da odontologia.
              </p>

              <a href="/cooperado#clube-vantagens">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 py-6 text-base"
                >
                  Acessar Clube de Vantagens
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
