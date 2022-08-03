import {Component} from 'react'

class ClassHello extends Component {
    constructor(props) {
        super();
        this.name = props.name
    }

    render() {
        return (
            <h1>Hello {this.name}. This is from the class component.</h1>
        )
    }
}

export default ClassHello