import { useEffect, useState } from 'react'

export const views = ['about', 'projects'] as const
export type View = (typeof views)[number]

export const VIEW_LABELS: Record<View, string> = {
    about: 'About',
    projects: 'Explore',
}



function readView(): View {
    const name = window.location.hash.slice(1).split('/')[0]
    return (views as readonly string[]).includes(name) ? (name as View) : 'about'
}

export function useView(): View {
    const [view, setView] = useState<View>(readView)

    useEffect(() => {
        const onChange = () => setView(readView())
        window.addEventListener('hashchange', onChange)
        return () => window.removeEventListener('hashchange', onChange)
    }, [])

    return view
}