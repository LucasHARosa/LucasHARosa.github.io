import styled from "styled-components";

export const SectionContainer = styled.div`
  margin-top: 1rem;
  padding: 10rem 10vw;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 10vw;
    align-items: flex-start;
  }

  h1 {
    margin-top: 1rem;
    color: ${({ theme }) => theme["Gray-200"]};
    font-size: 3rem;
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
  justify-content: start;
  h1 {
    color: ${({ theme }) => theme["Blue-100"]};
    font-size: 3rem;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 1000px
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    align-items: invert;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    width: 60%;

    border-radius: 0.75rem;
    padding: 0.5rem 1rem;

    border: 1px solid ${({ theme }) => theme["Blue-300"]};

    color: ${({ theme }) => theme["Blue-100"]};

    box-shadow: 0px 0px 5px ${({ theme }) => theme["Blue-300-opacity"]};

    transition: 0.4s;

    &:hover {
      transition: 0.4s;
      background-color: ${({ theme }) => theme["Blue-500-opacity"]};
      box-shadow: 0px 0px 30px ${({ theme }) => theme["Blue-300-opacity"]};
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding: 0.5rem 0.5rem;
      gap: 0.5rem;
      width: 100%;
    }

    svg {
      @media (max-width: 768px) {
        width: 2rem;
      }
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;

  input,
  textarea {
    background-color: transparent;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme["Blue-300-opacity"]};
    color: ${({ theme }) => theme["Blue-100"]};
  }

  button {
    padding: 1rem;
    background-color: ${({ theme }) => theme["Blue-300-opacity"]};
    color: ${({ theme }) => theme["Blue-100"]};
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme["Blue-400-opacity"]};
    }
  }
`;
