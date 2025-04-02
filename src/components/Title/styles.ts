import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  text-align: center;
  gap: 0.75rem;
  @media (max-width: 768px) {
    width: 90%;
    gap: 0.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme["Blue-500"]},
    ${({ theme }) => theme["Purple-300"]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme["Gray-400"]};
  font-weight: 300;
`;
