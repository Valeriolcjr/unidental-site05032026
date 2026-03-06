import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoBranco from "@/assets/logo-branco.png";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";
export const QuemSomos = () => {
  return <section id="sobre" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <WatermarkPattern />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <img alt="Unidental Logo" className="h-20 md:h-24 mx-auto mb-6" src="/lovable-uploads/fe2bf5ec-ac25-410b-92ee-58ea6f589a3d.png" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Unidental
          </h2>
          <div className="space-y-4 text-lg leading-relaxed mb-8">
            <p>
              Há mais de 25 anos, a <strong>Unidental</strong> é a cooperativa odontológica de referência no Ceará. 
              Nosso compromisso é oferecer <strong>planos acessíveis</strong> com <strong>atendimento de qualidade</strong>, 
              sempre próximos da nossa comunidade.
            </p>
            <p>
              Somos mais de <strong>120 cirurgiões-dentistas cooperados</strong> atuando em Fortaleza e região metropolitana, 
              levando saúde bucal com excelência e humanização.
            </p>
            <p className="font-semibold text-xl">
              Unidental. A saúde do seu sorriso.
            </p>
          </div>
          
          <Link to="/cooperado">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-8 py-6 text-base shadow-lg">
              Conheça a Unidental
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};