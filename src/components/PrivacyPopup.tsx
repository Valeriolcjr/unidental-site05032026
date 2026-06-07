// src/components/PrivacyPopup.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // SEMPRE mostrar o popup, independente de já ter aceitado antes
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Aguarda 1 segundo para mostrar
    return () => clearTimeout(timer);
  }, []);

  const acceptPrivacy = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      {/* Popup - NÃO FECHA AO CLICAR FORA */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto overflow-hidden">
        <div className="p-6">
          {/* Título */}
          <h3 className="text-xl font-bold text-[#D3232A] mb-3">
            Privacidade e Proteção de Dados
          </h3>
          
          {/* Texto */}
          <div className="text-gray-600 text-sm space-y-3 mb-6">
            <p>
              A Unidental valoriza sua privacidade. Utilizamos cookies e tecnologias semelhantes 
              para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego.
            </p>
            <p>
              Ao continuar navegando, você concorda com a nossa{' '}
              <Link 
                to="/privacidade" 
                className="text-[#D3232A] font-semibold hover:underline"
                onClick={acceptPrivacy}
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>

          {/* Botão de aceitar - ÚNICA forma de fechar */}
          <button
            onClick={acceptPrivacy}
            className="w-full bg-[#D3232A] hover:bg-[#B31E24] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Aceitar e Continuar
          </button>
        </div>
      </div>
    </div>
  );
};