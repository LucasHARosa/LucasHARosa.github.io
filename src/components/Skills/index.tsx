
import { Tag } from '../Tag';
import { ButtonSkill, ContainerButtons, ContainerSection, ContainerTechs, ContainerTitle, Techs, TechsDescription, TechsLogo } from './styles';
import { useEffect, useState } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { listaSkills } from '../../data/data';
import { DiNodejs } from "react-icons/di";


export function Skills(){
  
  const[skill,setSkill]=useState(listaSkills[0]);
  
  const fill = "#62a2e2";

  useEffect(() => {
    Paths.filter((item) => {
      if (item.id === skill.id){
        setPath(item)
      }
    })
  },[skill])


  function handleChangeSkill(id:string){
    listaSkills.filter((item) => {
      if (item.id === id){
        setSkill(item)
      }
    })
    Paths.filter((item) => {
      if (item.id === id){
        setPath(item)
      }
    })
  }

  const ImagemFundo = () => {
    switch (skill.id) {
      case "nodejs":
        return <DiNodejs size={100} />
      case "react":
      //   return react
      // case "c":
      //   return c
      // case "python":
      //   return python
      // case "html":
      //   return html
      // case "css":
      //   return css
      // case "js":
      //   return js
      // case "ts":
      //   return ts
      // case "git":
      //   return git
      // case "github":
      //   return github
      // case "java":
      //   return java
      // case "sql":
      //   return sql
      default:
        return <DiNodejs size={300} />
    }
  }
  

  return(
    <ContainerSection id="Skills">
      <ContainerTitle>
        <Tag color="blue" background='blue'>💻&nbsp;Skills</Tag>
        <h1>Tecnologias e linguagens</h1>
      </ContainerTitle>
      
      <ContainerTechs>
        <Techs>
          <TechsLogo>
            {ImagemFundo()}
          </TechsLogo>
          
          <ContainerButtons>
            {Paths.map((item) => {
              return (
                <ButtonSkill key={item.id}>
                  <button onClick={()=>handleChangeSkill(item.id)}>
                    <svg width="40" height="40">
                      <g>
                        <path fill={fill} d={item.d} />
                      </g>
                    </svg>
                  </button>
                </ButtonSkill>
              )
            })}
          </ContainerButtons>
        </Techs>
        <TechsDescription>
          <h1>aa</h1>
        </TechsDescription>
      </ContainerTechs>  

    </ContainerSection>
  )
}