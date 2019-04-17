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

function IconSVG({ className, name, onClick = () => {}, style, disabled }: IIconSvgProps) {
    const classes = !!className ? `icon-svg ${className}` : 'icon-svg'
    const iconStyle: React.CSSProperties = { ...style }

    if (disabled) {
        iconStyle.color = '#ccc'
        iconStyle.cursor = 'not-allowed'
    }

    return (
        <svg className={classes} aria-hidden="true" onClick={onClick} style={iconStyle}>
            <use xlinkHref={`#sen-${name}`} />
        </svg>
    )
}

export default IconSVG
