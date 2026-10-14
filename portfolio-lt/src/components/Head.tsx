import './Head.css'
import { aboutData } from '../datasets/dataAbout.ts'

const contacts = [
    { label: aboutData.email, href: `mailto:${aboutData.email}`, external: false },
    ...aboutData.links.map((link) => ({ label: link.label, href: link.url, external: true })),
]


function Head() {
    return (
      <header className="head container">
        <div className="head__container">
            <h1 className="head__title">Hey there, I’m {aboutData.name}.</h1>
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
                  </div>
            <p className="head__role">
                {aboutData.role} in {aboutData.location}
            </p>
            <p className="head__tagline">{aboutData.tagline}</p>

            <div className="head__about">
                <p>
                    I’m drawn to software that makes everyday things simpler: getting
                    around, saving energy, getting through the day.
                </p>
                <p>
                    Outside of code, I care about{' '}
                    <span className="head__highlight">public transport</span> and{' '}
                    <span className="head__highlight">renewable energy</span>, and I’ll
                    gladly talk about cars.
          </p>
            </div>
        </header>
    )
}

export default Head