import bannerImagem from "@/assets/novobannerunidental03062026.png";

export const HeroCarousel = () => {
  return (
    <section className="relative w-full mt-20 bg-black">
      <div 
        className="relative w-full"
        style={{ aspectRatio: "2100/600" }}
      >
        <img
          src={bannerImagem}
          alt="Unidental - Homenagem às mães"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};