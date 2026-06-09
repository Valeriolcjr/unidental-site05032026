import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-horizontal.png";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";

export const NewFooter = () => {
  return (
    <footer className="bg-dark-red text-white pt-12 pb-6 relative overflow-hidden">
      <WatermarkPattern />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Coluna 1 - Serviços Online */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços Online</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://unidental.s4e.com.br/SYS/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Imposto de Renda
                </a>
              </li>
              <li>
                <a href="https://unidental.s4e.com.br/SYS/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Alteração Cadastral
                </a>
              </li>
              <li>
                <Link to="/encontre-dentista" className="hover:opacity-80 transition-opacity text-sm">
                  Encontre um Dentista
                </Link>
              </li>
              <li>
                <a href="https://unidental.s4e.com.br/SYS/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Cliente
                </a>
              </li>
              <li>
                <a href="https://unidental.s4e.com.br/SYS/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Cooperado
                </a>
              </li>
              <li>
                <a href="https://comercial.unidental.com.br/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  LP Empresarial
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 2 - Institucional */}
          <div>
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="hover:opacity-80 transition-opacity text-sm">
                  Histórico
                </a>
              </li>
              <li>
                <a href="#missao" className="hover:opacity-80 transition-opacity text-sm">
                  Missão, Visão e Valores
                </a>
              </li>
              <li>
                <a href="#diretoria" className="hover:opacity-80 transition-opacity text-sm">
                  Órgãos de Diretoria
                </a>
              </li>
              <li>
                <a href="#acoes-sociais" className="hover:opacity-80 transition-opacity text-sm">
                  Projetos Sociais
                </a>
              </li>
              <li>
                <a href="#clube-vantagens" className="hover:opacity-80 transition-opacity text-sm">
                  Clube de Parceiros
                </a>
              </li>
              <li>
                <Link to="/privacidade" className="hover:opacity-80 transition-opacity text-sm">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Planos e Serviços */}
          <div>
            <h3 className="font-bold text-lg mb-4">Planos e Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Planos e Serviços
                </a>
              </li>
              <li>
                <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Plano Empresarial
                </a>
              </li>
              <li>
                <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Plano Light
                </a>
              </li>
              <li>
                <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Plano Uniplus
                </a>
              </li>
              <li>
                <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Plano Premium Plus
                </a>
              </li>
              <li>
                <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-sm">
                  Plano Plus Orto
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">(85) 3055-0900</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                   R. Vicente Linhares, 500 – 606<br />
                  Aldeota, Fortaleza - CE
                </span>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/unidentalce/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/unidentalce/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/unidentalce/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Logo e Copyright */}
        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img alt="Unidental" className="h-10 mb-4 md:mb-0" src="/lovable-uploads/3add198f-4613-4aab-ad62-f4182ed0e3f1.png" />
            <p className="text-sm text-center md:text-right">
              © {new Date().getFullYear()} Unidental - Cooperativa Odontológica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};