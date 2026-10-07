import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import './SideNav.css'

export interface SideNavItem {
    id: string
    label: string
    meta?: string
}

interface SideNavProps {
    label: string
    items: SideNavItem[]
    activeId: string | null
    visible: boolean
}

function NavList({ items, activeId }: { items: SideNavItem[]; activeId: string | null }) {
    return (
        <ul className="side-nav__list">
            {items.map((item) => (
                <li key={item.id}>
                    <a
                        className="side-nav__item"
                        href={`#${item.id}`}
                        aria-current={item.id === activeId ? 'location' : undefined}
                    >
                        <span>{item.label}</span>
                        {item.meta && <span className="side-nav__meta">{item.meta}</span>}
                    </a>
                </li>
            ))}
        </ul>
    )
}

function SideNav({ label, items, activeId, visible }: SideNavProps) {
    const navRef = useRef<HTMLElement>(null)
    const baseRef = useRef<HTMLDivElement>(null)
    const invertedRef = useRef<HTMLDivElement>(null)

    // Masking based on the generated path from PathBlend, AI was used from here.
    useEffect(() => {
        const nav = navRef.current
        const base = baseRef.current
        const inverted = invertedRef.current
        if (!nav || !base || !inverted) return
    
        const MASK_W = 512
        // luminance range where the text flips: >HI = background, <LO = ribbon
        const HI = 0.85
        const LO = 0.5
    
        const buildMask = (src: HTMLCanvasElement) => {
            const w = MASK_W
            const h = Math.max(1, Math.round((src.height / src.width) * w))
            const probe = document.createElement('canvas')
            probe.width = w
            probe.height = h
            const ctx = probe.getContext('2d', { willReadFrequently: true })
            if (!ctx) return null
            ctx.drawImage(src, 0, 0, w, h)
            const { data } = ctx.getImageData(0, 0, w, h)
    
            const out = ctx.createImageData(w, h)
            let lit = false
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i], g = data[i + 1], b = data[i + 2]
                if (r || g || b) lit = true
                const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
                const t = Math.min(1, Math.max(0, (HI - lum) / (HI - LO)))
                out.data[i + 3] = Math.round(t * t * (3 - 2 * t) * 255) // alpha = "ribbon-ness"
            }
            if (!lit) return null // WebGL hasn't drawn yet
    
            ctx.putImageData(out, 0, 0)
            return `url(${probe.toDataURL()})`
        }
    
        const setMask = (el: HTMLElement, prop: string, value: string) => {
            el.style.setProperty(`-webkit-mask-${prop}`, value)
            el.style.setProperty(`mask-${prop}`, value)
        }
    
        let raf = 0
        let tries = 0
        let tick: (() => void) | null = null
    
        const init = () => {
            const canvas = Array.from(
                document.querySelectorAll<HTMLCanvasElement>('.parallax-canvas-container canvas'),
            ).sort((a, b) => b.width * b.height - a.width * a.height)[0]
            const mask = canvas && canvas.width > 0 ? buildMask(canvas) : null
    
            if (!mask) {
                if (++tries < 120) raf = requestAnimationFrame(init)
                else console.warn('SideNav: could not read the PathBlend canvas')
                return
            }
    
            // Inverted copy: visible only INSIDE the ribbon (nothing outside the mask area)
            setMask(inverted, 'image', mask)
            setMask(inverted, 'repeat', 'no-repeat')
    
            // Base copy: solid everywhere MINUS the ribbon, so it stays visible
            // even where the nav extends past the canvas's edges
            setMask(base, 'image', `linear-gradient(#000 0 0), ${mask}`)
            setMask(base, 'repeat', 'no-repeat, no-repeat')
            base.style.setProperty('mask-composite', 'exclude')
            base.style.setProperty('-webkit-mask-composite', 'xor')
    
            nav.dataset.masked = 'true'
    
            tick = () => {
                if (nav.dataset.visible !== 'true') return
                const n = nav.getBoundingClientRect()
                const s = canvas.getBoundingClientRect() // includes the parallax transform
                const pos = `${s.left - n.left}px ${s.top - n.top}px`
                const size = `${s.width}px ${s.height}px`
    
                setMask(inverted, 'position', pos)
                setMask(inverted, 'size', size)
                setMask(base, 'position', `0 0, ${pos}`)
                setMask(base, 'size', `100% 100%, ${size}`)
            }
            gsap.ticker.add(tick)
        }
    
        init()
        return () => {
            cancelAnimationFrame(raf)
            if (tick) gsap.ticker.remove(tick)
        }
    }, [])

    if (typeof document === 'undefined') return null

    return createPortal(
        <nav
            ref={navRef}
            className="side-nav"
            aria-label={label}
            data-visible={visible}
            inert={!visible}
        >
            <div ref={baseRef} className="side-nav__layer side-nav__layer--base">
                <NavList items={items} activeId={activeId} />
            </div>
            <div
                ref={invertedRef}
                className="side-nav__layer side-nav__layer--inverted"
                aria-hidden="true"
                inert
            >
                <NavList items={items} activeId={activeId} />
            </div>
        </nav>,
        document.body,
    )
}

export default SideNav