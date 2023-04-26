import styles from './styles.module.css';
import { useState } from 'react';
import {List, X} from 'phosphor-react'

export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#Home"><img src="/cod.svg" alt="" /></a>
        <button 
          className={styles.buttonMenu} 
          onClick={() => setMenu(!menu)}  
        >
          {menu ? <X size={30}/> : <List size={30}/>}
          
        </button>
        <nav 
          className={`${menu ? styles.navLinkActive:styles.navLink}`}>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#SobreMim">Sobre mim</a></li>
            <li><a href="#Projetos">Projetos</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}
