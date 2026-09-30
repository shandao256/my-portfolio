import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'
import { projects, type Project } from '../datasets/projects.ts'
import ProjectModal from './ProjectModal.tsx'
  
  gsap.registerPlugin(ScrollTrigger)
  
  function Projects() {
      const [selected, setSelected] = useState<Project | null>(null)
      const sectionRef = useRef<HTMLElement>(null)
  
      useGSAP(() => {
          gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
              gsap.from(card, {
                  opacity: 0,
                  duration: 0.8,
                  y: 40,
                  ease: 'power2.out',
                  scrollTrigger: { trigger: card, start: 'top 75%', toggleActions: 'play none none none' },
              })
          })
      }, { scope: sectionRef })
  
    return (
        <>
          <section ref={sectionRef} className="projects container">
              <div className="projects__list">
                  {projects.map((project) => (
                      <button key={project.id} type="button" className="project-card" onClick={() => setSelected(project)}>
                               <div className="project-card__media">
                                   <img src={project.image} alt="" className="project-card__image" />
                               </div>
                               <span className="project-card__title">{project.title}</span>
                               <span className="project-card__description">{project.type}</span>
                           </button>
                       ))}
                   </div>
              </section>
              <ProjectModal project={selected} onClose={() => setSelected(null)} />
          </>
      )
    }
   
   export default Projects