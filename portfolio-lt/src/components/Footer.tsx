import './Footer.css'

const buildDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Europe/Berlin',
}).format(new Date(__BUILD_DATE__))

function Footer() {
    return (
        <footer className="footer container">
            <p className="footer__updated">Last updated: {buildDate}</p>
        </footer>
    )
}

export default Footer