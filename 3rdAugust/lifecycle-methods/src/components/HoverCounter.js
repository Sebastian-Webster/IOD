import React from "react"
import withCounter from "./WithCounter"

class HoverCounter extends React.Component {

    
  
    render() {
        const {count,incrementCount, name} =this.props
        return (
        <div>
          <h2 onMouseOver={incrementCount}>{name} hovered {count} times </h2>
        </div>
      )
    }
  }

  export default withCounter(HoverCounter, 5)