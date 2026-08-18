import { useEffect, useState } from "react";
import pf1Imagem from "@/assets/PF1.png";
import pf2Imagem from "@/assets/PF2.png";
import pjImagem from "@/assets/PJ.png";

const banners = [
  { imagem: pf1Imagem, alt: "Unidental - Pessoa Física 1" },
  { imagem: pf2Imagem, alt: "Unidental - Pessoa Física 2" },
  { imagem: pjImagem, alt: "Unidental - Pessoa Jurídica" },
];

export const HeroCarousel = () => {
  const [bannerAtual, setBannerAtual] = useState(0);

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setBannerAtual((atual) => (atual + 1) % banners.length);
    }, 5000);

    return () => window.clearInterval(intervalo);
  }, []);

  return (
    <section className="relative w-full mt-20 bg-black">
      <div 
        className="relative w-full"
        style={{ aspectRatio: "2100/600" }}
      >
        {banners.map((banner, index) => (
          <img
            key={banner.imagem}
            src={banner.imagem}
            alt={banner.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === bannerAtual ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
};