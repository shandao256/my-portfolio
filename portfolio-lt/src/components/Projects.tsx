import './Projects.css'
import macbookSvg from '../assets/MacbookPro.svg'

// Screen content removed for the Swiss redesign pass — MacBook renders
// blank for now. FeralUI (or similar) content goes inside .projects-screen
// once that's sourced; the div is already positioned and ready to hold it.
function Projects() {
    return (
        <section className="portfolio">
            <div className="projects-mac-wrap">
                <div className="projects-mac">
                    <img src={macbookSvg} alt="" className="projects-mac__frame" aria-hidden="true" />
                    <div className="projects-screen" />
                </div>
            </div>
        </section>
    )
}

export default Projects