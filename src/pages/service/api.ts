const API_BASE_URL = '/r3odonto-api';

export interface ApiConsultorio {
  consultorioId: number;
  tipo: string | null;
  endereco: string;
  complemento: string | null;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  telefones: string[];
  consultorio: any | null;
  observacao: string | null;
}

export interface ApiDentist {
  nome: string;
  especialidades: string[];
  produtosAtendidos: string[];
  consultorios: ApiConsultorio[];
  cro: string | null;
}

export async function fetchEspecialidades(): Promise<string[]> {
  const response = await fetch(`${API_BASE_URL}/especialidades`);
  if (!response.ok) throw new Error('Erro ao carregar especialidades');
  return response.json();
}

export async function fetchDentists(especialidade?: string): Promise<ApiDentist[]> {
  let url = `${API_BASE_URL}/pesquisaprestador`;
  if (especialidade && especialidade !== 'Todas as Especialidades') {
    url += `?especialidade=${encodeURIComponent(especialidade)}`;
  }
  const response = await fetch(url);
  if (!response.ok) throw new Error('Erro ao carregar dentistas');
  return response.json();
}