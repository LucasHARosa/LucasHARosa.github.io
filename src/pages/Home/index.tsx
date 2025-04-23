import { About } from "../../components/About";

import { Contact } from "../../components/Contact";
import { Education } from "../../components/Education";
import { Experience } from "../../components/Experience";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { MainProjetos } from "../../components/MainProjetos";
import { Skills } from "../../components/Skills";

export function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <MainProjetos />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
