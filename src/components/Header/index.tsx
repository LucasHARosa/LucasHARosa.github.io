import { useState } from 'react';
import {List, X} from 'phosphor-react'
import { ParticleStar } from '../Particles/particleStar';
import { ParticleSnow } from '../Particles/particleSnow';
import { ParticleLight } from '../Particles/particleLight';
import { ParticleAmong } from '../Particles/particlesAmong';
import { ContainerVertical, HeaderButton, HeaderContainer, HeaderContent, HeaderNav, HeaderNavMobile, NavLi } from './styles';
import { Variants, motion } from 'framer-motion';


const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

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

  const dataHeader=[
    {
      id: 1,
      name: 'Home',
      link: '#Home'
    },
    {
      id: 2,
      name: 'Sobre mim',
      link: '#SobreMim'
    },
    {
      id: 3,
      name: 'Projetos',
      link: '#Projetos'
    },
    {
      id: 4,
      name: 'Skills',
      link: '#Skills'
    },
    {
      id: 5,
      name: 'Contato',
      link: '#Contato'
    }
  ]

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
            <a href="#Home"><img src="/lr.svg" alt="" /></a>
            <ContainerVertical>
              <HeaderButton 
                onClick={() => setMenu(!menu)}
              >
                {menu ?
                  <X size={30}/>
                :
                  <List size={30}/>
                }
              </HeaderButton>
              
              
                <HeaderNavMobile
                  initial={false}
                  animate={menu ? "open" : "closed"}  
                >
                  
                  <motion.ul
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05
                        }
                      },
                      closed: {
                        clipPath: "inset(10% 20% 90% 80% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3
                        }
                      }
                    }}
                    style={{ pointerEvents: menu ? "auto" : "none" }}
                  >
                    {dataHeader.map((item) => (
                      <NavLi key={item.id}  variants={itemVariants} >
                        <a href={item.link}>{item.name} </a>
                      </NavLi>
                    ))}
                    <NavLi variants={itemVariants} ><a href="#" onClick={handleTheme} >Mudar o tema</a></NavLi>
                  </motion.ul>
                </HeaderNavMobile>
             
                <HeaderNav>
                  <ul>
                    {dataHeader.map((item) => (
                      <li key={item.id}  >
                        <a href={item.link}>{item.name} </a>
                      </li>
                    ))}
                    <li ><a href="#" onClick={handleTheme} >Mudar o tema</a></li>
                  </ul>
                </HeaderNav>
              
              
            </ContainerVertical>

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


