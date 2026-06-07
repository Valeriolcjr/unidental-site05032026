import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import heroBanner from "@/assets/hero-banner.jpg";
import heroDental from "@/assets/hero-dental.jpg";

// Importe o tipo do Embla Carousel
import type { EmblaCarouselType } from 'embla-carousel';

export const ModernHeroBanner = () => {
  // Corrigido: usar o tipo correto ao invés de any
  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = [
    {
      image: heroBanner,
      title: "25 Anos Transformando Sorrisos",
      subtitle: "A cooperativa odontológica do Ceará que cuida de você"
    },
    {
      image: heroDental,
      title: "Atendimento Humanizado",
      subtitle: "Profissionais qualificados em toda Fortaleza e região"
    }
  ];

  return (
    <section className="pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <Carousel 
        className="w-full relative"
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transform scale-105 transition-transform duration-[5000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl animate-fade-in">
                      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl text-white/90">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20" />
        <CarouselNext className="right-4 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20" />
        
        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index 
                  ? "w-8 bg-white" 
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};