import React from 'react'
import '../styles/Button.css'

const Button = ({value, onClick}) => {
    let style

    switch(value) {
        case '+':
        case '-':
        case 'x':
        case '/':
        case 'C':
            style = {
                backgroundColor: '#76db71'
            }
            break
        case '=':
            style = {
                backgroundColor: '#f5a828'
            }
            break
        default:
            style = {}
    }

    return (
        <button style={style} onClick={onClick}>
            {value}
        </button>
    )    
}

export default Button