import Typewriter from "typewriter-effect";
import astro2 from "../../assets/astro2.png";

import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Button } from "../Button";
import { Tag } from "../Tag";
import {
  IntroButtons,
  IntroContainer,
  IntroContent,
  TypeWriterText,
} from "./styles";

export function Intro() {
  return (
    <section id="Home">
      <IntroContainer>
        <IntroContent>
          <Tag>👋 &nbsp; Hello!</Tag>
          <h1>Lucas Rosa</h1>
          <TypeWriterText>
            <Typewriter
              options={{
                strings: [
                  "Developer",
                  "Front-end Developer",
                  "Deep Learning Engineer",
                  "Back-end Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </TypeWriterText>
          <IntroButtons>
            <a href="https://github.com/LucasHARosa" target="_blank">
              <Button>
                <GithubLogo size={22} />
                Github
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-henrique-alves-rosa/"
              target="_blank"
            >
              <Button>
                <LinkedinLogo size={22} />
                Linkedin
              </Button>
            </a>
          </IntroButtons>
        </IntroContent>
        <img src={astro2} alt="" />
      </IntroContainer>
    </section>
  );
}
