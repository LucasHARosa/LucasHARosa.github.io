import { TimelineItem } from "../ExperienceCard";


const experiences = [
  {
    year: "2023 - Presente",
    title: "Desenvolvedor Full Stack Senior",
    company: "Tech Solutions",
    description: "Liderança técnica em projetos full stack usando React, Node.js e TypeScript. Implementação de microsserviços e arquitetura serverless.",
    tags: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    image: "/lovable-uploads/13153981-e123-480d-aa7b-bffe16ac833a.png"
  },
  {
    year: "2021 - 2023",
    title: "Desenvolvedor Front-end",
    company: "Digital Agency",
    description: "Desenvolvimento de interfaces responsivas e performáticas com foco em UX/UI.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    image: "/lovable-uploads/13153981-e123-480d-aa7b-bffe16ac833a.png"
  },
  {
    year: "2019 - 2021",
    title: "Desenvolvedor Web",
    company: "StartupX",
    description: "Criação de aplicações web escaláveis e manutenção de sistemas legados.",
    tags: ["JavaScript", "Vue.js", "PHP", "MySQL"],
    image: "/lovable-uploads/13153981-e123-480d-aa7b-bffe16ac833a.png"
  }
];

export const ExperienceTimeline = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-center text-3xl font-bold text-transparent">
          Experiência Profissional
        </h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
