import './Contact.css'
import { aboutData } from '../datasets/dataAbout.ts'
import { ArrowUpRightIcon } from '@phosphor-icons/react'

const contacts = [
    { label: aboutData.email, href: `mailto:${aboutData.email}`, external: false },
    ...aboutData.links.map((link) => ({ label: link.label, href: link.url, external: true })),
]

function Contact() {
    return (
        <section className="contact container" aria-labelledby="contact-title">
            <h2 id="contact-title" className="contact__title">
                <span>Interested?</span>
                <span className="contact__accent">Let’s get in touch.</span>
            </h2>

            <ul className="contact__links">
                {contacts.map((contact) => (
                    <li key={contact.href}>
                        <a
                            className="contact__link"
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
        </section>
    )
}

export default Contact  