import { useRef, useEffect } from "react";
import { EducationCard } from "../EducationCard";

const education = [
  {
    institution: "Universidade Federal",
    course: "Ciência da Computação",
    period: "2015 - 2019",
    description: "Bacharelado com ênfase em desenvolvimento de software e inteligência artificial.",
    image: "/lovable-uploads/13153981-e123-480d-aa7b-bffe16ac833a.png"
  },
  {
    institution: "Digital Innovation One",
    course: "Bootcamp Full Stack",
    period: "2020",
    description: "Desenvolvimento web fullstack com foco em React e Node.js.",
    image: "/lovable-uploads/13153981-e123-480d-aa7b-bffe16ac833a.png"
  },
  {
    institution: "Udemy",
    course: "AWS Solutions Architect",
    period: "2021",
    description: "Certificação profissional em arquitetura de soluções na AWS.",
    image: "/lovable-uploads/13153981-e123-480d-aa7b-bffe16ac833a.png"
  }
];

export const EducationCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-center text-3xl font-bold text-transparent">
          Educação
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {[...education, ...education].map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};
