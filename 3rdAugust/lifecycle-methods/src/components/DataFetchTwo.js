import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetchTwo = () => {
    const [posts, setPosts] = useState([])
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const [postID, setPostID] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
        .then(response => {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(error => {
            console.error(error)
        })
    }, [idFromButtonClick])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIdFromButtonClick(postID)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Post ID: <input type="number" value={postID} onChange={e => setPostID(e.target.value)}/></label>
                <input type="submit" value="Submit"/>
            </form>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.body}</li>
                ))}
            </ul>
        </>
    )
}

export default DataFetchTwo;