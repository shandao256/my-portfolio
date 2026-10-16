import './App.css'
import Head from './components/Head.tsx'
import Projects from './components/Projects.tsx'
import Footer from './components/Footer.tsx'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)


import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

function App() {

  useGSAP(() => {
     ScrollSmoother.create({
       wrapper: '#smooth-wrapper',
       content: '#smooth-content',
       smooth: 0.6,
       effects: true,
     })
   }, [])

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Head />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
