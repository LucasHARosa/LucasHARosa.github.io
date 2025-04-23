import { useEffect, useRef } from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiGraduationCapFill } from "react-icons/pi";
import { TbCertificate, TbDeviceMobileCode } from "react-icons/tb";
import { EducationCard } from "../EducationCard";
import { Title } from "../Title";
import {
  EducationContainer,
  EducationSection,
  TimelineContainer,
} from "./styles";

const educations = [
  {
    icon: PiGraduationCapFill,
    title: "Engenharia Mecatrônica",
    subtitle: "Universidade de Brasília (UnB)",
    description: "Graduação em Engenharia Mecatrônica, Controle e Automação.",
    tags: ["Automação", "Controle", "Mecatrônica", "Engenharia"],
  },
  {
    icon: TbCertificate,
    title: "Desenvolvimento Web",
    subtitle: "Rocketseat",
    description:
      "Desenvolvimento de aplicações web com React, Node.js e TypeScript.",
    tags: ["React", "Node.js", "Next.js", "Nest.js"],
  },
  {
    icon: TbDeviceMobileCode,
    title: "Desenvolvimento Mobile",
    subtitle: "Rocketseat",
    description: "Desenvolvimento de aplicações mobile com React Native.",
    tags: ["React Native", "Expo", "JavaScript", "TypeScript"],
  },
  {
    icon: TbCertificate,
    title: "Desenvolvimento Backend",
    subtitle: "ADA Tech",
    description: "Desenvolvimento backend com Java",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  },

  {
    icon: LiaCertificateSolid,
    title: "Curso.Dev",
    subtitle: "Filipe Deschamps",
    description:
      "Formação fullstack para dominar qualquer tecnologia e resolver qualquer desafio.",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
  },
];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.25;

    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;

      scrollAmount += speed;
      container.scrollLeft = scrollAmount;

      // Quando chegar no fim dos itens originais, reinicia
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <EducationSection id="Educacao">
      <EducationContainer>
        <Title
          title="Educação"
          subTitle="Minhas formações"
          description="Sempre buscando novos conhecimentos e habilidades!"
        />
        <TimelineContainer ref={containerRef}>
          {[...educations, ...educations].map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </TimelineContainer>
      </EducationContainer>
    </EducationSection>
  );
}
