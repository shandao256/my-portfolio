
export const aboutData = {
    name: "Lionel",
    role: "a software engineering student",
    location: "Esslingen, Germany",
    tagline: "I build software that works and feels good to use.",
    email: "lieltounaba@proton.me",
   
    links: [
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