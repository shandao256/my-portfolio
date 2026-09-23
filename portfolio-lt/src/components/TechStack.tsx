import './TechStack.css'
import { techStack } from '../datasets/techStack.ts'

function TechStack() {
    return (
        <section className="techstack container">
            <h2 className="section-heading">
                My Tech stack*
            </h2>
            <div className="techstack__card">
                <div className="techstack__grid">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="techstack__item" title={tech.name}>
                            <img src={tech.icon} alt={tech.name} className="techstack__icon" />
                        </div>
                    ))}
                </div>
            </div>
            <p className="techstack__footnote">*still learning</p>
        </section>
    )
}

export default TechStack