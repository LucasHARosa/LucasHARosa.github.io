import styles from './styles.module.css';
import { useState } from 'react';
import {List, X} from 'phosphor-react'
import { ParticleStar } from '../Particles/particleStar';
import { ParticleSnow } from '../Particles/particleSnow';
import { ParticleLight } from '../Particles/particleLight';
import { ParticleAmong } from '../Particles/particlesAmong';

export function Header() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState('stars');


  function handleTheme() {
    if(theme === 'stars') {
      setTheme('snow')
    }else if(theme === 'snow') {
      setTheme('light')
    }else if(theme === 'light') {
      setTheme('among')
    }else if(theme === 'among') {
      setTheme('stars')
    }

  }

  return (
    <>
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
              <li>
                <a href="#" onClick={handleTheme}>Mudar o tema</a>
              </li>
            </ul>
          </nav>

        </div>
      </header>
      {theme === 'stars' && (
        <ParticleStar/> 
      )}
      {theme === 'snow' && (
        <ParticleSnow/>
      )}
      {theme === 'light' && (
        <ParticleLight/>
        
      )}
      {theme === 'among' && (
        <ParticleAmong/>
      )}
    </>
    
  )
}


