import { TagContainer } from "./styles";

interface TagProps {
  children: React.ReactNode;
  color?: string;
  background?: string;
}

export function Tag(  {children, color="purple", background="purple"}: TagProps){
  return (
    <TagContainer color={color} background={background}>
      {children}
    </TagContainer>
  )
}