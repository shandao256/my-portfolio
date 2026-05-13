import './DescAndLinks.css'
import {aboutData}  from '../datasets/data.ts'


function DescriptionAboutMe() {
    return(
        <>
            <section className="hero">
                <div className="hero__top">
                    <h1 className="hero__title">Hi, I am Lionel.</h1>
                    <div className="hero__col">
                        <span className="col-label">TEAMS</span>
                        <ul>
                            {aboutData.teams.map((team) => (
                                <li key={team.label}>
                                    <a href={team.url} target="_blank" rel="noreferrer">{team.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hero__col">
                        <span className="col-label">LINKS</span>
                        <ul>
                            {aboutData.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="hero__desc">{aboutData.description}</p>
            </section>
        </>
    )

}

export default DescriptionAboutMe
