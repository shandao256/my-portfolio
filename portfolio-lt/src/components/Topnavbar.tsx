import './Topnavbar.css'
import {aboutData} from "../datasets/data.ts";

function Topnavbar() {
    return (
        <>
            <div className="navbar-wrapper">
                <nav className="navbar container">
                    <p className="navbar-titles">{aboutData.name}</p>
                    <p className="navbar-role">{aboutData.role}</p>
                    <p className="navbar-location">{aboutData.location}</p>
                </nav>
            </div>
        </>
    )
}

export default Topnavbar
