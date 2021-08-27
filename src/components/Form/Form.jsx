import { useState } from 'react'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'

const Form = ( { setPost, posts } ) =>{
    const [inputTitle, setInputTitle] = useState('')
    const [inputPost, setInputPost] = useState('')

    const onSubmit = e =>{
        e.preventDefault()

        setPost([
            ...posts,
            {
                title: inputTitle,
                post: inputPost,
                date: new Date()
            }
        ])

        setInputTitle('')
        setInputPost('')
    }

    const onChangeTitle = e =>{
        const title = e.target.value
        setInputTitle(title)
    }

    const onChangePost = e =>{
        const post = e.target.value
        setInputPost(post)
    }

    return(
        <form onSubmit={onSubmit}>
            <Input type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={inputTitle}
            />
            <Input type="text"
            placeholder="Post"
            onChange={onChangePost}
            value={inputPost}
            />
            <Button>Post It</Button>
        </form>
    )
}

export default Form