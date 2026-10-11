import './About.css'
import {useRef, type PointerEvent} from 'react'

function About() {
  const textRef = useRef<HTMLDivElement>(null)

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
          const el = textRef.current!
          const rect = el.getBoundingClientRect()
          el.style.setProperty('--x', `${e.clientX - rect.left}px`)
          el.style.setProperty('--y', `${e.clientY - rect.top}px`)
      }

  return (   
      <section className="about container" aria-labelledby="about-title">
        <h2 id="about-title" className="section__title"></h2>
        <div ref={textRef} onPointerMove={onPointerMove} className="about__text">
          <p>
            The project I’m proudest of is ActivityTracker, an Android app we built as
            a team of five students with a supervisor from pep.digital. It was my first
            real glimpse of working as a software engineer: designing the app, building
            much of the frontend, reviewing teammates’ code and presenting the result.
          </p>
          <p>
            With cars, it’s the engines and the models. With public transport, it’s
            the current state of Germany’s railway infrastructure and where it falls
            short.
          </p>
          <p>
              My next project will most likely involve public transport.
          </p>
        </div>
      </section> 
  )
}
export default About