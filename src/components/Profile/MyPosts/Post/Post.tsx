import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}><img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJgYe02fL4wiVJBhVyGy9_C8aBBQlViX7XQ&usqp=CAU'}/>
            {props.message}
            <div>likes {props.likesCount}</div>
        </div>
    )
}

export default Post;