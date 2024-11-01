import {
    CalendarIcon,
    GlobeIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { BookOpen, Users, Video } from "lucide-react";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";
import { AnimatedListDemo } from "./AnimatedListDemo";
  
  
  const features = [
    {
      Icon: Video,
      name: "Clases en vivo",
      description: "Interactúa en tiempo real con profesores nativos.",
      href: "/",
      cta: "Learn more",
      background: <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: BookOpen,
      name: "Ejercicios interactivos",
      description: "Mejora tus habilidades con ejercicios divertidos y desafiantes.",
      href: "/",
      cta: "Learn more",
      background: <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Comunidad global",
      description: "Conecta con estudiantes de todo el mundo y practica juntos.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Seguimiento de progreso",
      description: "Visualiza tu avance y mantén la motivación con estadísticas detalladas.",
      href: "/",
      cta: "Learn more",
      background:  <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Users,
      name: "Profesores certificados",
      description:
        "Aprende con los mejores profesores, todos certificados y con experiencia.",
      href: "/",
      cta: "Learn more",
      background: <DotPattern
      className={cn(
        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  export default function BentoMagicUI() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-10">Descubre LinguaLearn</h2>
                <BentoGrid className="lg:grid-rows-3">
                    {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
  }
  