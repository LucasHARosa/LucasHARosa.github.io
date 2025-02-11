import styled from 'styled-components'



export const SectionContainer = styled.div`
  margin-top: 1rem;
  padding: 10rem 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
  gap: 2rem;

  @media(max-width: 768px){
    flex-direction: column;
    padding: 2rem 10vw ;
    align-items: flex-start;
    
  }

  h1{
    margin-top: 1rem;
    color: ${({ theme }) => theme['Gray-200']};
    font-size: 3rem;
    font-weight: 600;
    @media(max-width: 768px){
      font-size: 2rem;
    }
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  h1{
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
  justify-content: start;
  width: 100%;
  gap:2rem;
  

  @media(max-width: 768px){
    
    gap: 1rem;
  }
  
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
    
    color: ${({ theme }) => theme['Blue-100']};
    
    box-shadow: 0px 0px 5px ${({ theme }) => theme['Blue-300-opacity']};

    transition: 0.4s;

    &:hover{
      transition: 0.4s;
      background-color:  ${({ theme }) => theme['Blue-500-opacity']};
      box-shadow: 0px 0px 30px ${({ theme }) => theme['Blue-300-opacity']};
    }

    @media(max-width: 768px){
      font-size: 0.8rem;
      padding: 0.5rem 0.5rem;
      gap: 0.5rem;
    }
    
    svg{
      @media(max-width: 768px){
        width: 2rem;
      }
    }
  }

`