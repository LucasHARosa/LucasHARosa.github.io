import styled from "styled-components";

export const SectionContainer = styled.div`
  margin-top: 1rem;
  padding: 6rem 10vw;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 5vw;
    gap: 2rem;
  }

  h1 {
    margin-top: 1rem;
    color: ${({ theme }) => theme["Gray-200"]};
    font-size: 2.5rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    color: ${({ theme }) => theme["Blue-100"]};
    font-size: 2.5rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 40%;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }

  div {
    @media (max-width: 768px) {
      width: 50%;
    }
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.5rem 0.875rem;
    border: 1px solid ${({ theme }) => theme["Gray-700"]};
    color: ${({ theme }) => theme["Blue-200"]};
    background-color: ${({ theme }) => theme["Gray-700"]};
    box-shadow: ${({ theme }) => theme["shadow-sm"]};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme["Gray-600"]};
      box-shadow: ${({ theme }) => theme["shadow-md"]};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      font-size: 0.875rem;
      padding: 0.625rem 1rem;
      gap: 0.75rem;
      justify-content: center;
    }

    svg {
      @media (max-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 60%;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }

  input,
  textarea {
    background-color: ${({ theme }) => theme["Blue-Gray-700"]};
    width: 100%;
    padding: 0.875rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme["Blue-Gray-600"]};
    color: ${({ theme }) => theme["Blue-100"]};
    font-size: 0.875rem;
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme["Blue-400"]};
      box-shadow: 0 0 0 2px ${({ theme }) => theme["Blue-500-opacity"]};
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  span {
    color: ${({ theme }) => theme["Orange-300"]};
    font-size: 0.75rem;
    margin-top: -0.75rem;
  }

  button {
    padding: 0.875rem 1rem;
    background-color: ${({ theme }) => theme["Blue-500"]};
    color: ${({ theme }) => theme["Gray-100"]};
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme["Blue-600"]};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;
