import styled from 'styled-components'

export const Container = styled.div`
  

  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
    border: 2px solid ${({ theme }) => theme['Green-300']};
    border-radius: 0.5rem;

    
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--white);

    background-color: transparent;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
      background-color:  ${({ theme }) => theme['Green-100']};
      box-shadow: 0px 0px 10px ${({ theme }) => theme['Green-300']};
    }
    div{
      color: ${({ theme }) => theme['Green-300']};
      height: 22px;
    }
  }
`