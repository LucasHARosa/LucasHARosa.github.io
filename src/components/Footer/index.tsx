import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";
import { toast } from "react-toastify";
import {
  BottomSection,
  CompanyDescription,
  CompanyInfo,
  CompanyName,
  ContactEmail,
  Container,
  Copyright,
  FooterContainer,
  Navigation,
  NavLink,
  SocialButton,
  SocialLinks,
  SocialSection,
  TopSection,
} from "./styles";

interface FooterProps {
  companyName?: string;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  navigationLinks?: Array<{
    label: string;
    href: string;
  }>;
}

export function Footer({
  companyName = "Lucas Rosa",
  socialLinks = {
    github: "https://github.com/LucasHARosa",
    twitter: "https://twitter.com/LucasHARosa",
    linkedin: "https://linkedin.com/in/lucas-henrique-alves-rosa/",
    email: "mailto:lucashenriquealvesrosa@gmail.com",
  },
  navigationLinks = [
    { label: "Home", href: "#" },
    { label: "Sobre", href: "#SobreMim" },
    { label: "Projetos", href: "#Projetos" },
    { label: "Contato", href: "#Contato" },
  ],
}: FooterProps) {
  const currentYear = new Date().getFullYear();
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
    <FooterContainer>
      <Container>
        <TopSection>
          <CompanyInfo>
            <CompanyName>{companyName}</CompanyName>
            <CompanyDescription>
              Transformando ideias em experiências digitais excepcionais com
              precisão e criatividade.
            </CompanyDescription>
          </CompanyInfo>

          <SocialSection>
            <SocialLinks>
              {socialLinks.github && (
                <SocialButton
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubLogo size={20} weight="fill" />
                </SocialButton>
              )}

              {socialLinks.linkedin && (
                <SocialButton
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={20} weight="fill" />
                </SocialButton>
              )}
              {socialLinks.email && (
                <SocialButton onClick={handleCopy} aria-label="Email">
                  <Envelope size={20} weight="fill" />
                </SocialButton>
              )}
            </SocialLinks>
            <ContactEmail>lucashrosa99@gmail.com</ContactEmail>
          </SocialSection>
        </TopSection>

        <BottomSection>
          <Navigation>
            {navigationLinks.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </Navigation>

          <Copyright>
            <p>
              © {currentYear} {companyName}. Todos os direitos reservados.
            </p>
          </Copyright>
        </BottomSection>
      </Container>
    </FooterContainer>
  );
}
