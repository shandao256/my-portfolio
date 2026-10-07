import { useEffect, useState, type RefObject } from 'react'

interface ScrollSpyState {
    visible: boolean
    activeId: string | null
}

/**
 * Watches one "scope" element (e.g. the projects section) and a list of element ids.
 *
 * - visible:  true while the scope covers the whole viewport
 *             (its top edge is at/above the viewport top AND its bottom edge is at/below the viewport bottom)
 * - activeId: the id whose element is closest to the vertical center of the viewport
 *
 * Generic on purpose: today the scope is the projects section and the ids are project cards;
 * later it can be <main> and the ids can be page sections.
 *
 * `ids` must be a stable array (define it outside the component or memoize it).
 */
export function useScrollSpy(
    ids: string[],
    scopeRef: RefObject<HTMLElement | null>,
): ScrollSpyState {
    const [state, setState] = useState<ScrollSpyState>({ visible: false, activeId: null })

    useEffect(() => {
        let frame = 0

        const measure = () => {
            frame = 0
            const scope = scopeRef.current
            if (!scope) return

            const viewportHeight = window.innerHeight
            const rect = scope.getBoundingClientRect()

            // Use `rect.bottom > 0` instead of `>= viewportHeight` to keep the nav
            // until the section has left the screen completely.
            const visible = rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2
          
            let activeId: string | null = null
            let best = Infinity
            for (const id of ids) {
                const el = document.getElementById(id)
                if (!el) continue
                const r = el.getBoundingClientRect()
                const distance = Math.abs(r.top + r.height / 2 - viewportHeight / 2)
                if (distance < best) {
                    best = distance
                    activeId = id
                }
            }

            // Returning the previous object when nothing changed skips the re-render.
            setState((prev) =>
                prev.visible === visible && prev.activeId === activeId
                    ? prev
                    : { visible, activeId },
            )
        }

        // One measurement per animation frame, no matter how many scroll events fire.
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(measure)
        }

        schedule()
        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', schedule)

        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', schedule)
        }
    }, [ids, scopeRef])

    return state
}