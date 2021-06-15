import React, {useState} from 'react'
import Display from './Display'
import Buttons from './Buttons'
import '../styles/Calculator.css'

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [evalString, setEvalString] = useState('')

    const calculate = (val) => {
        if(val === '=') {
            let getResult = eval(evalString)
            getResult = getResult.toString()
            setResult(getResult)
            setEvalString(getResult)
        } else if(val === 'C') {
            setResult(0)
            setEvalString('')
        } else {
            let newEvalString = evalString
            newEvalString = newEvalString.concat(val)
            setEvalString(newEvalString)
            if(isFinite(val)) {
                let getResult = eval(newEvalString)
                getResult = getResult.toString()
                setResult(getResult)
            }            
        }
    }

    return (
        <div className="calculator-wrap">
            <Display result={result} evalString={evalString} />
            <Buttons calculate={calculate} />
        </div>        
    )
}

export default Calculator