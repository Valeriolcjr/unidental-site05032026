import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import idss2025 from "@/assets/idss-2025.png";
import idss2024 from "@/assets/idss-2024.png";
import idss2023 from "@/assets/idss-2023.png";
import idss2022 from "@/assets/idss-2022.png";
import idss2021 from "@/assets/idss-2021.png";
import idss2021Part2 from "@/assets/idss-2021-part2.png";
import idss2020 from "@/assets/idss-2020.png";

const idssData = [
  {
    year: "2025",
    baseYear: "2024",
    images: [idss2025],
  },
  {
    year: "2024",
    baseYear: "2023",
    images: [idss2024],
  },
  {
    year: "2023",
    baseYear: "2022",
    images: [idss2023],
  },
  {
    year: "2022",
    baseYear: "2021",
    images: [idss2022],
  },
  {
    year: "2021",
    baseYear: "2020",
    images: [idss2021, idss2021Part2],
  },
  {
    year: "2020",
    baseYear: "2019",
    images: [idss2020],
  },
];

export const IdssSection = () => {
  return (
    <section id="idss" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[960px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-primary tracking-tight">
            IDSS
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Índice de Desempenho da Saúde Suplementar
          </p>
          <div className="w-[80px] h-[3px] bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O IDSS é um indicador da ANS que avalia o desempenho das operadoras de planos de saúde em dimensões como qualidade, acesso, sustentabilidade e regulação.
            Confira abaixo os resultados da Unidental nos últimos anos.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {idssData.map((item, index) => (
            <AccordionItem
              key={item.year}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-colors data-[state=open]:bg-gray-50"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline text-left">
                <span className="text-lg font-semibold text-foreground">
                  IDSS da Operadora {item.year} (Ano-base {item.baseYear})
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-10 pb-10">
                <div className="space-y-6">
                  <p className="text-base text-muted-foreground">
                    A Unidental apresenta abaixo os resultados oficiais do IDSS disponibilizados pela ANS, reforçando nosso compromisso com a qualidade, sustentabilidade e acesso à saúde bucal.
                  </p>

                  {/* Images */}
                  <div className="space-y-4">
                    {item.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="flex justify-center my-6">
                        <img
                          src={img}
                          alt={`IDSS ${item.year} - Parte ${imgIndex + 1}`}
                          className="max-w-full w-full max-w-[800px] rounded-lg shadow-md"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <p className="text-sm text-center mt-4 text-muted-foreground">
                    Para mais informações, acesse:{' '}
                    <a
                      href="https://www.gov.br/ans/pt-br/assuntos/informacoes-e-avaliacoes-de-operadoras/qualificacao-ans"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-80 text-primary"
                    >
                      www.gov.br/ans/pt-br/assuntos/informacoes-e-avaliacoes-de-operadoras/qualificacao-ans
                    </a>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
