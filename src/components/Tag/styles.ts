import styled from "styled-components";

interface Props {
  color?: string;
  background?: string;
}

export const TagContainer = styled.div<Props>`
  width: fit-content;
  font-size: 0.875rem;

  border-radius: 0.5rem;
  border: 1px solid
    ${({ color, theme }) => {
      switch (color) {
        case "none":
          return theme["Gray-800"];
        case "blue":
          return theme["Blue-300"];
        case "white":
          return "#fff";
        case "purple":
          return theme["Purple-300"];
        default:
          return theme["Gray-800"];
      }
    }};
  padding: 0.375rem 1rem 0.375rem 1rem;
  background-color: ${({ background, theme }) => {
    switch (background) {
      case "none":
        return theme["transparent"];
      case "blue":
        return theme["Blue-300-opacity"];
      case "white":
        return "#fff";
      case "purple":
        return theme["Purple-300-opacity"];
      default:
        return theme["transparent"];
    }
  }};
  color: ${({ color, theme }) => {
    switch (color) {
      case "none":
        return theme["Gray-050"];
      case "blue":
        return theme["Blue-100"];
      case "white":
        return theme["Gray-900"];
      case "purple":
        return theme["Purple-050"];
      default:
        return theme["Gray-050"];
    }
  }};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
