
import {WhatsappLogo, Envelope } from 'phosphor-react'
import { toast } from 'react-toastify';
import { Tag } from '../Tag';
import { ContainerContact, SectionContainer } from './styles';
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
    <SectionContainer id='Contato' >
      
      <div>
        <Tag color="blue" background='blue'>📱&nbsp;  Fala Comigo!</Tag>
        <h1>Contatos</h1>
      </div>
      
      <ContainerContact>
        <div>
          <a href="https://wa.me/5561992836376">
            <WhatsappLogo size={50}  color='#62a2e2'/>
            <span>61 99283-6376</span>
          </a>
        </div>
        <div>
          <a href="#Contato" onClick={handlecopy}>
            <Envelope size={50}  color='#62a2e2'/>
            <span>lucashrosa99@gmail</span>
          </a>
        </div>
      </ContainerContact>
    </SectionContainer>
  )
}