import styled from 'styled-components'

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 130px;
  padding: 4rem 10vw;

  @media(max-width: 768px){
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }

` 

export const ContainerAboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1{
    font-style: normal;
    font-weight: 400; 
    font-size: 2rem;
    color: var(--white);
    @media(max-width: 768px){
      font-size: 1.5rem;
    }
  }

  p{
    font-style: normal;
    font-weight: 300; 
    font-size: 1rem;
    color: ${({ theme }) => theme['Gray-300']};
    @media(max-width: 768px){
      font-size: 0.675rem;
    }
  }
  div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const ContainerAboutImage = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['Blue-600-opacity']};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: 0.4s;
  box-shadow: 0px 0px 30px ${({ theme }) => theme['Blue-600-opacity']};
  

  img{
    width: 25vw;
    @media(max-width: 768px){
      width: 50vw;
    }
  }

  &:hover{
    box-shadow: 0px 0px 100px ${({ theme }) => theme['Blue-600-opacity']};
    transition: 0.4s;
  }
`

export const LegendImage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

`


