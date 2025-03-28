import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.5rem 3rem;
  border-radius: 0.5rem;
  width: 100%;
  color: ${({ theme }) => theme["white"]};

  img {
    width: 50px;
    height: 35px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderButton = styled(motion.button)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme["Gray-300"]};
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 30px;
    z-index: 10;
    padding: 0.25rem;
  }
`;

export const HeaderNav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    list-style: none;
  }

  a {
    display: flex;
    align-items: center;
    flex-direction: row;
    color: ${({ theme }) => theme["Gray-300"]};
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme["Blue-300"]};
    }
  }
`;

export const HeaderNavMobile = styled(motion.nav)`
  @media (min-width: 768px) {
    display: none;
  }

  position: absolute;
  top: 100%;
  right: 1rem;
  width: 12rem;
  border-radius: 0.5rem;
  z-index: 100;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme["shadow-lg"]};

  ul {
    padding: 0.75rem;
    background-color: ${({ theme }) => theme["Blue-Gray-700"]};
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
    margin: 0;
  }
`;

export const NavLi = styled(motion.li)`
  list-style: none;
  margin: 0;
  width: 100%;

  a {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    color: ${({ theme }) => theme["Gray-200"]};
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme["Blue-200"]};
      background-color: ${({ theme }) => theme["Blue-Gray-600"]};
    }
  }
`;

export const ContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
