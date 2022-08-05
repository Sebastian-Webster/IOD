import React, {Component} from 'react';
import axios from 'axios'

export default class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(result => {
            this.setState({posts: result})
            console.log(result)
        })
        .catch(error => {
            console.error(error)
            this.setState({errorMessage: String(error)})
        })
    }

    render() {
        const {posts, errorMessage} = this.state
        return(
            <div>
                <h2>List of Posts</h2>
                {
                    errorMessage ?
                        <h1 style={{color: 'red'}}>{errorMessage}</h1>
                    :
                        posts.length > 0 ?
                            <div className='row row-cols-1 row-cols-md-2 container-fluid'>
                                {
                                    posts.map(post => (
                                        <div className="card" key={post.id}>
                                            <div className='card-body'>
                                                <h3 className='card-title'>{post.title}</h3>
                                                <p className='card-body'>{post.body}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        : <h1>Loading...</h1>
                }
            </div>
        )
    }
}