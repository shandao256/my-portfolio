import activityTrackerImg from '../assets/images/ActivityTracker.png'
import aircraftViewerImg from '../assets/images/AircraftViewer.png'
import ventoryGoImg from '../assets/images/VentoryGoEditor.png'

export interface Project {
    id: string
  title: string
  titleDescription?: string
    image: string              // card image in the horizontal gallery
    detailImage?: string       // image in the popup, falls back to `image`
  type: string// "Android Application"
  description: string
    role: string[]
    teams: { label: string; url?: string }[]
    duration: string
    tools: string[]
    stack: string[]
  url?: string
}

export const projects: Project[] = [
  {
      id: 'activity-tracker',
    title: 'ActivityTracker',
    titleDescription: 'An Android application tracking daily activites with reminders.',
      image: activityTrackerImg,
      detailImage: activityTrackerImg,     
      type: 'Android Application',
      description: 'Lorem ipsum ...',
      role: ['Design', 'Frontend Development'],
      teams: [{ label: 'pep.Digital GmbH', url: 'https://pep-digital.de/' }],
      duration: 'Mar 2026 – Jun 2026',
      tools: ['Figma', 'Android Studio', 'IntelliJ IDEA'],
    stack: ['Kotlin', 'Java', 'PostgreSQL', 'Docker'],
      url: 'https://github.com/shandao256/Activity_Tracker',
  },
  {
      id: 'ventory-go',
      title: 'VentoryGo',
      image: ventoryGoImg,
      type: 'Invoice Editor',
      description:
          'Editor for creating invoices: a form for invoice details, payment method, currency and line items, ' +
          'next to a live preview of the finished document.',
      role: ['Design', 'Frontend Development'],
      teams: [{ label: 'Collaboator with Mirac61', url: 'https://github.com/Mirac61/' }],
      duration: '',
      tools: ['Figma', 'Zed'],
    stack: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'Docker'],
      url: 'https://github.com/Mirac61/VentoryGo',
  },
  {
      id: 'aircraft-viewer',
      title: 'AircraftViewer',
      image: aircraftViewerImg,
      type: 'Desktop Application',
      description:
          'Desktop app that plots aircraft positions on a map and lists them in a table with ICAO code, ' +
          'callsign, time, speed, track and coordinates. Selecting an aircraft opens its details in a side panel.',
      role: ['Design', 'Fullstack Development'],
      teams: [{ label: 'solo' }],
      duration: '',
      tools: [],
    stack: ['C#', '.NET'],
      url: 'https://github.com/shandao256/AircraftViewer',
  },

  
]