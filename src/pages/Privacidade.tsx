import { NewNavigation } from "@/components/NewNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ExternalLink } from "lucide-react";

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-white">
      <NewNavigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-[960px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-lg leading-relaxed max-w-[800px] mx-auto text-muted-foreground">
              A Unidental respeita a sua privacidade e cumpre rigorosamente a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>
          </div>

          {/* Card Único */}
          <div className="space-y-8 mb-12">
            <div className="bg-white border border-border rounded-xl p-8 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <ShieldCheck size={48} className="text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-semibold mb-3 text-foreground">
                    Política de Privacidade – Unidental
                  </h2>
                  <p className="text-base mb-6 text-muted-foreground">
                    Documento completo que descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, 
                    em conformidade com a LGPD.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Última atualização: 16 de abril de 2025
                  </p>
                  <a 
                    href="/pdfs/politica-privacidade-unidental.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                      <ExternalLink size={16} />
                      Acessar Política de Privacidade
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="text-center pt-12 border-t border-border">
            <p className="text-base leading-relaxed text-muted-foreground">
              A Unidental reafirma seu compromisso com a ética, a transparência e o uso responsável das informações pessoais.
            </p>
            <div className="mt-6 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Dúvidas ou solicitações?</h3>
              <p className="text-muted-foreground">
                Entre em contato com nosso Encarregado de Proteção de Dados (DPO):
              </p>
              <p className="mt-2 text-primary font-medium">
                 privacidade@unidental.com.br<br />
                 (85) 3433-2333
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidade;