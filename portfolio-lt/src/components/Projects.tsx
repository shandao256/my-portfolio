import './Projects.css'
import { projects } from '../datasets/projects.ts'

function Projects() {
    return (
        <section className="portfolio container">
            <div className="projects-grid">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.url ?? '#'}
                        target={project.url ? '_blank' : undefined}
                        rel={project.url ? 'noreferrer' : undefined}
                        className={`project-card project-card--${project.size ?? 'standard'}`}
                    >
                        <div className="project-card__media" aria-hidden="true">
                            <img src={project.image} alt="" className="project-card__image" />
                        </div>
                        <span className="project-card__title">{project.title}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects