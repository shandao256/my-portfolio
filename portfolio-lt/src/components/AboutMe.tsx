import './AboutMe.css'
import windmillsImg from '../assets/images/windmills.jpg'

// Windmill/renewable-energy photo — drop the actual asset in
// src/assets/images/ and update this import once you have it.
// import windmillsImg from '../assets/images/windmills.jpg'

function AboutMe() {
    return (
        <section className="about container" data-reveal>
            <h2 className="section-heading">About me</h2>
            <div className="about__card">
                <p className="about__paragraph">
                    I am a <span className="about__bold">software engineering student</span> based in{' '}
                    <span className="about__bold">Southwest Germany</span>. My hobby is designing UIs and
                    interactive web experiences. I experiment with various libraries to
                    make the experience feel more authentic.
                </p>
                <p className="about__paragraph">
                    I am an passionate advocate for{' '}
                    <a href="#" className="about__link about__link--green">
                        renewable energy and public transport
                    </a>
                    , although I also have very specific interests in{' '}
                    <a href="#" className="about__link about__link--blue">
                        cars
                    </a>
                    .
                </p>
                <p className="about__paragraph">
                    My goal is to design systems and build practical software to help
                    people throughout the day.
                </p>

            
                <img src={windmillsImg} alt="" className="about__photo" />
                
            </div>
        </section>
    )
}

export default AboutMe