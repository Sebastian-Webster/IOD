import React from "react"

const withCounter =(OriginalComponent, incrementAmount = 1) => {
    
    class NewComponent extends React.Component {

       constructor(props) {
           super(props)
         
           this.state = {
              count:0
           }
         }
         
         incrementCount=()=>{
           this.setState(prevState => {
             return { count: prevState.count + incrementAmount}
           })
         }

       render() {
           return (
               <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
           )
       }
   }
   return NewComponent
   
}


export default withCounter