import styled from 'styled-components'

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 130px;
  padding: 8rem 10vw;

  border-bottom: 0.1px solid ${({ theme }) => theme['Purple-600-opacity']};
  border-top: 0.1px solid ${({ theme }) => theme['Purple-600-opacity']};;

  @media(max-width: 768px){
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 1rem;
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
      font-size: 0.875rem;
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
  background-color: ${({ theme }) => theme['Purple-600-opacity']};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  

  img{
    width: 25vw;
    @media(max-width: 768px){
      width: 50vw;
    }
  }
`

export const LegendImage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

`


