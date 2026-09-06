// Local SVG icons — drop the brand SVG files into src/assets/tech-icons/
// and import them here. Using ?react (SVGR via @vitejs/plugin-react) lets
// each icon be used as a React component: <tech.icon />
import ReactIcon from '../assets/tech-icons/react.svg?react'
import HtmlIcon from '../assets/tech-icons/html5.svg?react'
import CssIcon from '../assets/tech-icons/css3.svg?react'
import SpringIcon from '../assets/tech-icons/spring.svg?react'
import JetpackComposeIcon from '../assets/tech-icons/jetpack-compose.svg?react'
import VueIcon from '../assets/tech-icons/vuedotjs.svg?react'

import TypescriptIcon from '../assets/tech-icons/typescript.svg?react'
import CppIcon from '../assets/tech-icons/cplusplus.svg?react'
import JavaIcon from '../assets/tech-icons/java.svg?react'
import KotlinIcon from '../assets/tech-icons/kotlin.svg?react'

import JetbrainsIcon from '../assets/tech-icons/jetbrains.svg?react'
import ZedIcon from '../assets/tech-icons/zedindustries.svg?react'
import GitIcon from '../assets/tech-icons/git.svg?react'
import GitHubIcon from '../assets/tech-icons/github.svg?react'

import FigmaIcon from '../assets/tech-icons/figma.svg?react'
import AffinityDesignerIcon from '../assets/tech-icons/affinitydesigner.svg?react'

import PostgresIcon from '../assets/tech-icons/postgresql.svg?react'
import MysqlIcon from '../assets/tech-icons/mysql.svg?react'

import type { FunctionComponent, SVGProps } from 'react'

export type TechCategory =
    | 'Web development & Frameworks'
    | 'Languages'
    | 'Development'
    | 'Design'
    | 'Databases'

// Fixed render order for the categories, matching the design layout.
export const techCategoryOrder: TechCategory[] = [
    'Web development & Frameworks',
    'Languages',
    'Development',
    'Design',
    'Databases',
]

export interface TechStack {
    name: string
    category: TechCategory
    icon: FunctionComponent<SVGProps<SVGSVGElement>>
    // Marks tech that is still being actively learned (shown with a "*" in the UI).
    learning: boolean
}

export const techStack: TechStack[] = [
    // Web development & Frameworks
    { name: 'React', category: 'Web development & Frameworks', icon: ReactIcon, learning: true },
    { name: 'HTML', category: 'Web development & Frameworks', icon: HtmlIcon, learning: false },
    { name: 'CSS', category: 'Web development & Frameworks', icon: CssIcon, learning: false },
    { name: 'Spring', category: 'Web development & Frameworks', icon: SpringIcon, learning: true },
    { name: 'Jetpack Compose', category: 'Web development & Frameworks', icon: JetpackComposeIcon, learning: true },
    { name: 'Vue.js', category: 'Web development & Frameworks', icon: VueIcon, learning: false },

    // Languages
    { name: 'Typescript', category: 'Languages', icon: TypescriptIcon, learning: true },
    { name: 'C++', category: 'Languages', icon: CppIcon, learning: true },
    { name: 'Java', category: 'Languages', icon: JavaIcon, learning: false },
    { name: 'Kotlin', category: 'Languages', icon: KotlinIcon, learning: true },

    // Development
    { name: 'Jetbrains IDEs', category: 'Development', icon: JetbrainsIcon, learning: false },
    { name: 'Zed Industries', category: 'Development', icon: ZedIcon, learning: false },
    { name: 'Git', category: 'Development', icon: GitIcon, learning: false },
    { name: 'GitHub', category: 'Development', icon: GitHubIcon, learning: false },

    // Design
    { name: 'Figma', category: 'Design', icon: FigmaIcon, learning: false },
    { name: 'Affinity Designer', category: 'Design', icon: AffinityDesignerIcon, learning: false },

    // Databases
    { name: 'PostgreSQL', category: 'Databases', icon: PostgresIcon, learning: false },
    { name: 'MySQL', category: 'Databases', icon: MysqlIcon, learning: false },
]