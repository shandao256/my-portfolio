import { useEffect, useRef } from 'react'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import type { Project } from '../datasets/projects.ts'
import './ProjectModal.css'

import type { CSSProperties } from 'react'
import arrowUpRight from '../assets/arrow-up-right.svg'

interface Props {
    project: Project | null
    onClose: () => void
}

function ProjectModal({ project, onClose }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current!
        if (project && !dialog.open) {
            dialog.showModal()
            ScrollSmoother.get()?.paused(true)      // freeze the page behind the popup
        }
        return () => {
            ScrollSmoother.get()?.paused(false)
        }
    }, [project])

    return (
        <dialog
            ref={dialogRef}
            className="project-modal"
            onClose={onClose}                        // fires on Esc and on .close()
            aria-labelledby="project-modal-title"
        >
            {project && (
                <div className="project-modal__inner">
                    <button className="project-modal__close" onClick={() => dialogRef.current?.close()}>
                        Close
                    </button>

                    <div className="project-modal__media">
                        <img src={project.detailImage ?? project.image} alt="" />
                    </div>

                    <div className="project-modal__info">
                        <div>
                            <h2 id="project-modal-title" className="project-modal__title">{project.title}</h2>
                            <p className="project-modal__type">{project.type}</p>
                        </div>

                        <div className="project-modal__details">
                            <p className="project-modal__description">{project.description}</p>

                            <div className="project-modal__meta">
                                <MetaColumn label="Role" items={project.role} />
                                <MetaColumn
                                    label="Teams"
                                    items={project.teams.map((t) => t.label)}
                                    links={project.teams.map((t) => t.url)}
                                />
                                <MetaColumn label="Duration" items={project.duration ? [project.duration] : []} />
                                <MetaColumn label="Tools" items={project.tools} />
                                <MetaColumn label="Stack" items={project.stack} />
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="contact-btn contact-btn--icon">
                      View on GitHub
                      <span
                          className="btn-arrow"
                          style={{ '--icon': `url(${arrowUpRight})` } as CSSProperties}
                          aria-hidden="true"
                      />
                  </a>
                )}
                        </div>
                    </div>
                </div>
            )}
        </dialog>
    )
}

function MetaColumn({ label, items, links }: { label: string; items: string[]; links?: (string | undefined)[] }) {
    if (items.length === 0) return null
    return (
        <div className="project-modal__meta-col">
            <h3 className="project-modal__meta-label">{label}</h3>
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