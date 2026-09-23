import ReactIcon from '../assets/tech-icons/react-original.svg'
import HtmlIcon from '../assets/tech-icons/html5-original.svg'
import CssIcon from '../assets/tech-icons/css3-original.svg'
import SpringIcon from '../assets/tech-icons/spring-original.svg'
import JetpackComposeIcon from '../assets/tech-icons/jetpackcompose-original.svg'
import VueIcon from '../assets/tech-icons/vuejs-original.svg'

import TypescriptIcon from '../assets/tech-icons/typescript-original.svg'
import CppIcon from '../assets/tech-icons/cplusplus-original.svg'
import JavaIcon from '../assets/tech-icons/java-original.svg'
import KotlinIcon from '../assets/tech-icons/kotlin-original.svg'

import JetbrainsIcon from '../assets/tech-icons/jetbrains-original.svg'
import ZedIcon from '../assets/tech-icons/zedindustries-original.svg'
import GitIcon from '../assets/tech-icons/git-original.svg'
import GitHubIcon from '../assets/tech-icons/github-original.svg'

import FigmaIcon from '../assets/tech-icons/figma-original.svg'
import AffinityDesignerIcon from '../assets/tech-icons/affinitydesigner-original.svg'

import PostgresIcon from '../assets/tech-icons/postgresql-original.svg'
import MysqlIcon from '../assets/tech-icons/mysql-original.svg'

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
    // URL to the icon asset (imported from an .svg file, resolved by Vite).
    icon: string
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