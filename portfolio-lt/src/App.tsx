// App.tsx
import './App.css'
import Head from './components/Head.tsx'
import Projects from './components/Projects.tsx'
import TechStack from './components/TechStack.tsx'
import Education from './components/Education.tsx'
import Footer from './components/Footer.tsx'
import { useReveal } from './hooks/useReveal.ts'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

function App() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 0.8,
      effects: true,
    });
    
    setReady(true)
  }, [])


  useReveal(contentRef, ready)

  useEffect(() => {
    if (!ready) return
    const refresh = () => ScrollTrigger.refresh()
    refresh()
    document.fonts.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [ready])

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content" ref={contentRef} className="smooth-content-container">
          <div 
            className="parallax-canvas-container" 
            data-speed="0.6"
            aria-hidden="true"
          >
          </div>

          {ready && (
            <div className="content-layer">
              <Head />
              <Projects />
              <TechStack />
              <Education />
              <Footer />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App