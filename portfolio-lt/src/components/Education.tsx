import './Education.css'
import { educationData } from '../datasets/dataAbout.ts'

function Education() {
    return (
        <section className="education container" aria-labelledby="education-title" data-reveal >
            <h2 id="education-title" className="section__title">Education</h2>
            <ol className="education__list">
                {educationData.map((entry) => (
                  <li key={entry.id} className="education__entry">
                      <span className="education__period">{entry.dateRange}</span>
                      <div className="education__body">
                          <h3 className="education__title">{entry.title}</h3>
                          <p className="education__institution">{entry.institution}</p>
                          <p className="education__note">{entry.description}</p>
                      </div>
                  </li>
                ))}
            </ol>
        </section>
    )
}

export default Education