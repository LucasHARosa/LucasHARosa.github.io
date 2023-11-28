import styled from 'styled-components'

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 10rem 10vw;
  @media(max-width: 768px){
    padding: 2rem 1rem;
  }

`

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 3rem;

  @media(max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
 
`

export const ContainerButtonSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

interface ButtonSelectProps{
  isActive?: boolean;
}

export const ButtonSelect = styled.button<ButtonSelectProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  width: 194px;
  border-radius: 0.5rem;
  padding: 0.875rem 1rem;

  font-size: 0.875rem;
  font-weight: 500;
  transition: 0.4s;
  cursor: ${({ isActive }) => isActive ? 'default' : 'pointer'};

  color: ${({ theme }) => theme['Blue-100']};
  border: 1px solid ${({ theme }) => theme['Blue-300']};
  background-color: ${({ theme, isActive }) => isActive ? theme['Blue-800'] : 'transparent'};

  @media(max-width: 768px){
    width: 140px;
    height: 52px;
    font-size: 0.625rem;
  }

  &:hover{
    background-color: ${({ theme }) => theme['Blue-800']};
    box-shadow: 0px 0px 30px ${({ theme,isActive }) => isActive ? 'transparent': theme['Blue-600']};
    transition: 0.4s;
  }

  div{
    height: 22px;
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

export const ContainerProjetos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`