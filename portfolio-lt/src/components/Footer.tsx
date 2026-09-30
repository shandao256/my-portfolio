import './Footer.css'
import { aboutData } from '../datasets/dataAbout.ts'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)


function Footer() {
  const footerRef = useRef<HTMLElement>(null)
 
  useGSAP(() => {
      footerRef.current!.querySelectorAll<HTMLElement>('.split').forEach((el) => {
          SplitText.create(el, {
              type: 'words',
              mask: 'words',
              wordsClass: 'split-word',
              autoSplit: true,
              onSplit: (self) => {
                  gsap.set(el, { opacity: 1 })       // the words are hidden by the tween below
                  return gsap.from(self.words, {
                      yPercent: 110,
                      duration: 0.9,
                      ease: 'power4.out',
                      stagger: 0.06,
                      scrollTrigger: { trigger: el, start: 'clamp(top 90%)', toggleActions: 'play none none reset' },
                  })
              },
          })
      })
  }, { scope: footerRef })
 
    return (
      <footer ref={footerRef} className="footer">
        <div className="container">
          <h2 className="footer__title split">Let's <span className="footer__title--grayed-text">build</span> together</h2>
            <div className="footer__inner">
                <div className="footer__cta">
                  <p className="footer__subtitle split">Email</p>
                    <a href={`mailto:${aboutData.email}`} className="footer__contact split">
                        lieltounaba@proton.me
                    </a>
                </div>

                <nav className="footer__links" aria-label="Social links">
                    {aboutData.links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="footer__link split" 
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
          </div>
        </footer>
    )
}

export default Footer