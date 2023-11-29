import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 0.5px  solid ${({ theme }) => theme['Blue-300-opacity']};
  border-radius: 1rem;
  // background-color: ${({ theme }) => theme['Blue-600-opacity']};
  background: linear-gradient(to bottom right, ${({ theme }) => theme["Blue-Green-300-opacity"]}, ${({ theme }) => theme['Blue-600-opacity']});
  width: 350px;
  height: 530px;
  padding: 1.625rem 1.875rem;
  transition: 0.3s;
  box-shadow: 0px 0px 10px ${({ theme }) => theme['Blue-500-opacity']};

  &:hover{
    box-shadow: 0px 0px 50px ${({ theme }) => theme['Blue-500-opacity']};
    transition: 0.3s;
  }

  @media(max-width: 768px){
    width: 250px;
    height: 400px;
    padding: 1rem 1.2rem;
  }

  h1{
    color: ${({ theme }) => theme['Blue-100']};
    @media(max-width: 768px){
      font-size: 1rem;
    }
  }

  p{
    font-size: 0.75rem;
    font-weight: 300;
    color: ${({ theme }) => theme['Gray-200']};
    margin-top: 0.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
    
    @media(max-width: 768px){
      font-size: 0.625rem;
    }
  }
  img{
    width: 100%;
    height: 10.625rem;
    object-fit: cover;
    border-radius: 0.5rem;
    @media(max-width: 768px){
      height: 7.5rem;
    }
  }
`

export const ContainerTags = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.625rem;
  @media(max-width: 768px){
    gap: 0.5rem;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
  @media(max-width: 768px){
    gap: 0.5rem;
  }
  
  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    width: 135px;

    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid ${({ theme }) => theme['Blue-300']};
    border-radius: 0.5rem;

    font-size: 0.875rem;
    font-weight: 300;
    color: ${({ theme }) => theme['Blue-100']};

    background-color: transparent;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
      background-color: ${({ theme }) => theme['Blue-Green-800-opacity']};
    }

    @media(max-width: 768px){
      width: 100px;
      font-size: 0.625rem;
      border: 1px solid ${({ theme }) => theme['Blue-300']};
      margin-top: 0.5rem;
      padding: 0.5rem 0.5rem;
    }

    svg{
      @media(max-width: 768px){
        width: 0.875rem;
        height: 0.875rem;
      }
    }

    div{
      color: ${({ theme }) => theme['Blue-100']};
      height: 22px;
      margin-right: 0.25rem;
      @media(max-width: 768px){
        height: 14px;
        margin-right: 0;
      }
    }
`

