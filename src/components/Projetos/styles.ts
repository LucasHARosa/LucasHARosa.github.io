import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-start;

  border-radius: 1rem;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme["Blue-400-opacity"]},
    ${({ theme }) => theme["Blue-600-opacity"]}
  );
  width: 325px;
  height: 500px;

  transition: 0.3s;
  box-shadow: 0px 0px 10px ${({ theme }) => theme["Blue-500-opacity"]};

  &:hover {
    box-shadow: 0px 0px 50px ${({ theme }) => theme["Blue-500-opacity"]};
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 400px;
  }

  h1 {
    color: ${({ theme }) => theme["Blue-100"]};
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 0.75rem;
    font-weight: 300;
    color: ${({ theme }) => theme["Gray-200"]};
    margin-top: 0.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    @media (max-width: 768px) {
      font-size: 0.625rem;
    }
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
    @media (max-width: 768px) {
      height: 7.5rem;
    }
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  height: 100%;
  flex: 1;
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

export const ContainerTags = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.625rem;
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  justify-content: space-start;
  @media(max-width: 768px){
    gap: 0.25rem;
  }
  
  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    justify-content: center;
    flex: 1;


    padding: 0.5rem 1rem;
    border: 0;

    font-size: 0.875rem;
    font-weight: 300;
    color: ${({ theme }) => theme["Blue-100"]};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme["Blue-300-opacity"]};
    cursor: pointer;
    transition: 0.4s;

    &:hover{
      transition: 0.4s;
      background-color: ${({ theme }) => theme["Blue-300-opacity"]};
    }

    @media(max-width: 768px){
      width: 120px;
      font-size: 0.625rem;
      border: 1px solid ${({ theme }) => theme["Blue-300"]};
      margin-top: 0.5rem;
      padding: 0.5rem 0.5rem;
    }

    svg{
      @media(max-width: 768px){
        width: 0.875rem;
        height: 0.875rem;
      }
    }

    div{
      color: ${({ theme }) => theme["Blue-100"]};
      height: 22px;
      margin-right: 0.25rem;
      @media(max-width: 768px){
        height: 14px;
        margin-right: 0;
      }
    }
`;
