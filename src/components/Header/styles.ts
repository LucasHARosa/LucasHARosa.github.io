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

  // background-color: ${({ theme }) => theme['Blue-Gray-100']};
  

  border-radius: 1rem;
  width: 100%;
  color: ${({ theme }) => theme['white']};

  img {
    width: 60px;
    height: 40px;
    margin-top: 3px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
  }
`
export const HeaderButton = styled.button`

  display: none;
  @media(max-width: 768px){
    display: block;
    color: #FFF;
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 30px;
    z-index: 2;
  }
`

export const HeaderNav = styled.nav`
  @media(max-width: 768px){
    display: block;
    
    padding: 62px 0 1rem 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;

    z-index: 1;
    position: absolute;
    top: 32px;
    right: 1rem;
    width: 150px;
    background-color: ${({ theme }) => theme['background']};

    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    list-style: none;

    @media(max-width: 768px){
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }
  a{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    list-style: none;
    color: ${({ theme }) => theme['Gray-300']};

    @media(max-width: 768px){
      color: ${({ theme }) => theme['white']};
      font-size: 1rem;
      font-weight: 500;
      transition: 0.2s;
      &:hover{
        transition: 0.2s;
        color: ${({ theme }) => theme['Green-500']};
      }
    }
    
  }
  
`