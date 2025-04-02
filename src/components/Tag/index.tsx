import { TagContainer } from "./styles";

interface TagProps {
  children: React.ReactNode;
  color?: string;
  background?: string;
}

export function Tag({
  children,
  color = "none",
  background = "none",
}: TagProps) {
  return (
    <TagContainer color={color} background={background}>
      {children}
    </TagContainer>
  );
}
