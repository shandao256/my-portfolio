import './Projects.css'
import { useRef, useState } from 'react'
import { projects, formatPeriodShort, type Project } from '../datasets/projects.ts'
import ProjectModal from './ProjectModal.tsx'

const cardId = (projectId: string) => `project-${projectId}`

function Projects() {
    const sectionRef = useRef<HTMLElement>(null)
  const [activeProject, setActiveProject] = useState<Project | null>(null)


    return (
        <section
            ref={sectionRef}
            className="projects container"
            aria-labelledby="projects-title"
            data-reveal
        >
            <h2 id="projects-title" className="section__title">My works</h2>

            <ul className="projects__list">
                {projects.map((project) => (
                    <li key={project.id} id={cardId(project.id)} className="project-card">
                        <button
                            type="button"
                            className="project-card__link"
                            onClick={() => setActiveProject(project)}
                        >
                            <div className="project-card__media">
                                <img className="project-card__image" src={project.image} alt="" />
                            </div>

                            <div className="project-card__caption">
                                <h3 className="project-card__title">{project.title}</h3>
                                <span className="project-card__date">{formatPeriodShort(project)}</span>
                                <p className="project-card__summary">{project.summary}</p>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>

            <ProjectModal
                project={activeProject}
                onClose={() => setActiveProject(null)}
            />
        </section>
    )
}

export default Projects