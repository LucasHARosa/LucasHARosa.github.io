import styles from './styles.module.css';
import {WhatsappLogo, Envelope } from 'phosphor-react'
import { toast } from 'react-toastify';
export function Contact(){
  function handlecopy(){
    navigator.clipboard.writeText('lucashrosa99@gmail.com')
    toast('📧  Email copiado!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return(
    <section id='Contato' className={styles.container}>
      
      <div>
        <div className={styles.tag}>📱 Fala Comigo!</div>
        <h1>Contatos</h1>
      </div>
      
      <div className={styles.containerContact}>
        <div>
          <a href="https://wa.me/5561992836376">
            <WhatsappLogo size={50}  color='#7B4AE2'/>
            <span>61 99283-6376</span>
          </a>
        </div>
        <div>
          <a href="#Contato" onClick={handlecopy}>
            <Envelope size={50}  color='#7B4AE2'/>
            <span>lucashrosa99@gmail</span>
          </a>
        </div>
      </div>
    </section>
  )
}