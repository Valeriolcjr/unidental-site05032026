import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerVideo from "@/assets/unidental-28-anos-banner-site.mp4";
import bannerPJ from "@/assets/unidental-28-anos-banner-site-pj.png";

const banners = [
  { 
    id: 1, 
    tipo: "video",
    src: bannerVideo, 
    alt: "Unidental 28 anos - Vídeo",
    duracao: 17000 // 15 segundos (ajuste conforme a duração real do vídeo)
  },
  { 
    id: 2, 
    tipo: "imagem",
    src: bannerPJ, 
    alt: "Unidental 28 anos - Pessoa Jurídica",
    duracao: 6000 // 6 segundos para imagem
  },
];

export const HeroCarousel = () => {
  const [bannerAtual, setBannerAtual] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const irParaProximo = () => {
    setBannerAtual((atual) => (atual + 1) % banners.length);
  };

  const irParaAnterior = () => {
    setBannerAtual((atual) => (atual - 1 + banners.length) % banners.length);
  };

  // Controla o tempo de cada banner
  useEffect(() => {
    // Limpar timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const banner = banners[bannerAtual];

    // Se for vídeo, espera o vídeo terminar (ou usar a duração definida)
    if (banner.tipo === "video" && videoRef.current) {
      const video = videoRef.current;
      
      // Tenta usar a duração real do vídeo
      const duracaoReal = video.duration ? video.duration * 1000 + 700 : banner.duracao;
      
      // Quando o vídeo terminar, avança
      const handleVideoEnd = () => {
        irParaProximo();
      };
      
      video.addEventListener('ended', handleVideoEnd);
      
      // Fallback: se o vídeo não disparar 'ended', usa timeout
      timeoutRef.current = window.setTimeout(() => {
        irParaProximo();
      }, duracaoReal + 1700);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    } 
    
    // Se for imagem, usa timeout fixo
    if (banner.tipo === "imagem") {
      timeoutRef.current = window.setTimeout(() => {
        irParaProximo();
      }, banner.duracao);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [bannerAtual]);

  // Controlar reprodução do vídeo ao mudar de slide
  useEffect(() => {
    const banner = banners[bannerAtual];
    if (banner.tipo === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [bannerAtual]);

  const banner = banners[bannerAtual];

  return (
    <section className="relative w-full mt-20 bg-black">
      <div className="relative w-full aspect-[2100/600] overflow-hidden">
        {/* Vídeo */}
        {banner.tipo === "video" ? (
          <video
            ref={videoRef}
            src={banner.src}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
          />
        ) : (
          <img
            src={banner.src}
            alt={banner.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Overlay escuro suave para melhor contraste */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Setas de navegação */}
        <button
          onClick={irParaAnterior}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2.5 transition-all duration-300 border border-white/20 hover:border-white/40"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={irParaProximo}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2.5 transition-all duration-300 border border-white/20 hover:border-white/40"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicadores (dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setBannerAtual(index)}
              className={`transition-all duration-300 rounded-full ${
                index === bannerAtual
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};