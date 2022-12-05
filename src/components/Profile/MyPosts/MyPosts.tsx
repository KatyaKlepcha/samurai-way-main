import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

import {PostType} from "../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsType) => {
    const newPostRef = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        let text = newPostRef.current?.value
        if (text) {
            props.addPost(text)
            newPostRef.current?.value && (newPostRef.current.value = '')
        }
    }

    return (
        <div className={s.posts}>My Posts
            <div>
                <textarea ref={newPostRef}/>
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