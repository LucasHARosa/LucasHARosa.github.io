import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;

  padding: 4rem 10vw;
  gap: 2rem;

  @media (max-width: 768px) {
    height: 780px
    align-items: center;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;
  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const IconWrapper = styled.div`
  color: #a8cff0;

  svg {
    width: 250px;
    height: 250px;

    @media (max-width: 1000px) {
      width: 200px;
      height: 200px;
    }

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem;
  border-radius: 1rem;
  gap: 4rem;

  width: 35vw;
  height: auto;
  max-height: 80vh;

  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme["Blue-Gray-500"]},
    ${({ theme }) => theme["Blue-500"]} 150%
  );

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: 100vh;
  }
`;

export const TechsLogo = styled(motion.div)`
  height: 300px;
  display: fixed;

  @media (max-width: 1000px) {
    height: 150px;
  }

  @media (max-width: 768px) {
    height: 70px;
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

interface ButtonProps {
  active: boolean;
}
export const ButtonSkill = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  background: none;
  transition: 0.4s;
  color: ${({ theme, active }) =>
    active ? theme["Blue-200"] : theme["Blue-Gray-600"]};
  &:hover {
    transition: 0.4s;
    color: ${({ theme }) => theme["Blue-200"]};
  }
`;

export const TechsDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 35vw;
  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme["Blue-100"]};
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  span {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme["Blue-200"]};
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme["Blue-100"]};
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const BarProgress = styled.div`
  width: 300px;

  border-radius: 1rem;
  height: 1rem;
  background: ${({ theme }) => theme["Blue-Gray-500"]};

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Space = styled.div`
  width: 100%;
  height: 2rem;
`;
export const Progress = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const TextProgress = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme["Blue-200"]};
  margin-right: 1rem;
  font-weight: 500;
`;
