import foto from '../../assets/foto.png'
import { Heart, ChatCircle, PaperPlaneTilt } from 'phosphor-react';
import { Tag } from '../Tag';
import { ContainerAbout, ContainerAboutImage, ContainerAboutText, LegendImage } from './styles';
import { useRef } from 'react';

import { useGesture } from "react-use-gesture";
import { useSpring, animated, to } from "@react-spring/web";


export function About() {
  const domTarget = useRef<HTMLDivElement>(null);


  const calcX = (y: number) => {
    if (!domTarget.current) return;
    const cardRect = domTarget.current.getBoundingClientRect();
    const centery = (cardRect.top + cardRect.bottom) / 2;
    return -(y - centery) / 85;
  }

  const calcY = (x: number) => {
    if (!domTarget.current) return;
    const cardRect = domTarget.current.getBoundingClientRect();
    const centerx = (cardRect.left + cardRect.right) / 2;
    return (x - centerx) / 85;
  }



  const [{ x, y, rotateX, rotateY, rotateZ, scale, zoom }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      x: 0,
      y: 0,
      scale: 1,
      zoom: 0,
      config: { mass: 10, tension: 500, friction: 40 },
    }),
  );

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py),
          rotateY: calcY(px),
          scale: 1.05,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } },
  );

  return (
    <section id="SobreMim">
      <ContainerAbout>
        <animated.div
          ref={domTarget}
          style={{
            x,
            y,
            transform: "perspective(600px)",
            scale: to([scale, zoom], (s, z) => s + z),
            rotateX,
            rotateY,
            rotateZ,
          }}
        >
          <ContainerAboutImage>
            <img src={foto} alt="" />
            <LegendImage>
              <Heart size={24} weight="fill" color="#e52e4d" />
              <ChatCircle size={24} color="#FFF" />
              <PaperPlaneTilt size={24} color="#FFF" />
            </LegendImage>
          </ContainerAboutImage>
        </animated.div>
        <ContainerAboutText>
          <Tag color="blue" background='blue'>✍ &nbsp; Sobre mim</Tag>
          <h1>Lucas Henrique Alves Rosa</h1>
          <div>
            <p>🖐 Prazer! Sou desenvolvedor e programador, com anos de experiência em diversas linguagens de programação e frameworks, tenho habilidades sólidas em desenvolvimento web e aplicativos, bem como em automação e Machine Learning</p>
            <p>🥇 Minha jornada como desenvolvedor começou quando percebi que poderia unir minha paixão por tecnologia e solução de problemas para criar soluções inovadoras. Ao longo dos anos, aprimorei minhas habilidades em programação e desenvolvimento, trabalhando em projetos desafiadores que exigiam pensamento crítico e criatividade.</p>
            <p>🚀 Se você está procurando um desenvolvedor web e programador que possa levar sua empresa para o próximo nível, estou à disposição. Meu compromisso com a excelência, juntamente com minhas habilidades técnicas, me tornam um parceiro valioso em qualquer projeto.</p>
          </div>
        </ContainerAboutText>
      </ContainerAbout>

    </section>
  )
}