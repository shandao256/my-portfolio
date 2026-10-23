import './Privacy.css'

function Privacy() {
    return (
        <main className="legal container">
            <h1 className="section__title">Privacy notice</h1>

            <h2>Who is responsible</h2>
            <p>
                Lionel Toussoumsnaba<br />
                Email: lieltounaba@proton.me
            </p>

            <h2>What this site does with your data</h2>
            <p>
                This is a personal portfolio. It uses no cookies, no analytics, no tracking
                and no contact forms. All fonts and images are served from this site itself,
                so nothing is loaded from third-party servers when you visit.
            </p>

            <h2>Hosting and server logs</h2>
            <p>
                The site is hosted by Cloudflare, Inc. (USA). When you visit, your IP address,
                the requested page, the time and your browser's user agent are processed to
                deliver the site and protect it from abuse. I have no access to individual
                visitor logs. The legal basis is my legitimate interest in running a secure,
                working website (Art. 6(1)(f) GDPR). Transfers to the USA rely on the
                EU-US Data Privacy Framework and/or standard contractual clauses.
            </p>

            <h2>Email</h2>
            <p>
                If you email me, I use your message and address only to reply to you
                and delete them when the conversation is over, unless the law requires me to keep them.
            </p>

            <h2>External links</h2>
            <p>
                Links to GitHub and other sites are only followed if you click them. From that
                point, the privacy policy of the respective site applies.
            </p>

            <h2>Your rights</h2>
            <p>
                You have the right to access, correct and delete your personal data, to restrict
                or object to its processing, and to data portability. Contact me by email to
                exercise them. You can also complain to a supervisory authority, for example the
                Landesbeauftragte für den Datenschutz und die Informationsfreiheit
                Baden-Württemberg (LfDI BW).
            </p>

            <p className="legal__back"><a href="/">← Back to portfolio</a></p>
        </main>
    )
}

export default Privacy