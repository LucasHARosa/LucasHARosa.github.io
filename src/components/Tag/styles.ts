import styled from "styled-components";

interface Props {
  color?: string;
  background?: string;
}

export const TagContainer = styled.div<Props>`
  width: fit-content;
  font-size: 0.65rem;

  border-radius: 0.5rem;
  padding: 0.25rem 0.675rem 0.25rem 0.675rem;
  background-color: ${({ background, theme }) => {
    switch (background) {
      case "blue":
        return theme["Blue-300-opacity"];
      case "green":
        return theme["Green-300-opacity"];
      case "purple":
        return theme["Purple-300-opacity"];
      default:
        return theme["Blue-300"];
    }
  }};
  color: ${({ color, theme }) => {
    switch (color) {
      case "blue":
        return theme["Blue-100"];
      case "green":
        return theme["Green-100"];
      case "purple":
        return theme["Purple-050"];
      default:
        return theme["Blue-900"];
    }
  }};

  @media (max-width: 768px) {
    font-size: 0.625rem;
  }
`;
