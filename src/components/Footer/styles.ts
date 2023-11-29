import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: ${({ theme }) => theme['Blue-Gray-500-opacity']};

  @media(max-width: 768px){
    padding: 0.5rem;
  }
  p{
    color: ${({ theme }) => theme['Gray-200']};
    font-size: 0.875rem;
    font-weight: 300;
    @media(max-width: 768px){
      font-size: 0.625rem;
    }
  }
  a{
    color: ${({ theme }) => theme['Blue-500']};
    font-size: 0.875rem;
    font-weight: 600;
    @media(max-width: 768px){
      font-size: 0.625rem;
    }
  }


`
