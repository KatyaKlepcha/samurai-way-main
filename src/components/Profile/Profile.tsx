import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {ProfilePageType} from "../redux/state";

type ProfileType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile_wrapper}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile