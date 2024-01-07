import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 4rem 10vw ;
  gap: 2rem;

  @media(max-width: 768px){
    
    align-items: center;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media(max-width: 768px){
    
  }

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
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;
  @media(max-width: 768px){
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
`

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem;
  border-radius: 1rem;
  gap: 4rem;

  width: 35vw;
  height: auto;
  max-height: 80vh;

  background: linear-gradient(to bottom right, ${({ theme }) => theme["Blue-Gray-500"]} , ${({ theme }) => theme["Blue-Green-600"]} 150%);

  @media(max-width: 768px){
    width: 100%;
    height: auto;
    max-height: 100vh;
  }
`

export const TechsLogo = styled(motion.div)`
  height: 300px;
  display: fixed;

`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: wrap;
`

interface ButtonProps{
  active: boolean;
}
export const ButtonSkill = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  background: none;
  transition: 0.4s;
  color: ${({ theme, active }) => active ? theme["Blue-200"] : theme["Blue-Gray-600"]};
  &:hover{
    transition: 0.4s;
    color: ${({ theme }) => theme["Blue-200"]};
  }
`



export const TechsDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 35vw;
  @media(max-width: 768px){
    width: 100%;
  }

  h2{
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme["Blue-100"]};
  }
  p{
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme["Blue-100"]};
    margin-bottom: 3rem;
  }
  div{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`