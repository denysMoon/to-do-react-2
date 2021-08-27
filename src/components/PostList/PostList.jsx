import PostItem from "../PostItem/PostItem"
import Title from "../Title/Title"

const PostList = ( { posts } ) =>{
    console.log(posts)
    return(
        <div>
            {
                !posts.length ? <Title /> : (
                    posts.map(el =>{
                       return <PostItem title={el.title}
                        post={el.post} date={el.date} key={el.date} />
                    })
                )
            }
        </div>
    )
}

export default PostList