import { IconType } from "react-icons";
import {
  CardContainer,
  Description,
  Header,
  IconContainer,
  Subtitle,
  Tag,
  TagsContainer,
  Title,
  TitleContainer,
} from "./styles";

interface ExperienceCardProps {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export function ExperienceCard({
  icon: Icon,
  title,
  subtitle,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <CardContainer>
      <Header>
        <IconContainer>
          <Icon size={24} color="#a78bfa" />
        </IconContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TitleContainer>
      </Header>
      <Description>{description}</Description>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
    </CardContainer>
  );
}
