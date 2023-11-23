import { useState } from 'react';
import {List, X} from 'phosphor-react'
import { ParticleStar } from '../Particles/particleStar';
import { ParticleSnow } from '../Particles/particleSnow';
import { ParticleLight } from '../Particles/particleLight';
import { ParticleAmong } from '../Particles/particlesAmong';
import { HeaderButton, HeaderContainer, HeaderContent, HeaderNav } from './styles';

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
      <HeaderContainer>
        <HeaderContent>
            <a href="#Home"><img src="/lr.svg" alt="" /></a>
            <HeaderButton onClick={() => setMenu(!menu)}>
              {menu ? <X size={30}/> : <List size={30}/>}
              
            </HeaderButton>
            
            <HeaderNav>
              <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#SobreMim">Sobre mim</a></li>
                <li><a href="#Projetos">Projetos</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Contato">Contato</a></li>
                <ul>
                  <li><a href="#" onClick={handleTheme}>Mudar o tema</a></li>
                </ul>
              </ul>
            </HeaderNav>

        </HeaderContent>
      </HeaderContainer>
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


