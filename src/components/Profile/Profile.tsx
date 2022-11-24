import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {ProfilePageType, RootStateType} from "../redux/state";

type ProfileType = {
   state: ProfilePageType
}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile_wrapper}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile