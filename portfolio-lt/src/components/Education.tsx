import './Education.css'
import { educationData } from '../datasets/dataAbout.ts'

function Education() {
    return (
        <section className="education container" data-reveal  >
            <h2 className="section-heading">Education</h2>
            <div className="education__list">
                {educationData.map((entry) => (
                    <div key={entry.id} className="education__entry">
                        <span className="education__date">{entry.dateRange}</span>
                        <h3 className="education__title">{entry.title}</h3>
                        <p className="education__institution">@ {entry.institution}</p>
                        <p className="education__description">{entry.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education