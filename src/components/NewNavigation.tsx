import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoNavbar from "@/assets/logo-navbar-white.png";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";

export const NewNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-lg shadow-lg overflow-hidden">
      <WatermarkPattern />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center group -ml-2">
            <div className="cursor-pointer transition-transform duration-300 group-hover:scale-105">
              <img alt="Unidental" src={logoNavbar} className="h-14 w-auto drop-shadow-lg" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/idss" className="text-primary-foreground hover:opacity-80 transition-opacity text-lg font-bold">
              IDSS
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-primary-foreground flex items-center space-x-1 hover:opacity-80 transition-opacity outline-none text-base font-bold">
                <span>Espaço do Cliente</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card min-w-[200px]">
                <DropdownMenuItem>
                  <Link to="/encontre-dentista" className="w-full">Encontrar dentista</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://pinss.unidental.com.br/" target="_blank" rel="noopener noreferrer" className="w-full">2ª via de boleto</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://pinss.unidental.com.br/" target="_blank" rel="noopener noreferrer" className="w-full">Área do cliente</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/clinicas-radiologicas" className="w-full">Clínicas Radiológicas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://pinss.unidental.com.br/" target="_blank" rel="noopener noreferrer" className="w-full">Imposto de renda</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer" className="w-full">Quero ser cliente</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-primary-foreground flex items-center space-x-1 hover:opacity-80 transition-opacity outline-none text-base font-bold">
                <span>Espaço do Cooperado</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card min-w-[200px]">
                <DropdownMenuItem>
                  <a href="https://tiss.unidental.com.br/" target="_blank" rel="noopener noreferrer" className="w-full">Portal do cooperado</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://tiss.unidental.com.br/" target="_blank" rel="noopener noreferrer" className="w-full">Informações TISS</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#clube-vantagens" className="w-full">Clube de Vantagens</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/privacidade" className="text-primary-foreground hover:opacity-80 transition-opacity text-base font-bold">
              Privacidade
            </Link>
          </div>

          {/* Desktop CTAs and Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary-foreground text-primary hover:bg-muted font-bold rounded-full px-6 py-2 text-sm">
                QUERO SER CLIENTE
              </Button>
            </a>
            
            <Link to="/cooperado">
              <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-bold rounded-full px-6 py-2 text-sm">
                QUERO SER COOPERADO
              </Button>
            </Link>

            <div className="flex items-center space-x-3 ml-4">
              <a href="https://www.facebook.com/unidentalce/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/unidentalce/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/unidentalce/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:opacity-80 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-primary-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden py-4 space-y-3 border-t border-border/20">
            <Link to="/idss" className="block text-primary-foreground hover:opacity-80 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
              IDSS
            </Link>
            <Link to="/privacidade" className="block text-primary-foreground hover:opacity-80 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
              Privacidade
            </Link>
            
            <div className="pt-4 space-y-3">
              <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary-foreground text-primary hover:bg-muted font-bold">
                  QUERO SER CLIENTE
                </Button>
              </a>
              <Link to="/cooperado" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-bold">
                  QUERO SER COOPERADO
                </Button>
              </Link>
            </div>

            <div className="flex justify-center space-x-6 pt-4">
              <a href="https://www.facebook.com/unidentalce/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-primary-foreground">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/unidentalce/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/unidentalce/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};