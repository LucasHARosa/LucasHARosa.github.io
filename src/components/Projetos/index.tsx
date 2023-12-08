import { Tag } from '../Tag';
import { GithubLogo , Link} from 'phosphor-react'
import { Container, ContainerButtons, ContainerTags } from './styles';
import { useRef } from 'react';
import { animated, to, useSpring } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';
import { motion } from 'framer-motion';


interface ProjetosProps {
  titulo: string;
  tags: string[];
  descricao: string;
  imagem: string;
  LinkGithub: string;
  Link: string;
}

export function Projetos(props: ProjetosProps) {

  const domTarget = useRef<HTMLDivElement>(null);
 

  const calcX = (y: number) => {
    if (!domTarget.current) return;
    const cardRect = domTarget.current.getBoundingClientRect();
    const centery = (cardRect.top + cardRect.bottom) /2;
    return -(y - centery) / 250;
  }
  
  const calcY = (x: number) => {
    if (!domTarget.current) return;
    const cardRect = domTarget.current.getBoundingClientRect();
    const centerx = (cardRect.left + cardRect.right) /2;
    return (x - centerx) / 70;
  }

  const [{ x, y, rotateX, rotateY,rotateZ,scale,zoom}, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      x: 0,
      y: 0,
      scale:1,
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
          scale: 1.02,
        }),
        onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget,eventOptions: { passive: false }},
  );

  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring" }}
      layout
    >
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
      <Container>
        <div>
          <h1>{props.titulo}</h1>
          <p>{props.descricao}</p>
        </div>
        <div>
          <ContainerTags>
            {props.tags.map((tag) => {
              return (
                <Tag key={tag} color="blue" background='blue'>{tag}</Tag>
              )}
            )}
          </ContainerTags>
          <img src={props.imagem} />
          <ContainerButtons>
            <a href={props.LinkGithub} target="_blank">
              <button>
                <div><GithubLogo size={20}/></div>
                Github
              </button>
            </a>
            {props.Link === '' ?
            '' 
            :
            <a href={props.Link} target="_blank">
              <button>
                <div><Link size={20}/></div>
                Link
              </button>
            </a>
            }       
          </ContainerButtons>
        </div>
        
      </Container>
      </animated.div>
    </motion.div>
  )
}