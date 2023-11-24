import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  maring-bottom: 0vh;
  padding: 0 20vw ;
  @media(max-width: 768px){
    justify-content: center;
    padding: 14rem 1rem 6.25rem;
  }

  @keyframes floatAnimation {
    0%, 100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-15px);
      
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(15px);
    }
  }

  img{
    animation: floatAnimation 4s infinite;
    transition-timing-function: ease-in-out;
    z-index: -1;
    width: 25rem;
    @media(max-width: 768px){
      display: none;
    }
  }
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1{
    font-style: normal;
    font-weight: 400; 
    font-size: 3rem;
    color: ${({ theme }) => theme['Gray-100']};
  }
  p{
    font-style: normal;
    font-weight: 400; 
    font-size: 1.5rem;
    color: ${({ theme }) => theme['Blue-400']};

  }
`

export const IntroButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
    border: 2px solid ${({ theme }) => theme['Blue-300']};
    border-radius: 0.5rem;

    
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme['Blue-100']};

    background-color: transparent;
    cursor: pointer;
    transition: 0.4s;

    &:hover{
      background-color:  ${({ theme }) => theme['Blue-700-opacity']};
      box-shadow: 0px 0px 50px ${({ theme }) => theme['Blue-300-opacity']};
      transition: 0.4s;
    }
    div{
      color: ${({ theme }) => theme['Blue-300']};
      height: 22px;
    }
  }
`

