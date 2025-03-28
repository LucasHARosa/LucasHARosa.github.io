import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background-color: ${({ theme }) => theme["Blue-Gray-800"]};
  border-top: 1px solid ${({ theme }) => theme["Blue-Gray-700"]};
  padding: 0 2rem;

  @media (max-width: 768px) {
    height: 3rem;
    padding: 0 1rem;
  }

  p {
    color: ${({ theme }) => theme["Gray-300"]};
    font-size: 0.875rem;
    font-weight: 300;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }

  a {
    color: ${({ theme }) => theme["Blue-300"]};
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme["Blue-400"]};
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;
