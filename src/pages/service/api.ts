// ============================================
// API CONFIGURATION 
// ============================================

// URL base para especialidades 
const API_BASE_URL = 'https://pinss.unidental.com.br/r3odonto-api/especialidades';

// URL base para dentistas 
const DENTISTS_BASE_URL = 'https://pinss.unidental.com.br/r3odonto-api/pesquisaprestador';

console.log(' API Base URL (Especialidades):', API_BASE_URL);
console.log(' API Base URL (Dentistas):', DENTISTS_BASE_URL);


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
  consultorio: unknown;
  observacao: string | null;
}

export interface ApiDentist {
  nome: string;
  especialidades: string[];
  produtosAtendidos: string[];
  consultorios: ApiConsultorio[];
  cro: string | null;
}

// Função auxiliar para fazer fetch com timeout
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 10000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        ...options.headers,
      },
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

// Função auxiliar para verificar se a resposta é JSON
async function handleResponse(response: Response) {
  const contentType = response.headers.get('content-type');
  
  // Verifica se a resposta é JSON
  if (!contentType || !contentType.includes('application/json')) {
    // Tenta ler o texto da resposta para debug
    const text = await response.text();
    console.error('❌ Resposta não-JSON recebida:', text.substring(0, 200));
    
    // Se for HTML, provavelmente é erro 404/500
    if (text.includes('<!doctype') || text.includes('<html')) {
      throw new Error('Servidor da API indisponível. Verifique se o backend está rodando.');
    }
    
    throw new Error(`Resposta inválida do servidor: ${response.status}`);
  }
  
  return response.json();
}

export async function fetchEspecialidades(): Promise<string[]> {
  try {
    // 🔴 ANTES estava: ${API_BASE_URL}/especialidades (duplicado)
    // ✅ AGORA: usa direto a URL base (que já é /especialidades)
    const url = API_BASE_URL;
    console.log('📡 Buscando especialidades de:', url);
    
    const response = await fetchWithTimeout(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await handleResponse(response);
    console.log('✅ Especialidades carregadas:', data.length);
    return data;
  } catch (error) {
    console.error('❌ Erro detalhado ao carregar especialidades:', error);
    
    // Mensagens amigáveis baseadas no erro
    if (error instanceof Error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Não foi possível conectar ao servidor. Verifique sua conexão.');
      }
      if (error.message.includes('timeout')) {
        throw new Error('O servidor demorou muito para responder. Tente novamente.');
      }
      if (error.message.includes('indisponível')) {
        throw error;
      }
    }
    
    throw new Error('Erro ao carregar especialidades. Tente novamente mais tarde.');
  }
}

export async function fetchDentists(especialidade?: string): Promise<ApiDentist[]> {
  try {
    // 🔴 ANTES estava: ${API_BASE_URL}/pesquisaprestador (usava a base errada)
    // ✅ AGORA: usa a URL específica para dentistas
    let url = DENTISTS_BASE_URL;
    if (especialidade && especialidade !== 'Todas as Especialidades') {
      url += `?especialidade=${encodeURIComponent(especialidade)}`;
    }
    
    console.log('📡 Buscando dentistas de:', url);
    const response = await fetchWithTimeout(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await handleResponse(response);
    console.log('✅ Dentistas carregados:', data.length);
    return data;
  } catch (error) {
    console.error('❌ Erro detalhado ao carregar dentistas:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Não foi possível conectar ao servidor. Verifique sua conexão.');
      }
      if (error.message.includes('timeout')) {
        throw new Error('O servidor demorou muito para responder. Tente novamente.');
      }
      if (error.message.includes('indisponível')) {
        throw error;
      }
    }
    
    throw new Error('Erro ao carregar dentistas. Verifique sua conexão.');
  }
}

// Função de teste para verificar a API
export async function testApiConnection() {
  console.log('🔍 Testando conexão com API...');
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'HEAD',
    });
    console.log('📊 Status da API (especialidades):', response.status);
    return response.ok;
  } catch (error) {
    console.error('❌ API indisponível:', error);
    return false;
  }
}