import React from 'react'
import '../styles/Display.css'

const Display = ({result, evalString}) => {
    return (
        <div className="display">
            <div className="result">
                <span className="equal">=</span>
                <span>{result}</span>
            </div>
            <div className="typing">
                {evalString}
            </div>
        </div>
    )
}

export default Display