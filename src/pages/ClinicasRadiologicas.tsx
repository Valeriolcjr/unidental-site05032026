import { useState } from "react";
import { NewNavigation } from "@/components/NewNavigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";

// Clínicas agrupadas por nome principal
const clinicGroups = [
  {
    groupName: "Dental Imagem Radiodiagnostico",
    clinics: [
      {
        name: "Dental Imagem Radiodiagnostico",
        address: "Av. Rui Barbosa, 2804 – Joaquim Távora (Fortaleza), Fortaleza – CE, 60115-222",
        neighborhood: "Joaquim Távora",
        phones: ["(85) 3272-2233", "(85) 3272-6061"],
        whatsapp: false
      }
    ]
  },
  {
    groupName: "Oral Scan Radiologia Odontológica",
    clinics: [
      {
        name: "Oral Scan Radiologia Odontológica LTDA (Unidade Aldeota)",
        address: "Rua Marcos Macêdo, 1333 – Pátio Dom Luis – Torre II – 10º andar – Sala 1016 – Aldeota",
        neighborhood: "Aldeota",
        phones: ["(85) 3215-4663"],
        whatsapp: false
      },
      {
        name: "Oral Scan Radiologia Odontológica LTDA (Unidade Centro)",
        address: "Rua Pedro Borges, 135 – Ed. Portugal – 3º andar – Sala 304 – Centro",
        neighborhood: "Centro",
        phones: ["(85) 3099-6644"],
        whatsapp: false
      },
      {
        name: "Oral Scan Radiologia Odontológica LTDA (Unidade Cidade dos Funcionários)",
        address: "Av. Oliveira Paiva, 1090 – Sala 05 e 06 – Cidade dos Funcionários",
        neighborhood: "Cidade dos Funcionários",
        phones: ["(85) 3022-0891"],
        whatsapp: false
      },
      {
        name: "Oral Scan Radiologia Odontológica LTDA (Unidade Parangaba)",
        address: "Av. Godofredo Maciel, 88 - L - 45 - Parangaba",
        neighborhood: "Parangaba",
        phones: ["(85) 98749-1153"],
        whatsapp: false
      }
    ]
  },
  {
    groupName: "Perboyre Castelo",
    clinics: [
      {
        name: "Perboyre Castelo (Unidade Aldeota)",
        address: "Harmony Medical Center – Av. Dom Luís, 1233 – Sala 105 – Aldeota, Fortaleza – CE, 60160-230",
        neighborhood: "Aldeota",
        phones: ["(85) 3486-6460", "(85) 9 9951-2662"],
        whatsapp: false
      },
      {
        name: "Perboyre Castelo (Unidade Benfica)",
        address: "R. Carapinima, 1630 – Benfica, Fortaleza – CE, 60015-290",
        neighborhood: "Benfica",
        phones: ["(85) 3021-5358", "(85) 9 9951-0037"],
        whatsapp: false
      },
      {
        name: "Perboyre Castelo (Unidade Caucaia Centro)",
        address: "R. Quinze de Novembro, 1318 – Itambé, Caucaia – CE, 61600-090",
        neighborhood: "Caucaia Centro",
        phones: ["(85) 3039-9820", "(85) 9 8197-7123"],
        whatsapp: false
      },
      {
        name: "Perboyre Castelo (Unidade Centro)",
        address: "R. Pedro Borges, 20 – sala 1405 – Centro, Fortaleza – CE, 60055-900",
        neighborhood: "Centro",
        phones: ["(85) 3251-1762", "(85) 3254-7922", "(85) 9 8196-5123"],
        whatsapp: false
      },
      {
        name: "Perboyre Castelo (Unidade Dionísio Torres)",
        address: "R. Joaquim Nabuco, 2778 – Dionísio Torres, Fortaleza – CE, 60125-121",
        neighborhood: "Dionísio Torres",
        phones: ["(85) 3272-1771", "(85) 9 9951-6458"],
        whatsapp: false
      },
      {
        name: "Perboyre Castelo (Unidade Messejana)",
        address: "Rua Coronel Francisco Pereira, 9 B – Messejana, Fortaleza – CE, 60840-290",
        neighborhood: "Messejana",
        phones: ["(85) 3046-1425"],
        whatsapp: false
      },
      {
        name: "Perboyre Castelo (Unidade Parangaba)",
        address: "Av. Dr. Silas Munguba, 643 – lj 690 – Parangaba, Fortaleza – CE, 60740-005",
        neighborhood: "Parangaba",
        phones: ["(85) 3225-5316", "(85) 9 8209-8812"],
        whatsapp: false
      },
      {
        name: "Perboyre Castelo (Unidade Parque Manibura)",
        address: "Rua General Caiado de Castro, 350 – Parque Manibura, Fortaleza – CE, 60813-795",
        neighborhood: "Parque Manibura",
        phones: ["(85) 3271-1094", "(85) 99826-0066"],
        whatsapp: false
      },
      {
        name: "Perboyre Castelo (Unidade Parquelândia)",
        address: "Rua Professor Raimundo Vítor, 310 – Parquelândia, Fortaleza – CE, 60450-110",
        neighborhood: "Parquelândia",
        phones: ["(85) 3287-4896", "(85) 9 9826-3666"],
        whatsapp: false
      }
    ]
  },
  {
    groupName: "Radiograf",
    clinics: [
      {
        name: "Radiograf (Unidade Aldeota)",
        address: "BS Design, Torre Sul – Av. Desembargador Moreira, 1300 – Sala 613 – Aldeota, Fortaleza – CE, 60170-002",
        neighborhood: "Aldeota",
        phones: ["(85) 3261-7722", "(85) 9 9151-6099"],
        whatsapp: true
      },
      {
        name: "Radiograf (Unidade Papicu)",
        address: "R. Des. Lauro Nogueira, 1500 – Sala 503 – Papicu, Fortaleza – CE, 60176-065",
        neighborhood: "Papicu",
        phones: ["(85) 3393-1030", "(85) 9 9151-6099"],
        whatsapp: true
      }
    ]
  },
  {
    groupName: "Raio-X Facial",
    clinics: [
      {
        name: "Raio-X Facial (Unidade Aldeota)",
        address: "Av. Dom Luis 1200 – Torre Business, sala 913 – Aldeota, Fortaleza – CE, 60160-230",
        neighborhood: "Aldeota",
        phones: ["(85) 98190-2060"],
        whatsapp: false
      }
    ]
  }
];

