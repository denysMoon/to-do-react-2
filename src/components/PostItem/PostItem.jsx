import Button from '../UI/button/Button'

// import moment from 'moment'

const PostItem = ( {title, post, posts, date, setPost} ) =>{
    const deletePost = () =>{
        setPost(posts.filter(el=>{
            return el.date!==date
        }))
    }
    return(
        <div className="post">
            <div className="post-content">
                <h3>{title}</h3>
                {post}
            </div>
            <div className="post-button">
                <Button>Edit</Button>
                <Button deletePost={deletePost} >Delete</Button>
            </div>                  
        </div>
    )
}

export default PostItem