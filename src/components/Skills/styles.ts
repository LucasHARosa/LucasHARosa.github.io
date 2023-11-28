import styled from 'styled-components'

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 6.25rem 10vw;
  gap: 2rem;

  @media(max-width: 768px){
    padding: 4rem 1rem;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;


  h1{
    font-size: 3rem;
    font-weight: 600;
    @media(max-width: 768px){
      font-size: 2rem;
    }
  }
`

export const ContainerTechs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px){
    gap: 2rem;
  }

  
`

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 40vw;
  height: 50vw;
  border-radius: 1rem;

  background: linear-gradient(to bottom right, ${({ theme }) => theme["Blue-Gray-500"]}, ${({ theme }) => theme["Blue-Gray-300"]});

  
`

export const TechsLogo = styled.div`

  width: 10vw;
  height: 10vw;

  img{
    width: 190px;
    height: 190px;
  }

`

export const TechsDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 40vw;
  height: 50vw;
  border-radius: 1rem;
`

export const ButtonSkill = styled.div`

  button{
    background: none;
    border: none;
    cursor: pointer;
  }


`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`