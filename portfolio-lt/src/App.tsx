import './App.css'
import Head from "./components/Head.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <>
      <Head />
      <h1 className="portfolio__sections">Projects</h1>
      <Projects />
      <h1 className="portfolio__sections">Tech Stack</h1>
      <h1 className="portfolio__sections">About Me</h1>
      <h1 className="portfolio__sections">Education</h1>

    </>
  )
}

export default App