import Button from '../UI/button/Button'

// import moment from 'moment'

const PostItem = ( {title, post, posts, date, setPost, setModal, setInputPost, setInputTitle} ) =>{
    const deletePost = () =>{
        setPost(posts.filter(el=>{
            return el.date!==date
        }))
    }
    const editPost = () =>{
        setModal(true)
        setInputPost(post)
        setInputTitle(title)
        console.log(title)
    }
    return(
        <div className="post">
            <div className="post-content">
                <h3>{title}</h3>
                {post}
            </div>
            <div className="post-button">
                <Button onClick={editPost}>Edit</Button>
                <Button onClick={deletePost}>Delete</Button>
            </div>                  
        </div>
    )
}

export default PostItem