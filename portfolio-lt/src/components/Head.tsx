import './Head.css'
import { aboutData } from '../datasets/dataAbout.ts'

const contacts = [
    { label: aboutData.email, href: `mailto:${aboutData.email}`, external: false },
    ...aboutData.links.map((link) => ({ label: link.label, href: link.url, external: true })),
]


function Head() {
    return (
      <header className="head container">
        <h1 className="head__title">{aboutData.name} — <span className="head__role">{aboutData.role} based in {aboutData.location}</span>
        </h1>
            <p className="head__tagline">{aboutData.tagline}</p>

            <div className="head__about">
                <p>
                  I design the frontend and build in TypeScript, with Java, Kotlin and Spring on the backend.
                  Studying at <span className="highlight__education">Esslingen University of Applied Sciences</span>,
                  graduating February 2028.
                </p>
          <br />
          <p>
            I like software that makes everyday things simpler.
            Outside of code I care about public transport and renewable energy, and I’ll gladly talk about cars.
          </p>
        </div>

        <ul className="head__contacts">
            {contacts.map((contact) => (
                <li key={contact.href}>
                    <a
                        className="head__contact-link"
                        href={contact.href}
                        target={contact.external ? '_blank' : undefined}
                        rel={contact.external ? 'noreferrer' : undefined}
                    >
                        {contact.label}
                    </a>
                </li>
            ))}
        </ul>
        </header>
    )
}

export default Head