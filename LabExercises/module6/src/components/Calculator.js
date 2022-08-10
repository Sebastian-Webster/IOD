import React, {Component, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Calculator.css'

//TODO:
//FINISHED -- Fix bug where in rare cases pressing the back button leaves an extra space; like when pressing ** ( )
//FINISHED -- Add error control so you cannot do 2 operations in a row
//FINISHED -- Add bracket nesting
//FINISHED -- Add calculation history so you can go back in time and get a previous answer
//FINISHED -- Add ability to add decimal points
//FINISHED -- Prevent JS from having a weird effect on floating point numbers by getting the decimal points of the numbers and use .toFixed() to have the answer have the same amount of decimal points as the number in the equation with the most amount of decimal points; like with .1 + .2
//FINISHED -- Add error control so you cannot do 2 or more . in a row
//FINISHED -- Fix CSS issue with buttons when height of screen is small
//FINISHED -- Fix numbers like 10 x 5.6 having .0 at the end because of fix to JS weird effect on floating point numbers
//FINISHED -- Fix history number being appended onto 0 if 0 is the result string
//FINISHED -- Fix history being cleared for no apparent reason
//FINISHED -- Add a class version of the calculator
//FINISHED -- Fix deleting the last history item wouldn't hide the history list

const operations = ['+', '-', 'X', '/', '**']

function Calculator({scientific}) {
    const [resultString, setResultString] = useState('0')
    const [history, setHistory] = useState([])
    const [showHistory, setShowHistory] = useState(false)
    console.log(history)

    function handleOnHistoryButtonClick(item) {
        let currentResultString = resultString;
        //If the result string is 0 (cleared) or 'ERROR' (an error occured) then replace it with the history answer
        currentResultString = currentResultString === '0' || currentResultString === 'ERROR' ? '' : currentResultString
        currentResultString += item.split(' = ')[1]
        setResultString(currentResultString)
        setShowHistory(false)
    }

    function handleOnHistoryButtonRightClick(e, item) {
        e.preventDefault() //Prevent context menu from showing
        let currentResultString = resultString;
         //If the result string is 0 (cleared) or 'ERROR' (an error occured) then replace it with the history answer
         currentResultString = currentResultString === '0' || currentResultString === 'ERROR' ? '' : currentResultString
        currentResultString += item.split(' = ')[0]
        setResultString(currentResultString)
        setShowHistory(false)
    }

    function clearHistory() {
        setHistory([])
        setShowHistory(false)
    }

    function deleteHistoryItem(index) {
        let newHistory = history.slice()
        newHistory.splice(index, 1)
        setHistory(newHistory)
    }

    return (
        <div className="calculatorBody">
            {showHistory ?
                <>
                    <h1>Left Click to insert answer into calculator</h1>
                    <h1>Right Click to insert calculation into calculator</h1>
                    <button onClick={clearHistory} id="clearHistoryButton">Clear History</button>
                    {
                        history.map((item, index) => (
                            <div key={String(index)}>
                                <button style={{marginLeft: 65}} className="historyButton" onClick={() => {handleOnHistoryButtonClick(item)}} onContextMenu={(e) => {handleOnHistoryButtonRightClick(e, item)}}>
                                    {item}
                                </button>
                                <FontAwesomeIcon icon={faTrash} style={{marginLeft: 30, color: 'red', fontSize: 40, cursor: 'pointer'}} onClick={() => {deleteHistoryItem(index)}}/>
                            </div>
                        ))
                    }
                      
                    <button id='goBackButton' onClick={() => {setShowHistory(false)}}>Go Back</button>
                </>
            :
                <>
                    <h1 id="resultString">{resultString}</h1>
                    <div className="calculatorRow">
                        <CalculatorButton text={1} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={2} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={3} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={'+'} setResultString={setResultString} type="operation" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                    </div>
                    <div className="calculatorRow">
                        <CalculatorButton text={4} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={5} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={6} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={'-'} setResultString={setResultString} type="operation" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                    </div>
                    <div className="calculatorRow">
                        <CalculatorButton text={7} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={8} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={9} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={'X'} setResultString={setResultString} type="operation" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                    </div>
                    <div className="calculatorRow">
                        <CalculatorButton text={0} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={'/'} setResultString={setResultString} type="operation" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={'='} setResultString={setResultString} type="equals" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        <CalculatorButton text={'Clear'} setResultString={setResultString} type="clear" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                    </div>
                    <div className="calculatorRow">
                        <CalculatorButton text={'**'} setResultString={setResultString} type="operation" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        {scientific ? (
                            <>
                                <CalculatorButton text={'('} setResultString={setResultString} type="operation" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                                <CalculatorButton text={')'} setResultString={setResultString} type="operation" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                            </>
                        ) : 
                            <CalculatorButton text={'.'} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                        }
                        <CalculatorButton text={'Back'} setResultString={setResultString} type="back" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                    </div>
                    <div className="calculatorRow">
                        {scientific && <CalculatorButton text={'.'} setResultString={setResultString} type="number" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>}
                        <CalculatorButton setResultString={setResultString} type="history" scientific={scientific} setHistory={setHistory} setShowHistory={setShowHistory} history={history}/>
                    </div>
                </>
            }
        </div>
    )
}

class CalculatorClass extends Component {
    constructor(props) {
        super(props)
        this.scientific = props.scientific

        this.state = {
            resultString: '0',
            history: [],
            showHistory: false
        }
    }

    handleOnHistoryButtonClick = (item) => {
        let currentResultString = this.resultString;
        //If the result string is 0 (cleared) or 'ERROR' (an error occured) then replace it with the history answer
        currentResultString = currentResultString === '0' || currentResultString === 'ERROR' ? '' : currentResultString
        currentResultString += item.split(' = ')[1]
        this.setState({
            resultString: currentResultString,
            showHistory: false
        })
    }

    handleOnHistoryButtonRightClick = (e, item) => {
        e.preventDefault() //Prevent context menu from showing
        let currentResultString = this.state.resultString;
         //If the result string is 0 (cleared) or 'ERROR' (an error occured) then replace it with the history answer
         currentResultString = currentResultString === '0' || currentResultString === 'ERROR' ? '' : currentResultString
        currentResultString += item.split(' = ')[0]
        this.setState({
            resultString: currentResultString,
            showHistory: false
        })
    }

    clearHistory = () => {
        this.setState({
            history: [],
            showHistory: false
        })
    }

    deleteHistoryItem = (index) => {
        let newHistory = this.state.history.slice()
        newHistory.splice(index, 1)
        this.setState({
            history: newHistory,
            showHistory: newHistory.length > 0
        })
    }

    setResultString = (arg) => {
        if (typeof arg === 'function') {
            this.setState(prevState => ({
                resultString: arg.call(null, prevState.resultString)
            }))
        } else {
            this.setState({
                resultString: arg
            })
        }
    }

    setShowHistory = (showHistory) => {
        this.setState({
            showHistory
        })
    }

    setHistory = (history) => {
        this.setState({
            history
        })
    }

    render() {
        return (
            <div className="calculatorBody">
                {this.state.showHistory ?
                    <>
                        <h1>Left Click to insert answer into calculator</h1>
                        <h1>Right Click to insert calculation into calculator</h1>
                        <button onClick={this.clearHistory} id="clearHistoryButton">Clear History</button>
                        {
                            this.state.history.map((item, index) => (
                                <div key={String(index)}>
                                    <button style={{marginLeft: 65}} className="historyButton" onClick={() => {this.handleOnHistoryButtonClick(item)}} onContextMenu={(e) => {this.handleOnHistoryButtonRightClick(e, item)}}>
                                        {item}
                                    </button>
                                    <FontAwesomeIcon icon={faTrash} style={{marginLeft: 30, color: 'red', fontSize: 40, cursor: 'pointer'}} onClick={() => {this.deleteHistoryItem(index)}}/>
                                </div>
                            ))
                        }
                          
                        <button id='goBackButton' onClick={() => {this.setState({showHistory: false})}}>Go Back</button>
                    </>
                :
                    <>
                        <h1 id="resultString">{this.state.resultString}</h1>
                        <div className="calculatorRow">
                            <CalculatorButton text={1} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={2} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={3} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={'+'} setResultString={this.setResultString} type="operation" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                        </div>
                        <div className="calculatorRow">
                            <CalculatorButton text={4} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={5} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={6} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={'-'} setResultString={this.setResultString} type="operation" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                        </div>
                        <div className="calculatorRow">
                            <CalculatorButton text={7} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={8} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={9} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={'X'} setResultString={this.setResultString} type="operation" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                        </div>
                        <div className="calculatorRow">
                            <CalculatorButton text={0} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={'/'} setResultString={this.setResultString} type="operation" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={'='} setResultString={this.setResultString} type="equals" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            <CalculatorButton text={'Clear'} setResultString={this.setResultString} type="clear" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                        </div>
                        <div className="calculatorRow">
                            <CalculatorButton text={'**'} setResultString={this.setResultString} type="operation" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            {this.scientific ? (
                                <>
                                    <CalculatorButton text={'('} setResultString={this.setResultString} type="operation" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                                    <CalculatorButton text={')'} setResultString={this.setResultString} type="operation" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                                </>
                            ) : 
                                <CalculatorButton text={'.'} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                            }
                            <CalculatorButton text={'Back'} setResultString={this.setResultString} type="back" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                        </div>
                        <div className="calculatorRow">
                            {this.scientific && <CalculatorButton text={'.'} setResultString={this.setResultString} type="number" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>}
                            <CalculatorButton setResultString={this.setResultString} type="history" scientific={this.scientific} setHistory={this.setHistory} setShowHistory={this.setShowHistory} history={this.state.history}/>
                        </div>
                    </>
                }
            </div>
        )
    }
}

function doAllCalculations(resultStringArray) {
    while(resultStringArray.length !== 1) {
        if (resultStringArray[1] === '+') {
            resultStringArray[0] = +resultStringArray[0] + +resultStringArray[2]
        } else if (resultStringArray[1] === '-') {
            resultStringArray[0] = +resultStringArray[0] - +resultStringArray[2]
        } else if (resultStringArray[1] === 'X') {
            resultStringArray[0] = +resultStringArray[0] * +resultStringArray[2]
        } else if (resultStringArray[1] === '/') {
            resultStringArray[0] = +resultStringArray[0] / +resultStringArray[2]
        } else if (resultStringArray[1] === '**') {
            resultStringArray[0] = (+resultStringArray[0]) ** (+resultStringArray[2])
        }
        resultStringArray.splice(1, 2)
    }
    return parseFloat(resultStringArray[0])
}

function sortExponentMultiDivSubAddOperations(resultStringArray) {
    while (resultStringArray.findIndex(item => item === '**') !== -1) {
        resultStringArray.forEach((result, index) => {
            if (result === '**') {
                resultStringArray[index - 1] = String((+resultStringArray[index - 1]) ** (+resultStringArray[index + 1]))
                resultStringArray.splice(index, 2)
            }
        })
    }
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
    return resultStringArray
}

function getDecimalCount(num) {
    const numString = String(num)
    if (numString.includes('.')) {
        return numString.split('.')[1].length
    }
    return 0;
}

const CalculatorButton = ({text, setResultString, type, scientific, setHistory, setShowHistory, history}) => {
    function handleClick() {
        if (type === 'operation') {
            setResultString(resultString => {
                let newResultString = String(resultString)
                if (operations.includes(text) && operations.includes(newResultString.charAt(newResultString.length - 2))) {
                    //Is a non-bracket operation and the last part of the result string is a non-bracket operation
                    return newResultString
                }
                newResultString += ' ' + text + ' '
                return newResultString
            })
        } else if (type === 'number') {
            setResultString(resultString => {
                let newResultString = resultString.toString();
                newResultString = String(newResultString)
                if (newResultString === '0' || newResultString === 'ERROR') return text
                if (text === '.' && newResultString.charAt(newResultString.length - 1) === '.') return newResultString
                newResultString += text
                return String(newResultString)
            })
        } else if (type === 'equals') {
            setResultString(resultString => {
                let newResultString = resultString
                let resultStringArray = newResultString.toString().split(' ')
                //Get rid of any empty strings in the array
                resultStringArray = resultStringArray.filter(item => item !== '')
                const decimalPointsArray = resultStringArray.map(number => {
                    number = parseFloat(number)
                    if (isNaN(number)) return 0
                    else return getDecimalCount(number)
                })
                const maxAccuracy = Math.max(...decimalPointsArray)
                if (resultStringArray.length < 3) {
                    console.log('Returning because resultStringArray.length is less than 3')
                    return 'ERROR'
                }
                if (resultStringArray.length % 2 !== 1) {
                    console.log('Returning because resultStringArray.length % 2 !== 1')
                    return 'ERROR'
                }
                if (scientific) {
                    console.log(resultStringArray)
                    let startBracketIndex = resultStringArray.findIndex(item => item === '(')
                    let endBracketIndex = resultStringArray.findIndex(item => item === ')')
                    while (startBracketIndex !== -1 || endBracketIndex !== -1) {
                        let lastStartingBracket, firstEndingBracket;
                        for (const index in resultStringArray) {
                            lastStartingBracket = resultStringArray[index] === '(' ? index : lastStartingBracket
                        }
                        for (let index = resultStringArray.length - 1; index > lastStartingBracket; index--) {
                            firstEndingBracket = resultStringArray[index] === ')' ? index : firstEndingBracket
                        }
                        if (((lastStartingBracket === -1 || firstEndingBracket === -1) && (lastStartingBracket !== -1 && firstEndingBracket !== -1)) || (!lastStartingBracket || !firstEndingBracket)) {
                            //Either one of the brackets are missing, but not both of them are missing, or there is no starting or ending bracket
                            return 'ERROR'
                        }
                        resultStringArray.splice(lastStartingBracket, 1) //Get rid of starting bracket
                        const bracketIndicesDifference = firstEndingBracket - lastStartingBracket - 1
                        const calculationsArray = resultStringArray.splice(lastStartingBracket, bracketIndicesDifference)
                        console.log(calculationsArray)
                        resultStringArray[lastStartingBracket] = doAllCalculations(sortExponentMultiDivSubAddOperations(calculationsArray)).toString()

                        startBracketIndex = resultStringArray.findIndex(item => item === '(')
                        endBracketIndex = resultStringArray.findIndex(item => item === ')')
                    }
                    console.log(resultStringArray)

                    resultStringArray = sortExponentMultiDivSubAddOperations(resultStringArray)
                }
                let result = doAllCalculations(resultStringArray)
                if (isNaN(result)) {
                    console.log('Returning error because the result is NaN')
                    return 'ERROR'
                } else {
                    //If there were no errors
                    let answer = parseFloat(result).toFixed(maxAccuracy)
                    if (answer.includes('.')) {
                        const answerWithOnlyDecimalPoints = parseFloat('0.' + answer.split('.')[1])
                        if (answerWithOnlyDecimalPoints === 0) {
                            answer = parseFloat(answer).toFixed(0)
                        }
                    }
                    const historyString = newResultString + ' = ' + answer
                    const historyArray = history.slice()
                    historyArray.push(historyString)
                    setHistory(historyArray)
                    return answer
                }
            })
        } else if (type === 'clear') {
            setResultString('0')
        } else if (type === 'back') {
            setResultString(resultString => {
                resultString = String(resultString)
                if (resultString.charAt(resultString.length - 2) === '*' && resultString.charAt(resultString.length - 3)) {
                    //If exponentation
                    return resultString.slice(0, resultString.length - 4)
                } else if (resultString.charAt(resultString.length - 1) === ' ') {
                    return resultString.slice(0, resultString.length - 3)
                } else if (resultString === '0') {
                    return resultString
                } else if (resultString.length === 1) {
                    return '0'
                } else {
                    return resultString.slice(0, resultString.length - 1)
                }
            })
        } else if (type === 'history') {
            setShowHistory(true)
        }
    }

    return (
        <>
            {type === 'history' && history.length > 0 ?
                <button type="button" onClick={handleClick} className="calculatorButton"><FontAwesomeIcon icon={faClockRotateLeft} /> {history.length}</button>
            : type !== 'history' ?
                <button type="button" onClick={handleClick} className="calculatorButton">{text}</button>
            : null
            }
        </>
    )
}

export {Calculator, CalculatorClass}