import './Footer.css'
import { aboutData } from '../datasets/dataAbout.ts'
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const buildDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Europe/Berlin',
}).format(new Date(__BUILD_DATE__))

const contacts = [
    { label: aboutData.email, href: `mailto:${aboutData.email}`, external: false },
    ...aboutData.links.map((link) => ({ label: link.label, href: link.url, external: true })),
]

function Footer() {
    return (
        <footer className="footer container">
            <div className="footer__cta">
                <h2 className="footer__title">
                    <span>Interested?</span>
                    <span className="footer__accent">Let’s get in touch.</span>
                </h2>

                <ul className="footer__links">
                    {contacts.map((contact) => (
                        <li key={contact.href}>
                            <a
                                className="footer__link"
                                href={contact.href}
                                target={contact.external ? '_blank' : undefined}
                                rel={contact.external ? 'noreferrer' : undefined}
                            >
                                {contact.label}
                                <ArrowUpRightIcon size={24} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <p className="footer__updated">Last updated: {buildDate}</p>
        </footer>
    )
}

export default Footer