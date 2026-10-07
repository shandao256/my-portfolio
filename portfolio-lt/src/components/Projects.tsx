import './Projects.css'
import { useRef, useState } from 'react'
import { projects, formatPeriodShort, type Project } from '../datasets/projects.ts'
import { useScrollSpy } from '../hooks/useScrollSpy.ts'
import SideNav from './SideNav.tsx'
import ProjectModal from './ProjectModal.tsx'

const cardId = (projectId: string) => `project-${projectId}`

const cardIds = projects.map((project) => cardId(project.id))
const navItems = projects.map((project) => ({
    id: cardId(project.id),
    label: project.title,
    meta: formatPeriodShort(project),
}))


function Projects() {
    const sectionRef = useRef<HTMLElement>(null)
    const { visible, activeId } = useScrollSpy(cardIds, sectionRef)
  const [activeProject, setActiveProject] = useState<Project | null>(null)


    return (
        <section
            ref={sectionRef}
            className="projects container"
            aria-labelledby="projects-title"
        >
            <h2 id="projects-title" className="section__title">My works</h2>

            <SideNav
                label="Projects"
                items={navItems}
                activeId={activeId}
                visible={visible}
            />

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