import './App.css'
import Head from "./components/Head.tsx";
import Projects from "./components/Projects.tsx";
import AboutMe from "./components/AboutMe.tsx";
import TechStack from "./components/TechStack.tsx";
import Education from "./components/Education.tsx";

function App() {
  return (
    <>
      <Head />
      <Projects />
      <section className="gap"></section>
      <AboutMe />
      <section className="gap"></section>
      <TechStack />
      <section className="gap"></section>
      <Education />
    </>
  )
}

export default App