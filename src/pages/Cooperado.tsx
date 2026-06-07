import { NewNavigation } from "@/components/NewNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";
import { Users, TrendingUp, Briefcase, Heart, Phone, ClipboardList, FileText, Search, CheckCircle } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import logoText from "@/assets/logo-text.png";

export default function Cooperado() {
  const benefits = [
    {
      icon: Users,
      title: "Cooperação e Valorização",
      description: "Faça parte de uma rede sólida de cirurgiões-dentistas."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Profissional",
      description: "Tenha suporte, capacitação e oportunidades exclusivas."
    },
    {
      icon: Briefcase,
      title: "Gestão e Suporte Administrativo",
      description: "Conte com assessoria e estrutura cooperativista completa."
    },
    {
      icon: Heart,
      title: "Pertencimento e Propósito",
      description: "Trabalhe com autonomia, mas em comunidade."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: Phone,
      title: "Contato",
      description: "Entre em contato e manifeste seu interesse."
    },
    {
      number: 2,
      icon: ClipboardList,
      title: "Entrevista",
      description: "Agende uma conversa com a diretoria técnica."
    },
    {
      number: 3,
      icon: FileText,
      title: "Documentação",
      description: "Envie os documentos necessários."
    },
    {
      number: 4,
      icon: Search,
      title: "Análise",
      description: "A equipe técnica avalia as informações."
    },
    {
      number: 5,
      icon: CheckCircle,
      title: "Ingresso",
      description: "Aprovação e integração ao quadro de cooperados."
    }
  ];

  const documents = [
    "Cópia autenticada do diploma ou certificado do curso de Odontologia.",
    "Cópia autenticada do Alvará do Registro Sanitário da Consultoria.",
    "Cópia do CPF, RG e CRO.",
    "Número do ISS e CNES.",
    "Cópia da taxa de inscrição quitada."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NewNavigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-white py-20 md:py-32">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <img alt="Unidental Icon" src={logoIcon} className="h-14 w-auto" />
              <img alt="Unidental" src={logoText} className="h-10 w-auto" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Faça parte da Unidental
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Junte-se à nossa cooperativa e construa, com a gente, uma odontologia mais humana, colaborativa e sustentável.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Por que ser um cooperado?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <Icon className="w-12 h-12 flex-shrink-0 text-primary" strokeWidth={1.5} />
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-primary">
                            {benefit.title}
                          </h3>
                          <p className="leading-relaxed text-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
              Passo a passo para se tornar um cooperado
            </h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
              
              <div className="space-y-12">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative flex items-start space-x-6 animate-fade-in">
                      {/* Number bubble */}
                      <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-primary">
                        {step.number}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                          <h3 className="text-xl font-bold text-primary">
                            {step.title}
                          </h3>
                        </div>
                        <p className="leading-relaxed text-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
                  Documentação necessária para adesão
                </h2>
                
                <ol className="space-y-4">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold bg-primary">
                        {index + 1}
                      </div>
                      <div className="flex items-start space-x-3 flex-1 pt-1">
                        <FileText className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                        <p className="leading-relaxed text-foreground">
                          {doc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
          <WatermarkPattern />
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seja um Cooperado Unidental
            </h2>
            <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed">
              Faça parte de uma cooperativa que acredita em união, ética e valorização profissional.
            </p>
            {/* Botão com download do PDF */}
            <a 
              href="/pdfs/ebook-cooperado.pdf" 
              download
              className="inline-block"
            >
              <Button 
                className="bg-white text-primary hover:bg-primary hover:text-white hover:border-white border-2 border-white rounded-full px-10 py-6 text-lg font-semibold transition-all duration-300"
                size="lg"
              >
                QUERO SER COOPERADO
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}