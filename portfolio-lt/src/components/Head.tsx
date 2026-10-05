import './Head.css'
import { aboutData } from '../datasets/dataAbout.ts'

function Head() {
    return (
        <header className="head container">
            <h1 className="head__title">Hey there, I’m {aboutData.name}.</h1>
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