export const aboutData = {
    name: "Lionel",
    role: "Software Engineering Student",
    location: "Stuttgart, DE",
    tagline: "SWE student based in 🇩🇪",
    // Approx coordinates used to center the head map (Stuttgart / Esslingen area)
    coordinates: {
        lat: 48.74354,
        lng: 9.30709,
    },
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. " +
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/lionel-toussoumsnaba-2211413aa/" },
        { label: "GitHub", url: "https://github.com/shandao256" },
    ],
    teams: [
        { label: "pep.digital GmbH", url: "https://pep-digital.de/" },
  ],

    
}

export interface EducationEntry {
    id: string
    dateRange: string
    title: string
    institution: string
    institutionUrl?: string
    description: string
}

export const educationData: EducationEntry[] = [
    {
        id: "software-engineering",
        dateRange: "Since Sep 2024",
        title: "Software Engineering",
        institution: "Hochschule Esslingen, Esslingen am Neckar",
        description: "Currently in the 5th Semester. Projected graduation @ February 2028.",
    },
    {
        id: "high-school",
        dateRange: "Sep 2021 - Jul 2024",
        title: "High School Student",
        institution: "Gewerbliche Schule, Göppingen",
        description: "Completed with a high school diploma focused on Environmental Science",
    },
]