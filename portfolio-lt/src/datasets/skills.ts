export interface SkillGroup {
    label: string
    items: string[]
}

// Order matters: strongest first inside each group. Delete anything you
// wouldn't want to be asked about in an interview.
export const skillGroups: SkillGroup[] = [
    { label: 'Languages', items: ['TypeScript', 'Java', 'C++', 'Kotlin'] },
    { label: 'Frontend', items: ['React', 'Vue', 'HTML', 'CSS'] },
    { label: 'Backend & Data', items: ['Spring', 'PostgreSQL', 'MySQL'] },
    {
        label: 'Tools',
        items: ['Git', 'GitHub', 'Figma', 'Affinity Designer', 'JetBrains IDEs', 'Zed'],
    },
]