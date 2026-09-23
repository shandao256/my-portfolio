import { useState } from 'react'
import type { TechStack } from '../../datasets/techStack.ts'
import './TechChip.css'

export interface TechChipProps {
    tech: TechStack
    className?: string
}

/** Returns a random rotation between -5deg and 5deg, generated once per mount. */
function useRandomTilt() {
    const [tilt] = useState(() => {
        const degrees = Math.random() * 10 - 5 // range: -5..5
        return `${degrees.toFixed(2)}deg`
    })
    return tilt
}


function TechChip({ tech, className }: TechChipProps) {
    const tilt = useRandomTilt()

    return (
        <span
            className={`tech-chip${tech.learning ? ' tech-chip--learning' : ''}${className ? ` ${className}` : ''}`}
            style={{ '--tech-chip-rotate': tilt } as React.CSSProperties}
        >
            <img src={tech.icon} alt="" className="tech-chip__icon" aria-hidden="true" />
            <span className="tech-chip__name">
                {tech.name}
                {tech.learning && <span className="tech-chip__asterisk">*</span>}
            </span>
        </span>
    )
}

export default TechChip