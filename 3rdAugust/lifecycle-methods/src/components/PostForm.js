import axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => response.data)
        .then(result => {
            console.log(result)
            alert('Post has successfully been upload')
        })
        .catch(error => {
            alert(String(error))
        })
    }

    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div style={{marginTop: 20}}>
                        <label>User ID</label>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div style={{marginTop: 20}}>
                        <label>Title</label>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div style={{marginTop: 20}}>
                    <label>Body</label>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button style={{marginTop: 20}} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm