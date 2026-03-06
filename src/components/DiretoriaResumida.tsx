import { Button } from "@/components/ui/button";
import director1 from "@/assets/diretoria-samia.png";
import director2 from "@/assets/diretoria-aline.png";
import director3 from "@/assets/diretoria-lincoln.png";
import director4 from "@/assets/diretoria-hyane.png";

export const DiretoriaResumida = () => {
  const diretores = [
    { img: director1, nome: "Dra. Sâmia Mello", cargo: "Presidente" },
    { img: director2, nome: "Dra. Aline Escócio", cargo: "Diretora Técnica" },
    { img: director3, nome: "Dr. Lincoln Albuquerque", cargo: "Diretor Financeiro" },
    { img: director4, nome: "Dra. Hyane Alencar", cargo: "Diretora Comercial" }
  ];

  return (
    <section id="diretoria" className="py-24 bg-primary/5 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Nossa Diretoria
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Conheça quem lidera a cooperativa odontológica do Ceará
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          {diretores.map((diretor, index) => (
            <div key={index} className="text-center">
              <div className="mb-3 border-4 border-border inline-block rounded-lg overflow-hidden">
              <img 
                  src={diretor.img} 
                  alt={diretor.nome}
                  className={`w-full h-48 object-cover ${
                    index === 1 ? 'object-[center_25%]' : index === 2 || index === 3 ? 'object-[center_35%]' : ''
                  }`}
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">{diretor.nome}</h3>
              <p className="text-sm text-muted-foreground">{diretor.cargo}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#diretoria-completa">
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full px-8 py-4"
            >
              Ver diretoria completa
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
