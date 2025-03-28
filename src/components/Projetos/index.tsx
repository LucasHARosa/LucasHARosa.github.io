import { animated, to, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import { AppleLogo, GithubLogo, GooglePlayLogo, Link } from "phosphor-react";
import { useRef } from "react";
import { useGesture } from "react-use-gesture";
import { ProjetosProps } from "../../data/data";
import { Tag } from "../Tag";
import {
  Container,
  ContainerButtons,
  ContainerContent,
  ContainerTags,
} from "./styles";

interface Props {
  projeto: ProjetosProps;
}

export function Projetos({ projeto }: Props) {
  const domTarget = useRef<HTMLDivElement>(null);

  const calcX = (y: number) => {
    if (!domTarget.current) return;
    const cardRect = domTarget.current.getBoundingClientRect();
    const centery = (cardRect.top + cardRect.bottom) / 2;
    return -(y - centery) / 700;
  };

  const calcY = (x: number) => {
    if (!domTarget.current) return;
    const cardRect = domTarget.current.getBoundingClientRect();
    const centerx = (cardRect.left + cardRect.right) / 2;
    return (x - centerx) / 70;
  };

  const [{ x, y, rotateX, rotateY, rotateZ, scale, zoom }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      x: 0,
      y: 0,
      scale: 1,
      zoom: 0,
      config: { mass: 20, tension: 450, friction: 40 },
    })
  );

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py),
          rotateY: calcY(px),
          scale: 1.01,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
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
          <img src={projeto.imagem} />
          <ContainerContent>
            <div>
              <h1>{projeto.titulo}</h1>
              <p>{projeto.descricao}</p>
            </div>
            <div>
              <ContainerTags>
                {projeto.tags.map((tag) => {
                  return (
                    <Tag key={tag} color="blue" background="blue">
                      {tag}
                    </Tag>
                  );
                })}
              </ContainerTags>

              <ContainerButtons>
                {projeto.LinkGoogle && (
                  <a href={projeto.Link} target="_blank">
                    <button>
                      <div>
                        <GooglePlayLogo size={20} />
                      </div>
                      Google Play
                    </button>
                  </a>
                )}
                {projeto.LinkApple && (
                  <a href={projeto.LinkGit} target="_blank">
                    <button>
                      <div>
                        <AppleLogo size={20} weight="fill" />
                      </div>
                      Apple Store
                    </button>
                  </a>
                )}
                {projeto.LinkGit && (
                  <a href={projeto.LinkGit} target="_blank">
                    <button>
                      <div>
                        <GithubLogo size={20} />
                      </div>
                      Github
                    </button>
                  </a>
                )}
                {projeto.Link && (
                  <a href={projeto.Link} target="_blank">
                    <button>
                      <div>
                        <Link size={20} />
                      </div>
                      Link
                    </button>
                  </a>
                )}
              </ContainerButtons>
            </div>
          </ContainerContent>
        </Container>
      </animated.div>
    </motion.div>
  );
}
