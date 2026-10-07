import activityTrackerImg from '../assets/images/ActivityTracker.png'
import aircraftViewerImg from '../assets/images/AircraftViewer.png'
import ventoryGoImg from '../assets/images/VentoryGoEditor.png'

export interface Project {
    id: string
    title: string
    summary: string            // one line shown on the card
    type: string               // e.g. "Android Application", shown under the popup title
    image: string              // card image
    imageAlt: string
    detailImage?: string       // popup image, falls back to `image`
    about: string              // left half of the popup: what it is and why
    myRole: string             // right half of the popup: what I did
    role: string[]
    teams: { label: string; url?: string }[]
    start: string              // 'YYYY-MM'
    end?: string               // 'YYYY-MM'; omitted = still ongoing ("today")
    tools: string[]            // hide the column in the popup when empty
    stack: string[]
    link?: { label: string; url: string }   // omit when there is no public link
}

// Array order = display order (newest first), used by the left list and the cards.
export const projects: Project[] = [
    {
        id: 'ventory-go',
        title: 'VentoryGo',
        summary: 'Self-hosted invoicing tool with a live-preview editor.',
        type: 'Web Application',
        image: ventoryGoImg,
        imageAlt: 'VentoryGo invoice editor with a live preview of the invoice',
        about:
            'A simple, self-hosted invoicing tool for freelancers and companies, run as a Docker ' +
            'container on your own infrastructure. The editor combines a form for invoice details, ' +
            'payment method, currency and line items with a live preview of the finished document.',
        myRole:
            'I designed the product and built the React frontend. A teammate builds the Go backend, ' +
            'and I review their code.',
        role: ['Design', 'Frontend Development', 'Code Review'],
        teams: [{ label: 'Mirac61 (Go backend)', url: 'https://github.com/Mirac61/' }],
        start: '2026-07',
        tools: ['Figma', 'Zed'],
        stack: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'Docker'],
        link: { label: 'View on GitHub', url: 'https://github.com/Mirac61/VentoryGo' },
    },
    {
        id: 'activity-tracker',
        title: 'ActivityTracker',
        summary: 'An Android app for tracking daily activities, with streaks and reminders.',
        type: 'Android Application',
        image: activityTrackerImg,
        imageAlt: 'ActivityTracker progress screen with a streak and activity charts',
        about:
            'ActivityTracker is an Android app that motivates people to change up their lifestyle by ' +
            'logging their habits and activities every day. Every entry builds a streak, and push ' +
            'notifications mark milestones and remind you when you haven’t logged anything that day.',
        myRole:
            'I designed the whole app and built much of its frontend, adjusting the backend whenever ' +
            'a UI change needed it. I also reviewed teammates’ code and presented the project, which ' +
            'our supervisor at pep.digital assessed.',
        role: ['Design', 'Frontend Development', 'Code Review'],
        teams: [
            { label: 'pep.digital GmbH', url: 'https://pep-digital.de/' },
            { label: 'University project' },
            { label: '5 students' },
            { label: '1 supervisor' },
        ],
        start: '2026-03',
        end: '2026-06',
        tools: ['Figma', 'Android Studio', 'IntelliJ IDEA'],
        stack: ['Kotlin', 'Java', 'PostgreSQL', 'Docker', 'Keycloak'],
        link: { label: 'View on GitHub', url: 'https://github.com/shandao256/Activity_Tracker' },
    },
    {
        id: 'aircraft-viewer',
        title: 'AircraftViewer',
        summary: 'Desktop app that plots aircraft positions on a map.',
        type: 'Desktop Application',
        image: aircraftViewerImg,
        imageAlt: 'AircraftViewer map with aircraft positions and a table of flights',
        about:
            'A desktop app that plots aircraft positions on a map and lists them in a table with ICAO ' +
            'code, callsign, time, speed, track and coordinates. Selecting an aircraft opens its ' +
            'details in a side panel.',
        myRole: 'I designed and built it on my own.',
        role: ['Design', 'Fullstack Development'],
        teams: [{ label: 'Solo project' }],
        start: '2026-02',
        tools: [],
        stack: ['C#', '.NET'],
        link: { label: 'View on GitHub', url: 'https://github.com/shandao256/AircraftViewer' },
    },
]

// 'YYYY-MM' -> "Mar 2026". timeZone is pinned to UTC so a date can never shift a month.
const monthFormat = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
})

function formatMonth(yearMonth: string): string {
    return monthFormat.format(new Date(`${yearMonth}-01T00:00:00Z`))
}

// "Mar 2026 – Jun 2026" or "Jul 2026 – today"  (popup)
export function formatPeriod(project: Pick<Project, 'start' | 'end'>): string {
    return `${formatMonth(project.start)} – ${project.end ? formatMonth(project.end) : 'today'}`
}

const monthOnlyFormat = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' })

// "Mar – Jun 2026" when both dates share a year, otherwise same as formatPeriod  (list and cards)
export function formatPeriodShort(project: Pick<Project, 'start' | 'end'>): string {
    if (!project.end) return formatPeriod(project)

    const sameYear = project.start.slice(0, 4) === project.end.slice(0, 4)
    if (!sameYear) return formatPeriod(project)

    const startMonth = monthOnlyFormat.format(new Date(`${project.start}-01T00:00:00Z`))
    return `${startMonth} – ${formatMonth(project.end)}`
}