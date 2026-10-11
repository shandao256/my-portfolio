import './ViewNav.css'
import { views, VIEW_LABELS, type View } from '../hooks/useView.ts'

interface Props{
  view: View
  standalone?: boolean
}

function ViewNav({view, standalone = false }: Props) {
    return (
        <nav id="view-nav" className={`view-nav container${standalone ? ' view-nav--top' : ''}`} aria-label="Sections">
            <ul className="view-nav__list">
                {views.map((v) => (
                    <li key={v}>
                        <a
                            href={`#${v}`}
                            className="view-nav__link"
                            aria-current={v === view ? 'page' : undefined}
                        >
                            {VIEW_LABELS[v]}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default ViewNav  