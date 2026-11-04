import { useEffect, useState } from "react";
import bannerFamilia from "@/assets/banner-site-black-november-plano-familia-2100x600.webp";
import bannerPF from "@/assets/banner-site-black-november-pessoa-fisica-2100x600.webp";

const banners = [
  { imagem: bannerFamilia, alt: "Unidental - Plano Família" },
  { imagem: bannerPF, alt: "Unidental - Pessoa Física" },
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
