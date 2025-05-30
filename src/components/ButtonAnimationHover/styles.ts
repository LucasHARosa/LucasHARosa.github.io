import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme["Gray-300"]};

  &.active {
    color: ${({ theme }) => theme["white"]};
    font-weight: 600;
  }
`;
