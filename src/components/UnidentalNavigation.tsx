import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoNavbar from "@/assets/logo-navbar-white.png";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";

export const UnidentalNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <WatermarkPattern />

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center group"
          >
            <img
              alt="Unidental Logo"
              className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
              src={logoNavbar}
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/idss"
              className="text-white hover:opacity-80 transition-opacity text-sm"
            >
              IDSS
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-white flex items-center gap-1 hover:opacity-80 transition-opacity outline-none text-sm">
                <span>Espaço do Cliente</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white min-w-[220px]">
                <DropdownMenuItem>
                  <Link to="/encontre-dentista" className="w-full">
                    Encontre um dentista
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="https://pinss.unidental.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    2ª via de boleto
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="https://pinss.unidental.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Imposto de renda
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="https://pinss.unidental.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Área do cliente
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="https://comercial.unidental.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Quero ser um cliente
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/clinicas-radiologicas" className="w-full">
                    Clínicas Radiológicas
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-white flex items-center gap-1 hover:opacity-80 transition-opacity outline-none text-sm">
                <span>Espaço do Cooperado</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white min-w-[220px]">
                <DropdownMenuItem>
                  <a
                    href="https://tiss.unidental.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Portal TISS
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/cooperado" className="w-full">
                    Quero ser um cooperado
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/privacidade"
              className="text-white hover:opacity-80 transition-opacity text-sm"
            >
              Privacidade
            </Link>

            {/* Botões com espaçamento aumentado para gap-6 */}
            <div className="flex items-center gap-6 ml-4">
              <a
                href="https://comercial.unidental.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary-foreground text-primary hover:bg-muted font-bold rounded-md h-10 px-4 py-2">
                  QUERO SER CLIENTE
                </Button>
              </a>

              <Link to="/cooperado">
                <Button className="bg-primary-foreground text-primary hover:bg-muted font-bold rounded-md h-10 px-4 py-2">
                  QUERO SER COOPERADO
                </Button>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-3 ml-2">
              <a
                href="https://www.facebook.com/unidentalce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-white hover:opacity-80" />
              </a>
              <a
                href="https://www.instagram.com/unidentalce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-white hover:opacity-80" />
              </a>
              <a
                href="https://www.linkedin.com/company/unidentalce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-white hover:opacity-80" />
              </a>
            </div>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeMobile}
          />

          <div className="absolute top-0 right-0 h-full w-80 max-w-full bg-primary p-6 overflow-y-auto shadow-xl">
            
            <div className="flex justify-end mb-6">
              <button onClick={closeMobile}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="space-y-4 text-white">
              <Link to="/idss" onClick={closeMobile}>IDSS</Link>
              <Link to="/encontre-dentista" onClick={closeMobile}>Encontre um dentista</Link>
              <Link to="/cooperado" onClick={closeMobile}>Cooperado</Link>
              <Link to="/privacidade" onClick={closeMobile}>Privacidade</Link>
            </div>

            <div className="mt-10 flex flex-col gap-6">
              <a
                href="https://comercial.unidental.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary-foreground text-primary hover:bg-muted font-bold rounded-md h-10 px-4 py-2">
                  QUERO SER CLIENTE
                </Button>
              </a>

              <Link to="/cooperado">
                <Button className="w-full bg-primary-foreground text-primary hover:bg-muted font-bold rounded-md h-10 px-4 py-2">
                  QUERO SER COOPERADO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};