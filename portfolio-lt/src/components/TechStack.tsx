import './TechStack.css'
import { skillGroups } from '../datasets/skills.ts'

function TechStack() {
    return (
        <section className="tech container" aria-labelledby="tech-title">
            <h2 id="tech-title" className="section__title">My tech stack</h2>
            <dl className="tech__groups">
                {skillGroups.map((group) => (
                    <div key={group.label} className="tech__group">
                        <dt className="tech__label">{group.label}</dt>
                        <dd>
                            <ul className="tech__list">
                                {group.items.map((item) => (
                                    <li key={item} className="tech__tag">{item}</li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    )
}

export default TechStack