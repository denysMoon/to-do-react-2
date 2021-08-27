import Button from '../UI/button/Button'

import moment from 'moment'

const PostItem = ( {title, post, date} ) =>{
    return(
        <div className="post">
            <div className="post-content">
                <h3><span style={{fontSize: "15px", color: "lightgreen"}}>{date.toLocaleDateString()}, {date.getHours()}:{date.getMinutes()}</span> {title}</h3>
                {post}
            </div>
            <div className="post-button">
                <Button>Button</Button>
            </div>
        </div>
    )
}

export default PostItem