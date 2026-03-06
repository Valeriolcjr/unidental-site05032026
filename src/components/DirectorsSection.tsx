import director1 from "@/assets/director-1-new.jpg";
import director2 from "@/assets/director-2-new.jpg";
import director3 from "@/assets/director-3-new.jpg";
import director4 from "@/assets/director-4-new.jpg";

const directors = [
  {
    name: "Dra. Sâmia Mello",
    role: "Presidente",
    image: director1,
  },
  {
    name: "Dra. Aline Escócio",
    role: "Diretora Técnica",
    image: director2,
  },
  {
    name: "Dr. Lincoln Albuquerque",
    role: "Diretor Financeiro",
    image: director3,
  },
  {
    name: "Dra. Hyane Alencar",
    role: "Diretora Comercial",
    image: director4,
  },
];

export const DirectorsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          A NOSSA DIRETORIA
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {directors.map((director, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 border-4 border-gray-300 inline-block overflow-hidden">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-64 h-80 object-cover object-[center_20%]"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{director.name}</h3>
              <p className="text-foreground">{director.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
