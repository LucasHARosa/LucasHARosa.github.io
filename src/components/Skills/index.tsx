import styles from './styles.module.css';
import  node from   '../../assets/Skills/icons8-node-js-64.png'
import  react from   '../../assets/Skills/icons8-reagir-64.png'
import  c from   '../../assets/Skills/icons8-c++-64.png'
import  python from   '../../assets/Skills/icons8-python-64.png'
import  html from   '../../assets/Skills/icons8-html-5-64.png'
import  css from   '../../assets/Skills/icons8-css3-64.png'
import  js from   '../../assets/Skills/icons8-javascript-64.png'
import  ts from   '../../assets/Skills/icons8-typescript-64.png'
import  git from   '../../assets/Skills/icons8-git-64.png'
import  github from   '../../assets/Skills/icons8-github-64.png'
import  java from   '../../assets/Skills/icons8-logo-java-coffee-cup-64.png'
import sql from '../../assets/Skills/icons8-sql-64.png'

export function Skills(){
  return(
    <section id="Skills" className={styles.container}>
      <div className={styles.containerTitle}>
        <div className={styles.tag}>💻 Skills</div>
        <h1>Tecnologias e linguagens</h1>
      </div>
      
      <div className={styles.containerTechs}>
        <div className={styles.techs}>
          <p>Techs de desenvolvimento</p>
          <div>
            <img src={react}/>
            <img src={node}/>
            <img src={html}/>
            <img src={css}/>
    
          </div>
        </div>
        <div className={styles.techs}>
          <p>Linguagens</p>
          <div>
            <img src={js}/>
            <img src={ts}/>
            <img src={python}/>
            <img src={c}/>
            <img src={java}/>
            <img src={sql}/>
            
          </div>
        </div>
        <div className={styles.techs}>
          <p>Outras Skills</p>
          <div>
            <img src={git}/>
            <img src={github}/>
            
          </div>
        </div>
      </div>  

    </section>
  )
}