  import './Projects.css'
  import { useState } from 'react'
  import { projects, type Project } from '../datasets/projects.ts'
  import ProjectModal from './ProjectModal.tsx'
  
  function Projects() {
      const [activeProject, setActiveProject] = useState<Project | null>(null)
  
      return (
          <section className="projects" aria-label="Projects">
              <ul className="bento">
                  {projects.map((project) => (
                      <li
                          key={project.id}
                          id={`project-${project.id}`}
                          className="bento__item"
                          data-project={project.id}
                      >
                          <button
                              type="button"
                              className="bento__tile"
                              onClick={() => setActiveProject(project)}
                      >
                       
                            <span className="bento__media">
                                <img className="bento__image" src={project.image} alt="" />
                        </span>
                        <span className="bento__caption">
                                <span className="bento__title">{project.title}</span>
                                <span className="bento__summary">{project.summary}</span>
                            </span>
                          </button>
                      </li>
                  ))}
              </ul>
  
              <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
          </section>
      )
  }
  
  export default Projects