import React from 'react'
import Button from './Button'
import '../styles/Buttons.css'

const Buttons = ({calculate}) => {
    return (
        <div className="buttons">
            <div className="column">
                <Button value='1' onClick={() => calculate(1)} />
                <Button value='2' onClick={() => calculate(2)} />
                <Button value='3' onClick={() => calculate(3)} />
                <Button value='+' onClick={() => calculate('+')} />
            </div>
            <div className="column">
                <Button value='4' onClick={() => calculate(4)} />
                <Button value='5' onClick={() => calculate(5)} />
                <Button value='6' onClick={() => calculate(6)} />
                <Button value='-' onClick={() => calculate('-')} />
            </div>
            <div className="column">
                <Button value='7' onClick={() => calculate(7)} />
                <Button value='8' onClick={() => calculate(8)} />
                <Button value='9' onClick={() => calculate(9)} />
                <Button value='x' onClick={() => calculate('*')} />
            </div>
            <div className="column">
                <Button value='C' onClick={() => calculate('C')} />
                <Button value='0' onClick={() => calculate(0)} />
                <Button value='=' onClick={() => calculate('=')} />
                <Button value='/' onClick={() => calculate('/')} />
            </div>
        </div>
    )
}

export default Buttons