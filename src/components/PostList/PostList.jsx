import PostItem from "../PostItem/PostItem"
import Title from "../Title/Title"

const PostList = ( { posts, setPost, setModal, setInputTitle, setInputPost } ) =>{
    return(
        <div>
            {
                !posts.length ? <Title /> : (
                    posts.map(el =>{
                       return <PostItem title={el.title}
                        post={el.post} date={el.date} key={el.date}
                        posts={posts} setPost={setPost}
                        setModal={setModal}
                        setInputTitle={setInputTitle}
                        setInputPost={setInputPost}  />
                    })
                )
            }
        </div>
    )
}

export default PostList