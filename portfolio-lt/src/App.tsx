import './App.css'
import { useEffect, useRef } from 'react'
import Head from './components/Head.tsx'
import ViewNav from './components/ViewNav.tsx'
import Projects from './components/Projects.tsx'
import About from './components/About.tsx'
import TechStack from './components/TechStack.tsx'
import Education from './components/Education.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import { useView, VIEW_LABELS } from './hooks/useView.ts'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)


import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

function App() {
  const view = useView()
  const panelRef = useRef<HTMLDivElement>(null)
  const previousView = useRef(view)
  const showHead = view !== 'projects'

  useGSAP(() => {
     ScrollSmoother.create({
       wrapper: '#smooth-wrapper',
       content: '#smooth-content',
       smooth: 0.6,
       effects: true,
     })
   }, [])


  useEffect(() => {
    document.title = view === 'about' ? 'Lionel T.' : `${VIEW_LABELS[view]} · Lionel T.`

    if (previousView.current === view) return
    previousView.current = view

    if (view === 'projects') {
      window.scrollTo(0, 0)
    } else {
      const nav = document.getElementById('view-nav')
      if (nav && nav.getBoundingClientRect().top < 0) nav.scrollIntoView()
    }

    const panel = panelRef.current
    if (!panel) return
    panel.focus({ preventScroll: true })

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        panel,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', clearProps: 'all' },
      )
    })
    return () => mm.revert()
  }, [view])

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {showHead && <Head />}
          <ViewNav view={view} standalone={!showHead} />

          <div
            key={view}
            ref={panelRef}
            className="view-panel"
            tabIndex={-1}
            role="region"
            aria-label={VIEW_LABELS[view]}
          >
            {view === 'about' && (
              <>
                <About />
                <TechStack />
                <Education />
              </>
            )}
            {view === 'projects' && <Projects />}
            {view === 'contact' && <Contact />}
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
