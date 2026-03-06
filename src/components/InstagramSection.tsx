import { Button } from "@/components/ui/button";
import instagramPhone from "@/assets/instagram-phone.png";

export const InstagramSection = () => {
  return (
    <section className="py-24 bg-white text-foreground border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img 
              src={instagramPhone} 
              alt="Instagram Unidental" 
              className="max-w-md w-full h-auto"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Acompanhe nossos conteúdos no Instagram!
            </h2>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Veja novidades, orientações sobre saúde bucal e tudo o que acontece no universo da Unidental.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="https://www.instagram.com/unidentalce/" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-bold whitespace-nowrap"
                >
                  QUERO ACESSAR OS CONTEÚDOS!
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
