import styles from './styles.module.css';
import Hand from '../../assets/Hand.svg'
import Typewriter from "typewriter-effect";

import {LinkedinLogo, GithubLogo} from 'phosphor-react'

export function Intro(){
  return (
    <section id="Home">
      <div className={styles.container}>
        <div className={styles.containerInfo}>
          <div className={styles.tag}>
          👋 Hello!
          </div>
          <h1>Lucas Rosa</h1>
          <p>
            <Typewriter
              options={{
                strings: [
                  'Developer',
                  'Front-end Developer', 
                  'Deep Learning Engineer',
                  'Back-end Developer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </p>
          <div className={styles.containerButtons}>
            <a href="https://github.com/LucasHARosa">
              <button>
              <div><GithubLogo size={22}/></div>
              Github
              </button>
            </a>
            <a href="https://www.linkedin.com/in/lucas-henrique-alves-rosa/"><button>
              <div><LinkedinLogo size={22}/></div>
              Linkedin
            </button></a>
          </div>
        </div>
        <img src={Hand} alt="" />
        
      </div>
    </section>
  )
}