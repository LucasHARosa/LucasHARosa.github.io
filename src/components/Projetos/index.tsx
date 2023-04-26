import styles from './styles.module.css';
import { GithubLogo , Link} from 'phosphor-react'

interface ProjetosProps {
  titulo: string;
  tags: string[];
  descricao: string;
  imagem: string;
  LinkGithub: string;
  Link: string;
}

export function Projetos(props: ProjetosProps) {
  return (
    <div className={styles.container}>
      <div>
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
      </div>
      <div>
        <div className={styles.containerTags}>
          {props.tags.map((tag) => {
            return (
              <div key={tag} className={styles.tag}>{tag}</div>
            )}
          )}
        </div>
        <img src={props.imagem} />
        <div className={styles.containerButtons}>
        <a href={props.LinkGithub}>
            <button>
              <div><GithubLogo size={20}/></div>
              Github
            </button>
          </a>
          <a href={props.LinkGithub}>
            <button>
              <div><Link size={20}/></div>
              Link
            </button>
          </a>
          
        </div>
      </div>
      
    </div>
  )
}