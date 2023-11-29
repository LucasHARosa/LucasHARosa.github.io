import styled from 'styled-components'

export const SectionContainer = styled.div`
  
  padding: 5rem 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
  gap: 2rem;

  @media(max-width: 768px){
    flex-direction: column;
    padding: 2.5rem 1rem;
  }

  h1{
    margin-top: 1rem;
    color: ${({ theme }) => theme['Blue-100']};
    font-size: 3rem;
    font-weight: 600;
    @media(max-width: 768px){
      font-size: 2rem;
    }
  }
`

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:2rem;
  flex-wrap: wrap;
  

  a{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:1rem;
    flex-wrap: wrap;
    
    border-radius: 0.75rem;
    padding: 0.5rem 1rem;

    border: 1px solid ${({ theme }) => theme['Blue-300']};
    
    color: ${({ theme }) => theme['Blue-200']};
    
    box-shadow: 0px 0px 5px ${({ theme }) => theme['Blue-300-opacity']};

    transition: 0.4s;

    &:hover{
      transition: 0.4s;
      background-color:  ${({ theme }) => theme['Blue-500-opacity']};
      box-shadow: 0px 0px 30px ${({ theme }) => theme['Blue-300-opacity']};
    }

    @media(max-width: 768px){
      font-size: 0.625rem;
    }
    
    svg{
      @media(max-width: 768px){
        width: 2rem;
      }
    }
  }

`