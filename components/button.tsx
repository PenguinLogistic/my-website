import React, { DOMAttributes } from 'react'
import {Button as ReactButton} from 'react-bootstrap'

interface ButtonProps {
    label?: string
    onClick: (value?: any) => void
}

const Button: React.FC<ButtonProps>=({ label, onClick }) => {
    return (
        <ReactButton variant='primary' onClick={onClick}> {label ? label: 'Submit'} </ReactButton>
    )
}

export default Button