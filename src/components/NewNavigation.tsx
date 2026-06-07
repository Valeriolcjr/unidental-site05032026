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
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-lg shadow-lg overflow-hidden">
      <WatermarkPattern />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between min-h-[72px] md:min-h-[80px] py-2">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center group -ml-2">
            <div className="cursor-pointer transition-transform duration-300 group-hover:scale-105">
              <img alt="Unidental" src={logoNavbar} className="h-10 md:h-14 w-auto drop-shadow-lg" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <Link to="/idss" className="text-primary-foreground hover:opacity-80 transition-opacity text-sm md:text-base xl:text-lg font-bold whitespace-nowrap">
              IDSS
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-primary-foreground flex items-center gap-1 hover:opacity-80 transition-opacity outline-none text-sm md:text-base xl:text-lg font-bold whitespace-nowrap">
                <span>Espaço do Cliente</span>
                <ChevronDown className="h-3 w-3 md:h-4 md:w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card min-w-[180px] md:min-w-[200px]">
                <DropdownMenuItem>
                  <Link to="/encontre-dentista" className="w-full">Encontrar dentista</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://unidental.s4e.com.br//SYS/?TipoUsuario=4" target="_blank" rel="noopener noreferrer" className="w-full">2ª via de boleto</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://unidental.s4e.com.br//SYS/?TipoUsuario=2" target="_blank" rel="noopener noreferrer" className="w-full">Área do cliente</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/clinicas-radiologicas" className="w-full">Clínicas Radiológicas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://unidental.s4e.com.br//SYS/?TipoUsuario=6" target="_blank" rel="noopener noreferrer" className="w-full">Imposto de renda</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer" className="w-full">Quero ser cliente</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-primary-foreground flex items-center gap-1 hover:opacity-80 transition-opacity outline-none text-sm md:text-base xl:text-lg font-bold whitespace-nowrap">
                <span>Espaço do Cooperado</span>
                <ChevronDown className="h-3 w-3 md:h-4 md:w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card min-w-[180px] md:min-w-[200px]">
                <DropdownMenuItem>
                  <a href="https://unidental.s4e.com.br//SYS/?TipoUsuario=3" target="_blank" rel="noopener noreferrer" className="w-full">Portal do cooperado</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://unidental.s4e.com.br//SYS/?TipoUsuario=3" target="_blank" rel="noopener noreferrer" className="w-full">Informações TISS</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#clube-vantagens" className="w-full">Clube de Vantagens</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/privacidade" className="text-primary-foreground hover:opacity-80 transition-opacity text-sm md:text-base xl:text-lg font-bold whitespace-nowrap">
              Privacidade
            </Link>
          </div>

          {/* Desktop CTAs and Social */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a href="https://comercial.unidental.com.br/#:~:text=Escolha%20o%20plano%20ideal%20para%20voc%C3%AA" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary-foreground text-primary hover:bg-muted font-bold rounded-full px-4 md:px-5 xl:px-6 py-1.5 md:py-2 text-xs md:text-sm whitespace-nowrap">
                QUERO SER CLIENTE
              </Button>
            </a>
            
            <Link to="/cooperado">
              <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-bold rounded-full px-4 md:px-5 xl:px-6 py-1.5 md:py-2 text-xs md:text-sm whitespace-nowrap">
                QUERO SER COOPERADO
              </Button>
            </Link>

            <div className="flex items-center gap-2 xl:gap-3 ml-2 xl:ml-4">
              <a href="https://www.facebook.com/unidentalce/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:opacity-80 transition-opacity">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="https://www.instagram.com/unidentalce/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:opacity-80 transition-opacity">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="https://www.linkedin.com/company/unidentalce/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:opacity-80 transition-opacity">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-primary-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-border/20">
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
          </div>
        )}
      </div>
    </nav>
  );
};