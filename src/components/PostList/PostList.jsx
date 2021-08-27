import PostItem from "../PostItem/PostItem"

const PostList = ( { posts } ) =>{
    console.log(posts)
    return(
        <div>
            {
                !posts.length ? "no" : (
                    posts.map(el =>{
                       return <PostItem title={el.title}
                        post={el.post} key={el.date} />
                    })
                )
            }
        </div>
    )
}

export default PostList