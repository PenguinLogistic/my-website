import React from 'react'
import {Card as ReactCard} from 'react-bootstrap'
import styles from '../scss/card.module.scss'
import cn from 'classnames'

interface CardProps{
    title: string
    subtitle: string
    url?: string
    urlLabel?: string
    icon?: string
    text: string
}

const Card: React.FC<CardProps> = ({title, subtitle, text, url, urlLabel, icon}) => {
    return (
        <ReactCard className={styles.card__wrapper}>
            {icon && <i className={cn(icon,styles.card__icon)}></i>}
            <ReactCard.Body>
                <ReactCard.Title className='mb-1'>{title}</ReactCard.Title>
                <ReactCard.Subtitle className="mb-2 mt-2 text-muted">{subtitle}</ReactCard.Subtitle>
                <ReactCard.Text>
                    {text}
                </ReactCard.Text>
                <ReactCard.Link href={url}>{urlLabel}</ReactCard.Link>
            </ReactCard.Body>
        </ReactCard>
    )
} 

export default Card