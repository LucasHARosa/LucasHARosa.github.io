import astro2 from '../../assets/astro2.png'
import Typewriter from "typewriter-effect";

import {LinkedinLogo, GithubLogo} from 'phosphor-react'
import { Tag } from '../Tag';
import { IntroButtons, IntroContainer, IntroContent, TypeWriterText } from './styles';

export function Intro(){
  return (
    <section id="Home">
      <IntroContainer>
        <IntroContent>
          <Tag color="blue" background='blue'>👋 &nbsp; Hello!</Tag>
          <h1>Lucas Rosa</h1>
          <TypeWriterText>
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
          </TypeWriterText>
          <IntroButtons>
            <a href="https://github.com/LucasHARosa" target="_blank">
              <button>
                <div>
                  <GithubLogo size={22}/>
                </div>
                Github
              </button>
            </a>
            <a href="https://www.linkedin.com/in/lucas-henrique-alves-rosa/" target="_blank"><button>
              <div><LinkedinLogo size={22}/></div>
              Linkedin
            </button></a>
          </IntroButtons>
        </IntroContent>
        <img src={astro2} alt="" />
        
      </IntroContainer>
    </section>
  )
}