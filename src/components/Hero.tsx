import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Clínica Odontológica Unidental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Nós cuidamos do seu{" "}
            <span className="text-primary">sorriso</span> como ninguém.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            E o melhor: por um valor inacreditável!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg" asChild>
              <a href="#cliente">
                Quero ser Cliente
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="#cooperado">Seja Cooperado</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
