import './index.css'
import React from 'react'

interface IIconSvgProps {
    styleName?: string
    className?: string
    name: string
    onClick?: any
    style?: React.CSSProperties
    disabled?: boolean
}

function IconSVG({ className, name, onClick, style, disabled }: IIconSvgProps) {
    const classes = !!className ? `icon-svg ${className}` : 'icon-svg'
    const extProps: { style: React.CSSProperties } = {
        style: { ...style },
    }

    if (disabled) {
        extProps.style.color = '#ccc'
        extProps.style.cursor = 'not-allowed'
    }

    if (onClick) {
        Object.assign(extProps, { onClick })
    }

    return (
        <svg className={classes} aria-hidden="true" {...extProps}>
            <use xlinkHref={`#sen-${name}`} />
        </svg>
    )
}

export default IconSVG
