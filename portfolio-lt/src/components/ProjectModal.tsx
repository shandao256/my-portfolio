import { useEffect, useRef, useState } from 'react'
import { XIcon, ArrowUpRightIcon } from '@phosphor-icons/react'
import { formatPeriod, type Project } from '../datasets/projects.ts'
import './ProjectModal.css'

interface Props {
    project: Project | null
    onClose: () => void
}

function ProjectModal({ project: openProject, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const [project, setProject] = useState(openProject)
  if (openProject && openProject !== project) setProject(openProject)

  useEffect(() => {
      const dialog = dialogRef.current!
      if (openProject && !dialog.open) dialog.showModal()
  }, [openProject])

    return (
      <dialog
          ref={dialogRef}
          className="project-modal"
          onClose={onClose}
          onClick={(e) => {
              if (e.target === dialogRef.current) dialogRef.current.close()
          }}
          aria-labelledby="project-modal-title"
      >
        {project && (
            <div className="project-modal__inner">
                <div className="project-modal__bar">
                    <button
                        type="button"
                        className="project-modal__close"
                        onClick={() => dialogRef.current?.close()}
                        aria-label="Close project"
                    >
                        <XIcon size={24} />
                    </button>
                </div>

                <div className="project-modal__cover">
                    <img src={project.detailImage ?? project.image} alt={project.imageAlt} />
                </div>

                <article className="project-modal__content">
                    <header className="project-modal__header">
                        <p className="project-modal__date">{formatPeriod(project)}</p>
                        <h2 id="project-modal-title" className="project-modal__title">
                            {project.title}
                        </h2>
                        <p className="project-modal__type">{project.type}</p>
                    </header>

                    <section>
                        <h3 className="project-modal__label">About</h3>
                          <p>{project.about}</p> <br></br>
                          <p>{project.myRole}</p>
                    </section>

                    <div className="project-modal__meta">
                        <MetaColumn label="Role" items={project.role} />
                        <MetaColumn
                            label="Teams"
                            items={project.teams.map((t) => t.label)}
                            links={project.teams.map((t) => t.url)}
                        />
                        <MetaColumn label="Tools" items={project.tools} />
                        <MetaColumn label="Stack" items={project.stack} />
                    </div>

                    {project.link?.url && (
                        <a href={project.link.url} target="_blank" rel="noreferrer" className="project-modal__cta">
                            {project.link.label}
                            <ArrowUpRightIcon size={20} aria-hidden="true" />
                        </a>
                    )}
                </article>
            </div>
        )}
        </dialog>
    )
}

function MetaColumn({ label, items, links }: { label: string; items: string[]; links?: (string | undefined)[] }) {
    if (items.length === 0) return null
    return (
        <div className="project-modal__meta-col">
            <h3 className="project-modal__label">{label}</h3>
            <ul>
                {items.map((item, i) => (
                    <li key={item}>
                        {links?.[i] ? <a href={links[i]} target="_blank" rel="noreferrer">{item}</a> : item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectModal
