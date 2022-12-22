import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

import {ActionsTypes,  PostType} from "../../redux/store";
import { addNewPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profileReducer";

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsType) => {
    // const newPostRef = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        props.dispatch(addNewPostActionCreator())
    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newPostText))
        // props.updateNewPostText(e.currentTarget.value)
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