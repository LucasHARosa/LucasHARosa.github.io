import emailjs from "@emailjs/browser";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import { FaCode } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Tag } from "../Tag";
import {
  ContainerContact,
  ContainerTitle,
  Content,
  FormContainer,
  SectionContainer,
} from "./styles";

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data: any) {
    emailjs
      .send(
        "service_z6rfo82",
        "template_yw0g23o",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "Ph0oPbifsyxX3HebY"
      )
      .then(() => {
        toast.success("📧 Mensagem enviada com sucesso!");
        reset();
      })
      .catch(() => {
        toast.error("Erro ao enviar mensagem!");
      });
  }

  function handleCopy() {
    navigator.clipboard.writeText("lucashrosa99@gmail.com");
    toast("📧 Email copiado!", {
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

  return (
    <SectionContainer id="Contato">
      <ContainerTitle>
        <Tag color="blue" background="blue">
          📱&nbsp; Fale Comigo!
        </Tag>
        <h1>Entre em contato comigo</h1>
      </ContainerTitle>

      <Content>
        <ContainerContact>
          <div>
            <a href="https://wa.me/5561992836376">
              <WhatsappLogo size={30} color="#bfdbfe" />
              <span>WhatsApp</span>
            </a>
          </div>
          <div>
            <a href="#Contato" onClick={handleCopy}>
              <Envelope size={30} color="#bfdbfe" />
              <span>Copiar E-mail</span>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/lucas-henrique-alves-rosa/">
              <LinkedinLogo size={30} color="#bfdbfe" />
              <span>Linkedin</span>
            </a>
          </div>

          <div>
            <a href="https://github.com/LucasHARosa">
              <GithubLogo size={30} color="#bfdbfe" />
              <span>GitHub</span>
            </a>
          </div>
          <div>
            <a href="https://wa.me/5561992836376">
              <FaCode size={30} color="#bfdbfe" />
              <span>SoftwareHouse</span>
            </a>
          </div>
        </ContainerContact>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nome"
            {...register("name", { required: true })}
          />
          {errors.name && <span>Nome é obrigatório</span>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Email é obrigatório</span>}

          <textarea
            placeholder="Sua mensagem"
            {...register("message", { required: true })}
          />
          {errors.message && <span>Mensagem é obrigatória</span>}

          <button type="submit">Enviar</button>
        </FormContainer>
      </Content>
    </SectionContainer>
  );
}
