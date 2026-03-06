import { useEffect, useState } from "react";
import { WatermarkPattern } from "@/components/ui/watermark-pattern";

const stats = [
  { label: "Cidades alcançadas", value: 150, suffix: "+" },
  { label: "Pacientes atendidos", value: 50000, suffix: "+" },
  { label: "Empresas parceiras", value: 500, suffix: "+" },
];

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
};

export const Statistics = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <WatermarkPattern />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
  const count = useCountUp(value);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold mb-2">
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="text-lg md:text-xl opacity-90">{label}</div>
    </div>
  );
};
