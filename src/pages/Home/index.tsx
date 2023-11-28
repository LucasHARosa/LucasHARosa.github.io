import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { MainProjetos } from "../../components/MainProjetos";
import { Skills } from "../../components/Skills";

export function Home(){
  return (
    <>
      <Header />
      <Intro />
      <About />
      <MainProjetos />
      {/* <Skills /> */}
      <Contact />
      <Footer />
      
    </>
  )
}