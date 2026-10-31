import type { ComponentProps, ReactNode } from 'react'
import './Button.css'

type Size = 'md' | 'sm'

interface Shared {
    size?: Size
    className?: string // layout-only overrides (margin, justify-self), not looks
}

// The icon variant has no visible text, so it must carry an accessible name.
type Look =
    | { variant?: 'solid' | 'text'; icon?: ReactNode } // icon = trailing icon
    | { variant: 'icon'; icon: ReactNode; 'aria-label': string; children?: never }

type LinkProps = Shared & Look & Omit<ComponentProps<'a'>, keyof Shared | 'href'> & { href: string }
type ButtonProps = Shared & Look & Omit<ComponentProps<'button'>, keyof Shared> & { href?: undefined }

const isExternal = (href: string) => /^https?:/.test(href)

function Button(props: LinkProps | ButtonProps) {
    if (props.href !== undefined) {
        const { variant = 'solid', size = 'md', icon, className, children, ...anchor } = props
        return (
            <a
                className={className ? `btn ${className}` : 'btn'}
                data-variant={variant}
                data-size={size}
                {...(isExternal(anchor.href) && { target: '_blank', rel: 'noreferrer' })}
                {...anchor}
            >
                {children}
                {icon}
            </a>
        )
    }

    const { variant = 'solid', size = 'md', icon, className, children, ...button } = props
    return (
        <button
            type="button"
            className={className ? `btn ${className}` : 'btn'}
            data-variant={variant}
            data-size={size}
            {...button}
        >
            {children}
            {icon}
        </button>
    )
}

export default Button