import React from 'react'
import styles from '../scss/icon-button.module.scss'
import cn from 'classnames'

interface IconButtonProps {
    icon: string
    url: string
    classes?: any
}

const IconButton: React.FC<IconButtonProps> = ({icon, url, classes}) => {
    return (
        <a href={url}>
        <i className={cn(icon, styles.footer__icon,classes)}></i>
        </a>
    )
}

export default IconButton