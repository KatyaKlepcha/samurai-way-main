import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {ProfilePageType} from "../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile_wrapper}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}
                     newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile