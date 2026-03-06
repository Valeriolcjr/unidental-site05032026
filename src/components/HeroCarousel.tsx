import { useRef } from "react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroCarousel = () => {
  return (
    <section className="relative w-full mt-20">
      {/* Container que ocupa 100% da largura e mantém proporção 16:9 */}
      <div className="relative w-full aspect-video">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroBanner}
        >
          <source src="/src/assets/MÊS DA MULHER NA UNIDENTAL.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};