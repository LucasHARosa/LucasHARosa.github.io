import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 0.5rem 2rem 0 2rem;
  position: relative;
  width: 100%;
  // background-color: ${({ theme }) => theme['background']};
  @media(max-width: 768px){
    padding: 0.5rem 1rem 0 1rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.625rem 1.25rem;
  

  border-radius: 1rem;
  width: 100%;
  color: ${({ theme }) => theme['white']};

  img {
    width: 60px;
    height: 40px;
    margin-top: 3px;
    color: ${({ theme }) => theme['gray-300']};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
  }
`



export const HeaderButton = styled(motion.button)`

  display: none;
  @media(max-width: 768px){
    display: block;
    color: ${({ theme }) => theme['Gray-300']}; 
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 30px;
    z-index: 2;
  }
  
  
`

export const HeaderNav = styled.nav`
  @media(max-width: 768px){
    display: none;
  }
  ul{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    list-style: none;
  }
  a{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    list-style: none;
    color: ${({ theme }) => theme['Gray-300']}; 
  }
  
`

export const HeaderNavMobile = styled(motion.nav)`
  @media(min-width: 768px){
    display: none;
  }
  margin-top: 2rem;
  
  position: absolute;
  
  width: 10rem;
  right: 2rem;
  border-radius: 1rem;
  z-index: 1;
  ul{
    padding: 0.875rem 0.25rem;
    background-color: ${({ theme }) => theme['Gray-300']};
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    list-style: none;
    margin: 0;
  }
`



export const NavLi = styled(motion.li)`
  list-style: none;
  margin: 0;
  a{
    color: ${({ theme }) => theme['background']};
    transition: color 0.2s;
    &:hover{
      transition: color 0.2s;
      color: ${({ theme }) => theme['Blue-700']};
    } 
  }

`

export const ContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`