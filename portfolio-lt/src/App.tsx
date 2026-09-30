import './App.css'
import Head from "./components/Head.tsx";
import Projects from "./components/Projects.tsx";
import AboutMe from "./components/AboutMe.tsx";
import TechStack from "./components/TechStack.tsx";
import Education from "./components/Education.tsx";
import Footer from "./components/Footer.tsx";

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useReveal } from './hooks/useReveal.ts'

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
    })
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
        <div id="smooth-content" ref={contentRef}>
          {ready && (
            <>
              <Head />
              <Projects />
              <AboutMe />
              <TechStack />
              <Education />
              <Footer />
          </>
          )}
        </div>
    </div>
    </>
  )
}

export default App