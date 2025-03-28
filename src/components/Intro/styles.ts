import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 6rem 10vw 4rem;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 6rem 5vw 4rem;
    text-align: center;
  }

  @keyframes floatAnimation {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  img {
    animation: floatAnimation 6s ease-in-out infinite;
    z-index: 1;
    width: 28rem;
    max-width: 40%;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 3.5rem;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme["Blue-200"]},
      ${({ theme }) => theme["Blue-400"]}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

export const TypeWriterText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme["Blue-300"]};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const IntroButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border: 1px solid ${({ theme }) => theme["Blue-500"]};
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme["Blue-100"]};
    background-color: ${({ theme }) => theme["Blue-600-opacity"]};
    box-shadow: ${({ theme }) => theme["shadow-sm"]};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme["Blue-500"]};
      box-shadow: ${({ theme }) => theme["shadow-md"]};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    div {
      color: ${({ theme }) => theme["Blue-300"]};
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 768px) {
      padding: 0.625rem 1.25rem;
      font-size: 0.8125rem;
    }
  }
`;
