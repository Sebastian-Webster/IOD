import React from "react"
import withCounter from "./WithCounter"

const buttonStyle = {
    border: '1px solid transparent',
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 40,
    paddingLeft: 40,
    cursor: 'pointer',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: 'white'
}

class ClickCounter extends React.Component {
    
    render() {
        const {count,incrementCount, name} =this.props
        return (
            <div>
                <button onClick={incrementCount} style={buttonStyle}>{name} clicked {count} times </button>
            </div>
        )
    }
}
    
export default withCounter(ClickCounter, 10)