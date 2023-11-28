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
    color: ${({ theme }) => theme['Blue-100']};
    font-size: 3rem;
    font-weight: 600;
    @media(max-width: 768px){
      font-size: 2rem;
    }
  }
`

export const ContainerTechs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media(max-width: 768px){
    gap: 2rem;
  }

  p{
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme['Gray-400']};
    margin-bottom: 1rem;
    @media(max-width: 768px){
      font-size: 0.625rem;
    }
  }
`

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  img{
    @media(max-width: 768px){
      width: 3rem;
    }
  }

`