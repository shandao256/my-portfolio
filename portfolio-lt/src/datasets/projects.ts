import aircraftViewerImg from '../assets/images/AircraftViewer.png'
import activityTrackerImg from '../assets/images/ATracker.png'
import ventoryGoImg from '../assets/images/VentoryGo.png'

export type ProjectSize = "wide" | "tall" | "standard"

export interface Project {
    id: string
    title: string
    image: string
    url?: string
    // Controls grid sizing. "tall" spans 2 rows (good for portrait/mobile screenshots),
    // "wide" spans 2 columns, "standard" is a single grid cell. Defaults to "standard".
    size?: ProjectSize
}

export const projects: Project[] = [
    {
        id: "aircraft-viewer",
        title: "AircraftViewer",
        image: aircraftViewerImg,
        size: "standard",
    },
    {
        id: "ventory-go",
        title: "VentoryGo",
        image: ventoryGoImg,
        size: "standard",
    },
    {
        id: "activity-tracker",
        title: "ActivityTracker",
        image: activityTrackerImg,
        size: "tall",
    },
]