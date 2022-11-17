import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>My Posts
            <div>
                <textarea/>
                <div>
                    <button className={s.button}>Send</button>
                </div>

            </div>
            <Post message="hello, let's meet today?" likesCount={15}/>
            <Post message='did you see my message?' likesCount={20}/>
        </div>
    )
}

export default MyPosts