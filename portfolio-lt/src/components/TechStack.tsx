import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './TechStack.css'
import { techStack } from '../datasets/techStack.ts'

function TechStack() {
    const [label, setLabel] = useState('')          // stays put while fading out
    const [visible, setVisible] = useState(false)
    const labelRef = useRef<HTMLParagraphElement>(null)

    useGSAP(() => {
        gsap.to(labelRef.current, {
            opacity: visible ? 1 : 0,
            y: visible ? 0 : 6,
            duration: 0.15,
            ease: 'power2.out',
            overwrite: 'auto',
        })
    }, { dependencies: [visible, label] })

    const show = (text: string) => {
        setLabel(text)
        setVisible(true)
    }

    return (
        <section className="techstack container" data-reveal>
            <h2 className="section-heading">My Tech stack*</h2>
            <div className="techstack__card">
                <div
                    className="techstack__grid"
                    onMouseLeave={() => setVisible(false)}
                >
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="techstack__item"
                            tabIndex={0}
                            onMouseEnter={() => show(tech.name)}
                            onFocus={() => show(tech.name)}
                            onBlur={() => setVisible(false)}
                        >
                            <img src={tech.icon} alt={tech.name} className="techstack__icon" />
                        </div>
                    ))}
                </div>
                <p ref={labelRef} className="techstack__label" aria-live="polite">
                    {label}
                </p>
            </div>
            <p className="techstack__footnote">*still learning</p>
        </section>
    )
}

export default TechStack