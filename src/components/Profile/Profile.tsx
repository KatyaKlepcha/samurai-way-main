import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {ActionsTypes, ProfilePageType} from "../redux/store";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile_wrapper}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile