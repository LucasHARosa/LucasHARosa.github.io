import { Projetos } from '../Projetos';
import {Code, Cpu} from 'phosphor-react'
import { useState } from 'react';
import { listaProjetos } from '../../data/data';
import { Tag } from '../Tag';
import { ButtonSelect, ContainerButtonSelect, ContainerProjetos, ContainerTitle, SectionContainer, SelectContainer } from './styles';

export function MainProjetos(){
  const [buttonActive, setButtonActive] = useState(false)
  
  const lista = listaProjetos.filter((item) => {
    if (item.tipo === "desenvolvimento" && buttonActive === false){
      return item
    }
    if (item.tipo === "Machine" && buttonActive === true){
      return item
    }
  })

  function handleChangeButton(){ 
    setButtonActive(!buttonActive)
  }
  

  return (
    <SectionContainer id="Projetos">
        <SelectContainer>
          <ContainerTitle>
            <Tag color="blue" background='blue'>📁 &nbsp; Portfólio</Tag>
            <h1>Trabalhos e projetos</h1>
          </ContainerTitle>
          
          <ContainerButtonSelect>
            <ButtonSelect isActive={!buttonActive}
              onClick={handleChangeButton}>
              <div><Code size={22}/></div>
              Desenvolvimento
            </ButtonSelect>
            <ButtonSelect isActive={buttonActive}
              onClick={handleChangeButton}>
              <div><Cpu size={22}/></div>
              Machine Learning
            </ButtonSelect>
            
          </ContainerButtonSelect>
        </SelectContainer>
       
        <ContainerProjetos>
          {lista.map((item) => {
            return (
              <Projetos
                key={item.id}
                titulo={item.titulo}
                tags={item.tags}
                descricao={item.descricao}
                imagem={item.imagem}
                LinkGithub={item.LinkGit}
                Link={item.Link} 
              />
            )
          })}
          
        </ContainerProjetos>
        
      </SectionContainer>
  )
}