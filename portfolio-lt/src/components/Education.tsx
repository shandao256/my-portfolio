import './Education.css'
import { CaretRightIcon } from '@phosphor-icons/react'
import { educationData } from '../datasets/dataAbout.ts'

function Education() {
    return (
        <section className="education container" aria-labelledby="education-title">
            <h2 id="education-title" className="section__title">Education</h2>
            <ul className="timeline">
                {educationData.map((entry, i) => (
                    <li key={entry.id}>
                      <details className="timeline__item" open={i === 0}>
                          <summary className="timeline__summary">
                              <CaretRightIcon className="timeline__chevron" size={16} aria-hidden="true" />
                              <span className="timeline__heading">
                          <strong>{entry.title}</strong>{' '}
                                  <span className="timeline__org">{entry.institution}</span>
                              </span>
                              <span className="timeline__date">{entry.dateRange}</span>
                          </summary>
                      
                          <div className="timeline__body">
                              <p>{entry.description}</p>
                          </div>
                      </details>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Education