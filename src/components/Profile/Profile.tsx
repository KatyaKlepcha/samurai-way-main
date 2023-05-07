import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";

export type ProfilePropsType = {
    profile: ProfileType | null
    status?: string
    errors?: string[]
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (profile: ProfileType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile_wrapper}>
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner}
                         profile={props.profile} status={props.status} errors={props.errors}
                         updateUserStatus={props.updateUserStatus}/>
            {/*<MyPostsContainer posts={props.profilePage.posts} dispatch={props.dispatch}*/}
            {/*         newPostText={props.profilePage.newPostText}/>*/}
            <MyPostsContainer/>
        </div>
    )
}

export default Profile