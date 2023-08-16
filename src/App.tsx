import { About } from "./components/About";
import { Header } from "./components/Header"
import { Intro } from "./components/Intro";

import './global.css';

import { MainProjetos } from "./components/MainProjetos";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";


export function App() {
  

  return (
    <>
      
      <Header />
      <Intro />
      <About />
      <MainProjetos />
      <Skills />
      <Contact />
      <Footer />

    </>
  )
}


