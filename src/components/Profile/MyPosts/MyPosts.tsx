import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

import {PostType} from "../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

const MyPosts = (props: MyPostsType) => {
    // const newPostRef = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        props.addPost()
    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
        // let text = newPostRef.current?.value
        // text && props.updateNewPostText(text)
    }

    return (
        <div className={s.posts}>My Posts
            <div>
                <textarea value={props.newPostText} onChange={onChangePost}/>
                <div>
                    <button onClick={addNewPost} className={s.button}>Send
                    </button>
                </div>

            </div>
            {props.posts.map((p: PostType) => <Post message={p.message} likesCount={p.likesCount}/>)}
            {/*<Post message="hello, let's meet today?" likesCount={15}/>*/}
            {/*<Post message='did you see my message?' likesCount={20}/>*/}
        </div>
    )
}

export default MyPosts