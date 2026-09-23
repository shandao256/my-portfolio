import type { CSSProperties, ReactNode } from 'react'
import './Sticker.css'

export interface StickerProps {
    /** Main label text */
    children: ReactNode
    /** Smaller, de-emphasized trailing text, e.g. "(marked as *)" */
    suffix?: ReactNode
    /** Fill color of the tag */
    color?: string
    /** Text color */
    textColor?: string
    /** Border + drop-shadow color (defaults to textColor if omitted) */
    outlineColor?: string
    /** Font size, any valid CSS size (e.g. "1.25rem", "18px", "clamp(...)") */
    fontSize?: string
    /** Rotation angle, e.g. "-2deg" */
    rotate?: string
    /** Hard drop-shadow offset distance */
    shadowOffset?: string
    /** Extra className for layout/positioning from the parent */
    className?: string
    style?: CSSProperties
}

/**
 * A tilted "sticker" style tag with a solid offset shadow, used across the
 * portfolio for section labels (e.g. "Tech i know and am actively learning").
 *
 * Fully reusable: color, text size, rotation, and shadow offset are all
 * configurable via props, everything else falls back to sensible defaults.
 */
function Sticker({
    children,
    suffix,
    color,
    textColor,
    outlineColor,
    fontSize,
    rotate,
    shadowOffset,
    className,
    style,
}: StickerProps) {
    const cssVars = {
        ...(color && { '--sticker-bg': color }),
        ...(textColor && { '--sticker-fg': textColor }),
        ...(outlineColor && {
            '--sticker-border-color': outlineColor,
            '--sticker-shadow-color': outlineColor,
        }),
        ...(fontSize && { '--sticker-font-size': fontSize }),
        ...(rotate && { '--sticker-rotate': rotate }),
        ...(shadowOffset && { '--sticker-shadow-offset': shadowOffset }),
        ...style,
    } as CSSProperties

    return (
        <span className={`sticker-tag${className ? ` ${className}` : ''}`} style={cssVars}>
            <span className="sticker-tag__shadow" aria-hidden="true" />
            <span className="sticker-tag__face">
                {children}
                {suffix && <span className="sticker-tag__suffix">{suffix}</span>}
            </span>
        </span>
    )
}

export default Sticker