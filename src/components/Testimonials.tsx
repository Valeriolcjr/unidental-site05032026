import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import img1 from "@/assets/01.png";
import img2 from "@/assets/02.png";
import img3 from "@/assets/03.png";
import img4 from "@/assets/04.png";
import img5 from "@/assets/05.png";

// Dados dos depoimentos com textos reais
const testimonials = [
  { 
    name: "Janeceli Moreno", 
    text: "Dra Yara Grangeiro é formidável. Competente e muito carinhosa.", 
    rating: 5, 
    image: img1 
  },
  { 
    name: "Rila Hachem", 
    text: "Excelente atendimento, desde a recepção até o atendimento final. Dr. Denis um profissional maravilhoso. Super indico.", 
    rating: 5, 
    image: img2 
  },
  { 
    name: "Leonardo Freitas", 
    text: "Faz algum tempo que sou cliente da Unidental e não poderia estar mais satisfeito. A cobertura do plano é bastante abrangente e os dentistas credenciados são muito competentes. Recomendo a todos.", 
    rating: 5, 
    image: img3 
  },
  { 
    name: "Celia Ana", 
    text: "Adorei o atendimento, profissionais super competentes, ambiente agradável, melhor atendimento que já tivemos e resolveu o nosso problema. Super indico.", 
    rating: 5, 
    image: img4 
  },
  { 
    name: "Vanisia Moraes", 
    text: "Não posso deixar de dar meus parabéns a atendente Debóra, muito satisfeita com atendimento que me recepcionou.", 
    rating: 5, 
    image: img5 
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(374);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number>();
  const pauseTimeoutRef = useRef<number>();
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Detectar tamanho da tela e ajustar cards por vez E largura dos cards
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      
      // Ajusta quantos cards mostrar por vez
      if (width < 768) {
        setCardsPerView(2); // mobile: 2 cards
      } else if (width >= 768 && width < 1280) {
        setCardsPerView(3); // tablet: 3 cards
      } else {
        setCardsPerView(3); // desktop: 3 cards
      }
      
      // Ajusta largura dos cards
      if (width < 768) {
        // Mobile: card ocupa quase toda tela (menos padding)
        setCardWidth(width - 48); // 24px padding cada lado
      } else if (width >= 768 && width < 1280) {
        // Tablet: cards um pouco menores
        setCardWidth(320); // 320px + gap
      } else {
        // Desktop: tamanho original
        setCardWidth(350 + 24); // 374px
      }
    };
    
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const totalSlides = testimonials.length;
  
  // Garantir que extendedTestimonials sempre existe
  const extendedTestimonials = useMemo(() => {
    return testimonials && testimonials.length > 0 
      ? [...testimonials, ...testimonials, ...testimonials, ...testimonials]
      : [];
  }, []);

  // Função para pausar autoplay temporariamente
  const pauseAutoPlay = useCallback((duration: number = 2000) => {
    setIsAutoPlaying(false);
    
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsAutoPlaying(true);
    }, duration);
  }, []);

  // Função para ir para o próximo slide
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => {
      const nextIndex = prev + cardsPerView;
      if (nextIndex >= totalSlides * 3) {
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = 'none';
            setCurrentIndex(totalSlides);
            containerRef.current.offsetHeight;
            containerRef.current.style.transition = 'transform 0.5s ease-out';
          }
        }, 500);
        return nextIndex;
      }
      return nextIndex;
    });
  }, [totalSlides, cardsPerView]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => {
      const prevIndex = prev - cardsPerView;
      if (prevIndex < 0) {
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = 'none';
            setCurrentIndex(totalSlides * 3 - cardsPerView);
            containerRef.current.offsetHeight;
            containerRef.current.style.transition = 'transform 0.5s ease-out';
          }
        }, 500);
        return prevIndex;
      }
      return prevIndex;
    });
  }, [totalSlides, cardsPerView]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAutoPlay(2000);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goToNext();
    } else if (touchStartX.current - touchEndX.current < -50) {
      goToPrev();
    }
  };

  // Autoplay
  useEffect(() => {
    if (isAutoPlaying && extendedTestimonials.length > 0) {
      autoPlayRef.current = window.setInterval(() => {
        goToNext();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, goToNext, extendedTestimonials.length]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  // Inicializar no meio
  useEffect(() => {
    setCurrentIndex(totalSlides * 2);
  }, [totalSlides]);

  const handleMouseEnter = () => {
    pauseAutoPlay(2000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  // Verificar se temos dados para renderizar
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que falam da <span className="text-primary">Unidental</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossos feedbacks são muito positivos! Confira as avaliações reais dos nossos clientes.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-8 relative">
          <button
            onClick={() => {
              goToPrev();
              pauseAutoPlay(2000);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              goToNext();
              pauseAutoPlay(2000);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="overflow-hidden mx-4 sm:mx-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => {}}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: cardWidth }}
                >
                  <Card className="border-border hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={`Depoimento de ${testimonial.name}`}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                        <div className="flex mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-sm leading-relaxed line-clamp-4">
                          "{testimonial.text}"
                        </p>
                        <p className="text-xs text-gray-300 mt-2">
                          - {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / cardsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index * cardsPerView + totalSlides * 2);
                  pauseAutoPlay(2000);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  Math.floor((currentIndex % totalSlides) / cardsPerView) === index
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-primary/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://www.google.com/search?q=unidental+google#mpd=~8395511096211289642/customers/reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-lg group"
          >
            Ver mais avaliações no Google
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};