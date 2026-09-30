import './Head.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { aboutData } from '../datasets/dataAbout.ts'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import avatarImg from '../assets/images/Avatar.jpg'
import strawHat from '../assets/images/Luffys_StrawHat.png'

function Head() {

  const wrapRef = useRef<HTMLDivElement>(null)
  const hatRef = useRef<HTMLImageElement>(null)
  const hatTl = useRef<gsap.core.Timeline | null>(null)
  const headRef = useRef<HTMLElement>(null)

  // Straw hat animation
  useGSAP(() => {
      gsap.set(hatRef.current, { xPercent: -50, y: -35, rotate: -5, opacity: 0, transformOrigin: '50% 100%' })
      hatTl.current = gsap.timeline({ paused: true })
          .to(hatRef.current, { opacity: 1, duration: 0.12 }, 0)
          .to(hatRef.current, { y: 0, rotate: -10, duration: 0.6, ease: 'power4.out' }, 0)
  }, { scope: wrapRef })

  useGSAP(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
          gsap.from(headRef.current, {
              opacity: 0,
              y: 30,
              duration: 0.9,
              ease: 'power3.out',
              clearProps: 'transform',   // see note below
          })
      })
      return () => mm.revert()
  }, { scope: headRef })
  
    const { lat, lng } = aboutData.coordinates

    return (
      <section ref={headRef} className="head container">            <div className="head__map">
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

                <div
                    ref={wrapRef}
                    className="head__avatar-wrap"
                    onMouseEnter={() => hatTl.current?.timeScale(1).play()}
                    onMouseLeave={() => hatTl.current?.timeScale(2).reverse()}
                >
                    <img src={avatarImg} alt="" className="head__avatar" />
                    <img ref={hatRef} src={strawHat} alt="" className="head__hat" aria-hidden="true" />
                </div>
            </div>

            <div className="head__content">
                    <div className="head__intro-text">
                        <h1 className="head__name">Hi there, I'm {aboutData.name}!</h1>
                        <p className="head__tagline">{aboutData.tagline}</p>
                    </div>
                    <div className="head__cta">
                           <a href={`mailto:${aboutData.email}`} className="contact-btn">
                               Let's talk
                           </a>
                       </div>
                </div>
        </section>
    )
}

export default Head