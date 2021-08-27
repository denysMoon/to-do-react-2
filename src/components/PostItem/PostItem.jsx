import Button from '../UI/button/Button'

const PostItem = ( {title, post} ) =>{
    return(
        <div className="post">
            <div className="post-content">
                <h3>{title}</h3>
                {post}
            </div>
            <div className="post-button">
                <Button>Button</Button>
            </div>
        </div>
    )
}

export default PostItem