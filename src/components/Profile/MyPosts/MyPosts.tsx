import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

import {PostType, ProfilePageType} from "../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsType) => {

    // const postDate = [
    //     {id: 1, message: 'hello, let\'s meet today?',likesCount: 15 },
    //     {id: 2, message: 'did you see my message?', likesCount: 20},
    // ]

    return (
        <div className={s.posts}>My Posts
            <div>
                <textarea/>
                <div>
                    <button className={s.button}>Send</button>
                </div>

            </div>
            {props.posts.map((p: PostType) => <Post message={p.message} likesCount={p.likesCount}/>)}
            {/*<Post message="hello, let's meet today?" likesCount={15}/>*/}
            {/*<Post message='did you see my message?' likesCount={20}/>*/}
        </div>
    )
}

export default MyPosts