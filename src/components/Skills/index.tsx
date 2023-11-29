
import { Tag } from '../Tag';
import { ButtonSkill, ContainerButtons, ContainerSection, ContainerTechs, ContainerTitle, Techs, TechsDescription, TechsLogo } from './styles';
import {  useState } from 'react'
import { listaSkills } from '../../data/data';
import { DiNodejs } from "react-icons/di";
import { FaGithub, FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";


export function Skills(){
  
  const[skill,setSkill]=useState(listaSkills[0]);


  function handleChangeSkill(id:string){
    listaSkills.filter((item) => {
      if (item.id === id){
        setSkill(item)
      }
    })
  }

  const ImagemFundo = () => {
    switch (skill.id) {
      case "nodejs":
        return <DiNodejs size={300} color="#a8cff0" />
      case "react":
        return <FaReact size={300} color="#a8cff0"  />
      case "java":
        return <FaJava size={300} color="#a8cff0"  />
      case "python":
        return <FaPython size={300} color="#a8cff0"  />
      case "react-native":
        return <FaReact size={300} color="#a8cff0"  />
      case "typescript":
        return <SiTypescript size={300} color="#a8cff0"   />
      case "github":
        return <FaGithub size={300} color="#a8cff0"   />
      case "tailwind":
        return <SiTailwindcss size={300} color="#a8cff0" />
      case "styled-components":
        return <SiStyledcomponents size={300} color="#a8cff0" />
      case "nextjs":
        return <SiNextdotjs size={300} color="#a8cff0" />
      case "code":
        return <SiCplusplus size={300} color="#a8cff0" />
      default:
        return <FaReact size={300} color="#a8cff0"  />
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
         
          <TechsLogo
            key={skill.id}
            initial={{ opacity: 0, scale: 0.8, x:-30 }}
            animate={{ opacity: 1, scale: 1, x:0 }}
            
            transition={{ duration: 1.2, type: "spring" }}
          >
            {ImagemFundo()}
          </TechsLogo>
          
          <ContainerButtons>
            <ButtonSkill onClick={() => handleChangeSkill("react")} active={skill.id ==="react"}>
              <FaReact size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("typescript")} active={skill.id === "typescript"}>
              <SiTypescript size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("java")} active={skill.id === "java"}>
              <FaJava size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("python")} active={skill.id === "python"}>
              <FaPython size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("nodejs")} active={skill.id === "nodejs"}>
              <DiNodejs size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("react-native")} active={skill.id === "react-native"}>
              <FaReact size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("github")} active={skill.id === "github"}>
              <FaGithub size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("tailwind")} active={skill.id === "tailwind"}>
              <SiTailwindcss size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("styled-components")} active={skill.id === "styled-components"}>
              <SiStyledcomponents size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("nextjs")} active={skill.id === "nextjs"}>
              <SiNextdotjs size={30} />
            </ButtonSkill>
            <ButtonSkill onClick={() => handleChangeSkill("code")} active={skill.id === "code"}>
              <SiCplusplus size={30} />
            </ButtonSkill>
          </ContainerButtons>
        </Techs>
        <TechsDescription
          key={skill.id}
          initial={{ opacity: 0, scale: 0.7, x:30 }}
          animate={{ opacity: 1, scale: 1 , x:0}}
          transition={{ duration: 1.2, type: "spring" }}
        >
          
            <h2>{skill.titulo}</h2>
            <p>{skill.description}</p>
            <div>
              {skill.tecnologiasAxiliares.map((tag) => {
                return (
                  <Tag key={tag} color="blue" background='blue'>{tag}</Tag>
                )}
              )}
            </div>
            
          
        </TechsDescription>
      </ContainerTechs>  

    </ContainerSection>
  )
}