const neighborhoods = ["Todos", "Aldeota", "Benfica", "Caucaia Centro", "Centro", "Cidade dos Funcionários", "Dionísio Torres", "Joaquim Távora", "Messejana", "Papicu", "Parangaba", "Parque Manibura", "Parquelândia"];

export default function ClinicasRadiologicas() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("Todos");
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  
  const toggleGroup = (groupName: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupName) 
        ? prev.filter(g => g !== groupName)
        : [...prev, groupName]
    );
  };

  const filteredGroups = clinicGroups.map(group => ({
    ...group,
    clinics: selectedNeighborhood === "Todos" 
      ? group.clinics 
      : group.clinics.filter(clinic => clinic.neighborhood === selectedNeighborhood)
  })).filter(group => group.clinics.length > 0).sort((a, b) => a.groupName.localeCompare(b.groupName, 'pt-BR'));

  return <div className="min-h-screen bg-[#FAFAFA]">
      <NewNavigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-primary to-primary/95 text-white relative overflow-hidden">
        <WatermarkPattern />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Clínicas Radiológicas Credenciadas
            </h1>
            <p className="text-lg md:text-xl opacity-95">
              Encontre a clínica radiológica credenciada mais próxima de você e agende seu exame com segurança e praticidade.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-md">
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              Filtrar por bairro:
            </label>
            <Select value={selectedNeighborhood} onValueChange={setSelectedNeighborhood}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um bairro" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                {neighborhoods.map(neighborhood => <SelectItem key={neighborhood} value={neighborhood}>
                    {neighborhood}
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Clinics Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {filteredGroups.map((group, groupIndex) => {
              const hasMultiple = group.clinics.length > 1;
              const isExpanded = expandedGroups.includes(group.groupName);
              const visibleClinics = hasMultiple && !isExpanded ? [group.clinics[0]] : group.clinics;
              
              return (
                <div key={groupIndex} className="space-y-3">
                  {/* Group Header for multiple clinics */}
                  {hasMultiple && (
                    <div className="flex items-center justify-between bg-primary/10 rounded-lg px-4 py-3">
                      <h3 className="text-lg font-bold text-primary">
                        {group.groupName} ({group.clinics.length} unidades)
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleGroup(group.groupName)}
                        className="text-primary hover:bg-primary/20"
                      >
                        {isExpanded ? (
                          <>
                            <span className="mr-2">Ver menos</span>
                            <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <span className="mr-2">Ver todas</span>
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                  
                  {/* Clinic Cards */}
                  {visibleClinics.map((clinic, index) => (
                    <Card key={index} className="bg-white p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-primary mb-3">
                            {clinic.name}
                          </h3>
                          
                          <div className="flex items-start gap-3 mb-3">
                            <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-[#333333] text-sm leading-relaxed">
                              {clinic.address}
                            </p>
                          </div>

                          <div className="flex items-start gap-3">
                            <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                              {clinic.phones.map((phone, idx) => (
                                <a 
                                  key={idx} 
                                  href={`tel:${phone.replace(/\D/g, '')}`} 
                                  className="text-[#333333] text-sm hover:text-primary transition-colors"
                                >
                                  {phone}
                                  {clinic.whatsapp && idx === clinic.phones.length - 1 && (
                                    <span className="text-green-600 ml-2">(WhatsApp)</span>
                                  )}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="md:text-right">
                          <span className="inline-block text-xs font-semibold text-white bg-primary/90 px-3 py-1 rounded-full">
                            {clinic.neighborhood}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                  
                  {/* Show expand hint for collapsed groups */}
                  {hasMultiple && !isExpanded && group.clinics.length > 1 && (
                    <p className="text-sm text-muted-foreground text-center">
                      + {group.clinics.length - 1} unidade(s) disponível(is)
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {filteredGroups.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#7A7A7A] text-lg">
                Nenhuma clínica encontrada para o bairro selecionado.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-b from-primary via-primary/95 to-primary text-white overflow-hidden">
        <WatermarkPattern />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Precisa de ajuda?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Fale com nossa equipe no WhatsApp.
          </p>
          <a href="https://wa.me/5585989702177?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-bold shadow-lg">
              FALE CONOSCO PELO WHATSAPP
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>;
}