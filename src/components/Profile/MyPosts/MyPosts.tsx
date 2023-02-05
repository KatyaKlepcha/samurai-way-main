import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { MyPostsType } from "./MyPostsContainer";
import { PostType } from "../../redux/profileReducer";
//
// type MyPostsType = {
//     posts: Array<PostType>
//     newPostText: string
//     // dispatch: (action: ActionsTypes) => void
//     updateNewPostText: (newPostText: string) => void
//     addPost: () => void
// }

const MyPosts = (props: MyPostsType) => {
    // const newPostRef = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
        //props.dispatch(addNewPostActionCreator())
    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value
        props.updateNewPostText(newPostText)
        //props.dispatch(updateNewPostTextActionCreator(newPostText))
        // let text = newPostRef.current?.value
        // text && props.updateNewPostText(text)
    }

    return (
        <div className={s.posts}>My Posts
            <div>
                <textarea value={props.newPostText} onChange={onChangePost}/>
                <div>
                    <button onClick={onAddPost} className={s.button}>Send
                    </button>
                </div>

            </div>
            {props.posts.map((p: PostType) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

export default MyPosts