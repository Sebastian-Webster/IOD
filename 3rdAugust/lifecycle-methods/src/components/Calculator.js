import React, {useState} from 'react';
import './Calculator.css'

function Calculator({scientific}) {
    const [resultString, setResultString] = useState('0')

    return (
        <div className="calculatorBody">
            <h1 id="resultString">{resultString}</h1>
            <div className="calculatorRow">
                <CalculatorButton text={1} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={2} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={3} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={'+'} setResultString={setResultString} type="operation" scientific={scientific}/>
            </div>
            <div className="calculatorRow">
                <CalculatorButton text={4} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={5} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={6} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={'-'} setResultString={setResultString} type="operation" scientific={scientific}/>
            </div>
            <div className="calculatorRow">
                <CalculatorButton text={7} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={8} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={9} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={'X'} setResultString={setResultString} type="operation" scientific={scientific}/>
            </div>
            <div className="calculatorRow">
                <CalculatorButton text={0} setResultString={setResultString} type="number" scientific={scientific}/>
                <CalculatorButton text={'/'} setResultString={setResultString} type="operation" scientific={scientific}/>
                <CalculatorButton text={'='} setResultString={setResultString} type="equals" scientific={scientific}/>
                <CalculatorButton text={'Clear'} setResultString={setResultString} type="clear" scientific={scientific}/>
            </div>
        </div>
    )
}

const CalculatorButton = ({text, setResultString, type, scientific}) => {
    function handleClick() {
        if (type === 'operation') {
            setResultString(resultString => {
                let newResultString = resultString
                newResultString += ' ' + text + ' '
                return newResultString
            })
        } else if (type === 'number') {
            setResultString(resultString => {
                let newResultString = resultString;
                newResultString = String(newResultString)
                if (newResultString === '0') return text
                newResultString += text
                return String(newResultString)
            })
        } else if (type === 'equals') {
            setResultString(resultString => {
                let newResultString = resultString
                let resultStringArray = newResultString.toString().split(' ')
                if (resultStringArray.length < 3) {
                    console.log('Returning because resultStringArray.length is less than 3')
                    return newResultString
                }
                if (resultStringArray.length % 2 !== 1) {
                    console.log('Returning because resultStringArray.length % 2 !== 1')
                    return newResultString
                }
                if (scientific) {
                    console.log(resultStringArray)
                    while (resultStringArray.findIndex(item => item === 'X' || item === '/') !== -1) {
                        resultStringArray.forEach((result, index) => {
                            if (result === 'X') {
                                resultStringArray[index - 1] = String(+resultStringArray[index - 1] * +resultStringArray[index + 1])
                                resultStringArray.splice(index, 2)
                            } else if (result === '/') {
                                resultStringArray[index - 1] = String(+resultStringArray[index - 1] / +resultStringArray[index + 1])
                                resultStringArray.splice(index, 2)
                            }
                        })
                    }
                }
                while(resultStringArray.length !== 1) {
                    if (resultStringArray[1] === '+') {
                        resultStringArray[0] = +resultStringArray[0] + +resultStringArray[2]
                    } else if (resultStringArray[1] === '-') {
                        resultStringArray[0] = +resultStringArray[0] - +resultStringArray[2]
                    } else if (resultStringArray[1] === 'X') {
                        resultStringArray[0] = +resultStringArray[0] * +resultStringArray[2]
                    } else if (resultStringArray[1] === '/') {
                        resultStringArray[0] = +resultStringArray[0] / +resultStringArray[2]
                    }
                    resultStringArray.splice(1, 2)
                }
                return parseFloat(resultStringArray[0])
            })
        } else if (type === 'clear') {
            setResultString('0')
        }
    }

    return (
        <button type="button" onClick={handleClick} className="calculatorButton">{text}</button>
    )
}

export {Calculator}