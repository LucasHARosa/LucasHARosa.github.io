import styles from './styles.module.css';
import foto from '../../assets/foto.png'
import { Heart, ChatCircle, PaperPlaneTilt } from 'phosphor-react';


export function About(){
  return (
    <section id="SobreMim">
      <div className={styles.container}>
        <div className={styles.imagem}>
          <img src={foto} alt="" />
          <div>
            <Heart size={24} weight="fill" color="#e52e4d" />
            <ChatCircle size={24}  color="#FFF" />
            <PaperPlaneTilt size={24}  color="#FFF" />
          </div>
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.tag}>✍ Sobre mim</div>
          <h1>Lucas Henrique Alves Rosa</h1>
          <div>
            <p>🖐 Prazer! Sou desenvolvedor e programador, com anos de experiência em diversas linguagens de programação e frameworks, tenho habilidades sólidas em desenvolvimento web e aplicativos, bem como em automação e Machine Learning</p>
            <p>🥇 Minha jornada como desenvolvedor começou quando percebi que poderia unir minha paixão por tecnologia e solução de problemas para criar soluções inovadoras. Ao longo dos anos, aprimorei minhas habilidades em programação e desenvolvimento, trabalhando em projetos desafiadores que exigiam pensamento crítico e criatividade.</p>
            <p>🚀 Se você está procurando um desenvolvedor web e programador que possa levar sua empresa para o próximo nível, estou à disposição. Meu compromisso com a excelência, juntamente com minhas habilidades técnicas, me tornam um parceiro valioso em qualquer projeto.</p>
          </div>
        </div>
      </div>
    </section>
  )
}