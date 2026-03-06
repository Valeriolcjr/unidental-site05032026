import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NewNavigation } from "@/components/NewNavigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";
import { MapPin, Phone, ChevronDown } from "lucide-react";
import { fetchEspecialidades, fetchDentists, ApiDentist } from './service/api';

interface Location {
  address: string;
  neighborhood: string;
  city: string;
  zipCode: string;
  phones: string[];
  observations?: string;
}

interface DisplayDentist {
  name: string;
  specialties: string[];
  locations: Location[];
}

/* =========================
   CustomSelect com PORTAL
========================= */
const CustomSelect = ({
  value,
  onChange,
  options,
  label
}: {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  label: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fecha ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Calcula a posição do dropdown quando abre
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,          // posição fixa na viewport
        left: rect.left,
        width: rect.width,
      });
    }
  }, [isOpen]);

  const selectedOption = options.find(opt => opt === value) || value;

  return (
    <div className="relative">
      <label className="block text-[#333333] font-semibold mb-2 text-sm">
        {label}
      </label>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D3232A] bg-white text-[#333333] flex items-center justify-between"
      >
        <span>{selectedOption}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className="fixed z-50 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: dropdownPosition.width,
            }}
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  option === value ? 'bg-[#D3232A] text-white' : ''
                }`}
              >
                {option}
              </div>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
};

/* =========================
   Página Principal
========================= */
const EncontreDentista = () => {
  const [searchType, setSearchType] = useState("Todos(as) os(as) Dentistas");
  const [specialty, setSpecialty] = useState("Todas as Especialidades");
  const [searchText, setSearchText] = useState("");
  const [especialidadesOptions, setEspecialidadesOptions] = useState<string[]>([]);
  const [dentists, setDentists] = useState<ApiDentist[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Carregar especialidades ao montar
  useEffect(() => {
    const loadEspecialidades = async () => {
      try {
        const data = await fetchEspecialidades();
        setEspecialidadesOptions(['Todas as Especialidades', ...data]);
      } catch (err) {
        console.error('Erro ao carregar especialidades:', err);
        setError('Falha ao carregar especialidades. Tente novamente.');
      }
    };
    loadEspecialidades();
  }, []);

  // Carregar dentistas baseado na especialidade selecionada
  const loadDentists = async (especialidade: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchDentists(especialidade === 'Todas as Especialidades' ? undefined : especialidade);
      setDentists(data);
    } catch (err) {
      console.error('Erro ao carregar dentistas:', err);
      setError('Erro ao carregar dentistas. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  // Carregar dentistas quando a especialidade mudar
  useEffect(() => {
    loadDentists(specialty);
  }, [specialty]);

  // Converter dados da API para o formato de exibição
  const mapToDisplayDentists = (apiDentists: ApiDentist[]): DisplayDentist[] => {
    return apiDentists.map(d => ({
      name: d.nome,
      specialties: d.especialidades,
      locations: d.consultorios.map(c => ({
        address: c.complemento ? `${c.endereco} - ${c.complemento}` : c.endereco,
        neighborhood: c.bairro,
        city: c.cidade,
        zipCode: c.cep,
        phones: c.telefones,
        observations: c.observacao || undefined,
      }))
    }));
  };

  // Aplicar filtros adicionais (nome, bairro, cidade)
  const filteredDisplayDentists = mapToDisplayDentists(dentists).filter(dentist => {
    if (!searchText) return true;
    const searchLower = searchText.toLowerCase();

    if (searchType === "por Nome") {
      return dentist.name.toLowerCase().includes(searchLower);
    } else if (searchType === "por Bairro") {
      return dentist.locations.some(loc => loc.neighborhood.toLowerCase().includes(searchLower));
    } else if (searchType === "por Cidade") {
      return dentist.locations.some(loc => loc.city.toLowerCase().includes(searchLower));
    } else {
      return (
        dentist.name.toLowerCase().includes(searchLower) ||
        dentist.locations.some(loc =>
          loc.neighborhood.toLowerCase().includes(searchLower) ||
          loc.city.toLowerCase().includes(searchLower)
        )
      );
    }
  });

  const searchTypes = [
    "Todos(as) os(as) Dentistas",
    "por Nome",
    "por Bairro",
    "por Cidade"
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <NewNavigation />
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Título e Subtítulo */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#D3232A] mb-4">
              Encontre um Dentista Credenciado
            </h1>
            <div className="w-24 h-1 bg-[#D3232A] mx-auto mb-6"></div>
            <p className="text-[#333333] text-lg max-w-3xl mx-auto mb-8">
              Busque profissionais cooperados da Unidental por nome, bairro, cidade ou especialidade.
              <br />
              Utilize os filtros abaixo para encontrar o dentista mais próximo de você.
            </p>
          </div>

          {/* Filtros */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tipo de busca (select nativo) */}
                <div>
                  <label className="block text-[#333333] font-semibold mb-2 text-sm">
                    Filtrar Dentistas
                  </label>
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D3232A] bg-white text-[#333333]"
                  >
                    {searchTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Especialidade (customizado com portal) */}
                <CustomSelect
                  value={specialty}
                  onChange={setSpecialty}
                  options={especialidadesOptions}
                  label="Filtrar por Especialidade"
                />

                {/* Campo de busca */}
                <div>
                  <label className="block text-[#333333] font-semibold mb-2 text-sm">
                    Buscar
                  </label>
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Digite uma palavra para buscar…"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D3232A] bg-white text-[#333333] placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="max-w-6xl mx-auto">
            {loading && <p className="text-center">Carregando dentistas...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDisplayDentists.map((dentist, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p-6 transition-all duration-200 hover:shadow-[0px_6px_14px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                  >
                    <h3 className="text-[#D3232A] font-bold text-xl mb-3">
                      {dentist.name}
                    </h3>

                    <div className="mb-4">
                      <p className="text-[#333333] font-semibold text-sm mb-2">
                        Especialidades:
                      </p>
                      <div className="space-y-1">
                        {dentist.specialties.map((spec, idx) => (
                          <p key={idx} className="text-[#555555] text-sm">
                            • {spec}
                          </p>
                        ))}
                      </div>
                    </div>

                    {dentist.locations.map((location, locIdx) => (
                      <div key={locIdx} className={`${locIdx > 0 ? 'mt-4 pt-4 border-t border-gray-200' : ''}`}>
                        {dentist.locations.length > 1 && (
                          <p className="text-[#D3232A] font-semibold text-sm mb-2">
                            📍 Localização {locIdx + 1}
                          </p>
                        )}

                        <div className="flex items-start gap-2 mb-3">
                          <MapPin className="h-5 w-5 text-[#D3232A] flex-shrink-0 mt-0.5" />
                          <div className="text-[#555555] text-sm">
                            <p>{location.address}</p>
                            <p>{location.neighborhood} - {location.city}</p>
                            <p>CEP: {location.zipCode}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 mb-3">
                          <Phone className="h-5 w-5 text-[#D3232A] flex-shrink-0 mt-0.5" />
                          <div className="text-[#555555] text-sm">
                            {location.phones.map((phone, idx) => (
                              <a
                                key={idx}
                                href={`tel:${phone.replace(/\D/g, "")}`}
                                className="block hover:text-[#D3232A] transition-colors"
                              >
                                {phone}
                              </a>
                            ))}
                          </div>
                        </div>

                        {location.observations && (
                          <p className="text-[#666666] text-xs italic">
                            {location.observations}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {!loading && !error && filteredDisplayDentists.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#666666] text-lg">
                  Nenhum dentista encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>

          {/* CTA WhatsApp */}
          <div className="mt-16 bg-[#D3232A] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <WatermarkPattern />
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 relative z-10">
              Precisa de ajuda?
            </h2>
            <p className="text-white text-lg mb-6 relative z-10">
              Fale com nossa equipe no WhatsApp.
            </p>
            <a
              href="https://wa.me/5585989702177?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#D3232A] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-[#D3232A] hover:text-white hover:shadow-[0_0_0_2px_white] relative z-10"
            >
              FALE CONOSCO PELO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default EncontreDentista;