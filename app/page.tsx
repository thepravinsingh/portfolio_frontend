import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div
      className="flex flex-col"
      style={{ paddingTop: "72px" }}
    >
      <Main />
      <AboutMe />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Education />
      <Contact />
      <Faq />
    </div>
  );
}
