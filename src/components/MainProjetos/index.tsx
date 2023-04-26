import { Projetos } from '../Projetos';
import styles from './styles.module.css';
import {Code, Cpu} from 'phosphor-react'
import { useState } from 'react';
import { listaProjetos } from '../../data/data';

export function MainProjetos(){
  const [tipo, setTipo] = useState('desenvolvimento')
  
  const lista = listaProjetos.filter((item) => {
    if (item.tipo === tipo){
      return item
    }
  })

  function handleDesenvolvimento(){ 
    setTipo('desenvolvimento')
  }
  function handleMachine(){
    setTipo('Machine')
  }

  return (
    <section id="Projetos" className={styles.containerProjetos}>
        <div className={styles.selection}>
          <div className={styles.containerTitle}>
            <div className={styles.tag}>📁 Portfolio</div>
            <h1>Trabalhos e projetos</h1>
          </div>
          
          <div className={styles.containerButton}>
            <button 
              className={`${tipo === 'desenvolvimento' ? styles.buttonactive : styles.button}`} 
              onClick={handleDesenvolvimento}>
              <div><Code size={22}/></div>
              Desenvolvimento
            </button>
            <button
              className={`${tipo === 'Machine' ? styles.buttonactive : styles.button}`}
              onClick={handleMachine}>
              <div><Cpu size={22}/></div>
              Machine Learning
            </button>
            
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.containerCards}>
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
          </div>
        </div>
        
      </section>
  )
}