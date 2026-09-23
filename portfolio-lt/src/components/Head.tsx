import './Head.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { aboutData } from '../datasets/dataAbout.ts'

function Head() {
    const { lat, lng } = aboutData.coordinates

    return (
        <section className="head container">
            <div className="head__map">
                <MapContainer
                    center={[lat, lng]}
                    zoom={10}
                    zoomControl={false}
                    scrollWheelZoom={false}
                    dragging={false}
                    doubleClickZoom={false}
                    touchZoom={false}
                    attributionControl={false}
                    className="head__map-inner"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>

                {/* TODO: hover should trigger straw-hat animation */}
                <div className="head__avatar" aria-hidden="true" />
            </div>

            <div className="head__intro-text">
                <h1 className="head__name">Hi there, I'm {aboutData.name}!</h1>
                <p className="head__tagline">{aboutData.tagline}</p>
            </div>
        </section>
    )
}

export default Head